import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import BenefitsImage from "../assets/benefits.png";

const Benefits = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll parallax and 3D effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for background blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // 3D Transforms for the main image
  const imageRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const imageRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);

  // Spring physics for smoother 3D motion
  const smoothRotateX = useSpring(imageRotateX, { stiffness: 100, damping: 30 });
  const smoothRotateY = useSpring(imageRotateY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToWhatWeDo = () => {
    const el = document.getElementById("whatwedo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const narrativeText = `Our approach is simple — understand deeply, design beautifully, build intelligently. Every engagement unfolds across three essential layers. Above the screen, we shape strategy through research, insight, and clarity. On the screen, we craft refined digital experiences that feel effortless and intuitive. Below the screen, we build scalable, performance-driven technology designed for longevity. Elegant thinking. Precise execution. Measurable impact.`;

  return (
    <Section
      id="features"
      className="pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="container relative z-2 mt-0"
      >
        {/* Cinematic Backdrop Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-30 transition duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(86, 86, 224, 0.15), transparent 80%)`,
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        {/* Floating Parallax Accents */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-color-1/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-color-2/5 rounded-full blur-[150px] pointer-events-none"
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

          {/* Text Content Area */}
          <div className="flex-1 text-center lg:text-left relative z-10 lg:max-w-xl">
            {/* Vision Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 opacity-70 px-4 py-2 bg-n-1/5 rounded-full backdrop-blur-md border border-n-1/10 mb-8 w-fit mx-auto lg:mx-0"
            >
              <div className="w-2 h-2 rounded-full bg-color-1 animate-pulse" />
              <span className="uppercase tracking-[0.3em] text-[0.7rem] text-n-1 font-bold">
                The Architecture of Design
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-grotesk font-black uppercase tracking-[-0.03em]
text-[1.6rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem]
leading-[1] mb-8
bg-clip-text text-transparent
bg-gradient-to-b from-n-1 via-n-1 to-n-1/20"
            >
              Technology meets <br />
              <span className="text-color-1 inline-block -skew-x-2 transition-all duration-500 hover:scale-105">
                creativity
              </span>
            </motion.h2>

            {/* Narrative Staggered Reveal */}
            <div className="mb-12">
              <p className="text-n-3 text-lg md:text-xl font-light leading-relaxed">
                {narrativeText.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.012,
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {[
                      "understand", "deeply,", "design", "beautifully,", "build", "intelligently.", "Elegant", "thinking.", "Precise", "execution.", "Measurable", "impact."
                    ].includes(word.replace(/[.,]/g, "")) ? (
                      <span className="text-n-1 font-semibold">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <motion.button
                onClick={() => navigate("/what-we-do-detail")}

                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-10 py-5 rounded-2xl text-n-1 font-bold text-lg
                backdrop-blur-xl border border-n-1/20 overflow-hidden
                bg-gradient-to-br from-color-1/10 to-color-3/10
                shadow-[0_0_40px_rgba(120,120,255,0.2)]
                hover:shadow-[0_0_60px_rgba(120,120,255,0.4)]
                transition-all duration-500 group"
              >
                <span className="relative z-10" href="/what-we-do-detail">Explore</span>

                <div className="absolute inset-0 bg-gradient-to-r from-color-1/20 to-color-3/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <p className="text-n-4 text-sm font-code uppercase tracking-widest max-w-[200px] text-center lg:text-left">
                Click to explore the Services
              </p>
            </motion.div>
          </div>

          {/* Cinematic 3D Image Scene */}
          <div className="flex-1 relative w-full h-full lg:min-h-[600px] flex items-center justify-center">
            <motion.div
              style={{
                perspective: "1500px",
                transformStyle: "preserve-3d",
                y: imageY,
                scale: imageScale,
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
              }}
              className="relative z-20 w-full max-w-[500px] lg:max-w-none px-4"
            >
              {/* Image Container with Custom Glow and Mask */}
              <div className="relative group">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative p-1 rounded-3xl overflow-hidden border border-n-1/10 bg-n-8/50 backdrop-blur-sm"
                >
                  <img
                    src={BenefitsImage}
                    alt="The Vision"
                    className="w-full h-auto rounded-3xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Internal Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-color-1/20 via-transparent to-color-2/20 mix-blend-overlay pointer-events-none" />
                </motion.div>

                {/* Floating Shadow/Glow underneath */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-color-1/30 blur-[60px] rounded-[100%] pointer-events-none -z-1"
                />
              </div>

              {/* Decorative Tech Elements - Dora AI Style */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border border-n-1/5 rounded-full pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-48 h-48 border border-n-1/5 rounded-full border-dashed pointer-events-none"
              />
            </motion.div>
          </div>

        </div>

        <GradientLight />
      </div>
    </Section>
  );
};

export default Benefits;
