import { motion } from "framer-motion";
import Section from "../components/Section";
import Contact from "../components/Contact";

const ContactDetail = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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
            {/* Ambient Background Glows */}
            <GlowOrb color="#AC6AFF" size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="500px" top="60%" left="60%" />
            <FloatingOrb color="#FFC876" size="400px" top="20%" left="70%" delay={1} />
            <FloatingOrb color="#AC6AFF" size="300px" top="70%" left="10%" delay={2} />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

            <Section className="pt-[12rem] pb-28 relative z-10">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-[75rem] mx-auto text-center md:text-left"
                    >
                        <motion.div variants={textVariants} className="inline-block mb-8">
                            <motion.span
                                className="font-code px-5 py-2.5 rounded-full border border-white/25 bg-white/[0.07] backdrop-blur-md text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
                                transition={{ duration: 0.2 }}
                            >
                                Let's Talk
                            </motion.span>
                        </motion.div>

                        <motion.div variants={textVariants} className="relative inline-block">
                            <motion.h1
                                className="font-playfair font-bold tracking-tight leading-[1.06]"
                                style={{
                                    fontSize: "clamp(3rem, 7vw, 6rem)",
                                    letterSpacing: "-0.02em",
                                    background: "linear-gradient(135deg, #ffffff 0%, #e8e6f0 40%, #ffffff 70%, rgba(255,255,255,0.85) 100%)",
                                    backgroundSize: "200% auto",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent"
                                }}
                            >
                                Let’s find the right <br /> way for you.
                            </motion.h1>
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-[#AC6AFF] via-[#FFC876] to-[#7ADB78]"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </motion.div>

                        <motion.p
                            variants={textVariants}
                            className="mt-10 text-base md:text-lg text-white/75 max-w-2xl md:max-w-xl leading-[1.75] font-light"
                        >
                            Start with a conversation — we&apos;ll match you with the right services and a custom quote.
                        </motion.p>
                    </motion.div>
                </div>
            </Section>

            {/* Decorative divider */}
            <div className="relative z-10 py-8">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default ContactDetail;
