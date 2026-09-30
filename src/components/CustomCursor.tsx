import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const updatePosition = (x: number, y: number) => {
      mouseX = x;
      mouseY = y;
      inner.style.left = `${mouseX}px`;
      inner.style.top = `${mouseY}px`;
      if (!isActive) setIsActive(true);
    };

    const onMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
        setIsMouseDown(true);
      }
    };

    const onTouchEnd = () => {
      setIsMouseDown(false);
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseOver = (e: MouseEvent | TouchEvent) => {
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

    const onMouseOut = (e: MouseEvent | TouchEvent) => {
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
      currentX += dx * 0.2;
      currentY += dy * 0.2;

      outer.style.left = `${currentX}px`;
      outer.style.top = `${currentY}px`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, [isActive]);

  return (
    <>
      {/* Outer trailing circle with Neon Cyan / Mint theme */}
      <div
        ref={outerRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen ${
          isActive ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'w-14 h-14 bg-[#00F5A0]/20' : 'w-7 h-7'} ${
          isMouseDown ? 'scale-75' : 'scale-100'
        }`}
        style={{
          border: '2px solid #00F5A0',
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(0, 245, 160, 0.4)',
          transition: 'width 0.15s, height 0.15s, transform 0.1s, opacity 0.2s',
        }}
      />
      {/* Inner glowing dot */}
      <div
        ref={innerRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00D9F5] rounded-full shadow-[0_0_10px_#00D9F5] ${
          isActive ? 'opacity-100' : 'opacity-0'
        } ${isMouseDown ? 'scale-150' : 'scale-100'}`}
        style={{ transition: 'transform 0.08s, opacity 0.2s' }}
      />
    </>
  );
};
