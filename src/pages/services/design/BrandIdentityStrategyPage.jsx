import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import { figma, sliders04, searchMd, plusSquare } from "../../../assets";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";

const ACCENT = "#AC6AFF";

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const AnimatedNumber = ({ value, suffix = "", label }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="text-center"
    >
        <span className="block text-2xl md:text-3xl font-bold" style={{ color: ACCENT }}>{value}{suffix}</span>
        <span className="block text-xs text-white/50 mt-1 font-medium">{label}</span>
    </motion.div>
);

const GlowOrb = ({ color, size, top, left }) => (
    <div style={{ position: "absolute", width: size, height: size, top, left, background: color, filter: "blur(180px)", opacity: 0.25, borderRadius: "50%", zIndex: 0 }} />
);

const FloatingOrb = ({ color, size, top, left, delay = 0 }) => (
    <motion.div
        style={{ position: "absolute", width: size, height: size, top, left, background: color, filter: "blur(100px)", opacity: 0.12, borderRadius: "50%", zIndex: 0 }}
        animate={{ y: [0, 25, -15, 0], x: [0, 12, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay }}
    />
);

const BrandIdentityStrategyPage = () => {
    const expertiseCards = [
        { icon: searchMd, title: "Brand Discovery & Research", text: "We study your market, competitors, and audience behavior to build a brand foundation that connects emotionally and strategically." },
        { icon: sliders04, title: "Visual Identity Creation", text: "We craft logos, color systems, typography, and visual elements that reflect your brand personality and ensure instant recognition." },
        { icon: figma, title: "Brand Messaging & Voice", text: "We define how your brand communicates, ensuring tone, language, and storytelling remain consistent across every platform." },
        { icon: plusSquare, title: "Brand Implementation", text: "We deliver full brand systems and guidelines that allow your team to maintain consistency across marketing, digital, and offline assets." },
    ];

    const processSteps = [
        { num: "01", title: "Brand Discovery", text: "We explore your business values, audience psychology, and industry positioning to create a strong strategic brand direction.", link: "Know More" },
        { num: "02", title: "Identity Concept Creation", text: "We design logo concepts, color palettes, and typography systems that visually communicate your brand personality.", link: "Know More" },
        { num: "03", title: "Refinement & Validation", text: "We refine visual and messaging elements based on feedback and ensure the brand performs effectively across different platforms.", link: "Know More" },
        { num: "04", title: "Brand System Delivery", text: "We deliver brand style guides, asset kits, and usage rules to ensure consistency across marketing and business communication.", link: "Know More" },
    ];

    const techStack = ["Illustrator", "Photoshop", "Figma", "InDesign", "After Effects", "Canva", "Brand Systems", "Design Guidelines"];

    return (
        <div className="relative min-h-screen overflow-hidden text-white font-sans antialiased" style={{ background: "#050510" }}>
            <GlowOrb color={ACCENT} size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="400px" top="50%" left="70%" />
            <FloatingOrb color="#FFC876" size="280px" top="25%" left="75%" delay={1} />
            <FloatingOrb color={ACCENT} size="220px" top="65%" left="5%" delay={2} />
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            {/* Hero — with image */}
            <Section className="pt-[10rem] pb-12 relative z-10">
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-[70rem]">
                        <motion.div variants={textVariants} className="mb-6">
                            <Link to="/what-we-do-detail" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors font-code uppercase tracking-wider group">
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to services
                            </Link>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div>
                                <motion.div variants={textVariants} className="mb-3">
                                    <motion.span className="font-code px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/90" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                        Design Services
                                    </motion.span>
                                </motion.div>
                                <motion.div variants={textVariants} className="relative inline-block">
                                    <h1
                                        className="font-playfair font-bold tracking-tight leading-tight mb-2"
                                        style={{ fontSize: "clamp(2.3rem, 4vw, 3.2rem)", color: ACCENT }}
                                    >
                                        Brand Identity & Strategy
                                    </h1>
                                    <motion.div className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#AC6AFF] to-[#7ADB78]" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} />
                                </motion.div>
                                <motion.p variants={textVariants} className="text-lg md:text-xl text-white/90 font-medium mb-4 mt-3">Crafting Brands That Lead and Inspire.</motion.p>
                                <motion.p variants={textVariants} className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
                                    Your brand is more than visuals. We build strategic brand ecosystems that shape perception, create emotional connections, and establish authority in competitive markets.
                                </motion.p>
                            </div>
                            <motion.div variants={textVariants} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }} className="relative rounded-2xl overflow-hidden border border-white/15" style={{ boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5), 0 0 40px rgba(172,106,255,0.08)" }}>
                                <div className="aspect-[16/10] w-full">
                                    <img src={image5} alt="Brand Identity & Strategy" className="h-full w-full object-cover" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <div className="relative z-10 py-2">
                <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" /></div>
            </div>

            {/* Stats — with image */}
            <Section className="relative z-10 py-8">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-6 lg:gap-0 items-center overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm" style={{ background: "linear-gradient(135deg, rgba(172,106,255,0.1) 0%, rgba(255,255,255,0.03) 100%)", boxShadow: "0 0 60px rgba(172,106,255,0.05)" }}>
                        <div className="p-6 md:p-10 lg:p-12 grid grid-cols-2 gap-6">
                            <AnimatedNumber value="350+" label="Brands Built" />
                            <AnimatedNumber value="95%" label="Client Retention" />
                            <AnimatedNumber value="4x" label="Brand Recognition Growth" />
                            <AnimatedNumber value="10+" label="Years Experience" />
                        </div>
                        <motion.div variants={textVariants} className="relative h-48 lg:h-full min-h-[12rem] lg:min-h-[14rem]">
                            <img src={image6} alt="Brand Identity stats" className="absolute inset-0 w-full h-full object-cover object-center" />
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Workflow — no image */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <motion.span variants={textVariants} className="font-code text-[0.6rem] uppercase tracking-[0.25em] text-white/40">Brand Development Workflow</motion.span>
                            <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-4 text-white mt-2">We Build Lasting Brands</motion.h2>
                            <motion.p variants={textVariants} className="text-white/60 text-sm mb-6">From discovery to final guidelines — a structured process that ensures your brand tells a consistent story everywhere.</motion.p>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-3 mb-8">
                                {[{ step: "01", label: "Discover" }, { step: "02", label: "Define" }, { step: "03", label: "Deliver" }].map((item, i) => (
                                    <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15" style={{ background: "rgba(255,255,255,0.04)" }}>
                                        <span className="font-code text-xs font-bold opacity-50" style={{ color: ACCENT }}>{item.step}</span>
                                        <span className="text-base font-semibold text-white">{item.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-3">
                                <Link to="/contact"><Button white>Get a Custom Quote</Button></Link>
                                <Link to="/contact"><Button>Chat with An Expert</Button></Link>
                            </motion.div>
                        </div>
                        <div className="rounded-2xl flex items-center justify-center min-h-[12rem]" style={{ background: "linear-gradient(135deg, rgba(172,106,255,0.08) 0%, rgba(255,255,255,0.02) 100%)" }} />
                    </motion.div>
                </div>
            </Section>

            <div className="relative z-10 py-2">
                <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" /></div>
            </div>

            {/* Happy Clients — no image */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative p-6 md:p-10 rounded-2xl overflow-hidden backdrop-blur-sm" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(172,106,255,0.08) 100%)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <motion.span variants={textVariants} className="font-code text-xs uppercase tracking-[0.2em] text-white/40">Trusted by growing brands</motion.span>
                                <motion.h3 variants={textVariants} className="font-playfair text-2xl md:text-3xl mt-2 mb-3 text-white">Happy Clients</motion.h3>
                                <motion.p variants={textVariants} className="text-4xl md:text-5xl font-bold mb-2" style={{ color: ACCENT }}>350+</motion.p>
                                <motion.p variants={textVariants} className="text-white/50 text-sm">brands built from the ground up</motion.p>
                            </div>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-2 justify-center md:justify-end">
                                {["Startups", "SMBs", "Enterprise", "E‑commerce", "B2B", "SaaS", "Retail"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>{tag}</span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Transforming Businesses into Memorable Brands — with image */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="max-w-xl">
                            <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-4 text-white">Transforming Businesses into Memorable Brands</motion.h2>
                            <motion.p variants={textVariants} className="text-white/70 text-sm mb-6">We design cohesive brand identities that communicate your mission, build trust with your audience, and create long-term recognition across digital and physical platforms.</motion.p>
                            <motion.ul variants={textVariants} className="space-y-3">
                                {["Logo systems built for flexibility and long-term recognition.", "Strategic color psychology to influence customer perception.", "Typography structures that enhance readability and personality.", "Brand voice development that ensures consistent communication.", "Complete style guidelines for unified brand usage."].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-white/70 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: ACCENT }} />
                                        {item}
                                    </li>
                                ))}
                            </motion.ul>
                        </div>
                        <motion.div variants={textVariants} className="relative rounded-2xl overflow-hidden border border-white/15" style={{ boxShadow: "0 16px 40px -12px rgba(0,0,0,0.4)" }}>
                            <div className="aspect-[16/10] w-full">
                                <img src={image7} alt="Transforming businesses into memorable brands" className="h-full w-full object-cover" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Challenge & Solution */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid md:grid-cols-2 gap-6">
                        <motion.div variants={textVariants} whileHover={{ scale: 1.02 }} className="relative p-6 md:p-8 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,100,100,0.2)", background: "linear-gradient(135deg, rgba(255,119,111,0.06) 0%, rgba(255,255,255,0.02) 100%)" }}>
                            <span className="absolute top-3 right-3 text-4xl font-bold opacity-10 text-[#FF776F]">?</span>
                            <h3 className="font-playfair text-lg font-semibold mb-3 text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF776F]" />The Challenge</h3>
                            <p className="text-white/65 text-sm leading-relaxed">Generic branding leads to weak market presence, inconsistent messaging, and low audience trust. Businesses struggle to differentiate themselves in saturated industries.</p>
                        </motion.div>
                        <motion.div variants={textVariants} whileHover={{ scale: 1.02 }} className="relative p-6 md:p-8 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(172,106,255,0.3)", background: "linear-gradient(135deg, rgba(172,106,255,0.1) 0%, rgba(255,255,255,0.03) 100%)" }}>
                            <span className="absolute top-3 right-3 text-3xl opacity-20" style={{ color: ACCENT }}>✓</span>
                            <h3 className="font-playfair text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: ACCENT }}><span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />The Solution</h3>
                            <p className="text-white/65 text-sm leading-relaxed mb-4">We build structured brand systems where visuals, messaging, and strategy work together to create strong market positioning and lasting recognition.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Strategic Positioning", "Visual Cohesion", "Scalable Systems"].map((t, i) => (
                                    <span key={i} className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ border: "1px solid " + ACCENT + "50", color: ACCENT, background: ACCENT + "15" }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Testimonial */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative p-8 md:p-12 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(172,106,255,0.15) 0%, rgba(255,255,255,0.04) 50%)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <span className="absolute top-6 left-6 text-5xl font-playfair opacity-20 text-white">&quot;</span>
                        <motion.p variants={textVariants} className="relative z-10 text-lg md:text-xl font-playfair italic text-white/90 leading-relaxed max-w-3xl mx-auto text-center">A brand is a promise. We help you make that promise clear, compelling, and impossible to ignore.</motion.p>
                        <motion.p variants={textVariants} className="text-center mt-6 font-code text-xs uppercase tracking-[0.25em] text-white/40">— KrishNova Softwares Brand Strategy</motion.p>
                    </motion.div>
                </div>
            </Section>

            {/* Principles */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">Why Brand Identity Matters</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-10 max-w-xl mx-auto text-sm">Three pillars of memorable brands</motion.p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { title: "Clarity Over Complexity", desc: "The best brands are instantly understandable. We strip away noise to reveal a clear, compelling identity.", emoji: "◇" },
                                { title: "Consistency Builds Trust", desc: "Every touchpoint reinforces the same message. Consistency breeds recognition and trust.", emoji: "◆" },
                                { title: "Emotion Drives Action", desc: "People connect with brands that make them feel something. We design for emotional impact.", emoji: "○" },
                            ].map((item, i) => (
                                <motion.div key={i} variants={textVariants} whileHover={{ y: -6 }} className="group p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                    <span className="text-3xl mb-3 block opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: ACCENT }}>{item.emoji}</span>
                                    <h4 className="font-playfair text-lg font-semibold text-white mb-2">{item.title}</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Expertise */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">Our Brand Identity Expertise</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-10 max-w-2xl mx-auto text-sm">End-to-end brand development from strategy to implementation.</motion.p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {expertiseCards.map((card, i) => (
                                <motion.div key={i} variants={textVariants} whileHover={{ y: -6 }} className="group relative p-5 rounded-2xl overflow-hidden flex flex-col h-full" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                    <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: ACCENT }} />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: ACCENT + "25" }}>
                                            <img src={card.icon} alt="" className="w-6 h-6 object-contain opacity-90" />
                                        </div>
                                        <h4 className="font-playfair text-base font-semibold mb-2 text-white">{card.title}</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">{card.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Toolbelt */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">Our Toolbelt</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-10 text-sm">Tools we use for brand development</motion.p>
                        <motion.div variants={textVariants} className="flex flex-wrap justify-center gap-3">
                            {techStack.map((tech, i) => (
                                <motion.span key={i} whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-2 rounded-xl text-white/85 font-medium text-sm" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}>{tech}</motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Process */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">Our Process</motion.h2>
                        <motion.p variants={textVariants} className="text-white/50 text-center mb-10 font-code text-xs uppercase tracking-[0.2em]">From concept to guidelines</motion.p>
                        <div className="relative">
                            <div className="absolute left-5 md:left-10 top-6 bottom-6 w-px bg-gradient-to-b from-[#AC6AFF]/50 via-[#AC6AFF]/30 to-transparent hidden md:block" />
                            <div className="space-y-4">
                                {processSteps.map((step, i) => (
                                    <motion.div key={i} variants={textVariants} whileHover={{ x: 6 }} className="relative flex flex-col md:flex-row gap-6 p-6 md:pl-20 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                        <div className="absolute left-3 md:left-5 top-8 w-3 h-3 rounded-full border-2 hidden md:block" style={{ borderColor: ACCENT, background: "#050510" }} />
                                        <div className="md:w-48 flex-shrink-0">
                                            <span className="text-3xl font-bold opacity-20" style={{ color: ACCENT }}>{step.num}</span>
                                            <h3 className="font-playfair text-lg font-semibold mt-2 text-white">{step.title}</h3>
                                            <Link to="/contact" className="inline-flex items-center gap-2 mt-3 text-xs font-semibold group" style={{ color: ACCENT }}>{step.link} <span className="group-hover:translate-x-1 transition-transform">→</span></Link>
                                        </div>
                                        <p className="flex-grow text-white/60 text-sm leading-relaxed pt-1">{step.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center p-8 md:p-14 rounded-2xl backdrop-blur-sm" style={{ background: "linear-gradient(145deg, rgba(172,106,255,0.15) 0%, rgba(255,255,255,0.05) 100%)", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 0 80px rgba(172,106,255,0.08)" }}>
                        <span className="font-code text-xs uppercase tracking-[0.25em] text-white/40 block mb-4">Ready when you are</span>
                        <h2 className="font-playfair font-bold mb-4 text-white text-2xl md:text-3xl">Let&apos;s Build a Brand That People Remember</h2>
                        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">Schedule a consultation and start shaping a powerful brand identity today.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Link to="/contact"><Button white>Get started</Button></Link></motion.div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Link to="/what-we-do-detail"><Button>View all services</Button></Link></motion.div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Link to="/"><Button>Back to Home</Button></Link></motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default BrandIdentityStrategyPage;
