import RevealOnScroll from "../RevealOnScroll";


function About() {
  const frontendSkills = ["HTML", "TailwindCSS", "JavaScript", "React"];

  const backendSkills = ["Node.js", "AWS", "MongoDB", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8  text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>

              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>

              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
            <ul className="space-y-6 text-gray-300">
              <li>
                <div className="font-semibold text-white">Full-Stack Web Development (MERN Stack)</div>
                <div className="text-sm text-gray-400 mb-1">Geekster | 2024 – 2025</div>
                <p className="text-sm">
                  Completed hands-on training in modern web technologies with a
                  focus on building full-stack applications using HTML,
                  Tailwind CSS, JavaScript, React, and Node.js.
                </p>
              </li>
              <li>
                <div className="font-semibold text-white">Bachelor of Pharmacy</div>
                <div className="text-sm text-gray-400 mb-1">Apollo College, Ahmedabad | 2018 – 2022</div>
                <p className="text-sm">
                  Built a strong foundation in analytical thinking and
                  problem-solving through pharmaceutical studies.
                </p>
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="text-sm"><strong className="text-white">Relevant Coursework:</strong> Data Structures, Web Development, Cloud Computing...</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white">
                  Full-Stack Web Development Trainee
                </h4>
                <div className="text-sm text-gray-400 mb-2">Geekster | 2024 – 2025</div>
                <p className="text-sm">
                  Built and deployed real-world web applications using the MERN stack. Gained hands-on experience with frontend and backend development, API integration, and responsive UI design. Collaborated on projects following industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
