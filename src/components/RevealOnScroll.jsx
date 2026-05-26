import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function RevealOnScroll({ children, animation = "fade-up", stagger = false, delay = 0, className = "" }) {
  const containerRef = useRef(null);
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const triggerStart = isMobile ? 'top 88%' : 'top 85%';
    const targets = stagger ? containerRef.current.children : containerRef.current;

    // Define animation variants
    const animations = {
      "fade-up": {
        y: isMobile ? 20 : 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      },
      "fade-in": {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      },
      "scale-soft": {
        scale: 0.95,
        opacity: 0,
        y: 10,
        duration: 0.8,
        ease: 'power3.out'
      }
    };

    const animConfig = animations[animation] || animations["fade-up"];

    gsap.from(targets, {
      ...animConfig,
      stagger: stagger ? 0.1 : 0,
      delay: delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerStart,
        toggleActions: 'play none none none',
      },
    });

  }, { scope: containerRef, dependencies: [isMobile, animation, stagger, delay] });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

export default RevealOnScroll;