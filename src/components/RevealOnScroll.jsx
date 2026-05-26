import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function RevealOnScroll({ children, stagger = false, delay = 0 }) {
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
      gsap.set(containerRef.current, { opacity: 1, y: 0 });
      return;
    }

    const triggerStart = isMobile ? 'top 88%' : 'top 85%';
    const yDistance = isMobile ? 20 : 30;

    if (stagger) {
      const children = containerRef.current.children;
      gsap.from(children, {
        y: yDistance,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: 'play none none none',
        },
      });
    } else {
      gsap.from(containerRef.current, {
        y: yDistance,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: 'play none none none',
        },
      });
    }
  }, { scope: containerRef, dependencies: [isMobile] });

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}

export default RevealOnScroll;