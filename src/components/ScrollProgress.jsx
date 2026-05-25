import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "approach", label: "Process" },
  { id: "testimonials", label: "Feedback" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(() => {
    if (isMobile) return;

    // Track the filled line
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (lineRef.current) {
          gsap.set(lineRef.current, { scaleY: self.progress });
        }
      },
    });

    // Track active section
    sections.forEach((section, i) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });
  }, { dependencies: [isMobile] });

  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-0"
      aria-hidden="true"
    >
      {/* Track background */}
      <div className="relative w-[2px] flex flex-col items-center" style={{ height: `${(sections.length - 1) * 40 + 12}px` }}>
        {/* Background line */}
        <div className="absolute inset-0 bg-white/[0.06] rounded-full" />

        {/* Filled progress line */}
        <div
          ref={lineRef}
          className="absolute top-0 left-0 w-full rounded-full origin-top"
          style={{
            height: "100%",
            background: "linear-gradient(to bottom, var(--accent-blue), var(--accent-purple))",
            transform: "scaleY(0)",
          }}
        />

        {/* Section dots */}
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="absolute left-1/2 -translate-x-1/2 group flex items-center"
            style={{ top: `${i * 40}px` }}
            data-cursor="pointer"
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                i === activeIndex
                  ? "bg-blue-500 border-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] scale-110"
                  : "bg-transparent border-white/20 hover:border-white/40"
              }`}
            />
            {/* Label on hover */}
            <span className="absolute right-6 text-xs font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
