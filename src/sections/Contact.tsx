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
    // WhatsApp auto-redirect with prefilled text
    const text = encodeURIComponent(
      `Hello Saim, I visited your portfolio!\nMy Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/923245352293?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#f5f5f5]">
      {/* Background Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#ff6b35]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-label">
            <span>✦ Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-gray-900 leading-tight">
            Ready to Build Your <span className="gradient-text">Next Big App?</span>
          </h2>
          <p className="text-gray-600 text-lg">
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
              className="block p-7 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all hoverable group relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                    Fastest Response (Instant)
                  </span>
                  <h3 className="text-2xl font-bold font-heading">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-100 mt-1">
                    {portfolioData.personal.phone} • Usually replies in minutes
                  </p>
                </div>
              </div>
            </a>

            {/* Email & Phone Cards */}
            <div className="glass-card p-6 border border-white space-y-5">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 group hoverable"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center group-hover:bg-[#ff6b35] group-hover:text-white transition-all shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Direct Email</span>
                  <div className="text-base font-bold text-gray-900 group-hover:text-[#ff6b35] transition-colors">
                    {portfolioData.personal.email}
                  </div>
                </div>
              </a>

              <div className="h-px bg-gray-100" />

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center gap-4 group hoverable"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center group-hover:bg-[#ff6b35] group-hover:text-white transition-all shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone / Call</span>
                  <div className="text-base font-bold text-gray-900 group-hover:text-[#ff6b35] transition-colors">
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </a>

              <div className="h-px bg-gray-100" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</span>
                  <div className="text-base font-bold text-gray-800">
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
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 font-bold text-sm text-gray-800 hover:text-blue-600 hover:border-blue-400 transition-all hoverable"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 font-bold text-sm text-gray-800 hover:text-gray-950 hover:border-gray-900 transition-all hoverable"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 font-bold text-sm text-[#ff6b35] hover:border-[#ff6b35] transition-all hoverable"
              >
                <FileText className="w-4 h-4" />
                <span>CV Link</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 border border-white">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill in the details below. This will seamlessly open WhatsApp to start our conversation!
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-900 font-heading">
                    Opening WhatsApp...
                  </h4>
                  <p className="text-sm text-emerald-700">
                    Your message has been formatted. If WhatsApp did not open automatically, click the WhatsApp button on the left!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Project Requirement
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                    >
                      <option>Mobile App (iOS & Android)</option>
                      <option>Figma to Flutter Conversion</option>
                      <option>App Performance Optimization</option>
                      <option>Full-Time / Contract Hiring</option>
                      <option>AI / Backend API Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Project Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your app goals, timeline, and features..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
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
