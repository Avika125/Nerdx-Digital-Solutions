import { motion } from "framer-motion";

export const Star = ({ top, left, size = 15, opacity = 0.8, delay = 0 }) => (
  <motion.div
    className="absolute pointer-events-none z-0 will-change-transform"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    animate={{
      opacity: [opacity * 0.5, opacity, opacity * 0.5],
      scale: [1, 1.25, 1],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay || Math.random() * 5,
    }}
  >
    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M5 0L6.12257 3.87743L10 5L6.12257 6.12257L5 10L3.87743 6.12257L0 5L3.87743 3.87743L5 0Z"
        fill="white"
      />
    </svg>
  </motion.div>
);

export const DoraDualBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#050510]">
      {/* Cinematic Starfield - Extreme Density */}
      <Star top={5} left={10} size={15} opacity={0.7} delay={0.2} />
      <Star top={12} left={25} size={25} opacity={0.5} delay={1.5} />
      <Star top={8} left={45} size={10} opacity={0.9} delay={0.8} />
      <Star top={10} left={85} size={15} opacity={0.8} delay={0.4} />

      <Star top={45} left={15} size={10} opacity={0.95} delay={0.6} />
      <Star top={35} left={35} size={40} opacity={0.5} delay={2.5} />
      <Star top={50} left={55} size={15} opacity={0.6} delay={0.9} />
      <Star top={48} left={90} size={20} opacity={0.7} delay={0.3} />

      <Star top={65} left={10} size={15} opacity={0.8} delay={1.1} />
      <Star top={75} left={30} size={45} opacity={0.5} delay={2.8} />
      <Star top={85} left={50} size={10} opacity={0.95} delay={0.7} />
      <Star top={80} left={95} size={15} opacity={0.6} delay={1.4} />

      {/* Extra Stars - "Big" focus */}
      <Star top={20} left={40} size={50} opacity={0.5} delay={3.0} />
      <Star top={60} left={22} size={20} opacity={0.6} delay={0.1} />
      <Star top={82} left={65} size={60} opacity={0.4} delay={2.2} />

      {/* Extreme Atmospheric Glow */}
      <div className="absolute top-[10%] left-[5%] w-[90%] h-[80%] blur-[160px] bg-[#4A90E2]/20 rounded-full" />

      {/* Upper Moon (Swapped: Points UP) - MASSIVELY BRIGHTER */}
      <div className="absolute top-[-85%] md:top-[-38%] left-1/2 -translate-x-1/2 w-[350%] h-[120%] md:w-[120%] md:h-[60%] lg:w-[100%] lg:h-[50%] opacity-80 md:opacity-100">
        <div
          className="w-full h-full rounded-[100%]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(135, 206, 250, 0.25) 30%, rgba(74, 144, 226, 0.1) 80%, transparent 100%)",
            boxShadow: "0 -40px 100px -5px rgba(135, 206, 250, 0.6), 0 -10px 30px rgba(255, 255, 255, 0.4)",
          }}
        />
        {/* Neon Rim Highlight Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[20%] blur-[40px] bg-white/30 rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[6%] blur-[10px] bg-white/50 rounded-full" />
      </div>

      {/* Lower Moon (Swapped: Points DOWN) - MASSIVELY BRIGHTER */}
      <div className="absolute bottom-[-85%] md:bottom-[-38%] left-1/2 -translate-x-1/2 w-[350%] h-[120%] md:w-[120%] md:h-[60%] lg:w-[100%] lg:h-[50%] opacity-80 md:opacity-100">
        <div
          className="w-full h-full rounded-[100%]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(135, 206, 250, 0.25) 30%, rgba(74, 144, 226, 0.1) 80%, transparent 100%)",
            boxShadow: "0 40px 100px -5px rgba(135, 206, 250, 0.6), 0 10px 30px rgba(255, 255, 255, 0.4)",
          }}
        />
        {/* Neon Rim Highlight Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[20%] blur-[40px] bg-white/30 rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-[6%] blur-[10px] bg-white/50 rounded-full" />
      </div>

      {/* High-End Depth Layer */}
      <div className="absolute inset-0 bg-[#050510]/10 backdrop-blur-[0.2px]" />
    </div>
  );
};

export const GradientLight = () => {
  return (
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
  );
};

