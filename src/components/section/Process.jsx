import { useRef } from "react";
import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";

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
  const containerRef = useRef(null);

  return (
    <section id="process" ref={containerRef} className="py-24 sm:py-32 lg:py-40 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader 
          title="A reliable process from idea to launch."
          description="I follow a structured approach to ensure there are no surprises. You will always know what stage we are in and what comes next."
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Vertical Line Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.05]" />
          
          {/* Vertical Line Mobile */}
          <div className="md:hidden absolute left-[27px] top-0 bottom-0 w-px bg-white/[0.05]" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} animation="fade-up" delay={index * 0.15}>
                <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-[#05070d] border border-blue-500/30 rounded-full z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white/[0.02] border border-white/[0.05] p-6 sm:p-8 rounded-2xl hover:bg-white/[0.03] transition-colors">
                      <span className="text-blue-400 font-mono text-sm mb-2 block">0{index + 1}</span>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
