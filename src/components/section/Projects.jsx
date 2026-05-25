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
    <div className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[50vw] px-4" style={{ perspective: "1200px" }}>
      <div
        ref={cardRef}
        className={`h-full relative overflow-hidden rounded-2xl backdrop-blur-sm ${
          project.featured
            ? "border border-blue-500/20 bg-blue-500/[0.03] shadow-[0_0_30px_rgba(59,130,246,0.08)]"
            : "border border-white/[0.06] bg-white/[0.02]"
        }`}
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glare */}
        <div ref={glareRef} className="absolute inset-0 rounded-[inherit] pointer-events-none z-10" style={{ opacity: 0 }} />

        {/* Top accent bar */}
        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        <div className="p-8 md:p-10 lg:p-12">
          {/* Header row */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <span className="text-6xl md:text-7xl font-bold font-mono leading-none" style={{ color: project.color, opacity: 0.1 }}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 ${
              project.featured
                ? "bg-green-500/10 border border-green-500/25 text-green-400"
                : "bg-white/[0.04] border border-white/[0.08] text-slate-500"
            }`}>
              {project.featured && <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />}
              {project.featured ? "In Production" : project.tagline}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{project.title}</h3>

          {/* Challenge / Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">The Challenge</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">The Solution</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-white/[0.04]">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="skill-tag text-xs">{tech}</span>
              ))}
            </div>
            {project.liveUrl && (
              <MagneticButton strength={0.15}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  data-cursor="pointer"
                >
                  View Live
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </MagneticButton>
            )}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
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
    gsap.from(mobileRef.current.querySelectorAll(".mobile-card"), {
      y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: mobileRef.current, start: "top 80%", toggleActions: "play none none none" },
    });
  }, { scope: mobileRef, dependencies: [isMobile] });

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 overflow-hidden">
      {!isMobile ? (
        <div className="min-h-screen flex flex-col justify-center py-20">
          <div className="px-6 md:px-8 mb-16 max-w-6xl mx-auto w-full">
            <div className="section-label">
              <span className="label-number">02</span>
              <span className="label-line" />
              <span>Work</span>
            </div>
            <AnimatedText
              text="Selected Case Studies"
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
        <div className="py-24 px-6" ref={mobileRef}>
          <div className="section-label">
            <span className="label-number">02</span>
            <span className="label-line" />
            <span>Work</span>
          </div>
          <AnimatedText text="Selected Case Studies" element="h2" animation="fadeUp" type="words" className="text-3xl font-bold text-white mb-10" />
          <div className="space-y-6 max-w-lg mx-auto">
            {projects.map((p, i) => (
              <div key={p.id} className="mobile-card rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold font-mono" style={{ color: p.color, opacity: 0.1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 ${p.featured ? "bg-green-500/10 border border-green-500/25 text-green-400" : "bg-white/[0.04] border border-white/[0.08] text-slate-500"}`}>
                      {p.featured && <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />}
                      {p.featured ? "In Production" : p.tagline}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.challenge}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.techStack.map(t => <span key={t} className="skill-tag text-xs">{t}</span>)}
                  </div>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm w-full text-center py-3">
                      <span>View Live Site</span>
                    </a>
                  )}
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
