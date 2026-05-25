import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loading({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isUnmounted, setIsUnmounted] = useState(false);
  const fullText = "<Hello World />";

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Fade out
          gsap.to(containerRef.current, {
            opacity: 0,
            y: -30,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              setIsUnmounted(true);
              onComplete?.();
            },
          });
        },
      });

      // Typewriter effect using GSAP
      const chars = fullText.split("");
      chars.forEach((char, i) => {
        tl.call(
          () => {
            if (textRef.current) {
              textRef.current.textContent = fullText.substring(0, i + 1);
            }
          },
          null,
          i * 0.06
        );
      });

      // Hold for a moment after typing completes
      tl.to({}, { duration: 0.4 });
    },
    { scope: containerRef }
  );

  if (isUnmounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Text */}
      <div className="mb-6 loading-glow">
        <span
          ref={textRef}
          className="text-3xl md:text-4xl font-mono font-bold text-white"
        />
        <span className="animate-blink ml-1 text-blue-400 text-3xl md:text-4xl">
          |
        </span>
      </div>

      {/* Loading bar */}
      <div className="w-[200px] h-[2px] bg-gray-800/50 rounded-full relative overflow-hidden">
        <div
          className="w-[40%] h-full rounded-full animate-loading-bar"
          style={{
            background:
              "linear-gradient(90deg, var(--accent-blue), var(--accent-cyan), var(--accent-purple))",
            boxShadow: "0 0 15px var(--accent-blue)",
          }}
        />
      </div>
    </div>
  );
}

export default Loading;