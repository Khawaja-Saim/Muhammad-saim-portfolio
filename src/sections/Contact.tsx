import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, FileText } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Mobile App (iOS & Android)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = encodeURIComponent(
      `Hello Saim, I visited your portfolio!\nMy Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/923245352293?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#08090D]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00F5A0]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-label">
            <span>✦ Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
            Ready to Build Your <span className="gradient-text">Next Big App?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Have a project in mind or looking for a Senior Flutter Developer to join your team? Let's connect directly!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Quick WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-7 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-xl shadow-emerald-500/10 hover:scale-[1.02] transition-all hoverable group relative overflow-hidden border border-emerald-400/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Fastest Response (Instant)
                  </span>
                  <h3 className="text-2xl font-bold font-heading">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-200 mt-1">
                    {portfolioData.personal.phone} • Usually replies in minutes
                  </p>
                </div>
              </div>
            </a>

            {/* Email & Phone Cards */}
            <div className="glass-card p-6 border border-white/10 space-y-5">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 group hoverable"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00F5A0]/10 text-[#00F5A0] flex items-center justify-center group-hover:bg-[#00F5A0] group-hover:text-[#08090D] transition-all shadow-sm border border-[#00F5A0]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Email</span>
                  <div className="text-base font-bold text-white group-hover:text-[#00F5A0] transition-colors">
                    {portfolioData.personal.email}
                  </div>
                </div>
              </a>

              <div className="h-px bg-white/10" />

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center gap-4 group hoverable"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00D9F5]/10 text-[#00D9F5] flex items-center justify-center group-hover:bg-[#00D9F5] group-hover:text-[#08090D] transition-all shadow-sm border border-[#00D9F5]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / Call</span>
                  <div className="text-base font-bold text-white group-hover:text-[#00D9F5] transition-colors">
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </a>

              <div className="h-px bg-white/10" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 text-slate-300 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</span>
                  <div className="text-base font-bold text-slate-200">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 font-bold text-xs text-slate-200 hover:text-[#00D9F5] hover:border-[#00D9F5]/40 transition-all hoverable"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 font-bold text-xs text-slate-200 hover:text-white hover:border-white/30 transition-all hoverable"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 font-bold text-xs text-[#00F5A0] hover:border-[#00F5A0]/40 transition-all hoverable"
              >
                <FileText className="w-4 h-4" />
                <span>CV Link</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 border border-white/10">
              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill in the details below. This will seamlessly open WhatsApp to start our conversation!
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-emerald-500/10 rounded-2xl border border-emerald-500/30 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#00F5A0] mx-auto" />
                  <h4 className="text-xl font-bold text-white font-heading">
                    Opening WhatsApp...
                  </h4>
                  <p className="text-sm text-emerald-300">
                    Your message has been formatted. If WhatsApp did not open automatically, click the WhatsApp button on the left!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0c0e17] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5A0] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0c0e17] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5A0] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Project Requirement
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0c0e17] text-white text-sm focus:outline-none focus:border-[#00F5A0] transition-colors"
                    >
                      <option className="bg-[#0c0e17] text-white">Mobile App (iOS & Android)</option>
                      <option className="bg-[#0c0e17] text-white">Figma to Flutter Conversion</option>
                      <option className="bg-[#0c0e17] text-white">App Performance Optimization</option>
                      <option className="bg-[#0c0e17] text-white">Full-Time / Contract Hiring</option>
                      <option className="bg-[#0c0e17] text-white">AI / Backend API Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Project Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your app goals, timeline, and features..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0c0e17] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5A0] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full hoverable py-4 text-base font-bold flex items-center justify-center gap-2"
                  >
                    <span>Send via WhatsApp Instant</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
