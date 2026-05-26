import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import MagneticButton from "../MagneticButton";
import { services } from "../../data/services";
import SectionShell from "../SectionShell";
import GlassCard from "../GlassCard";

// Quick icon mapping helper
const getIcon = (iconName) => {
  switch (iconName) {
    case "laptop":
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "code":
      return (
        <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "layout":
      return (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      );
    case "tool":
      return (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Services() {
  return (
    <SectionShell id="services" glowPosition="top-left">
      <SectionHeader 
        title="Practical services for real requirements."
        description="I don't build generic templates. I build specific, responsive, and deployment-ready solutions tailored to your goals."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {services.map((service, i) => (
          <RevealOnScroll key={service.id} animation="fade-up" delay={i * 0.1}>
            <GlassCard className="p-5 sm:p-8 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base mb-8 relative z-10">
                {service.description}
              </p>

              <div className="mt-auto space-y-6 relative z-10">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">Best For</span>
                  <p className="text-sm text-[var(--text-secondary)] font-medium">
                    {service.bestFor}
                  </p>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-3">Includes</span>
                  <ul className="flex flex-col gap-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll animation="fade-in" delay={0.4}>
        <div className="flex justify-center">
          <MagneticButton strength={0.2}>
            <a href="#contact" className="btn-primary group flex items-center gap-2" data-cursor="pointer">
              Need something like this? Start a conversation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </MagneticButton>
        </div>
      </RevealOnScroll>
    </SectionShell>
  );
}
