import SectionHeader from "../SectionHeader";
import RevealOnScroll from "../RevealOnScroll";
import SectionShell from "../SectionShell";
import GlassCard from "../GlassCard";
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
  return (
    <SectionShell id="credibility" glowPosition="none">
      <SectionHeader 
        title="What you can expect."
        description="A professional standard for every project. I prioritize reliability and clean delivery over buzzwords."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {expectations.map((item, index) => (
          <RevealOnScroll key={item.title} animation="scale-soft" delay={index * 0.1}>
            <GlassCard className="p-5 sm:p-6 lg:p-8 h-full flex flex-col items-start group">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-16">
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
    </SectionShell>
  );
}
