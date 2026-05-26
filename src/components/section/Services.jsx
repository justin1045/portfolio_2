import RevealOnScroll from "../RevealOnScroll";
import AnimatedText from "../AnimatedText";

export default function Services() {
  const services = [
    {
      title: "Responsive Website Development",
      description: "Clean, mobile-first websites built with React, Tailwind CSS, and modern frontend practices.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tech: ["React", "Tailwind CSS", "JavaScript"],
      color: "var(--accent-blue)",
    },
    {
      title: "Web App UI & Functionality",
      description: "Interactive interfaces, dashboards, forms, API integrations, and practical features built for real users.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tech: ["React", "Node.js", "REST APIs"],
      color: "var(--accent-purple)",
    },
    {
      title: "Portfolio / Landing Pages",
      description: "Professional landing pages and digital presence websites for individuals, startups, and small businesses.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      tech: ["HTML5", "CSS3", "GSAP"],
      color: "var(--accent-cyan)",
    },
    {
      title: "Frontend Improvement",
      description: "UI cleanup, responsive fixes, performance improvements, and better user experience for existing websites.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      tech: ["Responsive Design", "Bug Fixing", "UI/UX"],
      color: "var(--accent-warm)",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-3 font-mono text-sm font-medium text-accent-blue tracking-widest uppercase mb-5">
          <span className="text-accent-warm font-bold">01</span>
          <span className="w-10 h-px bg-accent-blue/40" />
          <span>Services</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div>
            <AnimatedText
              text="What I Do"
              element="h2"
              animation="fadeUp"
              type="words"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            />
            <RevealOnScroll>
              <p className="text-slate-400 text-lg leading-relaxed">
                Specialized services designed to elevate your digital presence and solve complex technical challenges.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right: Cards */}
          <div className="space-y-5">
            {services.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="bg-white/[0.04] backdrop-blur-md border border-white/8 rounded-2xl hover:bg-white/[0.07] hover:border-accent-blue/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08),0_0_0_1px_rgba(59,130,246,0.05)] p-5 sm:p-6 md:p-8 group hover:-translate-y-1 transition-all duration-400 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors duration-300"
                    style={{
                      color: service.color,
                      borderColor: `color-mix(in srgb, ${service.color} 20%, transparent)`,
                      background: `color-mix(in srgb, ${service.color} 8%, transparent)`,
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <svg
                        className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((t) => (
                        <span key={t} className="inline-block px-3 py-1 text-xs font-medium text-text-secondary bg-white/[0.04] border border-border-subtle rounded-lg transition-all duration-300 hover:text-white hover:bg-accent-blue/10 hover:border-accent-blue/25">{t}</span>
                      ))}
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
