import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import { figma, sliders04, searchMd, plusSquare } from "../../../assets";
import marketimg1 from "./marketimg1.jpg";
import marketimg2 from "./marketimg2.jpg";

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
            transition={{ duration: 0.6 }}
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
        animate={{ y: [0, 25, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay }}
    />
);

const MarketingAdvertisingDesignPage = () => {

    const expertiseCards = [
        {
            icon: searchMd,
            title: "Audience & Market Research",
            text: "We analyze customer behavior, industry trends, and competitor campaigns to build marketing creatives that speak directly to your audience."
        },
        {
            icon: sliders04,
            title: "High-Converting Visual Design",
            text: "We craft visually striking marketing assets designed to capture attention instantly and communicate your message clearly."
        },
        {
            icon: figma,
            title: "Campaign Messaging & Storytelling",
            text: "We shape persuasive brand narratives and advertising messaging that builds emotional connection and drives user action."
        },
        {
            icon: plusSquare,
            title: "Multi-Channel Asset Production",
            text: "We deliver scalable creative systems optimized for social media, ads, print, and digital campaigns."
        },
    ];

    const processSteps = [
        {
            num: "01",
            title: "Research & Strategy",
            text: "We study industry trends, audience behavior, and competitor campaigns to create marketing strategies aligned with business growth goals.",
            link: "Know More"
        },
        {
            num: "02",
            title: "Creative Concept Development",
            text: "We explore multiple visual directions and layout concepts to identify the most impactful marketing approach.",
            link: "Know More"
        },
        {
            num: "03",
            title: "Design Execution",
            text: "We transform approved concepts into high-quality visuals with professional typography, imagery, and branding alignment.",
            link: "Know More"
        },
        {
            num: "04",
            title: "Review & Launch",
            text: "We finalize and deliver optimized assets for every marketing platform, ensuring seamless campaign deployment.",
            link: "Know More"
        },
    ];

    const techStack = ["Illustrator", "Photoshop", "Figma", "InDesign", "After Effects", "Canva", "Ad Creatives", "Campaign Systems"];

    return (
        <div className="relative min-h-screen overflow-hidden text-white font-sans antialiased" style={{ background: "#050510" }}>

            <GlowOrb color={ACCENT} size="600px" top="-10%" left="-10%" />

            {/* Hero */}
            <Section className="pt-[12rem] pb-20 relative z-10">
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-[70rem]">

                        <Link to="/what-we-do-detail" className="text-white/50 text-sm">← Back to services</Link>

                        <div className="grid lg:grid-cols-2 gap-10 items-center">

                            <div>
                                <motion.h1 variants={textVariants}
                                    className="font-playfair font-bold text-6xl mb-4"
                                    style={{ color: ACCENT }}>
                                    Marketing & Advertising Design
                                </motion.h1>

                                <motion.p variants={textVariants} className="text-2xl mb-6 text-white/90">
                                    Strategic Designs That Drive Attention & Sales.
                                </motion.p>

                                <motion.p variants={textVariants} className="text-lg text-white/60">
                                    We transform marketing messages into high-impact visuals that attract attention, influence decisions, and generate measurable results across digital and print platforms.
                                </motion.p>
                            </div>

                            <motion.div
                                variants={textVariants}
                                className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
                                style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px rgba(172,106,255,0.08)" }}
                            >
                                <img
                                    src={marketimg1}
                                    alt="Marketing & Advertising Design — Strategic designs that drive attention and sales"
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Stats / Performance */}
            <Section className="relative z-10 py-12">
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
                        <div className="p-8 md:p-12 lg:p-16 grid grid-cols-2 gap-8">
                            <AnimatedNumber value="400+" label="Campaigns Delivered" />
                            <AnimatedNumber value="97%" label="Client Satisfaction" />
                            <AnimatedNumber value="3.5x" label="Average Engagement Boost" />
                            <AnimatedNumber value="50+" label="Industries Served" />
                        </div>
                        <motion.div variants={textVariants} className="relative h-64 lg:h-full min-h-[16rem] lg:min-h-[20rem]">
                            <img
                                src={marketimg2}
                                alt="Marketing performance and stats — 400+ campaigns, 97% satisfaction"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Description */}
            <Section className="relative z-10 pb-20">
                <div className="container max-w-4xl">

                    <h2 className="text-4xl mb-6 font-playfair">
                        High-Impact Marketing & Advertising Design
                    </h2>

                    <p className="text-white/70 mb-8">
                        We design persuasive marketing creatives that combine visual storytelling with conversion-focused strategy, helping brands stand out and influence customer behavior.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Attention-grabbing visuals designed for crowded digital platforms.",
                            "Brand-aligned messaging that maintains voice consistency.",
                            "Multi-platform creative assets for social, ads, and print.",
                            "Psychology-driven layouts that improve engagement and urgency.",
                            "Scalable creative systems for rapid marketing execution."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-white/70">
                                <span className="w-2 h-2 rounded-full mt-2" style={{ background: ACCENT }} />
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
            </Section>

            {/* Challenge Solution */}
            <Section className="relative z-10 pb-20">
                <div className="container grid md:grid-cols-2 gap-8">

                    <div className="p-8 rounded-2xl border border-red-400/20">
                        <h3 className="text-xl mb-4 text-red-400">The Challenge</h3>
                        <p className="text-white/65">
                            Modern users are exposed to thousands of ads daily. Generic creatives fail to capture attention, resulting in poor engagement and wasted marketing investment.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-purple-400/30">
                        <h3 className="text-xl mb-4" style={{ color: ACCENT }}>The Solution</h3>
                        <p className="text-white/65">
                            We design conversion-focused marketing assets that break visual patterns, strengthen brand presence, and generate meaningful customer interaction.
                        </p>
                    </div>

                </div>
            </Section>

            {/* Expertise */}
            <Section className="relative z-10 pb-24">
                <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {expertiseCards.map((card, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-white/10">
                            <h4 className="text-lg mb-3">{card.title}</h4>
                            <p className="text-white/60 text-sm">{card.text}</p>
                        </div>
                    ))}

                </div>
            </Section>

            {/* Tools */}
            <Section className="relative z-10 pb-24">
                <div className="container text-center">

                    <h2 className="text-4xl mb-6 font-playfair">Our Creative Toolbelt</h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((t, i) => (
                            <span key={i} className="px-5 py-2 border border-white/10 rounded-xl">
                                {t}
                            </span>
                        ))}
                    </div>

                </div>
            </Section>

            {/* Process */}
            <Section className="relative z-10 pb-24">
                <div className="container space-y-8">

                    {processSteps.map((step, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl mb-3">
                                {step.num} {step.title}
                            </h3>
                            <p className="text-white/60">{step.text}</p>
                        </div>
                    ))}

                </div>
            </Section>

            {/* CTA */}
            <Section className="relative z-10 pb-28">
                <div className="container text-center">

                    <h2 className="text-4xl mb-6 font-playfair">
                        Let’s Create Marketing That Converts
                    </h2>

                    <p className="text-white/60 mb-10">
                        Start building powerful marketing visuals that attract, persuade, and convert your audience.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Link to="/contact"><Button white>Get Started</Button></Link>
                        <Link to="/"><Button>Back Home</Button></Link>
                    </div>

                </div>
            </Section>

        </div>
    );
};

export default MarketingAdvertisingDesignPage;
