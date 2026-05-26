import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const formRef = useRef();
  const sectionRef = useRef(null);
  const toastRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: sectionRef });

  const showToast = contextSafe((type) => {
    if (!toastRef.current) return;
    setStatus(type);
    gsap.fromTo(toastRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" });
    gsap.to(toastRef.current, { y: 40, opacity: 0, duration: 0.3, ease: "power2.in", delay: 3.5, onComplete: () => setStatus(null) });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => { showToast("success"); setForm({ name: "", email: "", message: "" }); })
      .catch(() => { showToast("error"); });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="section-label">
          <span className="label-number">05</span>
          <span className="label-line" />
          <span>Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Left: Copy */}
          <div>
            <AnimatedText
              text="Let's build something extraordinary."
              element="h2"
              animation="slideIn"
              type="words"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            />
            <RevealOnScroll>
              <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed">
                Whether you need a web application from scratch or want to modernize existing
                infrastructure, I'm here to help. Let's schedule a discovery call.
              </p>

              {/* Scarcity signal */}
              <div className="flex items-start md:items-center gap-3 bg-amber-500/[0.06] border border-amber-500/15 rounded-lg px-4 py-3 mb-8 md:mb-12 max-w-full">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 md:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-amber-300/80 flex-1 leading-relaxed">Currently taking on <strong className="text-amber-300">2 new projects</strong>. Spots fill up quickly.</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/[0.08] border border-blue-500/[0.15] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Fast Response</h4>
                    <p className="text-slate-500 text-sm">I typically respond within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/[0.08] border border-purple-500/[0.15] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Free Consultation</h4>
                    <p className="text-slate-500 text-sm">30-minute discovery call to scope your project.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/[0.08] border border-cyan-500/[0.15] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">NDA Available</h4>
                    <p className="text-slate-500 text-sm">Your ideas are safe. NDAs available on request.</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Form */}
          <RevealOnScroll delay={0.15}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="floating-input-group">
                  <input type="text" name="name" id="contact-name" value={form.name} required placeholder=" " className="floating-input" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <label htmlFor="contact-name" className="floating-label">Full Name</label>
                </div>
                <div className="floating-input-group">
                  <input type="email" name="email" id="contact-email" value={form.email} required placeholder=" " className="floating-input" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <label htmlFor="contact-email" className="floating-label">Business Email</label>
                </div>
                <div className="floating-input-group">
                  <textarea name="message" id="contact-message" rows={5} value={form.message} required placeholder=" " className="floating-input resize-none" onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  <label htmlFor="contact-message" className="floating-label">Project Details</label>
                </div>
                <button type="submit" disabled={status === "sending"} className="w-full btn-primary py-4 text-sm font-bold rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider">
                  <span className="flex items-center justify-center gap-2">
                    {status === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Schedule a Free Call
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div ref={toastRef} className={`toast ${status === "success" ? "toast-success" : status === "error" ? "toast-error" : ""}`} style={{ opacity: 0 }}>
        {status === "success" && "✓ Inquiry sent. I'll be in touch shortly!"}
        {status === "error" && "✕ Something went wrong. Please try again."}
      </div>
    </section>
  );
}

export default Contact;
