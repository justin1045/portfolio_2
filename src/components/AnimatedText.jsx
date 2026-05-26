import { useRef, createElement, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function AnimatedText({
  text,
  element = "h2",
  type = "chars",
  animation = "fadeUp",
  stagger = 0.03,
  duration = 0.8,
  delay = 0,
  scrollTrigger = true,
  className = "",
  style: externalStyle,
  onComplete,
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useGSAP(
    () => {
      if (!textRef.current) return;

      // Reduced motion — just make sure text is visible and bail
      if (prefersReducedMotion) {
        gsap.set(textRef.current, { opacity: 1 });
        onComplete?.();
        return;
      }

      const split = new SplitText(textRef.current, {
        type: type === "chars" ? "chars,words" : type,
      });

      const targets =
        type === "chars" ? split.chars : type === "words" ? split.words : split.lines;

      const triggerStart = isMobile ? 'top 90%' : 'top 85%';

      // Base ScrollTrigger config
      const scrollConfig = scrollTrigger
        ? {
            scrollTrigger: {
              trigger: containerRef.current,
              start: triggerStart,
              toggleActions: "play none none none",
            },
          }
        : {};

      let tl;

      switch (animation) {
        case "fadeUp": {
          tl = gsap.timeline({
            ...scrollConfig,
            onComplete,
          });

          tl.set(textRef.current, { opacity: 1 });

          tl.from(targets, {
            y: 40,
            opacity: 0,
            duration,
            stagger,
            delay,
            ease: "power3.out",
          });
          break;
        }

        case "slideIn": {
          // For slideIn we need overflow hidden on the word wrappers
          // SplitText words are already wrapped — apply overflow hidden
          const words = split.words;
          words.forEach((word) => {
            word.style.overflow = "hidden";
            word.style.display = "inline-block";
          });

          // Re-split into chars within the existing word wrappers, or use words directly
          tl = gsap.timeline({
            ...scrollConfig,
            onComplete,
          });

          tl.set(textRef.current, { opacity: 1 });

          tl.from(words, {
            xPercent: 100,
            opacity: 0,
            duration,
            stagger,
            delay,
            ease: "power4.out",
          });
          break;
        }

        case "scramble": {
          // Falling-into-place effect using chars
          const chars =
            type === "chars" ? split.chars : new SplitText(textRef.current, { type: "chars,words" }).chars;

          tl = gsap.timeline({
            ...scrollConfig,
            onComplete,
          });

          tl.set(textRef.current, { opacity: 1 });

          tl.from(chars, {
            y: 20,
            opacity: 0,
            rotationZ: () => gsap.utils.random(-5, 5),
            duration: duration * 0.6,
            stagger: 0.02,
            delay,
            ease: "power3.out",
          });
          break;
        }

        default: {
          // Fallback — simple fade
          tl = gsap.timeline({
            ...scrollConfig,
            onComplete,
          });

          tl.set(textRef.current, { opacity: 1 });

          tl.from(textRef.current, {
            opacity: 0,
            duration,
            delay,
            ease: "power2.out",
          });
        }
      }

      // Cleanup — revert SplitText to restore original DOM
      return () => {
        split.revert();
      };
    },
    { scope: containerRef, dependencies: [text, animation, type, isMobile] }
  );

  return (
    <div ref={containerRef}>
      {createElement(
        element,
        {
          ref: textRef,
          className,
          style: { opacity: prefersReducedMotion ? 1 : 0, ...externalStyle },
          "aria-label": text,
        },
        text
      )}
    </div>
  );
}
