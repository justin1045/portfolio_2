import { useState } from "react";
import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import MagneticButton from "../MagneticButton";
import projects from "../../data/projects";
import SectionShell from "../SectionShell";
import GlassCard from "../GlassCard";

// Status dot color mapping
function getStatusColor(status) {
  switch (status) {
    case 'Live': return 'bg-emerald-400';
    case 'In Development': return 'bg-amber-400';
    case 'Demo': return 'bg-blue-400';
    case 'Client Approved': return 'bg-cyan-400';
    default: return 'bg-emerald-400';
  }
}

// CTA label based on status
function getLinkLabel(status) {
  switch (status) {
    case 'Live': return 'View Live Site';
    case 'In Development': return 'Preview Site';
    case 'Demo': return 'View Demo';
    case 'Client Approved': return 'Preview Site';
    default: return 'Live Demo';
  }
}

// A single Project Card Component for the Grid (Projects 2, 3, 4...)
function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GlassCard className="flex flex-col h-full">
      {/* Card Header */}
      <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col relative z-10">
        
        {/* Category & Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[var(--text-secondary)]">
            <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(project.status)}`} />
            {project.status}
          </span>
        </div>

        {/* Title & Short Desc */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[11px] font-medium text-[var(--text-muted)] px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.04]">
              {tech}
            </span>
          ))}
        </div>

        {/* Expand/Collapse logic for deep details */}
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-[var(--border-subtle)] space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">The Problem</h4>
              <p className="text-sm text-[var(--text-muted)]">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">The Solution</h4>
              <p className="text-sm text-[var(--text-muted)]">{project.solution}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">My Role</h4>
              <p className="text-sm text-[var(--text-muted)]">{project.role}</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--border-subtle)]">
          {project.liveUrl ? (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              {getLinkLabel(project.status)}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ) : (
            <span className="text-sm font-medium text-[var(--text-muted)] cursor-not-allowed">
              Internal / Offline
            </span>
          )}
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto text-xs font-medium text-[var(--text-muted)] hover:text-white transition-colors flex items-center gap-1"
          >
            {isExpanded ? 'Show Less' : 'Read Case Study'}
            <svg className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
      </div>
    </GlassCard>
  );
}

// The Large Featured Project Component
function FeaturedProject({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // The Data Card reused for both Desktop Right Side and Mobile Back Face
  const ProjectDetailsCard = ({ className = "" }) => (
    <GlassCard className={`p-5 sm:p-6 shadow-2xl ${className}`} hoverEffect={false}>
      <div className="flex items-center gap-2 mb-4 border-b border-[var(--border-subtle)] pb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="ml-2 text-xs font-mono text-[var(--text-muted)]">project-details.json</div>
      </div>
      
      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        Credibility Takeaway
      </h4>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
        {project.credibilityNote}
      </p>

      <h4 className="text-white font-medium mb-3">Key Features</h4>
      <ul className="space-y-2">
        {project.keyFeatures.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
            <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {feature}
          </li>
        ))}
      </ul>
    </GlassCard>
  );

  return (
    <div className="mb-8 sm:mb-16 group relative w-full perspective-1000" style={{ perspective: '2000px' }}>
      
      {/* 3D Flip Container */}
      <div 
        className="w-full h-full transition-transform duration-700 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* =========================================
            FRONT FACE (Mobile Content / Desktop Full)
            ========================================= */}
        <div 
          className={`w-full backface-hidden bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] overflow-hidden relative shadow-2xl transition-all duration-700 ${isFlipped ? 'pointer-events-none z-0' : 'z-20'}`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Background Glow */}
          <div 
            className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none transition-opacity duration-700 group-hover:opacity-20"
            style={{ background: `radial-gradient(circle at 70% 30%, ${project.color}, transparent 60%)` }}
          />

          <div className="flex flex-col lg:flex-row h-full w-full">
            {/* Left Content Side */}
            <div className="w-full lg:w-1/2 p-5 sm:p-6 lg:p-8 flex flex-col relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
                  Featured Case Study
                </span>
                <span className="w-12 h-px bg-[var(--border-default)]" />
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                {project.title}
              </h3>
              
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
                {project.shortDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">The Problem</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">The Solution</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-[var(--border-subtle)] flex flex-col xl:flex-row xl:items-center gap-6 justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-[var(--text-muted)] px-3 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <MagneticButton strength={0.1}>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors gap-2 w-full sm:w-auto"
                      data-cursor="pointer"
                    >
                      View Live Site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </MagneticButton>
                )}
              </div>

              {/* Mobile Only: Flip Button */}
              <div className="mt-8 lg:hidden pt-6 border-t border-[var(--border-subtle)]">
                <button 
                  onClick={() => setIsFlipped(true)}
                  onTouchEnd={(e) => { e.preventDefault(); setIsFlipped(true); }}
                  className="w-full py-3.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-500/20 transition-colors cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                >
                  View Credibility Takeaway
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

            {/* Right Visual Side (HIDDEN ON MOBILE) */}
            <div className="hidden lg:flex w-1/2 border-l border-[var(--border-subtle)] p-5 sm:p-6 lg:p-8 flex-col justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(59,130,246,0.04) 50%, rgba(139,92,246,0.03) 100%)' }}>
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <ProjectDetailsCard className="transform lg:translate-x-4 lg:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>

        {/* =========================================
            BACK FACE (Mobile Only)
            ========================================= */}
        <div 
          className={`absolute inset-0 w-full h-full backface-hidden bg-[var(--bg-card)] rounded-2xl border border-[var(--border-default)] overflow-hidden lg:hidden shadow-2xl transition-all duration-700 ${!isFlipped ? 'pointer-events-none z-0' : 'z-50'}`}
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-full h-full flex flex-col relative overflow-hidden p-5 sm:p-6" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(59,130,246,0.04) 50%, rgba(139,92,246,0.03) 100%)' }}>
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="flex-1 flex flex-col justify-center relative z-10 overflow-y-auto">
               <ProjectDetailsCard />
            </div>

            {/* Mobile Only: Flip Back Button */}
            <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] relative z-10 shrink-0">
              <button 
                onClick={() => setIsFlipped(false)}
                onTouchEnd={(e) => { e.preventDefault(); setIsFlipped(false); }}
                className="w-full py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl text-[var(--text-secondary)] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/[0.08] hover:text-white transition-colors cursor-pointer relative z-50"
                style={{ pointerEvents: 'auto' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Overview
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  
  if (!projects || projects.length === 0) return null;

  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <SectionShell id="projects" glowPosition="center">
      <SectionHeader 
        title="Selected proof of work."
        description="Real client projects — designed, developed, and deployed. Each one built to solve a real business problem."
        align="left"
      />

      {/* Featured Project */}
      <RevealOnScroll animation="fade-up" delay={0.1}>
        <FeaturedProject project={featuredProject} />
      </RevealOnScroll>

      {/* Supporting Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
        {remainingProjects.map((project, index) => (
          <RevealOnScroll key={project.id} animation="fade-up" delay={0.1 * (index + 1)}>
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionShell>
  );
}
