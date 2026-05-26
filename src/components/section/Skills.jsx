import { useRef } from "react";
import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import { skills } from "../../data/skills";

export default function Skills() {
  const containerRef = useRef(null);

  return (
    <section id="skills" ref={containerRef} className="py-24 sm:py-32 lg:py-40 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          title="The technologies I use."
          description="I focus on modern, reliable tools that build fast, responsive, and maintainable applications."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skillGroup, index) => (
            <RevealOnScroll key={skillGroup.category} animation="fade-up" delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] h-full hover:bg-white/[0.03] transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-500/50 block" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item} 
                      className="text-sm font-medium text-slate-300 bg-white/[0.03] border border-white/[0.05] rounded-full px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
