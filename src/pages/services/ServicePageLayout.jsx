import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Button from "../../components/Button";

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const GlowOrb = ({ color, size, top, left }) => (
    <div style={{ position: "absolute", width: size, height: size, top, left, background: color, filter: "blur(180px)", opacity: 0.25, borderRadius: "50%", zIndex: 0 }} />
);

const FloatingOrb = ({ color, size, top, left, delay = 0 }) => (
    <motion.div
        style={{ position: "absolute", width: size, height: size, top, left, background: color, filter: "blur(100px)", opacity: 0.12, borderRadius: "50%", zIndex: 0 }}
        animate={{ y: [0, 25, -15, 0], x: [0, 12, -8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay }}
    />
);

const AnimatedNumber = ({ value, suffix = "", label, accent }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ scale: 1.05 }} className="text-center">
        <span className="block text-3xl md:text-4xl font-bold" style={{ color: accent }}>{value}{suffix}</span>
        <span className="block text-sm text-white/50 mt-1 font-medium">{label}</span>
    </motion.div>
);

const Divider = () => (
    <div className="relative z-10 py-4">
        <div className="container">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
    </div>
);

export default function ServicePageLayout({ content }) {
    const { accent, category, hero, stats, workflow, happyClients, intelligentSection, challengeSolution, testimonial, principles, expertise, techStack, processSteps } = content;

    return (
        <div className="relative min-h-screen overflow-hidden text-white font-sans antialiased" style={{ background: "#050510" }}>
            <GlowOrb color={accent} size="600px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="500px" top="50%" left="70%" />
            <FloatingOrb color="#FFC876" size="350px" top="25%" left="75%" delay={1} />
            <FloatingOrb color={accent} size="280px" top="65%" left="5%" delay={2} />
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            {/* Hero */}
            <Section className="pt-[12rem] pb-20 relative z-10">
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                        <motion.div variants={textVariants} className="mb-8">
                            <Link to="/what-we-do-detail" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors font-code uppercase tracking-wider group">
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to services
                            </Link>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div>
                                <motion.div variants={textVariants} className="mb-4">
                                    <motion.span className="font-code px-4 py-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/90" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                        {category}
                                    </motion.span>
                                </motion.div>
                                <motion.div variants={textVariants} className="relative inline-block">
                                    <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-2" style={{ color: accent }}>{hero.title}</h1>
                                    <motion.div className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#AC6AFF] to-[#7ADB78]" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }} style={{ background: `linear-gradient(to right, ${accent}, #7ADB78)` }} />
                                </motion.div>
                                <motion.p variants={textVariants} className="text-xl md:text-2xl text-white/90 font-medium mb-6 mt-4">{hero.subtitle}</motion.p>
                                <motion.p variants={textVariants} className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">{hero.description}</motion.p>
                            </div>
                            <motion.div variants={textVariants} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }} className="relative rounded-2xl overflow-hidden border border-white/15" style={{ boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px ${accent}15` }}>
                                {hero.image ? <img src={hero.image} alt={hero.title} className="w-full h-auto object-cover rounded-2xl" /> : <div className="aspect-video rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${accent}25 0%, rgba(255,255,255,0.05) 100%)` }}><span className="text-4xl font-playfair opacity-30" style={{ color: accent }}>{hero.title.charAt(0)}</span></div>}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <Divider />

            {/* Stats */}
            <Section className="relative z-10 py-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, ${accent}18 0%, rgba(255,255,255,0.03) 100%)`, boxShadow: `0 0 80px ${accent}08` }}>
                        <div className="p-8 md:p-12 lg:p-16 grid grid-cols-2 gap-8">
                            {stats.items.map((s, i) => <AnimatedNumber key={i} value={s.value} suffix={s.suffix || ""} label={s.label} accent={accent} />)}
                        </div>
                        {stats.image ? <motion.div variants={textVariants} className="relative h-64 lg:h-full min-h-[16rem] lg:min-h-[20rem]"><img src={stats.image} alt="" className="absolute inset-0 w-full h-full object-cover" /></motion.div> : <div className="h-48 lg:h-64 min-h-[12rem] flex items-center justify-center" style={{ background: `${accent}08` }} />}
                    </motion.div>
                </div>
            </Section>

            {/* Workflow */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                            <motion.span variants={textVariants} className="font-code text-[0.65rem] uppercase tracking-[0.3em] text-white/40">{workflow.label}</motion.span>
                            <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-6 text-white mt-2">{workflow.title}</motion.h2>
                            <motion.p variants={textVariants} className="text-white/60 mb-10">{workflow.description}</motion.p>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-4 mb-12">
                                {workflow.steps.map((item, i) => <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/15" style={{ background: "rgba(255,255,255,0.04)" }}>
                                    <span className="font-code text-xs font-bold opacity-50" style={{ color: accent }}>{item.step}</span>
                                    <span className="text-lg font-semibold text-white">{item.label}</span>
                                </motion.div>)}
                            </motion.div>
                            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-5">
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Link to="/contact"><Button white>Get a Custom Quote</Button></Link></motion.div>
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Link to="/contact"><Button>Chat with An Expert</Button></Link></motion.div>
                            </motion.div>
                        </div>
                        {workflow.image ? <motion.div variants={textVariants} whileHover={{ scale: 1.02, y: -4 }} className="relative rounded-2xl overflow-hidden border border-white/15"><img src={workflow.image} alt="" className="w-full h-auto object-cover rounded-2xl" /></motion.div> : <div className="aspect-video rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${accent}15 0%, rgba(255,255,255,0.03) 100%)` }} />}
                    </motion.div>
                </div>
            </Section>

            <Divider />

            {/* Happy Clients */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative p-10 md:p-14 rounded-3xl overflow-hidden backdrop-blur-sm" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, ${accent}12 100%)`, border: "1px solid rgba(255,255,255,0.1)" }}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <motion.span variants={textVariants} className="font-code text-xs uppercase tracking-[0.25em] text-white/40">{happyClients.label}</motion.span>
                                <motion.h3 variants={textVariants} className="font-playfair text-3xl md:text-4xl mt-2 mb-4 text-white">{happyClients.title}</motion.h3>
                                <motion.p variants={textVariants} className="text-5xl md:text-6xl font-bold mb-2" style={{ color: accent }}>{happyClients.stat}</motion.p>
                                <motion.p variants={textVariants} className="text-white/50 text-sm">{happyClients.subtext}</motion.p>
                            </div>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-3 justify-center md:justify-end">
                                {happyClients.tags.map((tag, i) => <span key={i} className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>{tag}</span>)}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Intelligent Section */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="max-w-4xl">
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-8 text-white">{intelligentSection.title}</motion.h2>
                        <motion.p variants={textVariants} className="text-lg text-white/70 leading-relaxed mb-12">{intelligentSection.description}</motion.p>
                        <motion.ul variants={textVariants} className="space-y-4">
                            {intelligentSection.bullets.map((item, i) => <li key={i} className="flex items-start gap-3 text-white/70"><span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />{item}</li>)}
                        </motion.ul>
                    </motion.div>
                </div>
            </Section>

            {/* Challenge & Solution */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid md:grid-cols-2 gap-8">
                        <motion.div variants={textVariants} whileHover={{ scale: 1.02 }} className="relative p-8 md:p-10 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,100,100,0.2)", background: "linear-gradient(135deg, rgba(255,119,111,0.06) 0%, rgba(255,255,255,0.02) 100%)" }}>
                            <span className="absolute top-4 right-4 text-5xl font-bold opacity-10 text-[#FF776F]">?</span>
                            <h3 className="font-playfair text-xl font-semibold mb-4 text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF776F]" />The Challenge</h3>
                            <p className="text-white/65 leading-relaxed">{challengeSolution.challenge}</p>
                        </motion.div>
                        <motion.div variants={textVariants} whileHover={{ scale: 1.02 }} className="relative p-8 md:p-10 rounded-2xl overflow-hidden" style={{ border: `1px solid ${accent}50`, background: `linear-gradient(135deg, ${accent}15 0%, rgba(255,255,255,0.03) 100%)` }}>
                            <span className="absolute top-4 right-4 text-4xl opacity-20" style={{ color: accent }}>✓</span>
                            <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: accent }}><span className="w-2 h-2 rounded-full" style={{ background: accent }} />The Solution</h3>
                            <p className="text-white/65 leading-relaxed mb-6">{challengeSolution.solution}</p>
                            <div className="flex flex-wrap gap-3">{challengeSolution.tags.map((t, i) => <span key={i} className="text-sm px-4 py-2 rounded-lg font-medium" style={{ border: `1px solid ${accent}50`, color: accent, background: `${accent}15` }}>{t}</span>)}</div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Testimonial */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative p-12 md:p-16 rounded-3xl overflow-hidden" style={{ background: `linear-gradient(145deg, ${accent}20 0%, rgba(255,255,255,0.04) 50%)`, border: "1px solid rgba(255,255,255,0.1)" }}>
                        <span className="absolute top-8 left-8 text-7xl font-playfair opacity-20 text-white">&quot;</span>
                        <motion.p variants={textVariants} className="relative z-10 text-xl md:text-2xl lg:text-3xl font-playfair italic text-white/90 leading-relaxed max-w-4xl mx-auto text-center">{testimonial.quote}</motion.p>
                        <motion.p variants={textVariants} className="text-center mt-8 font-code text-xs uppercase tracking-[0.3em] text-white/40">— {testimonial.attribution}</motion.p>
                    </motion.div>
                </div>
            </Section>

            {/* Principles */}
            <Section className="relative z-10 pb-24">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">{principles.title}</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-14 max-w-2xl mx-auto">{principles.subtitle}</motion.p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {principles.items.map((item, i) => <motion.div key={i} variants={textVariants} whileHover={{ y: -10 }} className="group p-8 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <span className="text-4xl mb-4 block opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: accent }}>{item.emoji}</span>
                                <h4 className="font-playfair text-xl font-semibold text-white mb-3">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>)}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Expertise */}
            <Section className="relative z-10 pb-24">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">{expertise.title}</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-12 max-w-3xl mx-auto">{expertise.subtitle}</motion.p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {expertise.cards.map((card, i) => <motion.div key={i} variants={textVariants} whileHover={{ y: -8 }} className="group relative p-6 rounded-2xl overflow-hidden flex flex-col h-full" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: accent }} />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: `${accent}25` }}><span className="text-2xl" style={{ color: accent }}>{card.icon}</span></div>
                                    <h4 className="font-playfair text-lg font-semibold mb-3 text-white">{card.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{card.text}</p>
                                </div>
                            </motion.div>)}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Tech Stack */}
            <Section className="relative z-10 pb-24">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">Our Toolbelt</motion.h2>
                        <motion.p variants={textVariants} className="text-lg text-white/60 text-center mb-14">{techStack.subtitle}</motion.p>
                        <motion.div variants={textVariants} className="flex flex-wrap justify-center gap-4">
                            {techStack.items.map((tech, i) => <motion.span key={i} whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 rounded-xl text-white/85 font-medium" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}>{tech}</motion.span>)}
                        </motion.div>
                        {techStack.extra && <motion.p variants={textVariants} className="text-center mt-8 text-sm text-white/40 font-code">+ {techStack.extra}</motion.p>}
                    </motion.div>
                </div>
            </Section>

            {/* Process */}
            <Section className="relative z-10 pb-24">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-3xl md:text-4xl mb-4 text-white text-center">Our Process</motion.h2>
                        <motion.p variants={textVariants} className="text-white/50 text-center mb-16 font-code text-xs uppercase tracking-[0.2em]">{processSteps.subtitle}</motion.p>
                        <div className="relative">
                            <div className="absolute left-6 md:left-12 top-8 bottom-8 w-px bg-gradient-to-b hidden md:block" style={{ background: `linear-gradient(to bottom, ${accent}50, transparent)` }} />
                            <div className="space-y-6">
                                {processSteps.items.map((step, i) => <motion.div key={i} variants={textVariants} whileHover={{ x: 8 }} className="relative flex flex-col md:flex-row gap-8 p-8 md:pl-24 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                    <div className="absolute left-4 md:left-6 top-10 w-4 h-4 rounded-full border-2 hidden md:block" style={{ borderColor: accent, background: "#050510" }} />
                                    <div className="md:w-56 flex-shrink-0">
                                        <span className="text-4xl font-bold opacity-20" style={{ color: accent }}>{step.num}</span>
                                        <h3 className="font-playfair text-xl font-semibold mt-2 text-white">{step.title}</h3>
                                        <Link to="/contact" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold group" style={{ color: accent }}>{step.link} <span className="group-hover:translate-x-1 transition-transform">→</span></Link>
                                    </div>
                                    <p className="flex-grow text-white/60 leading-relaxed pt-2">{step.text}</p>
                                </motion.div>)}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="relative z-10 pb-28">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center p-12 md:p-20 rounded-3xl backdrop-blur-sm" style={{ background: `linear-gradient(145deg, ${accent}25 0%, rgba(255,255,255,0.05) 100%)`, border: "1px solid rgba(255,255,255,0.15)", boxShadow: `0 0 100px ${accent}15` }}>
                        <span className="font-code text-xs uppercase tracking-[0.3em] text-white/40 block mb-6">Ready when you are</span>
                        <h2 className="font-playfair font-bold mb-6 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Let&apos;s find the right way for you.</h2>
                        <p className="text-white/60 mb-10 max-w-lg mx-auto text-sm md:text-base">{testimonial.ctaText || "Book a free consultation and we'll map out the perfect strategy for your project."}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}><Link to="/contact"><Button white>Get started</Button></Link></motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}><Link to="/what-we-do-detail"><Button>View all services</Button></Link></motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}><Link to="/"><Button>Back to Home</Button></Link></motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
