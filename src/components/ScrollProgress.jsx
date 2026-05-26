import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const lineRef = useRef(null);

  useGSAP(() => {
    // Only animate if the user hasn't requested reduced motion
    const prefersReducedMotion = typeof window !== 'undefined' 
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
       gsap.set(lineRef.current, { scaleX: 1, opacity: 0.2 });
       return;
    }

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (lineRef.current) {
          gsap.set(lineRef.current, { scaleX: self.progress });
        }
      },
    });
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none" 
      aria-hidden="true"
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-white/5" />
      
      {/* Animated fill */}
      <div 
        ref={lineRef}
        className="absolute inset-0 origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
