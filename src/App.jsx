import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroLogo from "./components/HeroLogo.jsx";
import TechItem from "./components/TechItem.jsx";



export default function App() {
  const projects = [
    { id: 1, title: "Microservices App", subtitle: "Architecture + Services", thumbnail: "/images/MS-ecommerce.png" },
    { id: 2, title: "Minimal To-Do", subtitle: "React + Tailwind", thumbnail: "/images/to-do.jpg" },
    { id: 3, title: "Blog App", subtitle: "Python + AI features", thumbnail: "/images/blog.png" },
    { id: 4, title: "Minimal Boxing Coach", subtitle: "Practice Boxing", thumbnail: "/images/boxing.jpg" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">


      {/* NAV */}
      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* LOGO – tiny rX mark only on mobile, full text on desktop */}
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src="images/rx.jpg"       // ← use your clean black rX (40×40px version)
                alt="Root Xperiments"
                className="w-9 h-9 opacity-90 group-hover:opacity-100 transition"
              />
              <span className="hidden md:block text-white font-medium tracking-wide text-lg">
                Root Xperiments
              </span>
            </a>

            {/* DESKTOP NAV – clean, minimal, red accent on hover/active */}
            <nav className="hidden md:flex items-center gap-10 text-slate-400 font-medium">
              {[
                { href: "#about", label: "About" },
                { href: "#tech", label: "Tech" },
                { href: "#principles", label: "Principles" },   // ← updated
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Proof" },        // ← renamed to match new section
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* MOBILE MENU – full bleed, slides down */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden fixed inset-x-0 top-16 bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-slate-800"
              >
                <div className="px-6 py-8 space-y-6 text-center text-lg font-medium">
                  {["About", "Tech", "Principles", "Projects", "Proof", "Contact"].map((label) => (
                    <a
                      key={label}
                      href={`#${label.toLowerCase() === "proof" ? "experience" : label.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className="block text-slate-300 hover:text-white transition"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        <main className="flex-1">

          {/* HERO */}
          <section id="hero" className="relative py-28 md:py-40 lg:py-52 overflow-hidden bg-[#0a0a1f]">

            {/* Ultra-faint scrolling code texture – only on the left half */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <motion.pre
                initial={{ y: "20%" }}
                animate={{ y: ["-20%", "120%", "-20%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 md:left-[5%] top-64 text-purple-400/5 
                 text-7xl md:text-8xl lg:text-[160px] font-mono leading-none blur-sm select-none"
              >
                {`root.setup({ stability: true });
xperiments.push({ ai: true, fearless: true });`}
              </motion.pre>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

                {/* LEFT – Text side */}
                <div className="flex flex-col justify-center space-y-10 lg:space-y-12 max-w-xl lg:max-w-2xl">

                  {/* Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none">
                      Solid roots.<br />
                      <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        Fearless experiments.
                      </span>
                    </h1>
                  </motion.div>

                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide"
                  >
                    A stable core, experimenting at the edges with AI, creativity, and minimal design.
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a href="#projects" className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-lg font-medium text-center">
                      View Projects →
                    </a>
                    <a href="#latest" className="px-8 py-4 border border-slate-600 text-white rounded-lg hover:bg-white/10 transition text-lg font-medium text-center">
                      Latest Experiment →
                    </a>
                  </motion.div>

                </div>

                {/* RIGHT – Massive rX mark + identity below */}
<div className="
  flex flex-col items-center justify-center 
  w-full
  lg:items-end lg:justify-end 
  lg:translate-y-[-40px] 
  pr-0 lg:pr-8
">
                  {/* rX logo */}
                  <HeroLogo />

                  {/* Identity below logo */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-3 lg:mt-6 text-center max-w-md"
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-slate-300">
                      <span className="identity-typing font-mono font-medium">
                        ROOT XPERIMENTS — A MINIMAL SYSTEMS + AI LAB
                      </span>
                    </p>
                  </motion.div>

                </div>

              </div>
            </div>
          </section>




          <section id="about" className="py-24 md:py-32 lg:py-40 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT – Text */}
                <div className="space-y-8 lg:space-y-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                  >
                    I build things that<br />
                    <span className="text-red-500">just work</span> —<br />
                    then push them until they spark.
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-lg md:text-xl text-slate-300 space-y-5 leading-relaxed"
                  >
                    <p>
                      Root Xperiments is where rock-solid systems meet fearless experimentation.
                      Minimal interfaces, bulletproof architecture, and occasional AI-powered madness.
                    </p>
                    <p>
                      If you value clarity over flash, performance over bloat, and ideas that actually ship —
                      we’ll probably get along.
                    </p>
                  </motion.div>
                </div>

                {/* RIGHT – Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                  className="relative group"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-xl border border-slate-800 shadow-2xl">
                    <img
                      src="/images/me.jpg"               // ← put your photo here
                      alt="Root Xperiments"
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Subtle rX watermark */}
                  <div className="absolute bottom-5 right-5 text-white/8 text-7xl font-black pointer-events-none select-none">
                    rX
                  </div>

                  {/* Optional extra glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.15), transparent 60%)",
                    }}
                  />
                </motion.div>

              </div>
            </div>
          </section>



         <section id="tech" className="py-24 md:py-32 lg:py-40 border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-6">
    
    <motion.div className="text-center mb-16 lg:mb-24" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">Real-world stack</h2>
      <p className="mt-4 text-slate-400 text-lg md:text-xl">Production-grade tools I actually use</p>
    </motion.div>

    <div className="space-y-16 lg:space-y-20">

      {/* Frontend */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl text-slate-500 mb-8">Frontend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-14 justify-center">
          {["React", "TypeScript", "TailwindCSS", "Angular"].map((n, i) => <TechItem key={n} name={n} delay={i*0.08} />)}
        </div>
      </div>

      {/* Backend & Distributed Systems */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl text-slate-500 mb-8">Backend & Distributed Systems</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-10 md:gap-14 justify-center">
          {["Java", "Spring Boot", "Spring Cloud", "Microservices", "Kafka", "Redis"].map((n, i) => <TechItem key={n} name={n} delay={i*0.07} />)}
        </div>
      </div>

      {/* Python & AI */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl text-slate-500 mb-8">Python & AI</h3>
        <div className="grid grid-cols-3 gap-10 md:gap-14 justify-center">
          {["Python", "Claude"].map((n, i) => <TechItem key={n} name={n} delay={i*0.08} />)}
        </div>
      </div>

      {/* Databases */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl text-slate-500 mb-8">Databases</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-10 md:gap-14 justify-center">
          {["PostgreSQL", "MySQL", "MongoDB", "Oracle DB"].map((n, i) => <TechItem key={n} name={n} delay={i*0.08} />)}
        </div>
      </div>

      {/* DevOps */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl text-slate-500 mb-8">DevOps</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-10 md:gap-14 justify-center">
          {["Docker", "Kubernetes", "CI/CD", "AWS"].map((n, i) => <TechItem key={n} name={n} delay={i*0.08} />)}
        </div>
      </div>

    </div>
  </div>
</section>






          <section id="principles" className="py-32 md:py-40 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-20"
              >
                How I work
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 text-lg md:text-xl">
                {[
                  { term: "Root", desc: "Stability, clarity, foundation. Systems that last and scale." },
                  { term: "Experiment", desc: "Curiosity, iteration, fearless creativity. Pushing what’s possible." },
                  { term: "Minimal", desc: "Cut the noise. Every line of code and pixel has purpose." },
                  { term: "Autonomous", desc: "Tools that run themselves — reliable, quiet, independent." },
                ].map((item, i) => (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="group"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      <span className="text-red-500">{item.term}</span> →
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>





          <section id="projects" className="py-32 md:py-40">
            <div className="max-w-7xl mx-auto px-6">

              {/* Heading – bigger, punchier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 lg:mb-24"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Selected work
                </h2>
                <p className="mt-4 text-slate-400 text-lg md:text-xl">
                  Real systems. Real impact. No filler.
                </p>
              </motion.div>

              {/* Grid – 1–3 columns, bigger cards, better spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {projects.map((p, i) => (
                  <motion.a
                    href={p.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={p.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.7 }}
                    className="group block rounded-2xl overflow-hidden bg-[#0f0f10] border border-slate-800 
                     shadow-xl hover:shadow-2xl hover:shadow-red-500/10
                     hover:border-red-500/20 hover:-translate-y-2 
                     transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Subtle overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-slate-400 text-base leading-relaxed">
                        {p.subtitle}
                      </p>

                      {/* Tech tags – tiny, elegant */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {p.tags?.slice(0, 4).map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                        {p.tags?.length > 4 && (
                          <span className="text-xs text-slate-500">+{p.tags.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Optional CTA at the bottom */}
              <div className="text-center mt-20">
                <a
                  href="/all-projects"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                  See all projects →
                </a>
              </div>
            </div>
          </section>



          <section id="experience" className="py-32 md:py-40 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6">

              {/* Punchy heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  I’ve shipped
                </h2>
              </motion.div>

              {/* Three-column proof grid – no timeline, just impact */}
              <div className="grid md:grid-cols-3 gap-10 lg:gap-16">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
                    6+
                  </div>
                  <p className="text-xl text-white">Production<br />microservices</p>
                  <p className="text-slate-400 mt-3">Spring Boot · Kafka · Docker</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
                    40+
                  </div>
                  <p className="text-xl text-white">Tools & apps<br />built solo</p>
                  <p className="text-slate-400 mt-3">From AI summarizers to full-stack platforms</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
                    8+ yrs
                  </div>
                  <p className="text-xl text-white">Building systems<br />that last</p>
                  <p className="text-slate-400 mt-3">Clean architecture · minimal design · zero fluff</p>
                </motion.div>
              </div>

              {/* Optional resume CTA – small and subtle */}
              <div className="text-center mt-20">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition text-sm uppercase tracking-wider"
                >
                  Full resume →
                </a>
              </div>

            </div>
          </section>




          {/* CONTACT */}
          {/* CONTACT – now with a tiny bit of warmth and personality */}
          <section id="contact" className="py-32 md:py-40 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6 text-center">

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
              >
                Let’s build something
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-6 text-xl md:text-2xl text-slate-400"
              >
                Have a project, idea, or just want to talk systems and minimalism?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <a
                  href="mailto:ash@example.com"
                  className="inline-block text-2xl md:text-3xl font-medium text-red-500 hover:text-red-400 transition-colors"
                >
                  ash@example.com →
                </a>
              </motion.div>
            </div>
          </section>


        </main>

        {/* FOOTER – clean, tiny, confident */}
        <footer className="py-12 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">

            <div className="flex gap-8 mb-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-slate-500 hover:text-white transition">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" className="text-slate-500 hover:text-white transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              {/* Add more if you want – Twitter/X, etc. */}
            </div>

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Root Xperiments — Built with clarity and curiosity.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
