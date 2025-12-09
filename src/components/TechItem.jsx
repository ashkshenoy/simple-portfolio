import { motion } from "framer-motion";
export default function TechItem({ name, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col items-center cursor-default"
    >
      <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 md:p-8 transition-all group-hover:border-slate-600 group-hover:bg-slate-800/80">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-white/80">
            {name.split(" ")[0][0]}
          </span>
        </div>
      </div>
      <span className="mt-5 text-sm md:text-base text-slate-400 group-hover:text-white transition">
        {name}
      </span>
    </motion.div>
  );
}