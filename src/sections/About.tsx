import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Award, Target, Rocket, Users, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-label">
            <span>✦ About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
            Crafting Exceptional Digital Experiences Through{' '}
            <span className="gradient-text">Clean Code</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A passionate Senior Flutter Developer driven by precision, high performance, and human-centered design.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual highlights Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 text-white relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F5A0]/15 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#00F5A0] mb-2 inline-block">
                Professional Journey
              </span>
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">
                3+ Years of Continuous Mobile Innovation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                From self-driven fundamentals to architecting full-scale enterprise Flutter apps, my mission is to build apps that users love and businesses rely upon.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#00F5A0]" />
                  <span className="text-slate-200">Senior Flutter Developer @ Nextwys Software</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-[#00D9F5]" />
                  <span className="text-slate-200">30+ Apps Engineered Across Multiple Sectors</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#6366F1]" />
                  <span className="text-slate-200">Team Leadership & Engineering Mentorship</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center hoverable gap-2 py-3 flex items-center justify-center font-bold"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Curriculum Vitae</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                I specialize in <strong className="text-white">Flutter & Dart cross-platform mobile development</strong>, turning complex product visions into high-performance, maintainable mobile applications for <strong className="text-[#00F5A0]">iOS, Android, and Web</strong>.
              </p>
              <p>
                My experience spans working with international clients, startups, and agile software development teams. As a <strong className="text-white">Senior Flutter Developer</strong>, I take pride in establishing rock-solid architectural foundations using <strong className="text-[#00D9F5]">Clean Architecture</strong>, <strong className="text-[#00D9F5]">GetX</strong>, <strong className="text-[#00D9F5]">Riverpod</strong>, and <strong className="text-[#00D9F5]">Provider</strong>, while optimizing rendering speed and reducing network latency.
              </p>
              <p>
                Beyond standard development, I actively incorporate modern AI capabilities—integrating <strong className="text-[#6366F1]">OpenAI APIs</strong> and <strong className="text-[#6366F1]">Hugging Face models</strong>—to deliver smart, next-generation features in applications like <em>Salomo (AI Dream Companion)</em> and <em>Cognize</em>.
              </p>
            </div>

            {/* Core Values / Competencies Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00F5A0]/10 border border-[#00F5A0]/20 flex items-center justify-center text-[#00F5A0] flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Clean Architecture</h4>
                  <p className="text-xs text-slate-400 mt-1">Modular, testable, and enterprise-scalable codebases.</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00D9F5]/10 border border-[#00D9F5]/20 flex items-center justify-center text-[#00D9F5] flex-shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">40% Speed Optimization</h4>
                  <p className="text-xs text-slate-400 mt-1">Optimized widget trees, memory leak elimination, and snappy startup.</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center text-[#6366F1] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Store Publishing</h4>
                  <p className="text-xs text-slate-400 mt-1">Full compliance with Apple App Store and Google Play Console policies.</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00F5A0]/10 border border-[#00F5A0]/20 flex items-center justify-center text-[#00F5A0] flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Collaborative Leadership</h4>
                  <p className="text-xs text-slate-400 mt-1">Proven record mentoring developers and driving sprint deliverables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
