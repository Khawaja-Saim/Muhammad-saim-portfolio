import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allSkills = portfolioData.skillCategories.flatMap((cat) => cat.skills);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-label">
            <span>✦ Technical Mastery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-gray-900 leading-tight">
            Specialized in Modern <span className="gradient-text">Flutter Engineering</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A comprehensive overview of my core technical stack, libraries, cloud backends, and deployment proficiencies.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-8 border border-white hoverable group"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-[#ff6b35] transition-colors">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-semibold text-gray-800">
                      <span>{skill.name}</span>
                      <span className="text-xs font-bold text-[#ff6b35]">{skill.level}%</span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-full transition-all duration-1000 ease-out"
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
        <div className="mt-14 glass-card p-8 text-center max-w-4xl mx-auto border border-white">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ff6b35]" /> Complete Skills Matrix & Tools
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
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-gray-800 shadow-sm border border-gray-200/80 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all hover:scale-105 hoverable cursor-default"
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
