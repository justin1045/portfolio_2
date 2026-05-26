import { useRef } from "react";
import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import MagneticButton from "../MagneticButton";

const expectations = [
  {
    title: "Clear Communication",
    description: "You'll know what is being built, what is needed, and what the next step is."
  },
  {
    title: "Responsive Delivery",
    description: "Layouts are checked across mobile, tablet, laptop, and desktop screens."
  },
  {
    title: "Clean UI Details",
    description: "Spacing, typography, buttons, forms, and section flow are polished carefully."
  },
  {
    title: "Practical Problem Solving",
    description: "I focus on building features that actually help the user and business."
  },
  {
    title: "Honest Timelines",
    description: "No fake promises. Clear scope, clear progress, and practical delivery."
  },
  {
    title: "Deployment Support",
    description: "Projects are prepared for live deployment and future updates."
  }
];

export default function Credibility() {
  const containerRef = useRef(null);

  return (
    <section id="credibility" ref={containerRef} className="py-24 sm:py-32 lg:py-40 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          title="What you can expect."
          description="A professional standard for every project. I prioritize reliability and clean delivery over buzzwords."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {expectations.map((item, index) => (
            <RevealOnScroll key={index} animation="scale-soft" delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] h-full hover:border-blue-500/30 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll animation="fade-in" delay={0.4}>
          <div className="flex justify-center">
            <MagneticButton strength={0.2}>
              <a href="#contact" className="btn-outline group flex items-center gap-2" data-cursor="pointer">
                Want this approach for your website?
              </a>
            </MagneticButton>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
