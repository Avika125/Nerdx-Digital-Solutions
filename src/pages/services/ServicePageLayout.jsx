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
        <span className="block text-2xl md:text-3xl font-bold" style={{ color: accent }}>{value}{suffix}</span>
        <span className="block text-xs text-white/50 mt-1 font-medium">{label}</span>
    </motion.div>
);

const Divider = () => (
    <div className="relative z-10 py-2">
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

            {/* Hero — image column only when hero.image is set */}
            <Section className="pt-[10rem] pb-12 relative z-10">
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                        <motion.div variants={textVariants} className="mb-6">
                            <Link to="/what-we-do-detail" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors font-code uppercase tracking-wider group">
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to services
                            </Link>
                        </motion.div>
                        <div className={`grid gap-8 lg:gap-12 items-center ${hero.image ? "lg:grid-cols-2" : "max-w-3xl"}`}>
                            <div>
                                <motion.div variants={textVariants} className="mb-3">
                                    <motion.span className="font-code px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/90" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                        {category}
                                    </motion.span>
                                </motion.div>
                                <motion.div variants={textVariants} className="relative inline-block">
                                    <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-2" style={{ color: accent }}>{hero.title}</h1>
                                    <motion.div className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#AC6AFF] to-[#7ADB78]" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }} style={{ background: `linear-gradient(to right, ${accent}, #7ADB78)` }} />
                                </motion.div>
                                <motion.p variants={textVariants} className="text-lg md:text-xl text-white/90 font-medium mb-4 mt-3">{hero.subtitle}</motion.p>
                                <motion.p variants={textVariants} className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">{hero.description}</motion.p>
                            </div>
                            {hero.image && (
                                <motion.div variants={textVariants} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }} className="relative rounded-2xl overflow-hidden border border-white/15" style={{ boxShadow: `0 20px 40px -12px rgba(0,0,0,0.5), 0 0 40px ${accent}15` }}>
                                    <img src={hero.image} alt={hero.title} className="w-full h-auto object-cover rounded-2xl" />
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </Section>

            <Divider />

            {/* Stats — image column only when stats.image is set */}
            <Section className="relative z-10 py-8">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className={`grid gap-6 lg:gap-0 items-center overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm ${stats.image ? "lg:grid-cols-2" : ""}`} style={{ background: `linear-gradient(135deg, ${accent}18 0%, rgba(255,255,255,0.03) 100%)`, boxShadow: `0 0 60px ${accent}08` }}>
                        <div className="p-6 md:p-10 lg:p-12 grid grid-cols-2 gap-6">
                            {stats.items.map((s, i) => <AnimatedNumber key={i} value={s.value} suffix={s.suffix || ""} label={s.label} accent={accent} />)}
                        </div>
                        {stats.image && <motion.div variants={textVariants} className="relative h-48 lg:h-full min-h-[12rem] lg:min-h-[14rem]"><img src={stats.image} alt="" className="absolute inset-0 w-full h-full object-cover" /></motion.div>}
                    </motion.div>
                </div>
            </Section>

            {/* Workflow — image column only when workflow.image is set */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className={`grid gap-8 lg:gap-12 items-center ${workflow.image ? "lg:grid-cols-2" : "max-w-3xl"}`}>
                        <div>
                            <motion.span variants={textVariants} className="font-code text-[0.6rem] uppercase tracking-[0.25em] text-white/40">{workflow.label}</motion.span>
                            <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-4 text-white mt-2">{workflow.title}</motion.h2>
                            <motion.p variants={textVariants} className="text-white/60 text-sm mb-6">{workflow.description}</motion.p>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-3 mb-8">
                                {workflow.steps.map((item, i) => <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15" style={{ background: "rgba(255,255,255,0.04)" }}>
                                    <span className="font-code text-xs font-bold opacity-50" style={{ color: accent }}>{item.step}</span>
                                    <span className="text-base font-semibold text-white">{item.label}</span>
                                </motion.div>)}
                            </motion.div>
                            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-3">
                                <Link to="/contact"><Button white>Get a Custom Quote</Button></Link>
                                <Link to="/contact"><Button>Chat with An Expert</Button></Link>
                            </motion.div>
                        </div>
                        {workflow.image && <motion.div variants={textVariants} whileHover={{ scale: 1.02, y: -4 }} className="relative rounded-2xl overflow-hidden border border-white/15"><img src={workflow.image} alt="" className="w-full h-auto object-cover rounded-2xl" /></motion.div>}
                    </motion.div>
                </div>
            </Section>

            <Divider />

            {/* Happy Clients */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative p-6 md:p-10 rounded-2xl overflow-hidden backdrop-blur-sm" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, ${accent}12 100%)`, border: "1px solid rgba(255,255,255,0.1)" }}>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <motion.span variants={textVariants} className="font-code text-xs uppercase tracking-[0.2em] text-white/40">{happyClients.label}</motion.span>
                                <motion.h3 variants={textVariants} className="font-playfair text-2xl md:text-3xl mt-2 mb-3 text-white">{happyClients.title}</motion.h3>
                                <motion.p variants={textVariants} className="text-4xl md:text-5xl font-bold mb-2" style={{ color: accent }}>{happyClients.stat}</motion.p>
                                <motion.p variants={textVariants} className="text-white/50 text-sm">{happyClients.subtext}</motion.p>
                            </div>
                            <motion.div variants={textVariants} className="flex flex-wrap gap-2 justify-center md:justify-end">
                                {happyClients.tags.map((tag, i) => <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>{tag}</span>)}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Intelligent Section */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="max-w-4xl">
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-6 text-white">{intelligentSection.title}</motion.h2>
                        <motion.p variants={textVariants} className="text-base text-white/70 leading-relaxed mb-8">{intelligentSection.description}</motion.p>
                        <motion.ul variants={textVariants} className="space-y-3">
                            {intelligentSection.bullets.map((item, i) => <li key={i} className="flex items-start gap-2 text-white/70 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />{item}</li>)}
                        </motion.ul>
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
                            <p className="text-white/65 text-sm leading-relaxed">{challengeSolution.challenge}</p>
                        </motion.div>
                        <motion.div variants={textVariants} whileHover={{ scale: 1.02 }} className="relative p-6 md:p-8 rounded-2xl overflow-hidden" style={{ border: `1px solid ${accent}50`, background: `linear-gradient(135deg, ${accent}15 0%, rgba(255,255,255,0.03) 100%)` }}>
                            <span className="absolute top-3 right-3 text-3xl opacity-20" style={{ color: accent }}>✓</span>
                            <h3 className="font-playfair text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: accent }}><span className="w-2 h-2 rounded-full" style={{ background: accent }} />The Solution</h3>
                            <p className="text-white/65 text-sm leading-relaxed mb-4">{challengeSolution.solution}</p>
                            <div className="flex flex-wrap gap-2">{challengeSolution.tags.map((t, i) => <span key={i} className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ border: `1px solid ${accent}50`, color: accent, background: `${accent}15` }}>{t}</span>)}</div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Testimonial */}
            <Section className="relative z-10 pb-12">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative p-8 md:p-12 rounded-2xl overflow-hidden" style={{ background: `linear-gradient(145deg, ${accent}20 0%, rgba(255,255,255,0.04) 50%)`, border: "1px solid rgba(255,255,255,0.1)" }}>
                        <span className="absolute top-6 left-6 text-5xl font-playfair opacity-20 text-white">&quot;</span>
                        <motion.p variants={textVariants} className="relative z-10 text-lg md:text-xl font-playfair italic text-white/90 leading-relaxed max-w-3xl mx-auto text-center">{testimonial.quote}</motion.p>
                        <motion.p variants={textVariants} className="text-center mt-6 font-code text-xs uppercase tracking-[0.25em] text-white/40">— {testimonial.attribution}</motion.p>
                    </motion.div>
                </div>
            </Section>

            {/* Principles */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">{principles.title}</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-10 max-w-xl mx-auto text-sm">{principles.subtitle}</motion.p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {principles.items.map((item, i) => <motion.div key={i} variants={textVariants} whileHover={{ y: -6 }} className="group p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <span className="text-3xl mb-3 block opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: accent }}>{item.emoji}</span>
                                <h4 className="font-playfair text-lg font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                            </motion.div>)}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Expertise */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">{expertise.title}</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-10 max-w-2xl mx-auto text-sm">{expertise.subtitle}</motion.p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {expertise.cards.map((card, i) => <motion.div key={i} variants={textVariants} whileHover={{ y: -6 }} className="group relative p-5 rounded-2xl overflow-hidden flex flex-col h-full" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: accent }} />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${accent}25` }}><span className="text-xl" style={{ color: accent }}>{card.icon}</span></div>
                                    <h4 className="font-playfair text-base font-semibold mb-2 text-white">{card.title}</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">{card.text}</p>
                                </div>
                            </motion.div>)}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Tech Stack */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">Our Toolbelt</motion.h2>
                        <motion.p variants={textVariants} className="text-white/60 text-center mb-10 text-sm">{techStack.subtitle}</motion.p>
                        <motion.div variants={textVariants} className="flex flex-wrap justify-center gap-3">
                            {techStack.items.map((tech, i) => <motion.span key={i} whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-2 rounded-xl text-white/85 font-medium text-sm" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}>{tech}</motion.span>)}
                        </motion.div>
                        {techStack.extra && <motion.p variants={textVariants} className="text-center mt-6 text-xs text-white/40 font-code">+ {techStack.extra}</motion.p>}
                    </motion.div>
                </div>
            </Section>

            {/* Process */}
            <Section className="relative z-10 pb-16">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 variants={textVariants} className="font-playfair text-2xl md:text-3xl mb-3 text-white text-center">Our Process</motion.h2>
                        <motion.p variants={textVariants} className="text-white/50 text-center mb-10 font-code text-xs uppercase tracking-[0.2em]">{processSteps.subtitle}</motion.p>
                        <div className="relative">
                            <div className="absolute left-5 md:left-10 top-6 bottom-6 w-px bg-gradient-to-b hidden md:block" style={{ background: `linear-gradient(to bottom, ${accent}50, transparent)` }} />
                            <div className="space-y-4">
                                {processSteps.items.map((step, i) => <motion.div key={i} variants={textVariants} whileHover={{ x: 6 }} className="relative flex flex-col md:flex-row gap-6 p-6 md:pl-20 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                    <div className="absolute left-3 md:left-5 top-8 w-3 h-3 rounded-full border-2 hidden md:block" style={{ borderColor: accent, background: "#050510" }} />
                                    <div className="md:w-48 flex-shrink-0">
                                        <span className="text-3xl font-bold opacity-20" style={{ color: accent }}>{step.num}</span>
                                        <h3 className="font-playfair text-lg font-semibold mt-2 text-white">{step.title}</h3>
                                        <Link to="/contact" className="inline-flex items-center gap-2 mt-3 text-xs font-semibold group" style={{ color: accent }}>{step.link} <span className="group-hover:translate-x-1 transition-transform">→</span></Link>
                                    </div>
                                    <p className="flex-grow text-white/60 text-sm leading-relaxed pt-1">{step.text}</p>
                                </motion.div>)}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="relative z-10 pb-20">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center p-8 md:p-14 rounded-2xl backdrop-blur-sm" style={{ background: `linear-gradient(145deg, ${accent}25 0%, rgba(255,255,255,0.05) 100%)`, border: "1px solid rgba(255,255,255,0.15)", boxShadow: `0 0 80px ${accent}15` }}>
                        <span className="font-code text-xs uppercase tracking-[0.25em] text-white/40 block mb-4">Ready when you are</span>
                        <h2 className="font-playfair font-bold mb-4 text-white text-2xl md:text-3xl">Let&apos;s find the right way for you.</h2>
                        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">{testimonial.ctaText || "Book a free consultation and we'll map out the perfect strategy for your project."}</p>
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
}
