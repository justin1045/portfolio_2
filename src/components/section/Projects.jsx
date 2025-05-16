import ReviewOnScroll from "../ReviewOnScroll";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Food Delivery App */}
          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Food Delivery App</h3>
            <p className="text-gray-400 mb-4">
              Built a responsive food delivery platform with menu browsing, order flow, and user authentication using Firebase. Integrated the Gemini API to suggest recipes based on user input, enhancing the user experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Firebase (Authentication & Database)"].map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="https://food-del-zeta-azure.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Project =&gt;
            </a>
          </div>

          {/* Expense Tracker */}
          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>
            <p className="text-gray-400 mb-4">
              A dynamic web app to manage personal finances with features like expense tracking, interactive charts (Chart.js), AI-powered financial advice (ChatGPT/Gemini), tax calculation, and secure payments via Razorpay.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "TailwindCSS", "JavaScript"].map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="https://expense-tracker-gilt-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Project =&gt;
            </a>
          </div>

          {/* GeeksterPok */}
          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">GeeksterPok – Pokémon Search & Filter App</h3>
            <p className="text-gray-400 mb-4">
              A fun and responsive web app that lets users search and filter Pokémon using the PokéAPI. Includes real-time data fetching, card flip animations, instant search, and type-based filtering.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "TailwindCSS", "JavaScript"].map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="https://pokemon-project-vert.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Project =&gt;
            </a>
          </div>

          {/* Infinite Scroll Gallery */}
          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Infinite Scrolling Image Gallery</h3>
            <p className="text-gray-400 mb-4">
              A dynamic image gallery that loads photos from the Unsplash API as the user scrolls, creating a seamless infinite scrolling experience with optimized performance and creative UI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JavaScript"].map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="https://infinite-scrolling-six-cyan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-block"
            >
              View Project =&gt;
            </a>
          </div>

        </div>
      </div>
      </ReviewOnScroll>
    </section>
  );
}

export default Projects;
