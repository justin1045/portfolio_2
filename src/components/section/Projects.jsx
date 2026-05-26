import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import projects from "../../data/projects";
import AnimatedText from "../AnimatedText";
import MagneticButton from "../MagneticButton";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia("(hover: none)").matches || "ontouchstart" in window
    );
  }, []);

  const { contextSafe } = useGSAP({ scope: cardRef });

  const handleMouseMove = contextSafe((e) => {
    if (isTouchDevice) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -4;
    const rotateY = ((x - rect.width / 2) / rect.width) * 4;

    gsap.to(card, { rotateX, rotateY, duration: 0.3, ease: "power2.out", overwrite: "auto" });

    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0.1,
        background: `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        duration: 0.3,
      });
    }
  });

  const handleMouseLeave = contextSafe(() => {
    if (isTouchDevice) return;
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    if (glareRef.current) gsap.to(glareRef.current, { opacity: 0, duration: 0.3 });
  });

  return (
    <div className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] px-4" style={{ perspective: "1200px" }}>
      <div
        ref={cardRef}
        className={`h-full relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/[0.06] bg-white/[0.02]`}
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={glareRef} className="absolute inset-0 rounded-[inherit] pointer-events-none z-10" style={{ opacity: 0 }} />
        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        <div className="p-8 md:p-10 lg:p-12 h-full flex flex-col">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <span className="text-6xl md:text-7xl font-bold font-mono leading-none" style={{ color: project.color, opacity: 0.15 }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 ${
              project.status === "Live"
                ? "bg-green-500/10 border border-green-500/25 text-green-400"
                : "bg-white/[0.04] border border-white/[0.08] text-slate-500"
            }`}>
              {project.status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />}
              {project.status} • {project.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-2xl leading-relaxed">{project.shortDescription}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8 flex-grow">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Problem</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.problem}</p>
              
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Solution</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
            </div>
            
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-5">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-5 pt-5 border-t border-white/[0.04]">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">My Role</h4>
                <p className="text-slate-300 text-sm">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 pt-6 border-t border-white/[0.04]">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="inline-block px-3 py-1 text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-lg transition-all duration-300 hover:text-white hover:bg-accent-blue/10 hover:border-accent-blue/25">{tech}</span>
              ))}
            </div>
            
            <div className="flex gap-4 w-full xl:w-auto">
              {project.repoUrl ? (
                <MagneticButton strength={0.15}>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4 whitespace-nowrap">
                    View GitHub
                  </a>
                </MagneticButton>
              ) : (
                <button disabled className="btn-outline opacity-50 cursor-not-allowed text-sm py-2 px-4 whitespace-nowrap">
                  GitHub Coming Soon
                </button>
              )}
              
              {project.liveUrl ? (
                <MagneticButton strength={0.15}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4 whitespace-nowrap">
                    View Live
                  </a>
                </MagneticButton>
              ) : (
                <button disabled className="btn-primary opacity-50 cursor-not-allowed text-sm py-2 px-4 whitespace-nowrap">
                  Live Demo Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(() => {
    if (isMobile || !trackRef.current) return;
    const track = trackRef.current;
    const totalScroll = track.scrollWidth - window.innerWidth;
    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + totalScroll,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressRef.current) gsap.set(progressRef.current, { scaleX: self.progress });
        },
        onEnter: () => { if (progressRef.current) gsap.to(progressRef.current.parentElement, { opacity: 1, duration: 0.3 }); },
        onLeave: () => { if (progressRef.current) gsap.to(progressRef.current.parentElement, { opacity: 0, duration: 0.3 }); },
        onEnterBack: () => { if (progressRef.current) gsap.to(progressRef.current.parentElement, { opacity: 1, duration: 0.3 }); },
        onLeaveBack: () => { if (progressRef.current) gsap.to(progressRef.current.parentElement, { opacity: 0, duration: 0.3 }); },
      },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, { scope: sectionRef, dependencies: [isMobile] });

  const mobileRef = useRef(null);
  useGSAP(() => {
    if (!isMobile || !mobileRef.current) return;
    const cards = mobileRef.current.querySelectorAll(".mobile-card");
    cards.forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { 
          trigger: card, 
          start: "top 88%", 
          toggleActions: "play none none none" 
        },
      });
    });
  }, { scope: mobileRef, dependencies: [isMobile] });

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 overflow-hidden bg-bg-primary">
      {!isMobile ? (
        <div className="min-h-screen flex flex-col justify-center py-20">
          <div className="px-6 md:px-8 mb-16 max-w-6xl mx-auto w-full">
            <div className="inline-flex items-center gap-3 font-mono text-sm font-medium text-accent-blue tracking-widest uppercase mb-5">
              <span className="text-accent-warm font-bold">02</span>
              <span className="w-10 h-px bg-accent-blue/40" />
              <span>Case Studies</span>
            </div>
            <AnimatedText
              text="Selected Work"
              element="h2"
              animation="fadeUp"
              type="words"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            />
          </div>

          <div ref={trackRef} className="flex items-stretch gap-6 pl-[8vw] pr-[8vw]" style={{ width: "max-content" }}>
            {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>

          <div className="fixed bottom-0 left-0 right-0 h-[2px] z-30 pointer-events-none" style={{ opacity: 0 }}>
            <div ref={progressRef} className="h-full origin-left" style={{ background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))", transform: "scaleX(0)" }} />
          </div>
        </div>
      ) : (
        <div className="py-24 px-5 sm:px-6 md:px-8" ref={mobileRef}>
          <div className="inline-flex items-center gap-3 font-mono text-sm font-medium text-accent-blue tracking-widest uppercase mb-5">
            <span className="text-accent-warm font-bold">02</span>
            <span className="w-10 h-px bg-accent-blue/40" />
            <span>Case Studies</span>
          </div>
          <AnimatedText text="Selected Work" element="h2" animation="fadeUp" type="words" className="text-3xl font-bold text-white mb-10" />
          
          <div className="space-y-8 max-w-xl mx-auto">
            {projects.map((p, i) => (
              <div key={p.id} className="mobile-card rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-bold font-mono leading-none" style={{ color: p.color, opacity: 0.15 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 ${p.status === "Live" ? "bg-green-500/10 border border-green-500/25 text-green-400" : "bg-white/[0.04] border border-white/[0.08] text-slate-500"}`}>
                      {p.status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />}
                      {p.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.shortDescription}</p>
                  
                  <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 mb-6">
                     <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Solution</h4>
                     <p className="text-slate-300 text-sm leading-relaxed">{p.solution}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.techStack.map(t => <span key={t} className="inline-block px-3 py-1 text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-lg">{t}</span>)}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {p.liveUrl ? (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm w-full text-center py-3">
                        View Live Site
                      </a>
                    ) : (
                      <button disabled className="btn-primary opacity-50 cursor-not-allowed text-sm w-full py-3">
                        Live Demo Coming Soon
                      </button>
                    )}
                    {p.repoUrl ? (
                      <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm w-full text-center py-3">
                        View GitHub
                      </a>
                    ) : (
                      <button disabled className="btn-outline opacity-50 cursor-not-allowed text-sm w-full py-3">
                        GitHub Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
