import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";
import { heroBackground } from "../assets";
import { motion } from "framer-motion";
import video5 from "../assets/video5.mp4";
import whatWeDoVideo from "../assets/whatwedopage.mp4";


const WhoWeAreDetail = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
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
                <div
                    className="absolute inset-0 bg-[#050510]/80"
                    aria-hidden
                />
            </div>

            {/* Dora-style ambient orbs */}
            <GlowOrb color="#AC6AFF" size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="500px" top="60%" left="60%" />
            <FloatingOrb color="#FFC876" size="400px" top="20%" left="70%" delay={1} />
            <FloatingOrb color="#AC6AFF" size="300px" top="70%" left="10%" delay={2} />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

            <Section
                id="who-we-are-detail"
                crosses
                className="relative z-10 pt-[12rem] pb-20"
            >

                <div className="container relative z-10 pb-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    >

                        {/* Hero Section */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-16 md:mb-24 px-6 md:px-12 lg:px-20 text-left"
                        >
                            <motion.div variants={itemVariants} className="mb-6">
                                <motion.span
                                    className="font-code px-5 py-2.5 rounded-full border border-white/25 bg-white/[0.07] backdrop-blur-md text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                                    whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Who We Are
                                </motion.span>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative mb-8">
                                <h1 className="font-playfair font-bold tracking-tight leading-[1.06] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] bg-clip-text text-transparent bg-gradient-to-b from-n-1 via-n-1 to-n-1/20">
                                    Problem Solvers.
                                </h1>

                                <motion.div
                                    className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-[#AC6AFF] via-[#FFC876] to-[#7ADB78]"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </motion.div>

                            <p className="text-n-3 max-w-3xl leading-relaxed text-base md:text-lg lg:text-xl font-light">
                                We thrive in the space where{" "}
                                <span className="text-n-1 font-normal">complexity</span> meets{" "}
                                <span className="text-color-1 font-semibold">clarity</span>.
                            </p>
                        </motion.div>


                        {/* Grid Section */}
                        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-32">

                            {/* Why Us Card */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="lg:col-span-12 xl:col-span-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="text-[12rem] font-bold leading-none select-none">WE</span>
                                </div>

                                <h3 className="mb-10 font-playfair font-bold tracking-tight text-xl md:text-2xl">
                                    Why partners <br />
                                    <span className="text-color-1">choose us</span>
                                </h3>

                                <ul className="space-y-5 md:space-y-6">
                                    {[
                                        { id: "01", title: "Holistic Vision", text: "We see beyond the screen, integrating real-world impact." },
                                        { id: "02", title: "Raw Efficacy", text: "We prioritize solutions that work over superficial polish." },
                                        { id: "03", title: "Direct Action", text: "We don't wait for permission to innovate or solve." },
                                        { id: "04", title: "Trend Setter", text: "We define the future rather than just following it." },
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-xl bg-gradient-to-br from-color-1/20 to-color-1/5 border border-color-1/30 flex items-center justify-center text-color-1 font-code text-xs">
                                                {item.id}
                                            </div>
                                            <div>
                                                <h5 className="text-n-1 font-bold mb-1 text-sm md:text-base">
                                                    {item.title}
                                                </h5>
                                                <p className="text-n-4 text-xs md:text-sm">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Narrative Section */}
                            <div className="lg:col-span-12 xl:col-span-7 grid gap-6 md:gap-10">

                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12"
                                >
                                    <h4 className="tracking-[0.4em] text-color-1 text-xs font-bold uppercase mb-6">
                                        The Origin
                                    </h4>

                                    <p className="text-n-1 text-lg md:text-xl font-light italic leading-relaxed">
                                        "We escaped the corporate machine to rediscover the soul of problem solving."
                                    </p>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12"
                                >
                                    <h4 className="tracking-[0.4em] text-color-3 text-xs font-bold uppercase mb-6">
                                        The Present
                                    </h4>

                                    <p className="text-n-2 text-sm md:text-lg leading-relaxed font-light">
                                        Today, we transform ideas into battle-tested digital powerhouses that move the needle.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center py-10 md:py-16 bg-white/5 rounded-[4rem] backdrop-blur-sm border border-white/10"
                        >
                            <h2 className="font-playfair font-bold mb-10 text-[2rem] md:text-[3.5rem] tracking-tighter leading-none">
                                Let's{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-3">
                                    Collaborate.
                                </span>
                            </h2>

                            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12">
                                <Button href="#contact" white>
                                    Start a Project
                                </Button>

                                <Link
                                    to="/"
                                    className="text-n-1 font-bold text-lg hover:text-color-1 transition-colors flex items-center group"
                                >
                                    <span className="mr-4">Return Home</span>
                                    <span className="group-hover:translate-x-2 transition-transform">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default WhoWeAreDetail;
