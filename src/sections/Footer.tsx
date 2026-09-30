import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-center">
          {/* Logo & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#131826] border-2 border-[#00F5A0] flex items-center justify-center font-heading font-black text-[#00F5A0] text-lg shadow-[0_0_10px_rgba(0,245,160,0.3)]">
                {portfolioData.personal.initials}
              </div>
              <span className="font-heading font-bold text-xl text-white">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              {portfolioData.personal.subtitle} • Empowering businesses with high-performance cross-platform Flutter mobile applications.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00D9F5] hover:text-[#08090D] flex items-center justify-center transition-all hover:scale-110 hoverable border border-white/10"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all hover:scale-110 hoverable border border-white/10"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all hover:scale-110 hoverable border border-white/10"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00F5A0] hover:text-[#08090D] flex items-center justify-center transition-all hover:scale-110 hoverable border border-white/10"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-[#00F5A0] hover:text-[#08090D] text-xs font-bold transition-all flex items-center gap-1.5 hoverable ml-2 border border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {portfolioData.personal.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Clean Architecture, Flutter Soul & VIP Animations
          </p>
        </div>
      </div>
    </footer>
  );
};
