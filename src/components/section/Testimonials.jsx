import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      quote: "Chirag completely transformed our web presence. The attention to detail and performance optimization was outstanding.",
      author: "Sarah J.",
      role: "Marketing Director",
      stars: 5,
    },
    {
      quote: "He didn't just write code — he helped us strategize the best technical approach for our MVP. A true partner.",
      author: "David M.",
      role: "Startup Founder",
      stars: 5,
    },
    {
      quote: "The animations are butter-smooth, and the architecture is rock solid. Highly recommend for any serious web project.",
      author: "Elena R.",
      role: "Product Manager",
      stars: 5,
    },
    // Duplicates for seamless loop
    {
      quote: "Chirag completely transformed our web presence. The attention to detail and performance optimization was outstanding.",
      author: "Sarah J.",
      role: "Marketing Director",
      stars: 5,
    },
    {
      quote: "He didn't just write code — he helped us strategize the best technical approach for our MVP. A true partner.",
      author: "David M.",
      role: "Startup Founder",
      stars: 5,
    },
  ];

  useGSAP(() => {
    if (!scrollRef.current) return;
    gsap.to(scrollRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, { scope: scrollRef });

  return (
    <section id="testimonials" className="py-16 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-10 md:mb-14">
        <div className="section-label">
          <span className="label-number">04</span>
          <span className="label-line" />
          <span>Feedback</span>
        </div>
        <AnimatedText
          text="What Clients Say"
          element="h2"
          animation="fadeUp"
          type="words"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        />
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <div key={i} className="w-[320px] md:w-[400px] flex-shrink-0 mx-3">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 h-full min-h-[280px] flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-300 mb-8 flex-grow leading-relaxed">&ldquo;{t.quote}&rdquo;</p>

                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/[0.06] flex items-center justify-center text-sm font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
