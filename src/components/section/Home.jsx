import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText";
import MagneticButton from "../MagneticButton";
import GradientMesh from "../GradientMesh";
import HeroTerminal from "../HeroTerminal";

const ROLES = [
  "Responsive Websites",
  "Web Applications",
  "Dashboard UI",
  "Interactive Interfaces",
];

function RoleRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const animate = useCallback(() => {
    if (!textRef.current) return;
    gsap.to(textRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % ROLES.length);
        gsap.set(textRef.current, { y: 24, opacity: 0 });
        gsap.to(textRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      },
    });
  }, []);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      }
    }, 1200);

    const interval = setInterval(animate, 3000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [animate]);

  return (
    <div ref={containerRef} className="flex flex-col sm:flex-row sm:items-center items-start gap-1 sm:gap-3 mb-6 sm:mb-8 text-sm sm:text-base">
      <span className="text-slate-400 font-medium">Hi, I’m Chirag Tank <span className="hidden sm:inline">—</span></span>
      <div className="relative overflow-hidden h-[1.8em] min-w-[200px]">
        <span
          ref={textRef}
          className="role-text font-semibold text-white inline-block whitespace-nowrap"
          style={{ opacity: 0 }}
        >
          {ROLES[currentIndex]}
        </span>
      </div>
    </div>
  );
}

function Home() {
  const sectionRef = useRef(null);
  const descRef = useRef(null);
  const chipsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.from(".hero-status", { y: 15, opacity: 0, duration: 0.5 })
        .from(".hero-desc", { y: 15, opacity: 0, duration: 0.6 }, "+=0.5")
        .from(
          ".hero-cta",
          { y: 10, opacity: 0, stagger: 0.1, duration: 0.4 },
          "-=0.2"
        )
        .from(
          ".hero-chip",
          { y: 10, opacity: 0, stagger: 0.08, duration: 0.4 },
          "-=0.2"
        )
        .from(
          ".hero-social-link",
          { y: 10, opacity: 0, stagger: 0.08, duration: 0.4 },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-[calc(100svh-4rem)] lg:min-h-screen flex items-center relative overflow-hidden bg-bg-primary"
    >
      <GradientMesh />
      <div className="dot-grid-bg" aria-hidden="true" />

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 lg:pb-24 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          
          {/* ── Left Column: Content ── */}
          <div className="w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            
            {/* Status badge */}
            <div className="hero-status mb-6 sm:mb-8" style={{ opacity: 0 }}>
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 text-xs sm:text-[0.8rem] font-medium text-green-400 bg-green-400/10 border border-green-400/20 rounded-full whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)] animate-pulse-dot flex-shrink-0" />
                <span className="hidden sm:inline truncate">Available for freelance projects & full-stack opportunities</span>
                <span className="sm:hidden truncate">Available for projects</span>
              </span>
            </div>

            {/* Intro & Role */}
            <RoleRotator />

            {/* Main Headline */}
            <AnimatedText
              text="Full-Stack Developer building clean, responsive web apps."
              element="h1"
              animation="fadeUp"
              type="words"
              className="text-[clamp(2.35rem,8vw,5.25rem)] leading-[1.05] sm:leading-[0.95] lg:leading-[0.9] tracking-[-0.04em] font-bold text-white mb-6 lg:mb-8 max-w-[900px] [text-wrap:balance]"
            />

            {/* Subtitle */}
            <p
              ref={descRef}
              className="hero-desc text-base sm:text-lg lg:text-xl text-slate-400 max-w-[36rem] leading-relaxed mb-8 sm:mb-10"
              style={{ opacity: 0 }}
            >
              I create modern websites with React, Tailwind CSS, APIs, and deployment-ready code — focused on clean UI, speed, and usability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <MagneticButton strength={0.2}>
                <a
                  href="#projects"
                  className="hero-cta btn-primary w-full sm:w-auto justify-center shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
                  style={{ opacity: 0 }}
                  data-cursor="pointer"
                >
                  View Projects
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href="#contact"
                  className="hero-cta btn-outline w-full sm:w-auto justify-center"
                  style={{ opacity: 0 }}
                  data-cursor="pointer"
                >
                  Start a Conversation
                </a>
              </MagneticButton>
            </div>
            
            <p className="text-sm text-slate-500 mb-8 max-w-[36rem]">
              Open to freelance work, collaborations, and developer opportunities.
            </p>

            {/* Value Chips */}
            <div ref={chipsRef} className="flex flex-wrap gap-2 sm:gap-3 mb-10">
              {["Responsive UI", "Clean Code", "Deployment Ready"].map((chip) => (
                <span key={chip} className="hero-chip text-xs font-medium text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5" style={{ opacity: 0 }}>
                  {chip}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/justin1045"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link text-slate-500 hover:text-white transition-colors"
                style={{ opacity: 0 }}
                data-cursor="pointer"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chiragtank-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link text-slate-500 hover:text-white transition-colors"
                style={{ opacity: 0 }}
                data-cursor="pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* ── Right Column: Visual Element ── */}
          <div className="mt-10 lg:mt-0 max-w-full sm:max-w-md mx-auto lg:max-w-none">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;