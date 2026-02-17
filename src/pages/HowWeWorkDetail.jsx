import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";
import { grid, searchMd, sliders04, plusSquare } from "../assets";
import { useRef } from "react";
import video4 from "../assets/video4.mp4";
import whatWeDoVideo from "../assets/whatwedopage.mp4";


const HowWeWorkDetail = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const textVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            },
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
                zIndex: 0
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
                zIndex: 0
            }}
            animate={{
                y: [0, 30, -20, 0],
                x: [0, 15, -10, 0],
                scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
        />
    );

    const Grid3D = () => {
        const rotateX = useTransform(scrollYProgress, [0, 0.25], [55, 0]);
        const translateZ = useTransform(scrollYProgress, [0, 0.25], [-150, 0]);
        const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.3, 0.9, 0.05]);

        return (
            <div className="absolute inset-0 z-0 pointer-events-none perspective-[1200px] overflow-hidden">
                <motion.div
                    style={{ rotateX, translateZ, opacity }}
                    className="absolute inset-0 origin-top"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#AC6AFF15_1px,transparent_1px),linear-gradient(to_bottom,#AC6AFF15_1px,transparent_1px)] bg-[size:50px_50px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-n-8/40 to-n-8" />
                </motion.div>
                <div className="absolute top-0 left-0 w-full h-[50rem] bg-gradient-to-b from-color-1/20 via-color-1/5 to-transparent blur-[8rem] opacity-30" />
            </div>
        );
    };

    return (
        <div ref={containerRef}
            className="relative min-h-screen overflow-hidden text-white font-sans antialiased selection:bg-color-1 selection:text-n-1"
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
                <div
                    className="absolute inset-0 bg-[#050510]/85"
                    aria-hidden
                />
            </div>

            {/* Dora-style ambient orbs */}
            <GlowOrb color="#AC6AFF" size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="500px" top="60%" left="60%" />
            <FloatingOrb color="#FFC876" size="400px" top="20%" left="70%" delay={1} />
            <FloatingOrb color="#AC6AFF" size="300px" top="70%" left="10%" delay={2} />

            <Grid3D />

            <Section className="relative z-10 pt-[12rem] pb-28">
                <div className="container relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-[85rem] mx-auto"
                    >
                        <motion.div variants={textVariants} className="inline-block mb-6 translate-y-[-10px]">
                            <span className="font-code px-5 py-2.5 rounded-full border border-white/25 bg-white/[0.07] backdrop-blur-md text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                                Product Strategy & Design
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={textVariants}
                            className="font-playfair font-bold tracking-tight leading-[1.06] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] bg-clip-text text-transparent bg-gradient-to-b from-n-1 via-n-1 to-n-1/20"
                        >
                            Deep User Empathy<br className="hidden md:block" />
                            <span className="text-color-1 italic ml-2">Drives Results</span>
                        </motion.h1>


                        <motion.p
                            variants={textVariants}
                            className="body-1 text-n-2/80 
  max-w-[42rem] mx-auto 
  text-sm md:text-lg lg:text-xl 
  font-light italic 
  leading-relaxed md:leading-[1.5]"
                        >
                            "We focus every part of our process around the end users. Delivering work that doesn't meet outcomes hurts us as much as our partners."
                        </motion.p>


                        <motion.div variants={textVariants} className="mt-8 flex flex-col items-center gap-4">
                            <span className="text-[0.6rem] font-code uppercase tracking-[0.3em] text-n-4">Scroll to explore</span>
                            <motion.div
                                animate={{ y: [0, 15, 0], opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-[1px] h-16 bg-gradient-to-b from-color-1 to-transparent"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Philosophy Section */}
            <Section
                id="philosophy"
                crosses
                customPaddings
                className="bg-white/5 backdrop-blur-md relative z-20 py-10 lg:py-12"
            >
                <div className="container py-6 lg:py-12 relative">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                    >
                        <div className="lg:col-span-6">
                            <motion.h2 variants={textVariants} className="font-playfair font-bold tracking-tight text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.1] mb-6">
                                We refuse to <span className="text-color-3 italic">settle</span> for anything less than perfection
                            </motion.h2>
                        </div>
                        <div className="lg:col-span-6 lg:border-l border-white/10 lg:pl-10">
                            <motion.div variants={textVariants} className="space-y-6">
                                <p className="text-n-1 text-lg md:text-xl font-light leading-relaxed">
                                    We work with you to revisit your brief and your pain points, ensuring that what's been identified is the <span className="text-color-1">actual user problem</span> to address.
                                </p>
                                <p className="text-n-4 text-base md:text-lg font-light leading-relaxed">
                                    We use the precious time we have with you to chat, ask questions, listen and observe, rather than try sell an idea, or worse yet, a solution only we have fallen in love with.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* NERD Framework Section */}
            <Section
                id="nerd-framework"
                crosses
                customPaddings
                className="relative overflow-visible py-10 lg:py-12"
            >

                <div className="container py-0 lg:py-0 relative z-10">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="relative mb-2 lg:mb-4"
                    >
                        <motion.h3 variants={textVariants} className="font-code text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-color-1/80 text-center mb-6">
                            The Methodology
                        </motion.h3>
                        <motion.h2
                            variants={textVariants}
                            className="font-playfair font-bold text-n-1 text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-none opacity-[0.03] text-center mb-4 select-none">
                            OUR NERD CORE
                        </motion.h2>

                        <motion.p variants={textVariants} className="text-center text-n-1 text-xl md:text-3xl font-playfair font-bold tracking-tight relative z-10">
                            We are technical misfits
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">

                        {[
                            { letter: "N", title: "NAVIGATE", text: "We start by exploring your business, objectives and what makes it all tick.", color: "#AC6AFF", shadow: "rgba(172, 106, 255, 0.3)" },
                            { letter: "E", title: "EXPLODE", text: "We pull it apart in search of all opportunities. We love good ol' blue sky thinking.", color: "#FFC876", shadow: "rgba(255, 200, 118, 0.3)" },
                            { letter: "R", title: "REFINE", text: "After some hustling and huddling, we refine our ideas into elegant solutions.", color: "#FF776F", shadow: "rgba(255, 119, 111, 0.3)" },
                            { letter: "D", title: "DEFINE", text: "Lastly we craft user-centric products for you to take on the world. And win.", color: "#7ADB78", shadow: "rgba(122, 219, 120, 0.3)" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -10, scale: 1.02, rotateX: 2 }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="group relative p-[1px] rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/20 to-transparent"
                            >
                                <div className="relative h-full p-8 lg:p-10 bg-white/5 backdrop-blur-2xl rounded-[2rem] transition-all duration-500 group-hover:bg-white/10 min-h-[320px] lg:min-h-[360px]">
                                    <div className="absolute top-0 right-0 p-6 lg:p-8 opacity-[0.03] group-hover:opacity-10 transition-all duration-500 group-hover:scale-110">
                                        <div className="font-playfair font-bold text-[10rem] lg:text-[12rem] leading-none" style={{ color: item.color }}>
                                            {item.letter}
                                        </div>
                                    </div>
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div
                                            className="w-14 h-14 lg:w-16 lg:h-16 mb-8 lg:mb-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 font-bold text-2xl lg:text-3xl shadow-xl transition-all duration-500 group-hover:border-white/20"
                                            style={{ color: item.color, boxShadow: `0 0 20px ${item.shadow}` }}
                                        >
                                            {item.letter}
                                        </div>
                                        <h6 className="font-code uppercase tracking-[0.2em] mb-4 lg:mb-5 text-n-1 font-bold text-sm lg:text-base">{item.title}</h6>
                                        <p className="body-2 text-n-4 font-light leading-relaxed mb-4 text-sm lg:text-base group-hover:text-n-2 transition-colors">{item.text}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 ease-out group-hover:w-full" style={{ background: item.color }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Stages Section */}
            <Section
                id="stages"
                crosses
                customPaddings
                className="bg-white/5 py-12 lg:py-14"
            >
                <div className="container py-6 lg:py-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h3 className="font-playfair font-bold tracking-tighter text-white mb-4 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1]">Execution Hierarchy</h3>
                        <p className="text-n-3 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed italic">"Transparency is core to our process. Here is how we bring your vision to life, from pixel-perfect theory to high-performance reality."</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                stage: "DISCOVER",
                                title: "Research & Insight",
                                text: "We unearth everything about the brief. We deep dive into user behavior to find the 'why' behind the 'what'.",
                                icon: searchMd,
                                color: "#AC6AFF"
                            },
                            {
                                stage: "DESIGN",
                                title: "High-Fidelity UI/UX",
                                text: "We bring strategy to life with a focus on absolute simplification and visual excellence.",
                                icon: sliders04,
                                color: "#FFC876"
                            },
                            {
                                stage: "DEVELOP",
                                title: "Architecture & QA",
                                text: "We wrap recommendations into a technically crafted solution using state-of-the-art tech stacks.",
                                icon: plusSquare,
                                color: "#FF776F"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 1 }}
                                className="group relative flex flex-col p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-white/5"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500" style={{ color: item.color }}>
                                        <img src={item.icon} width={24} height={24} alt={item.title} />
                                    </div>
                                    <span className="font-code text-[0.6rem] uppercase tracking-[0.4em] text-n-5 font-bold">PHASE 0{index + 1}</span>
                                </div>
                                <h4 className="font-playfair font-bold tracking-tight text-white mb-3 text-[1.8rem] leading-none">{item.stage}</h4>
                                <p className="font-code text-[0.65rem] font-bold text-n-1 uppercase tracking-[0.3em] mb-6 pb-4 border-b border-white/10" style={{ color: item.color }}>{item.title}</p>
                                <p className="body-2 text-n-3 font-light leading-relaxed mb-8 text-base">{item.text}</p>
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.2, duration: 1.5 }}
                                            className="h-full"
                                            style={{ background: item.color }}
                                        />
                                    </div>
                                    <span className="text-[0.55rem] font-code text-n-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Core Service</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Footer CTA Section */}
            <Section
                id="work-cta"
                crosses
                customPaddings
                className="relative overflow-hidden py-14"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-color-1/10 via-transparent to-transparent pointer-events-none" />
                <div className="container text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="font-playfair font-bold tracking-tight mb-8 text-n-1 leading-[1.1] text-[2rem] md:text-[2.8rem] lg:text-[3.5rem]">
                            Let's build <br className="md:hidden" />
                            <span className="text-color-3 italic">the future</span>, together.
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Link to="/contact">
                                <Button className="w-full sm:w-[15rem] py-6 text-lg">Work With Us</Button>
                            </Link>
                            <Link to="/" className="font-code text-sm uppercase tracking-[0.4em] text-n-1 hover:text-color-1 transition-all duration-300 group flex items-center gap-4 border-b border-transparent hover:border-color-1 pb-1">
                                Back to Base <span className="inline-block transition-transform group-hover:translate-x-3 text-color-1">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Scanline Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
        </div>
    );
};

export default HowWeWorkDetail;
