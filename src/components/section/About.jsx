import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business goals, audience, and technical requirements through in-depth consultation.",
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: "Creating wireframes, prototypes, and a clear project roadmap before writing a single line of code.",
    },
    {
      number: "03",
      title: "Development",
      description: "Building with modern, scalable tech stacks — clean code, optimized for performance and SEO from day one.",
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "Thorough testing, deployment, and ongoing support to scale your application as your business grows.",
    },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "PostgreSQL",
    "Tailwind CSS", "GSAP", "AWS", "Vercel",
    "Firebase", "REST APIs", "Git", "Figma",
  ];

  const marqueeItems = [...technologies, ...technologies];

  return (
    <section id="approach" className="py-16 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Section label */}
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-line" />
          <span>Process</span>
        </div>

        {/* Two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 md:mb-16">
          <div>
            <AnimatedText
              text="How I Work"
              element="h2"
              animation="slideIn"
              type="words"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
            />
          </div>
          <RevealOnScroll>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              I believe great software is built at the intersection of business strategy
              and technical excellence. Transparent communication, agile delivery, and
              a relentless focus on quality drive every project I take on.
            </p>
          </RevealOnScroll>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mb-12 md:mb-20">
          {/* Timeline line */}
          <div className="absolute left-[1.1rem] md:left-[1.6rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/30 via-cyan-500/20 to-transparent" />

          <div className="space-y-6 md:space-y-10">
            {processSteps.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.08}>
                <div className="relative flex gap-5 md:gap-8 items-start pl-0 md:pl-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-blue-500/40 bg-[var(--bg-primary)] flex items-center justify-center">
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
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

              <div className="marquee-track">
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
