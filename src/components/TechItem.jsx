/* Final TechItem – no external icons, just clean SVGs */
import { motion } from "framer-motion";
export default
function TechIcon({ name, delay }) {
  const icons = {
    React: "M12 2L2 7l1 12h18l1-12Z",
    TypeScript: "M3 3h18v18H3z",
    TailwindCSS: "M2 3h6v6H2zM20 3h-6v6h6zM2 21h6v-6H2zM20 21h-6v-6h6z",
    Angular: "M12 2L2 7v10l10 5 10-5V7z",
    Java: "M5 3h14v18H5z",
    "Spring Boot": "M12 2L2 7l1 12h18l1-12Z",
    Kafka: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    Redis: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    Python: "M12 2L2 7l1 12h18l1-12Z",
    Claude: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    PostgreSQL: "M12 2L2 7l10 15 10-15z",
    MongoDB: "M12 2L2 7l10 15 10-15z",
    Docker: "M22 17.5v-8l-8-4.5-8 4.5v8l8 4.5 8-4.5z",
    Kubernetes: "M12 2L2 7v10l10 5 10-5V7z",
    AWS: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group flex flex-col items-center"
    >
      <div className="w-10 h-10 md:w-11 md:h-11 bg-slate-800/50 border border-slate-700 rounded-lg p-2 
                      transition-all group-hover:border-red-500/40 group-hover:bg-slate-800/80">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white/70 group-hover:text-white">
          <path d={icons[name] || "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"} />
        </svg>
      </div>
      <span className="mt-3 text-xs md:text-sm text-slate-500 group-hover:text-white transition">
        {name}
      </span>
    </motion.div>
  );
}