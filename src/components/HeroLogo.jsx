import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <div className="flex items-center justify-center lg:justify-end px-0">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="w-full max-w-[560px] mx-auto"


  >
        {/* SVG version so we can animate the X stroke */}
        <motion.svg
  width="550"
  height="550"
  viewBox="0 0 550 550"
  fill="none"
  className="drop-shadow-2xl"
  initial="hidden"
  animate="visible"
>
  {/* Small r – starts a bit left, then tucks perfectly under the X arm on hover */}
  <motion.text
    x="80"           // ← was 120, now further left for better spacing
    y="330"
    fontSize="300"
    fontWeight="900"
    fill="#ffffff"
    fontFamily="ui-sans-serif, system-ui, sans-serif"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      hover: { x: 88, y: 52, transition: { duration: 0.45, ease: "easeOut" } }
    }}
  >
    r
  </motion.text>

  {/* Big X – moved ~45px to the right */}
  <motion.path
 
    d="M 200 40 L 425 440 M 425 40 L 200 440"
   // ← shifted right from 160→205
    stroke="#ffffff"
    strokeWidth="70"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1.4, ease: "easeInOut" }}
    variants={{
      hover: { rotate: 6, transition: { duration: 0.5, ease: "easeOut" } }
    }}
   
  />
</motion.svg>

        {/* Subtle breathing glow (only on the X) */}
        

        {/* Hover glow boost */}
        
      </motion.div>

      {/* Make the whole thing interactive */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        whileHover="hover"
        style={{ cursor: "default" }}
      />
    </div>
  );
}