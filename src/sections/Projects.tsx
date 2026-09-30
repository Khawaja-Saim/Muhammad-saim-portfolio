import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { ExternalLink, Eye, Smartphone, Sparkles, Filter } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'store' | 'ai' | 'social'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#00D9F5]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="section-label">
            <span>✦ Featured Creations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
            Published Apps & <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Real-world Flutter applications published on Google Play and Apple App Store, actively serving real users.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Live on Stores (5+)', value: 'store' },
              { label: 'AI & Smart Apps', value: 'ai' },
              { label: 'Social & Media', value: 'social' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 hoverable ${
                  filter === tab.value
                    ? 'bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-[#08090D] shadow-lg shadow-[#00F5A0]/20 scale-105 font-black'
                    : 'bg-[#131826] text-slate-300 border border-white/10 hover:border-[#00F5A0]/50 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card flex flex-col justify-between p-7 border border-white/10 group hoverable shine-effect"
            >
              <div>
                {/* Header Row: Icon & Store Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl p-1 bg-[#0c0e17] shadow-lg border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/30">
                    {project.storeLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#00F5A0] transition-colors mb-2.5 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-bold text-[#00F5A0]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hoverable py-2 px-4 text-xs flex-1 flex items-center justify-center gap-1.5 font-bold"
                >
                  <span>Open Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-full border border-white/10 hover:border-[#00F5A0] hover:text-[#00F5A0] text-xs font-bold text-slate-300 transition-colors flex items-center gap-1 hoverable"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
