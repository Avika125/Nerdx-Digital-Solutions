import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import { figma, sliders04, searchMd, plusSquare } from "../../../assets";

const ACCENT = "#AC6AFF";

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const GlowOrb = ({ color, size, top, left }) => (
    <div
        style={{
            position: "absolute", width: size, height: size, top, left,
            background: color, filter: "blur(180px)", opacity: 0.25,
            borderRadius: "50%", zIndex: 0
        }}
    />
);

const UIUXWebDesignPage = () => {
    const expertiseCards = [
        { icon: searchMd, title: "User Research & Strategy", text: "We analyze your competitors and audience behaviors to create a data-driven roadmap, ensuring we build exactly what your market needs before design begins." },
        { icon: sliders04, title: "Custom Interface Design", text: "We craft stunning, pixel-perfect visuals that align with your brand identity, creating a modern look that establishes instant credibility with your visitors." },
        { icon: figma, title: "Interactive Prototyping", text: "We simulate the user journey before development. You get to click through and test the full experience to ensure the flow feels natural and intuitive." },
        { icon: plusSquare, title: "Responsive Development", text: "We turn designs into clean, fast-loading code. Your site will function perfectly across all devices, ensuring a smooth experience for every user." },
    ];

    const processSteps = [
        { num: "01", title: "Discovery & User Research", text: "We don't guess; we investigate. We start by interviewing stakeholders, analyzing competitor interfaces, and defining user personas. This ensures every design decision is backed by data and aligned with your business goals.", link: "Know More" },
        { num: "02", title: "Wireframing & Architecture", text: "Before we touch colors, we build the blueprint. We map out the user flow and information architecture (IA) using low-fidelity wireframes, focusing strictly on structure, navigation, and content placement to ensure ease of use.", link: "Know More" },
        { num: "03", title: "Visual Design & Prototyping", text: "This is where your brand comes alive. We apply high-fidelity UI elements—typography, color palettes, and imagery. We create clickable prototypes in Figma so you can \"test drive\" the app or website and feel the interaction before code is written.", link: "Know More" },
        { num: "04", title: "Testing & Developer Handoff", text: "Once the design is approved, we prepare it for the build. We generate pixel-perfect specifications, export all assets, and organize style guides so your development team has everything they need to code it exactly as designed.", link: "Know More" },
    ];

    const techStack = ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Principle", "Framer", "Webflow"];

    return (
        <div className="relative min-h-screen overflow-hidden text-white" style={{ background: "#050510" }}>
            <GlowOrb color={ACCENT} size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="500px" top="50%" left="70%" />

            {/* Hero */}
            <Section className="pt-[12rem] pb-16 relative z-10">
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-[70rem]">
                        <motion.div variants={textVariants} className="mb-6">
                            <Link to="/what-we-do-detail" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                                <span>←</span> Back to services
                            </Link>
                        </motion.div>
                        <motion.h1 variants={textVariants} className="font-playfair font-semibold text-5xl md:text-6xl tracking-tight mb-4" style={{ color: ACCENT }}>
                            UI / UX Web Design
                        </motion.h1>
                        <motion.p variants={textVariants} className="text-xl md:text-2xl text-white/90 font-medium mb-6">
                            Strategic UX/UI & Web Design.
                        </motion.p>
                        <motion.p variants={textVariants} className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
                            Your website is your 24/7 salesperson. NerdX Solutions blends creative aesthetics with smart user psychology to build digital experiences that don't just look incredible—they convert visitors into paying customers.
                        </motion.p>
                    </motion.div>
                </div>
            </Section>

            {/* We Design Online Stores */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="max-w-4xl">
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-10 text-white">
                            We Design Online Stores
                        </motion.h2>
                        <motion.div variants={textVariants} className="flex flex-wrap gap-6 mb-12">
                            {["Draft", "Design", "Deliver"].map((step, i) => (
                                <span key={i} className="px-6 py-3 rounded-full border border-white/20 text-lg font-medium" style={{ color: ACCENT }}>
                                    {step}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact"><Button white>Get a Custom Quote</Button></Link>
                            <Link to="/contact"><Button>Chat with An Expert</Button></Link>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Happy Clients */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <motion.h3 variants={textVariants} className="font-playfair text-2xl mb-6 text-white/90">
                            Happy Clients
                        </motion.h3>
                        <motion.p variants={textVariants} className="text-4xl md:text-5xl font-bold mb-8" style={{ color: ACCENT }}>
                            357 K+
                        </motion.p>
                        <motion.div variants={textVariants} className="flex flex-wrap gap-4">
                            {["WordPress", "SEO", "SMM", "Web Application", "UX/UI", "Brand Management"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Intelligent UX/UI Design */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="max-w-4xl">
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-8 text-white">
                            Intelligent UX/UI Design & Web Design.
                        </motion.h2>
                        <motion.p variants={textVariants} className="text-lg text-white/70 leading-relaxed mb-12">
                            At NerdX Solutions, we don't just decorate screens; we engineer experiences. We blend aesthetic precision with data-driven strategy to create websites and interfaces that captivate users and guide them seamlessly toward your business goals.
                        </motion.p>
                        <motion.ul variants={textVariants} className="space-y-4">
                            {[
                                "Deep User Research: We analyze your audience to build intuitive flows they actually enjoy using.",
                                "Mobile-First Architecture: Designs that adapt flawlessly to every screen, from iPhones to desktops.",
                                "Conversion-Centric Layouts: Strategic placement of buttons and content to maximize lead generation.",
                                "Interactive Prototyping: We test the look and feel before writing a single line of code.",
                                "Brand Consistency: Visuals that align perfectly with your identity and build instant trust.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/70">
                                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </Section>

            {/* Challenge & Solution */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid md:grid-cols-2 gap-10">
                        <motion.div variants={textVariants} className="p-8 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.02)" }}>
                            <h3 className="font-playfair text-xl mb-4 text-white">The Challenge</h3>
                            <p className="text-white/60 leading-relaxed">
                                You have less than three seconds to capture a visitor's attention. Cluttered layouts, confusing navigation, and slow load times frustrate users, causing them to bounce to your competitors before they even understand what you offer.
                            </p>
                        </motion.div>
                        <motion.div variants={textVariants} className="p-8 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.02)" }}>
                            <h3 className="font-playfair text-xl mb-4" style={{ color: ACCENT }}>The Solution</h3>
                            <p className="text-white/60 leading-relaxed">
                                NerdX solves this by prioritizing clarity and function. We strip away the noise to build streamlined, high-performance interfaces that reduce friction and make buying from you the easiest decision your customer makes today.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                {["Data-Backed Strategy", "Seamless Functionality", "Scalable Architecture"].map((t, i) => (
                                    <span key={i} className="text-sm px-3 py-1 rounded-full border" style={{ borderColor: ACCENT + "40", color: ACCENT }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Our Expertise */}
            <Section className="relative z-10 pb-24">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">
                            Our actions
                        </motion.h2>
                        <motion.p variants={textVariants} className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
                            Our UX/UI Design & Web Design Expertise
                        </motion.p>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-12 max-w-3xl mx-auto">
                            From initial sketches to final code, NerdX Solutions delivers end-to-end production. We ensure every pixel serves a specific purpose, creating digital products that are functionally robust and ready to scale.
                        </motion.p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {expertiseCards.map((card, i) => (
                                <motion.div key={i} variants={textVariants} whileHover={{ y: -5 }} className="p-6 rounded-2xl border border-white/10 flex flex-col h-full" style={{ background: "rgba(255,255,255,0.02)" }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 overflow-hidden" style={{ background: ACCENT + "20" }}>
                                        <img src={card.icon} alt="" className="w-6 h-6 object-contain" />
                                    </div>
                                    <h4 className="font-playfair text-lg mb-3 text-white">{card.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed flex-grow">{card.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Our Toolbelt */}
            <Section className="relative z-10 pb-24">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">
                            Our Toolbelt
                        </motion.h2>
                        <motion.p variants={textVariants} className="text-lg text-white/60 text-center mb-12">
                            The Tech Stack for UX/UI & Web Design
                        </motion.p>
                        <motion.div variants={textVariants} className="flex flex-wrap justify-center gap-4">
                            {techStack.map((tech, i) => (
                                <span key={i} className="px-6 py-3 rounded-xl border border-white/10 text-white/80">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Our Process */}
            <Section className="relative z-10 pb-24">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-16 text-white text-center">
                            Our Process
                        </motion.h2>
                        <div className="space-y-8">
                            {processSteps.map((step, i) => (
                                <motion.div key={i} variants={textVariants} className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.02)" }}>
                                    <div className="md:w-48 flex-shrink-0">
                                        <span className="text-5xl font-bold opacity-30" style={{ color: ACCENT }}>{step.num}</span>
                                        <h3 className="font-playfair text-xl mt-2 text-white">{step.title}</h3>
                                        <Link to="/contact" className="inline-block mt-4 text-sm font-medium hover:underline" style={{ color: ACCENT }}>{step.link} →</Link>
                                    </div>
                                    <p className="flex-grow text-white/60 leading-relaxed">{step.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="relative z-10 pb-28">
                <div className="container text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
                        <h2 className="font-playfair mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Let's find the right way for you.
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/contact"><Button white>Get started</Button></Link>
                            <Link to="/what-we-do-detail"><Button>View all services</Button></Link>
                            <Link to="/"><Button>Back to Home</Button></Link>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default UIUXWebDesignPage;
