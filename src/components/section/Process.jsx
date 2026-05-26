import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import SectionShell from "../SectionShell";

const steps = [
  {
    title: "Understand Requirement",
    description: "We discuss the goal, audience, pages, features, and final outcome."
  },
  {
    title: "Plan UI Flow",
    description: "I structure the layout, sections, user flow, and responsive behavior before building."
  },
  {
    title: "Build Responsive Components",
    description: "I develop clean, reusable components with mobile-first implementation."
  },
  {
    title: "Test, Deploy & Improve",
    description: "I check responsiveness, links, forms, performance, and deployment before handoff."
  }
];

export default function Process() {
  return (
    <SectionShell id="process" glowPosition="none">
      <SectionHeader 
        title="A reliable process from idea to launch."
        description="Clear scope, clean execution, and careful testing before handoff. You will always know what stage we are in and what comes next."
        align="center"
      />

      <div className="max-w-4xl mx-auto mt-16 lg:mt-20 relative">
        {/* Vertical Line Desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
        
        {/* Vertical Line Mobile */}
        <div className="md:hidden absolute left-[27px] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />

        <div className="flex flex-col gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} animation="fade-up" delay={index * 0.1}>
              <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Timeline Node */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-[var(--bg-primary)] border border-[var(--border-accent)] rounded-full z-10 flex items-center justify-center transition-transform group-hover:scale-125 duration-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-default)] transition-all duration-300 relative overflow-hidden backdrop-blur-xl">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <span className="text-cyan-400 font-mono text-[11px] uppercase tracking-widest mb-3 block">Step 0{index + 1}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
