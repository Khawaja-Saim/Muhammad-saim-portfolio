import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      inner.style.left = `${mouseX}px`;
      inner.style.top = `${mouseY}px`;
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable') ||
        target.closest('.hoverable')
      ) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable') ||
        target.closest('.hoverable')
      ) {
        setIsHovered(false);
      }
    };

    // Smooth lerp loop
    let rafId: number;
    const animate = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      currentX += dx * 0.15;
      currentY += dy * 0.15;

      outer.style.left = `${currentX}px`;
      outer.style.top = `${currentY}px`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer trailing circle */}
      <div
        ref={outerRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-150 mix-blend-difference ${
          isHovered ? 'w-16 h-16 bg-[#ff6b35]/20' : 'w-8 h-8'
        } ${isMouseDown ? 'scale-75' : 'scale-100'}`}
        style={{
          border: '2px solid #ff6b35',
          borderRadius: '50%',
          transition: 'width 0.2s, height 0.2s, transform 0.15s, background-color 0.2s',
        }}
      />
      {/* Inner precise dot */}
      <div
        ref={innerRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#ff6b35] rounded-full hidden md:block transition-transform duration-100 ${
          isMouseDown ? 'scale-150' : 'scale-100'
        }`}
      />
    </>
  );
};
