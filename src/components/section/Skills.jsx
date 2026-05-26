import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import { skills } from "../../data/skills";
import SectionShell from "../SectionShell";
import GlassCard from "../GlassCard";

export default function Skills() {
  return (
    <SectionShell id="skills" glowPosition="center">
      <SectionHeader 
        title="The technologies behind the experience."
        description="Your website is built with tools that are modern, maintainable, and deployment-friendly. No outdated tech, just what works."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {skills.map((skillGroup, i) => (
          <RevealOnScroll key={skillGroup.category} animation="fade-up" delay={i * 0.1}>
            <GlassCard className="p-6 sm:p-8 h-full">
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-px bg-blue-500/50" />
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </SectionShell>
  );
}
