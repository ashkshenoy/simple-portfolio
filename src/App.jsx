import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroLogo from "./components/HeroLogo.jsx";
import TechIcon from "./components/TechItem.jsx";


import { i, link } from "framer-motion/client";




export default function App() {
  const [showLabModal, setShowLabModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const MOBILE_VISIBLE_COUNT = 8;
  const projects = [

    {
      id: "lab",
      title: "RootX E-commerce",
      subtitle: "Scalable e-commerce platform built on microservices — reliable, maintainable, and efficient.",
      thumbnail: "/images/MS-ecommerce.png",  // dark abstract or screenshot of your newest thing
      link: "https://github.com/ashkshenoy/root-x-microsercvices.git" , // or /lab if you ever make a collection
      tags: ["Java", "Spring Boot", "Docker", "React"], // ← add relevant tags

      isLatest: true   // ← we’ll use this to style it differently
    },
    { id: 2, title: "RootX To-Do", subtitle: "Minimal, persistent to-do — gets out of your way so you can focus.", thumbnail: "/images/minimal-todo.png", tags: ["React", "TailwindCSS"], link: "https://todo-app-five-alpha-22.vercel.app/" },
    { id: 3, title: "RootX Blog ", subtitle: "Personal blog platform with secure auth and AI-powered summarization + smart tagging for better discoverability.", thumbnail: "/images/blog.png", tags: ["React", "Java", "Spring Boot", "Python"], link: "https://github.com/ashkshenoy/react-blog-frontend.git" },
    { id: 4, title: "RootX Boxing Coach", subtitle: "Focused boxing timer — preset intensity rounds or custom sessions for effective solo training.", thumbnail: "/images/boxing.jpg", tags: ["React", "TailwindCSS"], link: "https://minimal-boxing-app.netlify.app/" },
    { id: 5, title: "RootX News Agent", subtitle: "Daily curated news delivered automatically to Telegram every morning — stay informed without the noise.", thumbnail: "/images/news-agent.png", tags: ["Telegram", "Python"], link: "https://github.com/ashkshenoy/news-agent.git" },
    { id: 6, title: "Portfolio", subtitle: "Aashish + RootX", thumbnail: "/images/portfolio.png", tags: ["React", "TailwindCSS", "Vercel", "FramerMotion"], link: "https://github.com/ashkshenoy/simple-portfolio.git" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Aashish K",
            url: "https://rootxperiments.com",
            jobTitle: "Software Engineer & Independent Developer",
            worksFor: {
              "@type": "Organization",
              name: "Root Xperiments"
            },
            description: "Aashish K runs Root Xperiments, an independent practice building minimal software, exploring systems design, AI experiments, and documenting ongoing work.",
            sameAs: [
              "https://github.com/ashkshenoy",
              "www.linkedin.com/in/aashishk-rootx",
              "aashishkshenoy.wordpress.com",
              "https://www.instagram.com/ashshenoyk/"
            ]
          })
        }}
      />
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

            {/* Ultra-faint scrolling code texture */}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT — HEADLINE + SUBTEXT */}
                <div className="order-1 lg:order-1 lg:col-start-1 lg:row-start-1 
                      flex flex-col justify-center space-y-10 lg:space-y-12 max-w-xl lg:max-w-2xl">

                  {/* Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none">
                      Solid roots.<br />
                      <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        Measured experiments.
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
                </div>

                {/* RIGHT — rX LOGO + IDENTITY */}
                <div className="order-2 lg:order-2 lg:col-start-2 lg:row-start-1 
                      flex flex-col items-center justify-center w-full lg:translate-y-[-40px]">

                  {/* rX logo */}
                  <HeroLogo />

                  {/* Identity line */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 lg:mt-6 text-center max-w-md"
                  >
                    <motion.p
                      className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-slate-300 font-mono"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: { staggerChildren: 0.04 }
                        }
                      }}
                    >
                      {"ROOT XPERIMENTS — A MINIMAL SYSTEMS + AI LAB".split("").map((char, index) => (
                        <motion.span
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: "0.25em" },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.04, ease: "easeOut" },
                            },
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.p>
                  </motion.div>
                </div>

                {/* CTA BUTTONS — CENTERED UNDER BOTH COLUMNS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="order-3 lg:order-3 col-span-1 lg:col-span-2 
                   flex justify-center mt-8"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#projects"
                      className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-lg font-medium text-center"
                    >
                      View Projects →
                    </a>

                    <a
                      href="#latest-experiment"
                      className="px-8 py-4 border border-slate-600 text-white rounded-lg hover:bg-white/10 transition text-lg font-medium text-center"
                    >
                      Latest Experiment →
                    </a>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>





          <section id="about" className="py-24 md:py-32 lg:py-40 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

                {/* LEFT – Text */}
                <div className="order-2 md:order-1 space-y-8 lg:space-y-10">

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-lg md:text-xl text-slate-300 space-y-5 leading-relaxed "
                  >
                    <p>
                      Root Xperiments is where I, Aashish K, bring solid engineering together with thoughtful experimentation.
                      Clean interfaces, reliable architecture, and the occasional well-placed use of AI.
                    </p>

                    <p>
                      With over 6 years of experience across multiple teams and products, I focus on building systems that stay stable,
                      evolve cleanly, and support real work without getting in the way.
                    </p>

                    <p>
                      Clarity over noise, performance over bloat, and work that actually ships.
                      If you're building something that needs to last, scale cleanly, and deliver real value without unnecessary complexity — let's talk.
                    </p>

                    {/* Resume Button */}
                    <div className="pt-4">
                      <a
                        href="/Aashish_Resume.pdf"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition text-base md:text-lg"
                      >
                        <span className="text-white/90">📄</span>
                        <span>View Resume</span>
                      </a>
                    </div>
                  </motion.div>

                </div>


                {/* RIGHT – Photo */}
                {/* RIGHT – Photo on mobile, right column on desktop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                  className="order-1 md:order-2 relative group flex justify-center md:justify-end"
                >
                  <div className="
    aspect-[4/5]
    max-w-[360px] sm:max-w-[380px] lg:max-w-[420px]
    overflow-hidden 
    rounded-xl 
    border border-slate-800 
    shadow-2xl 
  ">
                    <img
                      src="/images/me.jpg"
                      alt="Aashish K — Software Engineer behind Root Xperiments"
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                    />
                  </div>
                </motion.div>


              </div>
            </div>
          </section>



          {/* TECH STACK — now tiny, elegant, and perfectly balanced */}
          {/* TECH STACK — tiny, elegant, single-row, perfect */}
          <section id="tech" className="py-20 md:py-28 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6 text-center">

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-20"
              >
                Real-world stack
              </motion.h2>

              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-12 flex flex-wrap justify-center gap-8 md:gap-10"
>
  {[
    "React", "JavaScript", "PostgreSQL", "Angular",
    "Java", "Spring Boot", "Python", "Kafka",
    "Spring", "Claude", "TailwindCSS",
    "MongoDB", "OracleDB", "TypeScript",
    "Docker", "Netlify", "Railway", "Vercel", "AWS", "Github"
  ]
    .slice(0, showAll ? undefined : MOBILE_VISIBLE_COUNT)
    .map((name, i) => (
      <TechIcon key={name} name={name} delay={i * 0.05} />
    ))}
</motion.div>
{/* Load all button — mobile only */}
<div className="mt-10 ">
  {!showAll && (
    <button
      onClick={() => setShowAll(true)}
      className="text-slate-300 text-sm tracking-wide hover:text-white transition"
    >
      Load all →
    </button>
  )}
</div>


            </div>
          </section>






          <section id="principles" className="py-32 md:py-40 border-t border-b border-slate-800">
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
                  Selected builds
                </h2>
                <p className="mt-4 text-slate-400 text-lg md:text-xl">
                  Practice and personal projects exploring real-world use cases.
                </p>
              </motion.div>

              {/* Grid – 1–3 columns, bigger cards, better spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {projects.map((p, i) => (
                  <motion.a

                    id={p.isLatest ? "latest-experiment" : undefined}
                    href={p.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={p.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.7 }}
                    className={`group relative rounded-2xl overflow-hidden bg-[#0f0f10] border transition-all duration-500
                      ${p.isLatest
                        ? "border-red-500/50 shadow-2xl shadow-red-500/20 hover:border-red-500/70"
                        : "border-slate-800 hover:border-red-500/20"
                      }`}
                    onClick={(e) => {
                      if (p.id === "lab") {
                        e.preventDefault();
                        setShowLabModal(true);
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Latest Experiment badge — only on the special card */}
                    {p.isLatest && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-red-500/20 text-red-400 text-xs font-medium rounded-full border border-red-500/50 backdrop-blur-sm">
                          Latest Ongoing Experiment
                        </span>
                      </div>
                    )}

                    {/* Thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
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

                      {/* Tags */}
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


            </div>
          </section>




          <section id="experience" className="py-32 md:py-40 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Track record 
                </h2>
              </motion.div>

              {/* 4-column proof grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                {/* 1 — Years + companies */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
                    6+ yrs
                  </div>
                  <p className="text-xl text-white">Building across 2+ companies</p>
                  <p className="text-slate-400 mt-3">
                    Stable delivery · ownership · long-term systems
                  </p>
                </motion.div>

                {/* 2 — Projects shipped */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
                    5+
                  </div>
                  <p className="text-xl text-white">Projects shipped end-to-end</p>
                  <p className="text-slate-400 mt-3">
                    Product thinking · consistency · thoughtful scope
                  </p>
                </motion.div>

                {/* 3 — Full-stack work */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
                    Full-stack
                  </div>
                  <p className="text-xl text-white">
                    Design → build → deploy → refine
                  </p>
                  <p className="text-slate-400 mt-3">
                    React · Java · Python · APIs · minimal UI
                  </p>
                </motion.div>

                {/* 4 — Tools + experiments */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
                    20+
                  </div>
                  <p className="text-xl text-white">
                    Tools, utilities, and experiments
                  </p>
                  <p className="text-slate-400 mt-3">
                    Shaped steadily across work and personal projects
                  </p>
                </motion.div>

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
               Have a project or idea that needs stable systems, clean architecture, and thoughtful execution?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <a
                  href="mailto:rootxperiments@gmail.com"
                  className="inline-block text-2xl md:text-3xl font-medium text-red-500 hover:text-red-400 transition-colors"
                >
                  rootxperiments@gmail.com →
                </a>
              </motion.div>
            </div>
          </section>


        </main>
        {/* LAB MODAL */}
        {showLabModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
            onClick={() => setShowLabModal(false)} // close on background click
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0f0f12] border border-slate-800 rounded-2xl p-8 w-[90%] max-w-lg text-center shadow-xl"
              onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside modal
            >
              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-3">
                RootX E-commerce App
              </h2>

              {/* Subtitle */}
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                A simple e-commerce application built with a Microservices architecture using Java Spring Boot for the backend and React for the frontend. WIP!
              </p>

              {/* Links (optional) */}
              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://github.com/ashkshenoy/root-x-microsercvices.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white transition"
                >
                  View code on GitHub
                </a>

                <button
                  onClick={() => setShowLabModal(false)}
                  className="text-slate-500 hover:text-white text-sm mt-4"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* FOOTER – clean, tiny, confident */}
        <footer className="py-12 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">

            <div className="flex gap-8 mb-6">
              <a href="https://github.com/ashkshenoy/" target="_blank" rel="noopener" className="text-slate-500 hover:text-white transition">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aashishkshenoy" target="_blank" rel="noopener" className="text-slate-500 hover:text-white transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              {/* Add more if you want – Twitter/X, etc. */}
            </div>

            <p className="text-sm text-slate-500 text-center md:text-center">
              © {new Date().getFullYear()} Root Xperiments — Built with clarity and curiosity by Aashish K.
            </p>
          </div>
        </footer>

      </div>
    </div>

</>
  );
}
