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

    // Smooth intro loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Intro Experience Loader (Exact same concentric rings & glowing initials) */}
      <div
        className={`fixed inset-0 z-[10000] bg-[#0c0c0c] flex items-center justify-center transition-all duration-700 ${
          loading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-[#ff6b35]/20 rounded-full animate-ping" />
            <div className="absolute inset-2 border-4 border-[#ff6b35]/40 rounded-full animate-pulse" />
            <div
              className="absolute inset-4 border-4 border-[#ff6b35]/60 rounded-full animate-spin"
              style={{ animationDuration: '2s' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-black font-heading text-[#ff6b35] tracking-wider">
                {portfolioData.personal.initials}
              </span>
            </div>
          </div>
          <p className="text-white font-semibold text-sm tracking-widest uppercase animate-pulse">
            Loading Experience...
          </p>
        </div>
      </div>

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Canvas Particle Trail */}
      <ParticleTrail />

      {/* Dual Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Portfolio Content */}
      <div
        className={`min-h-screen bg-[#f5f5f5] transition-opacity duration-700 ${
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
