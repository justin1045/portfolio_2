import RevealOnScroll from "../RevealOnScroll";
import AnimatedText from "../AnimatedText";

export default function Services() {
  const services = [
    {
      title: "Custom Web Applications",
      description:
        "End-to-end development of scalable, high-performance web apps tailored to your business. From complex dashboards to SaaS platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      color: "var(--accent-blue)",
    },
    {
      title: "Interactive UI/UX",
      description:
        "Transforming static interfaces into modern, animated, and accessible experiences. Micro-interactions that convert visitors to customers.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      tech: ["GSAP", "Tailwind", "Framer Motion"],
      color: "var(--accent-cyan)",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Robust, secure, and fast online stores. Custom checkout flows, payment integration, and inventory management systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      tech: ["Next.js", "Stripe", "Shopify"],
      color: "var(--accent-purple)",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section label */}
        <div className="section-label">
          <span className="label-number">01</span>
          <span className="label-line" />
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
                <div className="glass-card p-6 md:p-8 group hover:-translate-y-1 transition-all duration-300 flex gap-6">
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
                        <span key={t} className="skill-tag text-xs">{t}</span>
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
