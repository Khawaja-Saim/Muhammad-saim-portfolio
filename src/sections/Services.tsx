import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Smartphone, Palette, Cpu, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Smartphone className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0A0D15]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-label">
            <span>✦ Services & Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
            How I Can Help Your <span className="gradient-text">Product Grow</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            High-caliber mobile development services tailored to deliver business value and delighted users.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.services.map((srv) => (
            <div
              key={srv.id}
              className="glass-card p-8 md:p-10 border border-white/10 hoverable flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Title */}
                <div className="w-14 h-14 rounded-2xl bg-[#00F5A0]/10 text-[#00F5A0] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#00F5A0] group-hover:text-[#08090D] transition-all shadow-lg border border-[#00F5A0]/20">
                  {getIcon(srv.iconName)}
                </div>

                <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-[#00F5A0] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
                  {srv.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00F5A0] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#00F5A0] hover:text-[#00D9F5] group-hover:translate-x-1 transition-all hoverable"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
