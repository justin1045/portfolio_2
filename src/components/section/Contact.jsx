import { useState, useRef } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      alert("Message Sent!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <ReviewOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Get In Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              required
              placeholder="Name..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              required
              placeholder="example@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              name="message"
              rows={7}
              value={form.message}
              required
              placeholder="Your Message..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </ReviewOnScroll>
    </section>
  );
}

export default Contact;
