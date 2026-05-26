import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText";
import RevealOnScroll from "../RevealOnScroll";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
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
    setErrorMsg("");

    if (form.message.length < 20) {
      setErrorMsg("Please provide a little more detail (minimum 20 characters).");
      return;
    }

    setStatus("sending");
    
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || "default_service", 
        import.meta.env.VITE_TEMPLATE_ID || "default_template", 
        formRef.current, 
        import.meta.env.VITE_PUBLIC_KEY || "default_key"
      )
      .then(() => { 
        showToast("success"); 
        setForm({ name: "", email: "", message: "" }); 
      })
      .catch(() => { 
        showToast("error"); 
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-32 relative z-10 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="inline-flex items-center gap-3 font-mono text-sm font-medium text-accent-blue tracking-widest uppercase mb-5">
          <span className="text-accent-warm font-bold">05</span>
          <span className="w-10 h-px bg-accent-blue/40" />
          <span>Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Left: Copy */}
          <div>
            <AnimatedText
              text="Have a project, collaboration, or opportunity in mind?"
              element="h2"
              animation="fadeUp"
              type="words"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            />
            <RevealOnScroll>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                Send me the details and I'll get back to you with a clear next step. Open to selected freelance projects and full-stack opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/[0.08] border border-blue-500/[0.15] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                    <a href="mailto:justin1045@example.com" className="text-slate-400 hover:text-white transition-colors text-sm">justin1045@example.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/[0.08] border border-purple-500/[0.15] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/chiragtank-developer" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">chiragtank-developer</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/[0.08] border border-cyan-500/[0.15] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">GitHub</h4>
                    <a href="https://github.com/justin1045" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">justin1045</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500/[0.08] border border-green-500/[0.15] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">WhatsApp</h4>
                    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">Message Me</a>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Form */}
          <RevealOnScroll delay={0.15}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input type="text" name="name" id="contact-name" value={form.name} required placeholder=" " className="w-full box-border px-4 pt-[1.125rem] pb-[0.625rem] text-base text-white bg-white/[0.03] border border-border-default rounded-[10px] outline-none transition-[border-color,box-shadow] duration-300 focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] focus:bg-white/[0.04] peer" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <label htmlFor="contact-name" className="absolute left-4 top-1/2 -translate-y-1/2 text-[0.9375rem] text-text-muted pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-accent-blue peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-accent-blue">Full Name</label>
                </div>
                <div className="relative">
                  <input type="email" name="email" id="contact-email" value={form.email} required placeholder=" " className="w-full box-border px-4 pt-[1.125rem] pb-[0.625rem] text-base text-white bg-white/[0.03] border border-border-default rounded-[10px] outline-none transition-[border-color,box-shadow] duration-300 focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] focus:bg-white/[0.04] peer" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <label htmlFor="contact-email" className="absolute left-4 top-1/2 -translate-y-1/2 text-[0.9375rem] text-text-muted pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-accent-blue peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-accent-blue">Email Address</label>
                </div>
                <div className="relative">
                  <textarea name="message" id="contact-message" rows={5} value={form.message} required minLength={20} placeholder=" " className="w-full box-border px-4 pt-[1.125rem] pb-[0.625rem] text-base text-white bg-white/[0.03] border border-border-default rounded-[10px] outline-none transition-[border-color,box-shadow] duration-300 focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] focus:bg-white/[0.04] peer resize-none" onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrorMsg(""); }} />
                  <label htmlFor="contact-message" className="absolute left-4 top-4 text-[0.9375rem] text-text-muted pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] peer-focus:top-1 peer-focus:text-[0.7rem] peer-focus:text-accent-blue peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-accent-blue">Project Details (min 20 chars)</label>
                </div>
                
                {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}

                <button type="submit" disabled={status === "sending"} className="w-full btn-primary py-4 text-sm font-bold rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider transition-all">
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
                        Send Message
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
