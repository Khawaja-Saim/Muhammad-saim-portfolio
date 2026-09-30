import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`relative inline-block hoverable select-none group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 -z-10 text-[#ff6b35] opacity-0 group-hover:opacity-80 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-150"
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 -z-10 text-[#f7c59f] opacity-0 group-hover:opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
      >
        {text}
      </span>
    </span>
  );
};
