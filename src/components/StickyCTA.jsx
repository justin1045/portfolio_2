import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(() => {
    if (!isMobile) return;

    // Show after hero leaves viewport
    const heroEl = document.getElementById("home");
    const contactEl = document.getElementById("contact");

    if (heroEl) {
      ScrollTrigger.create({
        trigger: heroEl,
        start: "bottom top",
        onEnter: () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false),
      });
    }

    // Hide when contact is in view
    if (contactEl) {
      ScrollTrigger.create({
        trigger: contactEl,
        start: "top 80%",
        onEnter: () => setIsVisible(false),
        onLeaveBack: () => setIsVisible(true),
      });
    }
  }, { dependencies: [isMobile] });

  if (!isMobile) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[rgba(5,5,5,0.9)] backdrop-blur-xl border-t border-white/[0.06] px-4 py-3">
        <a
          href="#contact"
          className="btn-primary w-full py-3 text-sm font-semibold rounded-lg"
        >
          <span className="flex items-center justify-center gap-2">
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
