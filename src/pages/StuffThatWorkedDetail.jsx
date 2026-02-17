import Roadmap from "../components/Roadmap";
import Section from "../components/Section";
import { motion } from "framer-motion";
import video3 from "../assets/video3.mp4";
import whatWeDoVideo from "../assets/whatwedopage.mp4";

const StuffThatWorkedDetail = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const GlowOrb = ({ color, size, top, left }) => (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: "blur(180px)",
        opacity: 0.25,
        borderRadius: "50%",
        zIndex: 0,
      }}
    />
  );

  const FloatingOrb = ({ color, size, top, left, delay = 0 }) => (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: "blur(100px)",
        opacity: 0.15,
        borderRadius: "50%",
        zIndex: 0,
      }}
      animate={{
        y: [0, 30, -20, 0],
        x: [0, 15, -10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white font-sans antialiased"
      style={{ background: "#050510" }}
    >
      {/* Video background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={whatWeDoVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050510]/85" aria-hidden />
      </div>

      {/* Ambient Orbs */}
      <GlowOrb color="#AC6AFF" size="600px" top="-10%" left="-10%" />
      <GlowOrb color="#7ADB78" size="500px" top="60%" left="60%" />
      <FloatingOrb color="#FFC876" size="400px" top="20%" left="70%" delay={1} />
      <FloatingOrb color="#AC6AFF" size="300px" top="70%" left="10%" delay={2} />

      {/* Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_100px]" />

      <Section
        id="stuff-that-worked-detail"
        crosses
        className="relative z-10 pt-[12rem] pb-20"
      >
        <div className="container relative z-10">
          {/* 🔥 LEFT ALIGNED HERO CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-16 md:mb-24 text-left px-6 md:px-12 lg:px-20"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.span
                className="font-code px-5 py-2.5 rounded-full border border-white/25 bg-white/[0.07] backdrop-blur-md text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                transition={{ duration: 0.2 }}
              >
                Case Studies
              </motion.span>
            </motion.div>

            <motion.div variants={itemVariants} className="relative mb-8">
              <h1 className="font-playfair font-bold tracking-tight leading-[1.06] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] bg-clip-text text-transparent bg-gradient-to-b from-n-1 via-n-1 to-n-1/20">
                Stuff That Worked.
              </h1>

              <motion.div
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-[#AC6AFF] via-[#FFC876] to-[#7ADB78]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </motion.div>

            <p className="text-n-3 max-w-2xl leading-relaxed text-base md:text-lg lg:text-xl font-light italic">
              "A showcase of the strategic moves and digital craftsmanship that
              redefined our partners' trajectories."
            </p>
          </motion.div>

          {/* Roadmap Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10"
          >
            <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-2xl">
              <Roadmap />
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default StuffThatWorkedDetail;
