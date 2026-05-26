import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TrustBar() {
  const barRef = useRef(null);

  useGSAP(() => {
    if (!barRef.current) return;
    const items = barRef.current.querySelectorAll(".trust-item");
    gsap.from(items, {
      y: 15,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: barRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: barRef });

  const stats = [
    { value: "4+", label: "Projects Built" },
    { value: "100%", label: "Responsive First" },
    { value: "Clean", label: "Code Focus" },
    { value: "Ready", label: "For Deployment" },
  ];

  return (
    <div
      ref={barRef}
      className="relative z-10 border-y border-white/[0.04] bg-white/[0.015]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="trust-item text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white font-['Space_Grotesk',monospace] mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 [text-wrap:balance]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
