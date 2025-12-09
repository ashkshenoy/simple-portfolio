/* Final TechItem – no external icons, just clean SVGs */
import { motion } from "framer-motion";
export default
function TechItem({ name, delay }) {
  const icons = {
    React: "M12 2L2 7l1 12h18l1-12Z",
    TypeScript: "M3 3h18v18H3z",
    TailwindCSS: "M2 3h6v6H2zM20 3h-6v6h6zM2 21h6v-6H2zM20 21h-6v-6h6z",
    Angular: "M12 2L2 7v10l10 5 10-5V7z",
    Java: "M5 3h14v18H5z",
    "Spring Boot": "M12 2L2 7l1 12h18l1-12Z",
    "Spring Cloud": "M12 2L2 7l1 12h18l1-12Z",
    Microservices: "M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6z",
    Kafka: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    Redis: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    Python: "M12 2L2 7l1 12h18l1-12Z",
    Claude: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    PostgreSQL: "M12 2L2 7l10 15 10-15z",
    MySQL: "M4 4h16v16H4z",
    MongoDB: "M12 2L2 7l10 15 10-15z",
    "Oracle DB": "M4 4h16v16H4z",
    Docker: "M22 17.5v-8l-8-4.5-8 4.5v8l8 4.5 8-4.5z",
    Kubernetes: "M12 2L2 7v10l10 5 10-5V7z",
    "CI/CD": "M12 2L2 12h3v8h14v-8h3L12 2z",
    AWS: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col items-center cursor-default"
    >
      <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-xl 
                p-2 md:p-3                 // ← reduced padding
                transition-all group-hover:border-red-500/40 group-hover:bg-slate-800/90">
  <div className="w-6 h-6 md:w-9 md:h-9     // ← this is the sweet spot
               flex items-center justify-center text-white/80 group-hover:text-white transition">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d={icons[name] || "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"} />
    </svg>
  </div>
</div>
      <span className="mt-5 text-sm md:text-base text-slate-400 group-hover:text-white transition">
        {name}
      </span>
    </motion.div>
  );
}