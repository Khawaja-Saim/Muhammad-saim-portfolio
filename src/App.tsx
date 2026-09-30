import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ParticleTrail } from './components/ParticleTrail';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { ExperienceSection } from './sections/Experience';
import { ProjectsSection } from './sections/Projects';
import { ServicesSection } from './sections/Services';
import { ContactSection } from './sections/Contact';
import { Footer } from './sections/Footer';
import { portfolioData } from './data/portfolioData';

export function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Snappy, ultra-fast intro loader (only 600ms so it feels instant & responsive)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Intro Experience Loader (Snappy dark futuristic glow) */}
      <div
        className={`fixed inset-0 z-[10000] bg-[#08090D] flex items-center justify-center transition-all duration-300 ${
          loading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-5">
            <div className="absolute inset-0 border-4 border-[#00F5A0]/20 rounded-full animate-ping" />
            <div className="absolute inset-2 border-4 border-[#00D9F5]/40 rounded-full animate-pulse" />
            <div
              className="absolute inset-3 border-4 border-[#00F5A0]/80 rounded-full animate-spin"
              style={{ animationDuration: '1.2s' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-black font-heading text-[#00F5A0] tracking-wider shadow-[0_0_15px_#00F5A0]">
                {portfolioData.personal.initials}
              </span>
            </div>
          </div>
          <p className="text-slate-300 font-bold text-xs tracking-widest uppercase animate-pulse">
            Loading Experience...
          </p>
        </div>
      </div>

      {/* Interactive Custom Cursor (Works on Desktop & Mobile/Touch) */}
      <CustomCursor />

      {/* Canvas Particle Trail (Snappy 120 FPS performance) */}
      <ParticleTrail />

      {/* Dual Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Portfolio Content */}
      <div
        className={`min-h-screen bg-[#08090D] text-slate-100 transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navigation scrollY={scrollY} />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
