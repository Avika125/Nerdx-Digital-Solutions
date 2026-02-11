import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";
import { heroBackground } from "../assets";
import { motion } from "framer-motion";

const WhoWeAreDetail = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <Section
            id="who-we-are-detail"
            crosses
            className="relative overflow-hidden min-h-screen pt-[6rem] md:pt-[10rem]"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBackground}
                    className="w-full h-full object-cover opacity-20"
                    alt="Who We Are Background"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-n-8/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-transparent to-n-8/50" />

                {/* Atmosphere Orbs */}
                <div className="absolute top-[-10%] right-[-10%] w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-color-1/10 blur-[6rem] md:blur-[12rem] rounded-full animate-pulse pointer-events-none" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[18rem] md:w-[30rem] h-[18rem] md:h-[30rem] bg-color-3/5 blur-[5rem] md:blur-[10rem] rounded-full animate-pulse delay-1000 pointer-events-none" />
            </div>

            <div className="container relative z-10 pb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >

                    {/* Hero Section */}
                    <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
                        <motion.span
                            initial={{ letterSpacing: "0.5em", opacity: 0 }}
                            animate={{ letterSpacing: "0.3em", opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="inline-block mb-6 text-color-1 uppercase text-sm md:text-base"
                        >
                            The Agency Evolution
                        </motion.span>

                        <h1 className="font-grotesk font-extrabold uppercase tracking-tighter mb-8 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-n-1 via-n-1 to-n-1/20">
                            Problem <br className="hidden sm:block" /> Solvers.
                        </h1>

                        <div className="w-20 h-1 bg-color-1 mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(172,56,255,0.5)]" />

                        <p className="text-n-3 max-w-3xl mx-auto leading-relaxed text-base md:text-lg lg:text-xl font-light">
                            We thrive in the space where{" "}
                            <span className="text-n-1 font-normal">complexity</span> meets{" "}
                            <span className="text-color-1 font-semibold">clarity</span>.
                        </p>
                    </motion.div>

                    {/* Grid Section */}
                    <div className="grid lg:grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-32">

                        {/* Why Us Card */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="lg:col-span-12 xl:col-span-5 bg-n-8/30 backdrop-blur-2xl border border-n-1/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-[12rem] font-bold leading-none select-none">WE</span>
                            </div>

                            <h3 className="mb-10 font-grotesk font-bold uppercase tracking-tight text-xl md:text-2xl">
                                Why partners <br />
                                <span className="text-color-1">choose us</span>
                            </h3>

                            <ul className="space-y-5 md:space-y-6">
                                {[
                                    { id: "01", title: "Holistic Vision", text: "We see beyond the screen, integrating real-world impact." },
                                    { id: "02", title: "Raw Efficacy", text: "We prioritize solutions that work over superficial polish." },
                                    { id: "03", title: "Direct Action", text: "We don't wait for permission to innovate or solve." },
                                    { id: "04", title: "Trend Setter", text: "We define the future rather than just following it." },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-xl bg-gradient-to-br from-color-1/20 to-color-1/5 border border-color-1/30 flex items-center justify-center text-color-1 font-code text-xs">
                                            {item.id}
                                        </div>
                                        <div>
                                            <h5 className="text-n-1 font-bold mb-1 text-sm md:text-base">
                                                {item.title}
                                            </h5>
                                            <p className="text-n-4 text-xs md:text-sm">
                                                {item.text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Narrative Section */}
                        <div className="lg:col-span-12 xl:col-span-7 grid gap-6 md:gap-10">

                            <motion.div
                                variants={itemVariants}
                                className="bg-n-8/40 backdrop-blur-xl border border-n-1/10 rounded-[2.5rem] p-8 md:p-12"
                            >
                                <h4 className="tracking-[0.4em] text-color-1 text-xs font-bold uppercase mb-6">
                                    The Origin
                                </h4>

                                <p className="text-n-1 text-lg md:text-xl font-light italic leading-relaxed">
                                    "We escaped the corporate machine to rediscover the soul of problem solving."
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-n-8/40 backdrop-blur-xl border border-n-1/10 rounded-[2.5rem] p-8 md:p-12"
                            >
                                <h4 className="tracking-[0.4em] text-color-3 text-xs font-bold uppercase mb-6">
                                    The Present
                                </h4>

                                <p className="text-n-2 text-sm md:text-lg leading-relaxed font-light">
                                    Today, we transform ideas into battle-tested digital powerhouses that move the needle.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center py-10 md:py-16 bg-n-8/20 rounded-[4rem] backdrop-blur-sm border border-n-1/5"
                    >
                        <h2 className="font-grotesk font-black uppercase mb-10 text-[2rem] md:text-[3.5rem] tracking-tighter leading-none">
                            Let's{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-3">
                                Collaborate.
                            </span>
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12">
                            <Button href="#contact" white>
                                Start a Project
                            </Button>

                            <Link
                                to="/"
                                className="text-n-1 font-bold text-lg hover:text-color-1 transition-colors flex items-center group"
                            >
                                <span className="mr-4">Return Home</span>
                                <span className="group-hover:translate-x-2 transition-transform">
                                    →
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </Section>
    );
};

export default WhoWeAreDetail;
