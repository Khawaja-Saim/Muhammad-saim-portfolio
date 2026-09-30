import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-label">
            <span>✦ Technical Mastery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
            Specialized in Modern <span className="gradient-text">Flutter Engineering</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A comprehensive overview of my core technical stack, libraries, cloud backends, and deployment proficiencies.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-8 border border-white/10 hoverable group"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#00F5A0]/10 text-[#00F5A0] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#00F5A0] transition-colors">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-semibold text-slate-200">
                      <span>{skill.name}</span>
                      <span className="text-xs font-bold text-[#00F5A0]">{skill.level}%</span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Skills Cloud */}
        <div className="mt-14 glass-card p-8 text-center max-w-4xl mx-auto border border-white/10">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00F5A0]" /> Complete Skills Matrix & Tools
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              'Flutter', 'Dart', 'GetX', 'Provider', 'Riverpod', 'BLoC',
              'Firebase Auth', 'Cloud Firestore', 'REST APIs', 'Supabase',
              'SQLite', 'Hive', 'OpenAI APIs', 'Hugging Face', 'Figma',
              'UI/UX', 'Responsive UI', 'Play Store Console', 'App Store Connect',
              'Push Notifications', 'Google Maps SDK', 'Payment Gateways', 'In-App Purchases',
              'Clean Architecture', 'MVC', 'Git & GitHub', 'CI/CD Pipelines', 'Animations'
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#131826] text-slate-300 shadow-sm border border-white/10 hover:border-[#00F5A0] hover:text-[#00F5A0] transition-all hover:scale-105 hoverable cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
