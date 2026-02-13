import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";

const WhatWeDoDetail = () => {

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        },
    };

    const categories = [
        {
            metaphor: "Above the screen",
            title: "Strategy",
            description: "Digital audits, design thinking workshops, digital strategy, campaign analytics, user research, and content strategy.",
            accent: "#AC6AFF"
        },
        {
            metaphor: "On the screen",
            title: "Design + UX",
            description: "UX systems, interface design, branding, IA, wireframing, motion graphics, and immersive digital experiences.",
            accent: "#FFC876"
        },
        {
            metaphor: "Below the screen",
            title: "Tech + Dev",
            description: "Custom CMS, frontend engineering, APIs, mobile apps, and scalable eCommerce platforms.",
            accent: "#FF776F"
        },
        {
            metaphor: "In the brain",
            title: "AI + Automation",
            description: "Conversational AI, automation systems, predictive analytics, NLP integration, and machine learning.",
            accent: "#7ADB78"
        },
    ];

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

    return (
        <div
            className="relative min-h-screen overflow-hidden text-white"
            style={{
                background: "#050510"
            }}
        >

            {/* Ambient Background Glow */}
            <GlowOrb color="#AC6AFF" size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="500px" top="60%" left="60%" />

            {/* ===== HERO ===== */}
            <Section className="pt-[12rem] pb-20 relative z-10">

                <div className="container">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-[70rem]"
                    >
                        <motion.h1
                            variants={textVariants}
                            className="font-playfair font-semibold tracking-tight leading-[1.05]"
                            style={{
                                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                                background: "linear-gradient(to bottom, #ffffff, #ffffff80)",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            We can help in many ways…
                        </motion.h1>

                        <motion.p
                            variants={textVariants}
                            className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl"
                        >
                            Or just a few — depending on what you truly need.
                        </motion.p>
                    </motion.div>

                </div>
            </Section>

            {/* ===== SERVICES GRID ===== */}
            <Section className="relative z-10 pb-32">

                <div className="container">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >

                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                variants={textVariants}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl border border-white/5 backdrop-blur-xl flex flex-col"
                                style={{
                                    background: "rgba(255,255,255,0.02)",
                                    boxShadow: "0 0 60px rgba(255,255,255,0.02)"
                                }}
                            >
                                <span className="uppercase text-xs tracking-widest text-white/40 mb-3">
                                    {cat.metaphor}
                                </span>

                                <h3
                                    className="text-2xl font-playfair mb-6"
                                    style={{ color: cat.accent }}
                                >
                                    {cat.title}
                                </h3>

                                <p className="text-white/60 leading-relaxed flex-grow">
                                    {cat.description}
                                </p>

                                <div
                                    className="mt-10 h-[2px] w-0 transition-all duration-500"
                                    style={{
                                        background: cat.accent
                                    }}
                                />

                            </motion.div>
                        ))}

                    </motion.div>
                </div>

            </Section>

            {/* ===== CTA ===== */}
            <Section className="relative z-10 pb-28">

                <div className="container text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2
                            className="font-playfair mb-10"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3rem)"
                            }}
                        >
                            Let’s find the right way for you.
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">

                            <Link to="/contact">
                                <Button white>
                                    Get started
                                </Button>
                            </Link>

                            <Link to="/">
                                <Button>
                                    Back to Home
                                </Button>
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </Section>

        </div>
    );
};

export default WhatWeDoDetail;
