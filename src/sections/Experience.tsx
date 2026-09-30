import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Building2, MapPin, CheckCircle, TrendingUp } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-label">
            <span>✦ Career Milestones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
            Work Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Track record of shipping production-grade mobile applications and mentoring engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#00F5A0] via-[#00D9F5] to-transparent shadow-[0_0_8px_rgba(0,245,160,0.3)]" />

          <div className="space-y-10">
            {portfolioData.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-0 md:pl-16 group"
              >
                {/* Timeline Circle Node - Perfectly centered on the vertical line */}
                <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#08090D] border-2 border-[#00F5A0] shadow-[0_0_14px_#00F5A0] items-center justify-center z-10 group-hover:scale-125 transition-transform duration-200">
                  <div className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
                </div>

                {/* Horizontal Connector Arm bridging the circle directly into the card */}
                <div className="hidden md:block absolute left-6 top-8 w-10 h-[2px] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] -translate-y-1/2 z-0 opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Main Milestone Card with integrated left accent */}
                <div className="glass-card p-7 md:p-9 border border-white/10 hoverable border-l-4 border-l-[#00F5A0] group-hover:border-l-[#00D9F5] transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/30 mb-2.5">
                        <TrendingUp className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-slate-300 mt-1">
                        <Building2 className="w-4 h-4 text-[#00F5A0]" />
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-slate-600">•</span>
                            <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" /> {exp.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
                    {exp.description}
                  </p>

                  {/* Key Accomplishments */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Impact & Achievements
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-200">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#00F5A0] flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
