import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 40;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'py-3.5 bg-[#08090D]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo with KS Initials */}
        <a
          href="#home"
          className="flex items-center gap-3.5 group hoverable"
        >
          <div className="relative w-11 h-11 rounded-xl bg-[#131826] flex items-center justify-center border-2 border-[#00F5A0]/60 shadow-lg group-hover:border-[#00D9F5] transition-all group-hover:scale-105">
            <span className="font-heading font-black text-xl text-[#00F5A0] group-hover:text-[#00D9F5] tracking-wider transition-colors">
              {portfolioData.personal.initials}
            </span>
            <div className="absolute -inset-0.5 rounded-xl bg-[#00F5A0]/20 blur-sm -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-white group-hover:text-[#00F5A0] transition-colors leading-tight">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Flutter Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#131826]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hoverable ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-[#08090D] shadow-md shadow-[#00F5A0]/30 font-black'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={portfolioData.personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all hover:scale-105 hoverable"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href="#contact"
            className="btn-primary hoverable py-2 px-5 text-xs flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl bg-[#131826] border border-white/10 flex items-center justify-center text-white hover:text-[#00F5A0] transition-colors hoverable shadow-sm"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0e17]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-200 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] py-6 px-8' : 'max-h-0 py-0 px-8 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-semibold text-slate-200 hover:text-[#00F5A0] transition-colors border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-3 text-xs"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
