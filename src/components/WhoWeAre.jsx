import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "./Section";
import { useRef, useState, useEffect } from "react";
import { heroVideo } from "../assets";

const WhoWeAre = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Section
      id="who-we-are"
      crosses
      className="overflow-hidden bg-[#050510] relative"
    >
      {/* Background Video (UNCHANGED) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-contain scale-110 transition-opacity duration-[2000ms] ${
            videoLoaded ? "opacity-70" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-n-8/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-n-8 via-transparent to-n-8" />
      </div>

      <div className="container relative z-1 py-8 lg:py-16">
        {/* Atmosphere Orbs (slightly reduced) */}
        <div className="absolute top-[-15%] left-[-8%] w-[35rem] h-[35rem] bg-color-1/10 blur-[12rem] rounded-full pointer-events-none -z-1" />
        <div className="absolute bottom-[-15%] right-[-8%] w-[30rem] h-[30rem] bg-color-3/5 blur-[10rem] rounded-full pointer-events-none -z-1" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative flex flex-col items-center"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center space-x-3 opacity-70 px-3 py-1.5 bg-n-1/5 rounded-full backdrop-blur-md border border-n-1/10">
              <div className="w-2 h-2 rounded-full bg-color-1 animate-ping" />
              <span className="uppercase tracking-[0.25em] text-[0.6rem] md:text-xs text-n-1">
                Who We Are
              </span>
            </div>
          </motion.div>

          {/* Main Heading (Reduced Size) */}
          <motion.div
            variants={itemVariants}
            className="max-w-[60rem] text-center mb-10 md:mb-16"
          >
            <h2 className="font-grotesk font-black uppercase tracking-tighter text-[1.8rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[4.8rem] leading-[1.05] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-n-1 via-n-1 to-n-1/30">
              Digital Solutions <br className="hidden md:block" />
              <span className="text-color-3 inline-block -skew-x-6 px-1">
                Misfits
              </span>
            </h2>

            <div className="relative mx-auto max-w-[40rem] p-1 bg-gradient-to-r from-color-1/20 via-transparent to-color-3/20 rounded-2xl">
              <div className="bg-n-8/80 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-n-1/5 shadow-xl">
                <p className="text-n-2 text-base md:text-lg lg:text-xl font-light italic leading-relaxed tracking-tight">
                  "We're a digital solutions business made up by tech misfits,
                  passionate creatives and curious humans."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid lg:grid-cols-12 gap-5 w-full">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="lg:col-span-12 xl:col-span-5"
            >
              <div className="bg-[#0b0b1a]/60 backdrop-blur-xl border border-n-1/10 rounded-2xl p-6 md:p-8 shadow-xl">
                <h4 className="mb-6 tracking-[0.25em] text-color-1 uppercase text-xs font-bold">
                  The Mission
                </h4>

                <p className="text-n-1 text-lg md:text-xl font-light mb-6">
                  We transform ideas into products that:
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["HELP", "CHALLENGE", "INSPIRE"].map((word) => (
                    <div
                      key={word}
                      className="px-4 py-2 bg-n-1/5 border border-n-1/10 rounded-xl"
                    >
                      <span className="font-code font-bold text-n-1 text-xs tracking-widest">
                        {word}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-n-4 text-sm leading-relaxed">
                  From design through to code, we find simple solutions to
                  complex challenges.
                </p>
              </div>
            </motion.div>

            {/* Relationship Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="lg:col-span-12 xl:col-span-7"
            >
              <div className="bg-[#111126]/60 backdrop-blur-xl border border-n-1/10 rounded-2xl p-6 md:p-8 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h4 className="tracking-[0.25em] text-n-4 uppercase text-xs font-bold mb-6">
                    The Relationship
                  </h4>

                  <p className="text-n-1 text-lg md:text-xl font-light leading-tight mb-6">
                    We build rewarding relationships that help companies grow
                    and evolve.
                  </p>

                  <p className="text-n-3 text-sm md:text-base leading-relaxed">
                    Our integrated approach to strategy, design and development
                    allows us to deliver from concept to launch.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-n-1/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-n-1 font-bold text-base">
                    Learn more about{" "}
                    <Link
                      to="/who-we-are-detail"
                      className="text-color-1 hover:text-n-1 transition-colors"
                    >
                      who we are →
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scanline Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
    </Section>
  );
};

export default WhoWeAre;
