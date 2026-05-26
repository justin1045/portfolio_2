import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "home", label: "00 — Intro" },
  { id: "services", label: "01 — Services" },
  { id: "projects", label: "02 — Work" },
  { id: "process", label: "03 — Process" },
  { id: "skills", label: "04 — Skills" },
  { id: "credibility", label: "05 — Trust" },
  { id: "contact", label: "06 — Contact" },
];

export default function ChapterNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is near middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    CHAPTERS.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
      {CHAPTERS.map((chapter) => {
        const isActive = activeId === chapter.id;
        return (
          <button
            key={chapter.id}
            onClick={() => scrollToSection(chapter.id)}
            className={`group relative flex items-center justify-end text-xs font-mono transition-all duration-300 ${
              isActive ? "text-white" : "text-slate-600 hover:text-slate-400"
            }`}
            aria-label={`Scroll to ${chapter.label}`}
          >
            <span 
              className={`mr-4 transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${
                isActive ? "opacity-100 translate-x-0 text-blue-400" : ""
              }`}
            >
              {chapter.label}
            </span>
            <span
              className={`block transition-all duration-300 rounded-full ${
                isActive 
                  ? "w-8 h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                  : "w-4 h-[1px] bg-slate-700 group-hover:w-6 group-hover:bg-slate-500"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
