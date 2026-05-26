import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import RevealOnScroll from "../RevealOnScroll";
import MagneticButton from "../MagneticButton";
import { socialLinks } from "../../data/socialLinks";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error, fallback
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(form.current);
    const message = formData.get("message");

    if (message.length < 20) {
      setErrorMsg("Please provide a bit more detail (minimum 20 characters).");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("fallback");
      return; // Stop execution if EmailJS is missing
    }

    setStatus("loading");

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setErrorMsg("Something went wrong. Please try emailing me directly.");
        }
      );
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case "github": return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>;
      case "linkedin": return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
      case "mail": return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Copy */}
          <div>
            <RevealOnScroll animation="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Have a project, collaboration, or opportunity in mind?
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll animation="fade-up" delay={0.2}>
              <p className="text-lg text-slate-400 mb-8 max-w-lg">
                Send me the details and I’ll get back with a clear next step. You can also reach out for a quick website review.
              </p>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={0.3}>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold text-slate-300 uppercase tracking-widest">Connect Directly</span>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors bg-white/[0.03] border border-white/[0.05] rounded-full px-4 py-2"
                    >
                      {getIcon(link.icon)}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Form */}
          <div>
            <RevealOnScroll animation="fade-in" delay={0.4}>
              <div className="bg-white/[0.02] border border-white/[0.05] p-6 sm:p-8 rounded-3xl">
                {status === "fallback" ? (
                  <div className="text-center py-12">
                    <svg className="w-12 h-12 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <h3 className="text-xl font-bold text-white mb-2">Email setup is not connected yet.</h3>
                    <p className="text-slate-400 mb-6">Please contact me directly using the email link.</p>
                    {/* TODO: Configure EmailJS environment variables in Vercel */}
                    <a href={socialLinks.find(l => l.name === "Email")?.url} className="btn-primary inline-flex">Send Direct Email</a>
                  </div>
                ) : status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 mb-8">I'll get back to you shortly with a clear next step.</p>
                    <button onClick={() => setStatus("idle")} className="text-sm text-blue-400 hover:text-blue-300">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="user_name" className="text-sm font-medium text-slate-300">Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          required
                          className="bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="user_email" className="text-sm font-medium text-slate-300">Email <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          name="user_email"
                          id="user_email"
                          required
                          className="bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="project_type" className="text-sm font-medium text-slate-300">Project Type</label>
                        <select
                          name="project_type"
                          id="project_type"
                          className="bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="New Website" className="bg-slate-900">New Website</option>
                          <option value="Portfolio / Landing Page" className="bg-slate-900">Portfolio / Landing Page</option>
                          <option value="Web App Interface" className="bg-slate-900">Web App Interface</option>
                          <option value="Existing Website Improvement" className="bg-slate-900">Existing Website Improvement</option>
                          <option value="Collaboration / Opportunity" className="bg-slate-900">Collaboration / Opportunity</option>
                        </select>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-sm font-medium text-slate-300">Budget Range <span className="text-slate-600 font-normal">(Optional)</span></label>
                        <select
                          name="budget"
                          id="budget"
                          className="bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Not sure yet" className="bg-slate-900">Not sure yet</option>
                          <option value="Small project" className="bg-slate-900">Small project</option>
                          <option value="Medium project" className="bg-slate-900">Medium project</option>
                          <option value="Let's discuss" className="bg-slate-900">Let's discuss</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">Message <span className="text-red-500">*</span></label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="5"
                        className="bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      ></textarea>
                    </div>

                    {errorMsg && (
                      <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-2 rounded-lg">
                        {errorMsg}
                      </p>
                    )}

                    <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-slate-500">
                        Share a few details — I’ll respond with a practical next step.
                      </span>
                      
                      <MagneticButton strength={0.1}>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="btn-primary w-full sm:w-auto min-w-[160px] flex justify-center items-center gap-2"
                        >
                          {status === "loading" ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            "Start a Conversation"
                          )}
                        </button>
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
