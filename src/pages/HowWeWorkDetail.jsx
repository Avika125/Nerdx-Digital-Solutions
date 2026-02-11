import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";
import { grid, searchMd, sliders04, plusSquare } from "../assets";

const HowWeWorkDetail = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const FloatingOrb = ({ color, size, top, left, delay }) => (
        <motion.div
            className={`absolute ${size} ${color} blur-[12rem] rounded-full pointer-events-none -z-1`}
            animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 60, 0],
                scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            style={{ top, left }}
        />
    );

    return (
        <div className="bg-n-8 overflow-hidden relative">
            {/* Background Atmosphere */}
            <FloatingOrb color="bg-color-1/10" size="w-[60rem] h-[60rem]" top="10%" left="-10%" delay={0} />
            <FloatingOrb color="bg-color-2/10" size="w-[40rem] h-[40rem]" top="40%" left="70%" delay={2} />
            <FloatingOrb color="bg-color-3/10" size="w-[50rem] h-[50rem]" top="70%" left="10%" delay={4} />
            {/* Hero Section */}
            <Section className="pt-[12rem] -mt-[5.25rem]" id="how-we-work-hero" crosses customPaddings>
                <div className="container relative z-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-[62rem] mb-12 lg:mb-20"
                    >
                        <motion.h1
                            variants={textVariants}
                            className="h1 font-playfair mb-6 text-n-1 text-[2.5rem] leading-[1.1] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]"
                        >
                            We keep you close, and your users closer
                        </motion.h1>
                        <motion.p
                            variants={textVariants}
                            className="body-1 text-n-3 max-w-3xl text-base md:text-lg lg:text-xl"
                        >
                            We know that delivering work that doesn’t meet the needed user outcomes hurts us as much as our partners. So we focus every part of our process around the end users, and only them.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Terrain/Wireframe Background Placeholder Effect */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#AC6AFF" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#FFC876" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,500 Q250,400 500,500 T1000,500" fill="none" stroke="url(#gradient-hero)" strokeWidth="1" />
                        <path d="M0,600 Q250,500 500,600 T1000,600" fill="none" stroke="url(#gradient-hero)" strokeWidth="1" />
                        <path d="M0,700 Q250,600 500,700 T1000,700" fill="none" stroke="url(#gradient-hero)" strokeWidth="1" />
                        {/* Simple grid lines for effect */}
                        {Array.from({ length: 15 }).map((_, i) => (
                            <line key={i} x1={i * 70} y1="0" x2={i * 70} y2="1000" stroke="#252134" strokeWidth="0.5" />
                        ))}
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-color-1/10 blur-[12rem] rounded-full" />
                </div>
            </Section>

            {/* Philosophy Section */}
            <Section id="philosophy" crosses>
                <div className="container py-12 lg:py-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid lg:grid-cols-2 gap-10 md:gap-20"
                    >
                        <motion.h2 variants={textVariants} className="h2 font-playfair leading-tight text-n-1">
                            We always set out to get it right the first time
                        </motion.h2>
                        <motion.div variants={textVariants} className="space-y-6 body-2 text-n-4">
                            <p>
                                We work with you to revisit your brief and your pain points, ensuring that what’s been identified is the actual user problem to address.
                            </p>
                            <p>
                                We use the precious time we have with you to chat, ask questions, listen and observe, rather than try sell an idea, or worse yet, a solution only we have fallen in love with.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* NERD Horizontal Section */}
            <Section id="nerd-framework" crosses>
                <div className="container py-12 lg:py-24 relative z-2">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        className="h3 font-playfair text-center mb-20 text-n-1/80 uppercase tracking-widest"
                    >
                        Put simply (again), we are nerds
                    </motion.h3>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { letter: "N", title: "NAVIGATE", text: "We start by exploring your business, objectives and what makes it all tick." },
                            { letter: "E", title: "EXPLODE", text: "We pull it apart in search of all opportunities. We love good ol' blue sky thinking." },
                            { letter: "R", title: "REFINE", text: "After some hustling and huddling, we refine our ideas into elegant solutions." },
                            { letter: "D", title: "DEFINE", text: "Lastly we craft user-centric products for you to take on the world. And win." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={textVariants}
                                whileHover={{ scale: 1.05, borderColor: "rgba(172, 106, 255, 0.5)" }}
                                className="relative p-6 md:p-8 bg-n-7 rounded-3xl border border-n-6 text-center group transition-colors overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-n-8/0 to-n-8/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-1">
                                    <div className="font-playfair text-[6rem] leading-none mb-2 text-n-1 transition-colors group-hover:text-color-1">
                                        {item.letter}
                                    </div>
                                    <h6 className="h6 font-code uppercase tracking-widest mb-4 text-xs font-bold text-n-1/50 group-hover:text-n-1">{item.title}</h6>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* Stages Section */}
            <Section id="stages" crosses>
                <div className="container py-12 lg:py-24 relative z-2">
                    <h3 className="h3 font-playfair text-center mb-20 text-n-1">And this is how we work</h3>
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                stage: "Discover",
                                title: "Research & Strategy",
                                text: "We unearth everything about the brief. This delivers the strategic underpinning, culminating in key insights, target audience segmentation, and defined functional scope.",
                                icon: searchMd,
                                color: "text-color-1"
                            },
                            {
                                stage: "Design",
                                title: "UI/UX & Creative",
                                text: "We bring strategy to life with a focus on simplification. We strive to make content accessible and consumable, delivering the best user experience for identified audiences.",
                                icon: sliders04,
                                color: "text-color-2"
                            },
                            {
                                stage: "Develop",
                                title: "Code & QA",
                                text: "We wrap recommendations into a technically crafted solution. Executed in sprints with ongoing QA, bringing the project to life via high-end code and agile procedures.",
                                icon: plusSquare,
                                color: "text-color-3"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="relative p-6 md:p-8 bg-n-8 border border-n-6 rounded-3xl overflow-hidden group hover:border-color-1/50 transition-colors"
                            >
                                <div className="absolute inset-0 bg-n-8 z-0" />
                                <div className="absolute inset-0 opacity-10 mix-blend-soft-light z-0 pointer-events-none" style={{ backgroundImage: `url(${grid})`, backgroundSize: '300px' }} />
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-color-1 to-color-2 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                                <div className="relative z-10 mb-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="inline-block py-1 px-3 rounded-full bg-n-7 font-code text-[0.75rem] uppercase tracking-wider text-n-1 border border-n-6">
                                            Stage 0{index + 1}
                                        </span>
                                        <div className={`p-3 rounded-xl bg-n-7 border border-n-6 ${item.color}`}>
                                            <img src={item.icon} width={24} height={24} alt={item.title} />
                                        </div>
                                    </div>

                                    <h4 className="h4 font-playfair text-n-1 mb-2">{item.stage}</h4>
                                    <p className="font-code text-xs font-bold text-n-1/50 uppercase tracking-widest">{item.title}</p>
                                </div>

                                <p className="relative z-10 body-2 text-n-4 leading-relaxed group-hover:text-n-3 transition-colors">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Footer CTA Section */}
            <Section id="work-cta" crosses>
                <div className="container py-12 lg:py-24 text-center relative z-2">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="h2 font-playfair mb-10 text-n-1">Let’s make some magic, together.</h2>
                        <Link to="/contact" className="h4 font-playfair text-n-1/80 hover:text-color-1 transition-colors group">
                            Get a quote <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
                        </Link>
                        <div className="mt-20">
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

export default HowWeWorkDetail;
