import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundSystem() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && glowRef.current) {
      // Subtle parallax on the glow based on scroll
      gsap.to(glowRef.current, {
        y: "30vh",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none bg-[#05070d] overflow-hidden" 
      aria-hidden="true"
    >
      {/* 1. Deep dark base is handled by bg-[#05070d] */}
      
      {/* 2. Very subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* 3. Slow aurora / radial glow */}
      <div 
        ref={glowRef}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen opacity-50 transition-opacity duration-1000"
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-900/10 blur-[120px] mix-blend-screen opacity-40"
      />

      {/* 4. CSS noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none grain-bg" />
    </div>
  );
}
