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
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/40 transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors hoverable"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-[#0c0c0c] via-[#1a1a24] to-[#0c0c0c] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-5 relative z-10">
            <img
              src={project.image}
              alt={project.title}
              className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-[#ff6b35]/50 bg-white"
            />
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6b35]/20 text-[#ff8c5a] border border-[#ff6b35]/30 mb-2">
                {project.storeLabel}
              </span>
              <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#ff6b35] mb-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> About This Application
            </h4>
            <p className="text-gray-700 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Key Highlights</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Production Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Fluid Native 60+ FPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cross-Platform Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Store Compliance Checked</span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
            <a
              href={project.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hoverable gap-2 flex-1 text-center justify-center"
            >
              <span>Visit {project.storeLabel}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="btn-secondary hoverable px-6 text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
