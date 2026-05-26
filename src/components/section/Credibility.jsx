import RevealOnScroll from "../RevealOnScroll";
import AnimatedText from "../AnimatedText";

export default function Credibility() {
  const promises = [
    {
      title: "Clear Communication",
      description: "No technical jargon or disappearing acts. I keep you updated at every stage of the build.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "var(--accent-blue)",
    },
    {
      title: "Responsive by Default",
      description: "Your project will look and function flawlessly on mobile phones, tablets, and massive desktop screens.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "var(--accent-cyan)",
    },
    {
      title: "Clean Code Structure",
      description: "I write maintainable, well-documented code that other developers can easily understand and scale.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "var(--accent-purple)",
    },
    {
      title: "Reliable Delivery",
      description: "Honest timelines and practical delivery. I test rigorously before pushing anything to production.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "var(--accent-warm)",
    },
  ];

  return (
    <section id="credibility" className="py-16 md:py-32 relative z-10 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        
        {/* Section label */}
        <div className="inline-flex items-center gap-3 font-mono text-sm font-medium text-accent-blue tracking-widest uppercase mb-5">
          <span className="text-accent-warm font-bold">04</span>
          <span className="w-10 h-px bg-accent-blue/40" />
          <span>Standards</span>
        </div>

        <div className="mb-12 md:mb-16">
          <AnimatedText
            text="What You Can Expect"
            element="h2"
            animation="fadeUp"
            type="words"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          />
          <RevealOnScroll>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              When we work together, you're not just getting code. You're getting a reliable technical partner focused on delivering a high-quality product.
            </p>
          </RevealOnScroll>
        </div>

        {/* Promise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {promises.map((promise, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all h-full">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    color: promise.color,
                    background: `color-mix(in srgb, ${promise.color} 15%, transparent)`,
                  }}
                >
                  {promise.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{promise.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{promise.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
