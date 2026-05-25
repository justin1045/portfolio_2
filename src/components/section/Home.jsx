import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText";
import MagneticButton from "../MagneticButton";
import GradientMesh from "../GradientMesh";
import HeroTerminal from "../HeroTerminal";

const ROLES = [
  "Web Applications",
  "Interactive UIs",
  "E-Commerce Platforms",
  "Digital Experiences",
];

function RoleRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const animate = useCallback(() => {
    if (!textRef.current) return;
    // Slide out current
    gsap.to(textRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % ROLES.length);
        // Reset position below
        gsap.set(textRef.current, { y: 24, opacity: 0 });
        // Slide in new
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
    // Initial reveal
    const initialTimer = setTimeout(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      }
    }, 1200);

    // Start cycling after initial delay
    const interval = setInterval(animate, 3000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [animate]);

  return (
    <div ref={containerRef} className="flex items-center gap-2 sm:gap-3 mb-6">
      <span className="text-lg md:text-2xl text-slate-400 font-medium">I build</span>
      <div className="relative overflow-hidden h-[1.8em]">
        <span
          ref={textRef}
          className="role-text text-lg md:text-2xl font-semibold inline-block"
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

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.from(".hero-status", { y: 20, opacity: 0, duration: 0.5 })
        .from(".hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "+=0.7")
        .from(
          ".hero-cta",
          { y: 15, opacity: 0, stagger: 0.12, duration: 0.5 },
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
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated gradient mesh — visible on ALL devices */}
      <GradientMesh />

      {/* Dot grid overlay */}
      <div className="dot-grid-bg" aria-hidden="true" />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* ── Left Column: Content ── */}
          <div className="w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            {/* Status badge */}
            <div className="hero-status mb-5 sm:mb-8" style={{ opacity: 0 }}>
              <span className="status-badge">
                <span className="status-dot" />
                Accepting 2 new clients for Q3 2026
          </span>
        </div>

        {/* Name */}
        <AnimatedText
          text="Chirag Tank"
          element="h1"
          animation="fadeUp"
          type="chars"
          stagger={0.035}
          duration={0.8}
          delay={0.4}
          scrollTrigger={false}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-3 leading-[1.05] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        />

        {/* Role Rotator */}
        <RoleRotator />

        {/* Description */}
        <p
          className="hero-desc text-base md:text-lg text-slate-400 max-w-xl mb-6 sm:mb-10 leading-relaxed"
          style={{ opacity: 0 }}
        >
          I partner with ambitious brands to engineer scalable web applications,
          interactive interfaces, and robust digital solutions that drive real
          business growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6 sm:mb-10">
          <MagneticButton strength={0.2}>
            <a
              href="#contact"
              className="hero-cta btn-primary shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
              style={{ opacity: 0 }}
              data-cursor="pointer"
            >
              <span className="flex items-center gap-2">
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <a
              href="#projects"
              className="hero-cta btn-outline"
              style={{ opacity: 0 }}
              data-cursor="pointer"
            >
              View Case Studies
            </a>
          </MagneticButton>
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
      <HeroTerminal />
    </div>
  </div>
</section>
  );
}

export default Home;