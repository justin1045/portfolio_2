import { useRef } from "react";
import projects from "../../data/projects";
import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import MagneticButton from "../MagneticButton";

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section id="projects" ref={containerRef} className="py-24 sm:py-32 lg:py-40 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Case studies and deployed code."
          description="Real projects solving real problems. I focus on clean architecture, responsive layouts, and performant user experiences."
        />

        <div className="flex flex-col gap-16 lg:gap-24 mb-20">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} animation="fade-up" delay={0.1}>
              <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white/[0.01] border border-white/[0.05] rounded-3xl p-6 sm:p-10 hover:bg-white/[0.02] transition-colors duration-500">
                
                {/* Visual / Abstract side (Left on desktop) */}
                <div className={`lg:col-span-5 h-[300px] lg:h-full min-h-[300px] rounded-2xl relative overflow-hidden bg-[#0a0a0f] border border-white/[0.05] flex flex-col justify-between p-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)`
                    }}
                  />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 text-xs font-medium rounded-full border" style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}>
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                      {project.status}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-black text-white/5 tracking-tighter absolute bottom-0 left-0 -mb-4 -ml-2 pointer-events-none">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content side (Right on desktop) */}
                <div className={`lg:col-span-7 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  
                  {project.clientType && (
                    <span className="text-sm font-mono text-slate-500 mb-3 block">
                      // {project.clientType}
                    </span>
                  )}
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">The Problem</span>
                      <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">The Solution</span>
                      <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 mb-3 font-semibold">Key Features</span>
                    <ul className="flex flex-col gap-2">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.credibilityNote && (
                    <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-4 mb-8">
                      <p className="text-sm text-blue-200/80 leading-relaxed">
                        <strong className="text-blue-400">Takeaway:</strong> {project.credibilityNote}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm" data-cursor="pointer">
                        View Live Site
                      </a>
                    ) : (
                      <button disabled className="btn-primary py-2 px-5 text-sm opacity-50 cursor-not-allowed">
                        Live Demo Coming Soon
                      </button>
                    )}
                    
                    {project.repoUrl ? (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-5 text-sm" data-cursor="pointer">
                        GitHub Repo
                      </a>
                    ) : (
                      <button disabled className="btn-outline py-2 px-5 text-sm opacity-50 cursor-not-allowed">
                        GitHub Private
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll animation="fade-in">
          <div className="flex flex-col items-center justify-center text-center bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 sm:p-12">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">Have a project idea like this?</h4>
            <p className="text-slate-400 mb-8 max-w-lg">
              Whether you need a new web application from scratch or improvements to an existing site, I can help.
            </p>
            <MagneticButton strength={0.2}>
              <a href="#contact" className="btn-primary" data-cursor="pointer">
                Start a Conversation
              </a>
            </MagneticButton>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
