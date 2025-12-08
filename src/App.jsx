import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function App() {
  const projects = [
    { id: 1, title: "Microservices App", subtitle: "Architecture + Services", thumbnail: "/images/MS-ecommerce.png" },
    { id: 2, title: "Minimal To-Do", subtitle: "React + Tailwind", thumbnail: "/images/to-do.jpg" },
    { id: 3, title: "Blog App", subtitle: "Python + AI features", thumbnail: "/images/blog.png" },
    { id: 4, title: "Minimal Boxing Coach", subtitle: "Practice Boxing", thumbnail: "/images/boxing.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">


      {/* NAV */}
      <div className="relative z-10">
        <header className="py-6 border-b border-slate-800 backdrop-blur-sm bg-black/10">


          <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
            <h1 className="font-semibold text-lg">Ash</h1>
            <nav className="flex gap-6 text-sm text-slate-400">

              <a href="#hero" className="hover:text-primary">Home</a>
              <a href="#projects" className="hover:text-primary">Projects</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
              <a href="#about" className="hover:text-primary">About</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">

          {/* HERO */}
          <section id="hero" className="relative py-28 md:py-40 overflow-hidden">

            {/* BACKGROUND stays the same */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

              {/* DRIFTING CODE BLOCK */}
              <motion.pre
                animate={{
                  y: [0, -120, 0, 120, 0], // bounce up → down → up
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[8%] top-0
                 text-purple-300/15 text-3xl md:text-5xl font-mono 
                 blur-[1px] pointer-events-none select-none"
                style={{ whiteSpace: "pre" }}
              >
                {`root.setup({ stability: true });\n`}
                {`xperiments.push({ ai: true, fearless: true });`}
              </motion.pre>

            </div>



            {/* GRID: 65% LEFT / 35% RIGHT */}
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[65%_35%] gap-12 items-center">

              {/* LEFT (65%) — main heading + subtext + CTA */}
              <div className="text-center md:text-left relative z-10">

                {/* MAIN HEADING */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-3"
                >
                  Solid roots. Fearless experiments.

                  {/* 🚀 ROCKET NEXT TO HEADLINE */}
                  <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block opacity-90"
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 60 60"
                      fill="none"
                      stroke="rgba(255,255,255,0.45)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Rocket body */}
                      <path d="M30 4 C22 12 20 22 20 30 a10 10 0 0 0 20 0 C40 22 38 12 30 4 Z" />

                      {/* Window */}
                      <circle cx="30" cy="22" r="4" fill="rgba(255,255,255,0.2)" />

                      {/* Fins */}
                      <path d="M20 32 L14 38 L22 36" />
                      <path d="M40 32 L46 38 L38 36" />

                      {/* 🔥 FLICKERING FLAME */}
                      <motion.path
                        d="M27 40 Q30 48 33 40"
                        stroke="rgba(255,140,0,1)"
                        strokeWidth="2"
                        animate={{
                          scaleY: [1, 1.3, 0.8, 1.2, 1],
                          opacity: [0.8, 1, 0.6, 1, 0.9],
                        }}
                        transition={{
                          duration: 0.25,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ transformOrigin: "center bottom" }}
                      />
                    </svg>
                  </motion.div>

                </motion.h2>

                {/* SUBTEXT */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-4 text-slate-300 text-lg md:text-xl max-w-xl"
                >
                  A stable core, experimenting at the edges with AI, creativity, and minimal design.
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mt-10"
                >
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-80"
                  >
                    View Projects
                  </a>
                </motion.div>

              </div>



              {/* RIGHT (35%) — photo + name + line */}
              <div className="flex flex-col items-center md:items-start gap-6 relative z-10">

                {/* PHOTO */}
                <img
                  src="/images/Aashish-photo.jpg"
                  alt="Aashish K Shenoy"
                  className="w-32 h-44 md:w-56 md:h-64 object-cover rounded-[2.5rem] 
                   shadow-[0_0_30px_rgba(0,0,0,0.35)] opacity-95"
                />

                {/* NAME + LINE */}
                <div className="text-center md:text-left">
                  <p className="text-slate-300 text-lg font-semibold">
                    Aashish K Shenoy
                  </p>
                  <p className="text-slate-400 text-sm md:text-base tracking-wide mt-1">
                    Root Xperiments
                  </p>
                  <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xs">
                    Rooted in stability. Driven by curiosity. Built with intention.
                  </p>
                </div>

              </div>

            </div>

          </section>

          <section id="about" className="py-24 md:py-32 border-t border-slate-800">
  <div className="max-w-4xl mx-auto px-6 text-center md:text-left">

    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-semibold text-white"
    >
      About Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl"
    >
      I enjoy building minimal, intentional tools that solve real problems without unnecessary noise. 
      Root Xperiments is my personal playground — a space where clarity meets curiosity, 
      and where ideas evolve into systems with purpose.
    </motion.p>

  </div>
</section>



          <section id="tech" className="py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">

              {/* TYPING EFFECT TITLE */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                onViewportEnter={() => {
                  const el = document.getElementById("tech-title");
                  el.classList.add("typing-animate");
                }}
                id="tech-title"
                className="
    text-slate-300 text-sm md:text-base uppercase tracking-widest mb-8
    mx-auto overflow-hidden whitespace-nowrap border-r-2 border-slate-400
    w-[8.5rem]  /* matches animation width */
    font-normal  /* 🔥 matches the rest of the site */
  "
              >
                Tech Stack
              </motion.p>



              {/* ICON ROW */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                <img src="/tech/react.svg" className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition" />
                <img src="/tech/node.svg" className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition" />
                <img src="/tech/python.svg" className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition" />
                <img src="/tech/java.svg" className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition" />
                <img src="/tech/docker.svg" className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition" />
                <img src="/tech/spring.svg" className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition" />
                <img src="/tech/mysql.svg" className="w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition" />
              </motion.div>

            </div>
          </section>


<section id="skills" className="py-24 md:py-32 border-t border-slate-800">
  <div className="max-w-6xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-semibold text-white text-center"
    >
      Skills & Capabilities
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10 mt-12">

      <div className="bg-[#141415] p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold text-xl">System Design</h3>
        <p className="text-slate-400 mt-3 text-sm">
          Designing modular architectures, microservices, scaling patterns, and clarity-focused backend systems.
        </p>
      </div>

      <div className="bg-[#141415] p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold text-xl">Frontend & UI</h3>
        <p className="text-slate-400 mt-3 text-sm">
          Clean, minimal interfaces with React, Tailwind, and thoughtful user experience.
        </p>
      </div>

      <div className="bg-[#141415] p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold text-xl">AI & Automation</h3>
        <p className="text-slate-400 mt-3 text-sm">
          Integrating AI features, automation workflows, summaries, tagging, and intelligent tooling.
        </p>
      </div>

    </div>

  </div>
</section>
<section id="services" className="py-24 md:py-32 border-t border-slate-800">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-semibold text-white"
    >
      What I Do
    </motion.h2>

    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
      I help design, build, and refine digital experiences through clarity, structure, and experimentation.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-12">

      <div className="bg-[#141415] p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold text-xl">Full-Stack Development</h3>
        <p className="text-slate-400 mt-3 text-sm">
          End-to-end apps with clean architecture, scalable APIs, and minimal design.
        </p>
      </div>

      <div className="bg-[#141415] p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold text-xl">System Architecture</h3>
        <p className="text-slate-400 mt-3 text-sm">
          Breaking down complexity into maintainable, modular, purposeful systems.
        </p>
      </div>

      <div className="bg-[#141415] p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold text-xl">AI-Driven Features</h3>
        <p className="text-slate-400 mt-3 text-sm">
          Summaries, recommendations, tagging, workflow automation — intelligent, practical additions to products.
        </p>
      </div>

    </div>

  </div>
</section>
<section id="process" className="py-24 md:py-32 border-t border-slate-800">
  <div className="max-w-5xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-semibold text-white text-center"
    >
      How I Think
    </motion.h2>

    <div className="mt-12 space-y-10 text-slate-300 text-lg max-w-3xl mx-auto">

      <p>
        <span className="text-white font-semibold">Root →</span>  
        Stability, clarity, foundation. Building systems that last.
      </p>

      <p>
        <span className="text-white font-semibold">Experiment →</span>  
        Curiosity, iteration, creativity. Exploring ideas without fear.
      </p>

      <p>
        <span className="text-white font-semibold">Minimal →</span>  
        Reducing noise. Keeping intention and cutting excess.
      </p>

      <p>
        <span className="text-white font-semibold">Autonomous →</span>  
        Making tools that work quietly, reliably, and independently.
      </p>

    </div>

  </div>
</section>





          <section id="projects" className="py-28 max-w-7xl mx-auto px-6">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold text-white mb-12 tracking-tight"
            >
              Projects
            </motion.h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {projects.map((p, index) => (

                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden bg-[#141415] shadow-[0px_0px_15px_rgba(0,0,0,0.4)] 
                       hover:shadow-[0px_0px_25px_rgba(227,52,47,0.25)] 
                       hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {p.title}
                    </h3>

                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {p.subtitle}
                    </p>

                    {/* Optional tags */}
                    {/* 
              <div className="flex gap-2 mt-3 flex-wrap">
                {p.tags?.map(tag => (
                  <span key={tag} className="text-[11px] px-2 py-1 rounded bg-[#1c1c1e] text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              */}
                  </div>
                </motion.div>

              ))}
            </div>
          </section>

          

          {/* EXPERIENCE / TIMELINE */}
          <section id="experience" className="py-24 md:py-32 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6">

              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white"
              >
                Experience & Timeline
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-3 md:mt-4 text-slate-400 max-w-2xl"
              >
                A snapshot of my journey — learning, building, simplifying, and finding clarity in my work.
              </motion.p>

              {/* TIMELINE */}
              <div className="mt-12 relative border-l border-slate-800 pl-6 space-y-12">

                {/* Item 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[13px] w-3.5 h-3.5 bg-primary rounded-full"></div>
                  <h4 className="text-white font-semibold">Started Root Xperiments</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Built a personal philosophy around simplicity, autonomy, and minimal design.
                  </p>
                </motion.div>

                {/* Item 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[13px] w-3.5 h-3.5 bg-primary rounded-full"></div>
                  <h4 className="text-white font-semibold">Developed Microservices Architecture</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Designed system boundaries, messaging patterns, and scalable components.
                  </p>
                </motion.div>

                {/* Item 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[13px] w-3.5 h-3.5 bg-primary rounded-full"></div>
                  <h4 className="text-white font-semibold">Built High-Intent Tools</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Todo App, Blog with AI summaries, LFC Fan App, Ghost themes — minimal and functional.
                  </p>
                </motion.div>

              </div>

              {/* RESUME BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <a
                  href="/resume.pdf"   // <-- change this to your real resume path
                  target="_blank"
                  className="inline-block px-5 py-2.5 bg-primary text-white rounded-lg hover:opacity-90"
                >
                  Download Resume
                </a>
              </motion.div>

            </div>
          </section>




          {/* CONTACT */}
          <section id="contact" className="py-24 md:py-32 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Contact</h3>
              <p className="mt-3 md:mt-4 text-slate-400">Feel free to reach out.</p>

              <div className="mt-4">
                <a
                  href="mailto:ash@example.com"
                  className="underline text-primary"
                >
                  ash@example.com
                </a>
              </div>
            </div>
          </section>


        </main>

        <footer className="py-10 border-t border-slate-800 text-center text-sm text-slate-500">
          <div className="flex justify-center gap-6 mb-4">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-slate-400 hover:text-primary text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-slate-400 hover:text-primary text-xl"
            >
              <FaLinkedin />
            </a>

          </div>

          © {new Date().getFullYear()} Ash — Root Xperiments
        </footer>

      </div>
    </div>
  );
}
