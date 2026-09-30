import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setIsVisible(scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top Gradient Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#f7c59f] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Circular Percentage Widget */}
      <div
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 cursor-pointer group hoverable ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Scroll to top"
      >
        <div className="relative w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <svg className="w-full h-full -rotate-90 p-1" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="3.5"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="#ff6b35"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-[#ff6b35] group-hover:hidden">
              {Math.round(scrollProgress)}%
            </span>
            <span className="text-xs font-bold text-[#ff6b35] hidden group-hover:block text-[14px]">
              ↑
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
