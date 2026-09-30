import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { TypeWriter } from '../components/TypeWriter';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ArrowRight, Download, MessageCircle, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff6b35]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#f7c59f]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-gray-200/80 shadow-sm backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                {portfolioData.personal.status}
              </span>
            </div>

            {/* Main Title & Typewriter */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
                Hello, I'm <span className="text-gray-900 font-bold">{portfolioData.personal.name}</span>
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#0c0c0c] leading-[1.15]">
                Crafting Scalable <br />
                <TypeWriter
                  words={portfolioData.roles}
                  className="gradient-text font-black"
                />
              </h1>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="btn-primary hoverable gap-2 flex items-center font-bold"
              >
                <span>View My Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hoverable gap-2 flex items-center font-bold"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 hoverable"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b35]" />
                <span>Production Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b35]" />
                <span>Pixel-Perfect 60+ FPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b35]" />
                <span>AI & Cloud Integrated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo Card with Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#ff6b35]/30 to-[#f7c59f]/20 blur-2xl -z-10" />

              {/* Main Profile Card */}
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-white to-gray-50 p-4 border border-white shadow-2xl">
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] bg-gray-900 group">
                  <img
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Card Bottom Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ff6b35] text-white shadow-md mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> Mobile Architect
                    </span>
                    <h3 className="text-2xl font-bold font-heading">
                      {portfolioData.personal.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      Senior Flutter Developer (3+ Years)
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Stores Status */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3.5 animate-float">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-xl text-[#ff6b35]">
                    🚀
                  </div>
                  <div>
                    <div className="text-lg font-black text-gray-900 leading-none">
                      5+ Live
                    </div>
                    <div className="text-xs font-medium text-gray-500 mt-1">
                      Play & App Store Apps
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: Speed Optimization */}
                <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-black">
                    ⚡ 40%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 leading-none">
                      App Speedup
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 mt-1">
                      Load Time Optimized
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Stats Strip */}
        <div className="mt-20 pt-10 border-t border-gray-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center group hoverable"
              >
                <div className="text-3xl md:text-5xl font-black font-heading text-[#ff6b35] group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-gray-700 mt-2 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
