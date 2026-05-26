import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  const pillars = [
    {
      title: "Responsive UI",
      description: "Fluid layouts that look and function perfectly across all devices, from mobile phones to ultra-wide desktop monitors.",
    },
    {
      title: "Practical Web Apps",
      description: "Focusing on user-centric features and clear navigation rather than unnecessary complexity.",
    },
    {
      title: "Clean & Maintainable Code",
      description: "Structured, component-based architecture that is easy to scale, update, and hand off to other teams.",
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understand the Requirement",
      description: "Deep dive into the problem, target audience, and business goals to ensure we build exactly what is needed.",
    },
    {
      number: "02",
      title: "Plan the UI & User Flow",
      description: "Mapping out intuitive navigation and designing clean interfaces that prioritize user experience.",
    },
    {
      number: "03",
      title: "Build Responsive Components",
      description: "Developing scalable, reusable UI components with React and Tailwind CSS, ensuring mobile-first compatibility.",
    },
    {
      number: "04",
      title: "Test, Deploy & Improve",
      description: "Rigorous cross-browser testing, performance optimization, and reliable deployment via modern cloud platforms.",
    },
  ];

  const technologies = [
    "React", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Node.js", "Express.js", "REST APIs",
    "Git", "GitHub", "VS Code", "Vercel",
    "Netlify", "GSAP", "Responsive Design"
  ];

  const marqueeItems = [...technologies, ...technologies];

  return (
    <section id="about" className="py-16 md:py-32 relative z-10 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        
        {/* Section label */}
        <div className="inline-flex items-center gap-3 font-mono text-sm font-medium text-accent-blue tracking-widest uppercase mb-5">
          <span className="text-accent-warm font-bold">03</span>
          <span className="w-10 h-px bg-accent-blue/40" />
          <span>About Me</span>
        </div>

        {/* About Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 md:mb-24">
          <div>
            <AnimatedText
              text="My Approach"
              element="h2"
              animation="fadeUp"
              type="words"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
            />
          </div>
          <RevealOnScroll>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              I’m a full-stack developer focused on building clean, responsive, and practical web applications. 
              I enjoy turning ideas into working products — from frontend UI to backend-connected features and deployment. 
              My focus is simple: build websites that look good, work smoothly, and help users take action.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:mb-32">
          {pillars.map((pillar, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 h-full hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="w-full h-px bg-white/[0.05] mb-20 md:mb-32" />

        {/* Process Label */}
        <div id="approach" className="inline-flex items-center gap-3 font-mono text-sm font-medium text-accent-purple tracking-widest uppercase mb-10 md:mb-16">
          <span className="text-accent-blue font-bold">Process</span>
          <span className="w-10 h-px bg-accent-purple/40" />
          <span>How I Build</span>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mb-20 md:mb-32">
          {/* Timeline line */}
          <div className="absolute left-[1.1rem] md:left-[1.6rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent" />

          <div className="space-y-6 md:space-y-10">
            {processSteps.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.08}>
                <div className="relative flex gap-5 md:gap-8 items-start pl-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-blue-500/40 bg-bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-amber-400/70 font-mono">{step.number}</span>
                      <h4 className="text-lg md:text-xl font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-lg">{step.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Tech Marquee */}
        <RevealOnScroll>
          <div className="relative">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
              Technologies I Work With
            </h3>
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

              <div className="flex w-max animate-marquee-scroll will-change-transform hover:[animation-play-state:paused]">
                {marqueeItems.map((tech, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 mx-2 md:mx-3 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-slate-300 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-blue-500/30 hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default About;
