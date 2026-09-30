import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulsePhase: number;
}

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cyber Mint & Electric Cyan particle palette
    const colors = ['#00F5A0', '#00D9F5', '#00B4D8', '#38BDF8', '#6366F1'];
    const particleCount = Math.min(85, Math.floor(window.innerWidth / 18));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 3.5 + 1.2,
        opacity: Math.random() * 0.45 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const mousePos = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.x = e.touches[0].clientX;
        mousePos.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let animId: number;
    let frame = 0;

    const render = () => {
      frame++;
      // Render every frame for silky 60+ FPS
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update and draw particles
      particles.forEach((p, idx) => {
        // Mouse repulsion
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          const force = (180 - dist) / 180;
          p.vx -= (dx / dist) * force * 0.025;
          p.vy -= (dy / dist) * force * 0.025;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.996;
        p.vy *= 0.996;

        // Bounce off canvas edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Gentle breathing pulse
        p.pulsePhase += 0.03;
        const currentRadius = p.size + Math.sin(p.pulsePhase) * 1.0;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw soft outer glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius * 2.2), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * 0.18;
        ctx.fill();
        ctx.globalAlpha = 1;

        // 2. Connect nearby particles with glowing cyber lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distLines = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (distLines < 135) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - distLines / 135) * 0.22;
            ctx.strokeStyle = `rgba(0, 245, 160, ${lineAlpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive Constellation Neural Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Ambient Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#00F5A0]/10 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#00D9F5]/10 blur-[150px] animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-[#7000FF]/10 blur-[140px] animate-float-slow" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};
