import ReviewOnScroll from "../ReviewOnScroll";


function About() {
  const frontendSkills = ["HTML", "TailwindCSS", "JavaScript", "React"];

  const backendSkills = ["NodeJs", "AWS", "MongoDB", "Sql"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
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
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>
                  Bachelor of Pharmacy Apollo College, Ahmedabad | 2018 – 2022{" "}
                  <br />
                  <br />
                  Built a strong foundation in analytical thinking and
                  problem-solving through pharmaceutical studies.
                </strong>
              </li>

              <li>
                <strong>
                  <br />
                  Full-Stack Web Development (MERN Stack) Geekster | 2024 – 2025
                  <br />
                  Completed hands-on training in modern web technologies with a
                  focus on building full-stack applications using HTML,
                  TailwindCSS, JavaScript, React, and Node.js.
                </strong>
              </li>

              <li>
                Relevent Coursework: Data Structures, Web Development, Cloud
                Computing...
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Full-Stack Web Development Trainee Geekster | 2024 – 2025
                </h4>
                <p>
                  <br />
                  Built and deployed real-world web applications using the MERN stack. Gained hands-on experience with frontend and backend development, API integration, and responsive UI design. Collaborated on projects following industry best practices.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ReviewOnScroll>
    </section>
  );
}

export default About;
