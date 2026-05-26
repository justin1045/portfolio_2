import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProgressSpine() {
  const glowRef = useRef(null);
  const containerRef = useRef(null);
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  useGSAP(() => {
    if (prefersReducedMotion || isMobile) return;

    // The glow pill travels down the spine based on scroll position
    gsap.to(glowRef.current, {
      y: () => document.documentElement.scrollHeight - window.innerHeight,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Faster catch-up than the orb for a tighter feel
      }
    });

  }, { scope: containerRef });

  if (isMobile) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 bottom-0 left-[4%] lg:left-[8%] w-px z-50 pointer-events-none mix-blend-screen"
      aria-hidden="true"
    >
      {/* Base faint line */}
      <div className="absolute inset-0 bg-white/[0.02]" />
      
      {/* The traveling glow segment */}
      <div 
        ref={glowRef}
        className="absolute top-0 left-[-1px] w-[3px] h-[15vh] rounded-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.8), rgba(139, 92, 246, 0.8), transparent)',
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)'
        }}
      />
    </div>
  );
}
