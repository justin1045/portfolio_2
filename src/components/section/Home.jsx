import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText";
import MagneticButton from "../MagneticButton";
import HeroTerminal from "../HeroTerminal";
import SectionShell from "../SectionShell";

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
    <div ref={containerRef} className="flex flex-col sm:flex-row sm:items-center items-start gap-1 sm:gap-3 mb-4 sm:mb-8 text-sm sm:text-base">
      <span className="text-slate-400 font-medium">Hi, I’m Chirag Tank <span className="hidden sm:inline">—</span></span>
      <div className="relative overflow-hidden h-[1.8em] min-w-[150px] sm:min-w-[200px]">
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
          ".hero-footer-text",
          { y: 10, opacity: 0, duration: 0.4 },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <SectionShell
      id="home"
      ref={sectionRef}
      variant="hero"
      className="relative overflow-hidden flex items-center"
      glowPosition="center"
    >

      <div className="w-full min-h-[100svh] lg:min-h-0 pt-28 lg:pt-40 pb-12 lg:pb-24 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center w-full">
          
          {/* ── Left Column: Content ── */}
          <div className="w-full order-1">
            
            {/* Status badge */}
            <div className="hero-status mb-4 sm:mb-8">
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
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.05] sm:leading-[0.95] lg:leading-[0.9] tracking-[-0.04em] font-bold text-white mb-4 lg:mb-8 max-w-[900px] [text-wrap:balance]"
            />

            {/* Subtitle */}
            <p
              ref={descRef}
              className="hero-desc text-sm sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-[36rem] leading-relaxed mb-6 sm:mb-10"
            >
              I create modern websites with React, Tailwind CSS, APIs, and deployment-ready code — focused on clean UI, speed, and usability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-4 sm:mb-10">
              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <a
                  href="#projects"
                  className="hero-cta btn-primary w-full sm:w-auto justify-center shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
                  data-cursor="pointer"
                >
                  View Projects
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <a
                  href="#contact"
                  className="hero-cta btn-outline w-full sm:w-auto justify-center"
                  data-cursor="pointer"
                >
                  Start a Conversation
                </a>
              </MagneticButton>
            </div>
            
            <p 
              className="hero-footer-text hidden sm:block text-sm text-[var(--text-muted)] max-w-[36rem]"
            >
              Open to freelance work, collaborations, and developer opportunities.
            </p>
          </div>
          
          {/* ── Right Column: Visual Element ── */}
          <div className="hidden lg:flex w-full justify-center lg:justify-end order-2 mt-2 lg:mt-0">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default Home;