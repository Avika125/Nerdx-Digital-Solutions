import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";

const WhatWeDoDetail = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const categories = [
        {
            metaphor: "Above the screen",
            title: "Strategy",
            description: "Digital audits, facilitated design thinking workshops, digital strategy development, campaign and website analytics, user research, content strategy development.",
            color: "bg-color-1/20",
            delay: 0,
        },
        {
            metaphor: "On the screen",
            title: "Design + UX",
            description: "UX design, interface design, visual design, digital advertising campaigns, branding, IA + wireframing, motion graphics and video.",
            color: "bg-color-2/20",
            delay: 0.2,
        },
        {
            metaphor: "Below the screen",
            title: "Tech + Dev",
            description: "CMS (Custom, Wordpress, Drupal), front end development, API integration, mobile app development, website and eCommerce development.",
            color: "bg-color-3/20",
            delay: 0.4,
        },
        {
            metaphor: "In the brain",
            title: "AI + Automation",
            description: "AI chatbot development, conversational UI/UX, intelligent automation, predictive analytics, NLP integration, machine learning.",
            color: "bg-color-4/20",
            delay: 0.6,
        },
    ];

    const FloatingOrb = ({ color, size, top, left, delay }) => (
        <motion.div
            className={`absolute ${size} ${color} blur-[12rem] rounded-full pointer-events-none -z-1`}
            animate={{
                x: [0, 30, -20, 0],
                y: [0, -30, 40, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            style={{ top, left }}
        />
    );

    return (
        <div className="bg-n-8 overflow-hidden relative min-h-screen">
            <FloatingOrb color="bg-color-1/10" size="w-[50rem] h-[50rem]" top="-10%" left="-10%" delay={0} />
            <FloatingOrb color="bg-color-2/10" size="w-[40rem] h-[40rem]" top="50%" left="60%" delay={5} />

            <Section className="pt-[12rem] -mt-[5.25rem]" id="what-we-do-hero" crosses customPaddings>
                <div className="container relative z-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-[62rem]"
                    >
                        <motion.h1 variants={textVariants} className="h1 font-playfair mb-6">
                            We can help in many ways…
                        </motion.h1>
                        <motion.p variants={textVariants} className="body-1 text-n-3 max-w-3xl mb-12">
                            Or just a few depending on what you need.
                        </motion.p>
                    </motion.div>
                </div>
            </Section>

            <Section id="services-grid" crosses>
                <div className="container pb-20 relative z-2">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                variants={textVariants}
                                whileHover={{ y: -5 }}
                                className={`p-6 lg:p-8 rounded-2xl border border-n-6 bg-n-7 transition-colors hover:border-color-1/50 flex flex-col h-full`}
                            >
                                <div className="mb-6">
                                    <span className="font-code text-xs uppercase tracking-widest text-n-4 block mb-2">
                                        {cat.metaphor}
                                    </span>
                                    <h3 className="h3 font-playfair text-n-1">{cat.title}</h3>
                                </div>
                                <p className="body-2 text-n-4 leading-relaxed mb-8 flex-grow">
                                    {cat.description}
                                </p>
                                <div className={`w-12 h-1 ${cat.color} rounded-full`} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            <Section id="work-cta" crosses>
                <div className="container py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="h2 font-playfair mb-10">Let’s find the right way for you.</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/contact">
                                <Button white>
                                    Get started
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>Back to Home</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default WhatWeDoDetail;
