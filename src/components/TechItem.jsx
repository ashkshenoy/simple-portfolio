// src/components/TechIcon.jsx
import { motion } from "framer-motion";
import * as Icons from "../icons"; // imports everything exported from src/icons/index.jsx

export default function TechIcon({ name, delay = 0 }) {
  const IconComponent = Icons[`${name.replace(/\s+/g, "")}Icon`] || Icons.GithubIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className="group flex flex-col items-center"
    >
      <div className="w-10 h-10 md:w-11 md:h-11 bg-slate-800/50 border border-slate-700 rounded-lg p-2
        transition-all group-hover:border-red-500/40 group-hover:bg-slate-800/80">
        <IconComponent className="w-full h-full text-white/70 group-hover:text-white" />
      </div>
      <span className="mt-3 text-xs md:text-sm text-slate-500 group-hover:text-white transition">
        {name}
      </span>
    </motion.div>
  );
}
