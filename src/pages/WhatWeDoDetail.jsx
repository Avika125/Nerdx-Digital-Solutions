import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";
import { serviceCategories } from "./services";
import whatWeDoVideo from "../assets/whatwedopage.mp4";

const WhatWeDoDetail = () => {

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        },
    };

    const categories = serviceCategories;

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

            {/* ===== HERO ===== */}
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
                                What we do
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
                                We can help in many ways…
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
                            Or just a few — depending on what you truly need. Design, development, marketing, and management — all under one roof.
                        </motion.p>

                        <motion.div variants={textVariants} className="mt-14 flex flex-col sm:flex-row gap-5">
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/contact">
                                    <Button white>Get started</Button>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/contact">
                                    <Button>Chat with an expert</Button>
                                </Link>
                            </motion.div>
                        </motion.div>
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

            {/* ===== SERVICES GRID ===== */}
            <Section className="relative z-10 pb-32">
                <div className="container space-y-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="text-center mb-20"
                    >
                        <motion.span variants={textVariants} className="font-code text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/40">
                            Explore services
                        </motion.span>
                        <motion.h2 variants={textVariants} className="font-playfair font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 text-white leading-tight tracking-tight max-w-3xl mx-auto">
                            Design, build, and grow — without the guesswork
                        </motion.h2>
                        <motion.div
                            variants={textVariants}
                            className="mt-6 h-0.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#AC6AFF] to-[#7ADB78]"
                        />
                    </motion.div>

                    {categories.map((cat, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={containerVariants}
                            className="relative"
                        >
                            <motion.h2
                                variants={textVariants}
                                className="font-playfair font-bold text-2xl md:text-3xl mb-10 flex items-center gap-4 tracking-tight"
                                style={{ color: cat.accent }}
                            >
                                <span
                                    className="w-2 h-10 rounded-full flex-shrink-0 shadow-lg"
                                    style={{
                                        background: cat.accent,
                                        boxShadow: `0 0 20px ${cat.accent}50`
                                    }}
                                />
                                {cat.metaphor}
                            </motion.h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {cat.services.map((service, svcIndex) => (
                                    <Link key={svcIndex} to={`/service/${service.slug}`}>
                                        <motion.div
                                            variants={textVariants}
                                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                                            className="group relative p-6 md:p-7 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
                                            style={{
                                                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                boxShadow: "0 4px 24px rgba(0,0,0,0.15)"
                                            }}
                                        >
                                            {/* Hover gradient border glow */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                                style={{
                                                    background: `linear-gradient(135deg, ${cat.accent}15 0%, transparent 50%)`,
                                                    border: `1px solid ${cat.accent}40`
                                                }}
                                            />
                                            {/* Corner accent */}
                                            <div
                                                className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                                style={{
                                                    background: `radial-gradient(circle at top right, ${cat.accent} 0%, transparent 70%)`
                                                }}
                                            />

                                            <div className="relative z-10">
                                                <span
                                                    className="inline-flex w-8 h-8 rounded-lg items-center justify-center text-xs font-bold mb-4"
                                                    style={{
                                                        background: `${cat.accent}25`,
                                                        color: cat.accent
                                                    }}
                                                >
                                                    {String(svcIndex + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="text-lg md:text-xl font-playfair font-semibold mb-4 text-white leading-snug tracking-tight group-hover:text-white transition-colors">
                                                    {service.title}
                                                </h3>

                                                <p className="text-white/60 leading-[1.65] flex-grow text-[0.9375rem] md:text-base font-normal">
                                                    {service.description}
                                                </p>

                                                <div className="mt-6 flex items-center gap-2 font-code text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                                                    <span>Learn more</span>
                                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                                </div>

                                                <div
                                                    className="mt-4 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"
                                                    style={{ background: cat.accent }}
                                                />
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>

                            {catIndex < categories.length - 1 && (
                                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            )}
                        </motion.div>
                    ))}

                </div>
            </Section>

            {/* ===== CTA ===== */}
            <Section className="relative z-10 pb-28">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="relative max-w-4xl mx-auto text-center p-12 md:p-20 rounded-3xl overflow-hidden"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 100%)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            boxShadow: "0 0 60px rgba(172,106,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05)"
                        }}
                    >
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#AC6AFF]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#7ADB78]/15 to-transparent rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
                        <div className="relative z-10">
                            <span className="inline-block font-code text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white/40 mb-6">
                                Ready to start?
                            </span>
                            <h2
                                className="font-playfair font-bold mb-5 text-white tracking-tight leading-[1.15]"
                                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                            >
                            Let’s find the right way for you.
                        </h2>
                            <p className="text-white/65 mb-12 max-w-xl mx-auto text-base md:text-lg leading-[1.7] font-light">
                                Start with a conversation — we&apos;ll match you with the right services and a custom quote.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-5">
                                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/contact">
                                        <Button white>Get started</Button>
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/">
                                        <Button>Back to Home</Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </Section>

        </div>
    );
};

export default WhatWeDoDetail;
