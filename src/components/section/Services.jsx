import { useRef } from "react";
import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import MagneticButton from "../MagneticButton";
import { services } from "../../data/services";

// Quick icon mapping helper
const getIcon = (iconName) => {
  switch (iconName) {
    case "laptop":
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "code":
      return (
        <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "layout":
      return (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      );
    case "tool":
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Services() {
  const containerRef = useRef(null);

  return (
    <section id="services" ref={containerRef} className="py-24 sm:py-32 lg:py-40 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <SectionHeader 
          title="Practical services for real requirements."
          description="I don't build generic templates. I build specific, responsive, and deployment-ready solutions tailored to your goals."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, i) => (
            <RevealOnScroll key={service.id} animation="fade-up" delay={i * 0.1}>
              <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll animation="fade-in" delay={0.4}>
          <div className="flex justify-center">
            <MagneticButton strength={0.2}>
              <a href="#contact" className="btn-primary group flex items-center gap-2" data-cursor="pointer">
                Need something similar? Let’s talk
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </MagneticButton>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
