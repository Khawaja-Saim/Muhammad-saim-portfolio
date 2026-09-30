import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Smartphone, CheckCircle, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0F131E] rounded-3xl shadow-2xl overflow-hidden border border-white/10 transform transition-all text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors hoverable"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-[#0c0e17] via-[#131826] to-[#0c0e17] p-8 relative overflow-hidden border-b border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-5 relative z-10">
            <img
              src={project.image}
              alt={project.title}
              className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-[#00F5A0]/50 bg-white/10 p-1"
            />
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/30 mb-2">
                {project.storeLabel}
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">{project.title}</h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00F5A0] mb-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> About This Application
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-slate-200 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-[#131826]/70 rounded-2xl p-5 border border-white/5 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00F5A0]" />
                <span>Production Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00F5A0]" />
                <span>Fluid Native 60+ FPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00F5A0]" />
                <span>Cross-Platform Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D9F5]" />
                <span>Store Compliance Checked</span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            <a
              href={project.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hoverable gap-2 flex-1 text-center justify-center font-bold text-sm"
            >
              <span>Visit {project.storeLabel}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="btn-secondary hoverable px-6 text-center text-sm font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
