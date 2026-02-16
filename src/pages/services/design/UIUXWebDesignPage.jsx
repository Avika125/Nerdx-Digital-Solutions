import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import { figma, sliders04, searchMd, plusSquare } from "../../../assets";
import uiuxHeading from "./uiuxheading.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

const ACCENT = "#AC6AFF";

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const AnimatedNumber = ({ value, suffix = "", label }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
        >
            <span className="block text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>{value}{suffix}</span>
            <span className="block text-sm text-white/50 mt-1 font-medium">{label}</span>
        </motion.div>
    );
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

const FloatingOrb = ({ color, size, top, left, delay = 0 }) => (
    <motion.div
        style={{
            position: "absolute", width: size, height: size, top, left,
            background: color, filter: "blur(100px)", opacity: 0.12,
            borderRadius: "50%", zIndex: 0
        }}
        animate={{
            y: [0, 25, -15, 0],
            x: [0, 12, -8, 0],
            scale: [1, 1.03, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay }}
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
        <div className="relative min-h-screen overflow-hidden text-white font-sans antialiased" style={{ background: "#050510" }}>
            <GlowOrb color={ACCENT} size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="500px" top="50%" left="70%" />
            <FloatingOrb color="#FFC876" size="350px" top="25%" left="75%" delay={1} />
            <FloatingOrb color={ACCENT} size="280px" top="65%" left="5%" delay={2} />
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            {/* Hero */}
            <Section className="pt-[10rem] pb-12 relative z-10">
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-[70rem]">
                        <motion.div variants={textVariants} className="mb-8">
                            <Link
                                to="/what-we-do-detail"
                                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors font-code uppercase tracking-wider group"
                            >
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to services
                            </Link>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div>
                                <motion.div variants={textVariants} className="mb-4">
                                    <motion.span
                                        className="font-code px-4 py-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/90"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Design Services
                                    </motion.span>
                                </motion.div>
                                <motion.div variants={textVariants} className="relative inline-block">
                                    <motion.h1
                                        className="font-playfair font-bold tracking-tight leading-tight mb-2"
                                        style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", color: ACCENT }}
                                    >
                                        UI / UX Web Design
                                    </motion.h1>
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#AC6AFF] to-[#7ADB78]"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </motion.div>
                                <motion.p variants={textVariants} className="text-lg md:text-2xl text-white/90 font-medium mb-5 mt-4">
                                    Strategic UX/UI & Web Design.
                                </motion.p>
                                <motion.p variants={textVariants} className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
                                    Your website is your 24/7 salesperson. NerdX Solutions blends creative aesthetics with smart user psychology to build digital experiences that don&apos;t just look incredible—they convert visitors into paying customers.
                                </motion.p>
                            </div>
                            <motion.div
                                variants={textVariants}
                                whileHover={{ scale: 1.02, y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
                                style={{
                                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px rgba(172,106,255,0.08)"
                                }}
                            >
                                <div className="aspect-[16/10] w-full">
                                    <img
                                        src={uiuxHeading}
                                        alt="Strategic UX/UI & Web Design"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <div className="relative z-10 py-2">
                <div className="container">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </div>
            </div>

            {/* Stats Strip */}
            <Section className="relative z-10 py-8">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm"
                        style={{
                            background: "linear-gradient(135deg, rgba(172,106,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
                            boxShadow: "0 0 80px rgba(172,106,255,0.05), inset 0 1px 0 rgba(255,255,255,0.05)"
                        }}
                    >
                        <div className="p-6 md:p-10 lg:p-12 grid grid-cols-2 gap-6">
                            <AnimatedNumber value="500+" suffix="" label="Projects Delivered" />
                            <AnimatedNumber value="98" suffix="%" label="Client Satisfaction" />
                            <AnimatedNumber value="3x" suffix="" label="Avg. Conversion Lift" />
                            <AnimatedNumber value="24" suffix="hr" label="Typical Turnaround" />
                        </div>
                        <motion.div variants={textVariants} className="relative h-64 lg:h-full min-h-[16rem] lg:min-h-[20rem]">
                            <img
                                src={image2}
                                alt="500+ Projects / 98% Satisfaction"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* We Design Online Stores - Online Store Workflow */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                            <motion.span variants={textVariants} className="font-code text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
                                Online Store Workflow
                            </motion.span>
                            <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-6 text-white mt-2">
                                We Design Online Stores
                            </motion.h2>
                            <motion.p variants={textVariants} className="text-white/60 mb-10">
                                Simple, proven workflow — from concept to live store in record time.
                            </motion.p>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-4 mb-12">
                                {[
                                    { step: "01", label: "Draft" },
                                    { step: "02", label: "Design" },
                                    { step: "03", label: "Deliver" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/15 transition-colors hover:border-white/25"
                                        style={{ background: "rgba(255,255,255,0.04)" }}
                                    >
                                        <span className="font-code text-xs font-bold opacity-50" style={{ color: ACCENT }}>{item.step}</span>
                                        <span className="text-lg font-semibold text-white">{item.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-5">
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/contact"><Button white>Get a Custom Quote</Button></Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/contact"><Button>Chat with An Expert</Button></Link>
                                </motion.div>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={textVariants}
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-2xl overflow-hidden border border-white/15"
                            style={{ boxShadow: "0 20px 50px -15px rgba(0,0,0,0.4)" }}
                        >
                            <img
                                src={image3}
                                alt="Online Store Workflow - Draft, Design, Deliver"
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            <div className="relative z-10 py-2">
                <div className="container">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </div>
            </div>

            {/* Happy Clients & Industries */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="relative p-8 md:p-10 rounded-2xl overflow-hidden backdrop-blur-sm"
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(172,106,255,0.08) 100%)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            boxShadow: "0 0 60px rgba(172,106,255,0.04)"
                        }}
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <motion.span variants={textVariants} className="font-code text-xs uppercase tracking-[0.25em] text-white/40">
                                    Trusted by brands worldwide
                                </motion.span>
                                <motion.h3 variants={textVariants} className="font-playfair text-3xl md:text-4xl mt-2 mb-4 text-white">
                                    Happy Clients
                                </motion.h3>
                                <motion.p variants={textVariants} className="text-5xl md:text-6xl font-bold mb-2" style={{ color: ACCENT }}>
                                    357 K+
                                </motion.p>
                                <motion.p variants={textVariants} className="text-white/50 text-sm">
                                    and counting — across 40+ industries
                                </motion.p>
                            </div>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-3 justify-center md:justify-end">
                                {["E‑commerce", "SaaS", "Healthcare", "FinTech", "EdTech", "Retail", "B2B", "Startups"].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                                        style={{
                                            background: "rgba(255,255,255,0.06)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            color: "rgba(255,255,255,0.85)"
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Intelligent UX/UI Design */}
            <Section className="relative z-10 pb-12">
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
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            variants={textVariants}
                            whileHover={{ scale: 1.02 }}
                            className="relative p-6 md:p-8 rounded-2xl overflow-hidden"
                            style={{
                                border: "1px solid rgba(255,100,100,0.2)",
                                background: "linear-gradient(135deg, rgba(255,119,111,0.06) 0%, rgba(255,255,255,0.02) 100%)"
                            }}
                        >
                            <span className="absolute top-4 right-4 text-5xl font-bold opacity-10 text-[#FF776F]">?</span>
                            <h3 className="font-playfair text-xl font-semibold mb-4 text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FF776F]" />
                                The Challenge
                            </h3>
                            <p className="text-white/65 leading-relaxed">
                                You have less than three seconds to capture a visitor&apos;s attention. Cluttered layouts, confusing navigation, and slow load times frustrate users, causing them to bounce to your competitors before they even understand what you offer.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={textVariants}
                            whileHover={{ scale: 1.02 }}
                            className="relative p-6 md:p-8 rounded-2xl overflow-hidden"
                            style={{
                                border: "1px solid rgba(172,106,255,0.3)",
                                background: "linear-gradient(135deg, rgba(172,106,255,0.1) 0%, rgba(255,255,255,0.03) 100%)"
                            }}
                        >
                            <span className="absolute top-4 right-4 text-4xl opacity-20" style={{ color: ACCENT }}>✓</span>
                            <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: ACCENT }}>
                                <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
                                The Solution
                            </h3>
                            <p className="text-white/65 leading-relaxed mb-6">
                                NerdX solves this by prioritizing clarity and function. We strip away the noise to build streamlined, high-performance interfaces that reduce friction and make buying from you the easiest decision your customer makes today.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Data-Backed Strategy", "Seamless Functionality", "Scalable Architecture"].map((t, i) => (
                                    <span key={i} className="text-sm px-4 py-2 rounded-lg font-medium" style={{ border: "1px solid " + ACCENT + "50", color: ACCENT, background: ACCENT + "15" }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Testimonial / Design Quote */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="relative p-8 md:p-12 rounded-2xl overflow-hidden"
                        style={{
                            background: "linear-gradient(145deg, rgba(172,106,255,0.15) 0%, rgba(255,255,255,0.04) 50%)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            boxShadow: "0 0 80px rgba(172,106,255,0.06)"
                        }}
                    >
                        <span className="absolute top-8 left-8 text-7xl font-playfair opacity-20 text-white">"</span>
                        <motion.p variants={textVariants} className="relative z-10 text-xl md:text-2xl lg:text-3xl font-playfair italic text-white/90 leading-relaxed max-w-4xl mx-auto text-center">
                            Great design is invisible. It doesn&apos;t shout—it guides. Every pixel we place serves a purpose: to help your users find what they need and take action before they even think about it.
                        </motion.p>
                        <motion.p variants={textVariants} className="text-center mt-8 font-code text-xs uppercase tracking-[0.3em] text-white/40">
                            — NerdX Design Philosophy
                        </motion.p>
                    </motion.div>
                </div>
            </Section>

            {/* Design Principles Bento Grid */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">
                            Why Design Matters
                        </motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-14 max-w-2xl mx-auto">
                            Three principles that shape every interface we build
                        </motion.p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Clarity Over Cleverness", desc: "Users shouldn't have to decode your interface. We prioritize instant comprehension so visitors know exactly what to do next.", emoji: "◇" },
                                { title: "Emotion Meets Logic", desc: "Beautiful design builds trust. Data-driven layouts maximize conversions. Together they create experiences that feel right and perform better.", emoji: "◆" },
                                { title: "Every Detail Intentional", desc: "Spacing, typography, color—nothing is arbitrary. Every choice reinforces your brand and guides users toward their goal.", emoji: "○" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={textVariants}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    className="group p-8 rounded-2xl transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                                        border: "1px solid rgba(255,255,255,0.08)"
                                    }}
                                >
                                    <span className="text-4xl mb-4 block opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: ACCENT }}>{item.emoji}</span>
                                    <h4 className="font-playfair text-xl font-semibold text-white mb-3">{item.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Our Expertise */}
            <Section className="relative z-10 pb-16">
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
                                <motion.div
                                    key={i}
                                    variants={textVariants}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="group relative p-6 rounded-2xl overflow-hidden flex flex-col h-full"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                                        border: "1px solid rgba(255,255,255,0.1)"
                                    }}
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: ACCENT }} />
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ background: ACCENT + "25" }}>
                                            <img src={card.icon} alt="" className="w-7 h-7 object-contain opacity-90" />
                                        </div>
                                        <h4 className="font-playfair text-lg font-semibold mb-3 text-white">{card.title}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed flex-grow">{card.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Our Toolbelt */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">
                            Our Toolbelt
                        </motion.h2>
                        <motion.p variants={textVariants} className="text-lg text-white/60 text-center mb-14">
                            Industry-standard tools we use every day
                        </motion.p>
                        <motion.div variants={textVariants} className="flex flex-wrap justify-center gap-4">
                            {techStack.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-6 py-3 rounded-xl text-white/85 font-medium transition-colors hover:border-white/30"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        background: "rgba(255,255,255,0.05)"
                                    }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.p variants={textVariants} className="text-center mt-8 text-sm text-white/40 font-code">
                            + Design Systems · Accessibility · Performance
                        </motion.p>
                    </motion.div>
                </div>
            </Section>

            {/* Our Process - Timeline Style */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">
                            Our Process
                        </motion.h2>
                        <motion.p variants={textVariants} className="text-white/50 text-center mb-16 font-code text-xs uppercase tracking-[0.2em]">
                            From first sketch to final handoff
                        </motion.p>
                        <div className="relative">
                            {/* Vertical timeline line */}
                            <div className="absolute left-6 md:left-12 top-8 bottom-8 w-px bg-gradient-to-b from-[#AC6AFF]/50 via-[#AC6AFF]/30 to-transparent hidden md:block" />
                            <div className="space-y-6">
                                {processSteps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        variants={textVariants}
                                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                        className="relative flex flex-col md:flex-row gap-8 p-8 md:pl-24 rounded-2xl transition-all duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                                            border: "1px solid rgba(255,255,255,0.08)"
                                        }}
                                    >
                                        <div className="absolute left-4 md:left-6 top-10 w-4 h-4 rounded-full border-2 hidden md:block" style={{ borderColor: ACCENT, background: "#050510" }} />
                                        <div className="md:w-56 flex-shrink-0">
                                            <span className="text-4xl font-bold opacity-20" style={{ color: ACCENT }}>{step.num}</span>
                                            <h3 className="font-playfair text-xl font-semibold mt-2 text-white">{step.title}</h3>
                                            <Link to="/contact" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold group" style={{ color: ACCENT }}>
                                                {step.link}
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </Link>
                                        </div>
                                        <p className="flex-grow text-white/60 leading-relaxed pt-2">{step.text}</p>
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
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center p-8 md:p-14 rounded-2xl backdrop-blur-sm"
                        style={{
                            background: "linear-gradient(145deg, rgba(172,106,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            boxShadow: "0 0 100px rgba(172,106,255,0.08), inset 0 1px 0 rgba(255,255,255,0.08)"
                        }}
                    >
                        <span className="font-code text-xs uppercase tracking-[0.3em] text-white/40 block mb-6">
                            Ready when you are
                        </span>
                        <h2 className="font-playfair font-bold mb-6 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Let&apos;s find the right way for you.
                        </h2>
                        <p className="text-white/60 mb-10 max-w-lg mx-auto text-sm md:text-base">
                            Book a free consultation and we&apos;ll map out the perfect UX/UI strategy for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/contact"><Button white>Get started</Button></Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/what-we-do-detail"><Button>View all services</Button></Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/"><Button>Back to Home</Button></Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default UIUXWebDesignPage;
