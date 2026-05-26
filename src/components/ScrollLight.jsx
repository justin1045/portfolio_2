import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollLight() {
  const orbRef = useRef(null);
  const containerRef = useRef(null);
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useGSAP(() => {
    if (prefersReducedMotion || isMobile) {
      // Static placement on mobile/reduced motion
      gsap.set(orbRef.current, { top: '20vh', opacity: 0.15 });
      return;
    }

    // Scrub the orb down the page as the user scrolls
    gsap.to(orbRef.current, {
      y: () => document.documentElement.scrollHeight - window.innerHeight,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // Smooth lag
      }
    });

    // Subtle breathing scale effect
    gsap.to(orbRef.current, {
      scale: 1.2,
      opacity: 0.4,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      <div 
        ref={orbRef}
        className="absolute left-[30%] top-[-100px] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full mix-blend-screen opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.15), transparent 70%)'
        }}
      />
    </div>
  );
}
