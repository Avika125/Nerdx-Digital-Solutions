import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brainwaveSymbol } from "../assets";
import { collabApps } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <Section id="how-we-work" crosses className="overflow-hidden bg-[#050510]">
            <div className="container relative z-1 py-10 lg:py-24">
                {/* Immersive Background Atmosphere */}
                <div className="absolute top-[10%] right-[-5%] w-[45rem] h-[45rem] bg-color-1/5 blur-[12rem] rounded-full animate-pulse-slow pointer-events-none -z-1" />
                <div className="absolute bottom-[10%] left-[-5%] w-[35rem] h-[35rem] bg-color-3/5 blur-[10rem] rounded-full animate-pulse-slow delay-1000 pointer-events-none -z-1" />

                <div className="lg:flex items-center gap-12 xl:gap-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-[35rem]"
                    >
                        {/* High-Impact Heading */}
                        <motion.div variants={itemVariants} className="mb-10 md:mb-12">
                            <h2 className="h2 font-grotesk font-black uppercase tracking-tighter text-[2rem] sm:text-[2.5rem] md:text-[4rem] leading-[1.1] md:leading-[1] bg-clip-text text-transparent bg-gradient-to-b from-n-1 via-n-1 to-n-1/30 mb-6">
                                Put simply, <br />
                                <span className="text-color-1 inline-block hover:scale-105 transition-transform duration-500">we are nerds.</span>
                            </h2>
                            <p className="body-2 text-n-4 text-base md:text-lg font-light leading-relaxed max-w-[28rem]">
                                We don't just build apps; we engineer solutions that solve real-world problems. Our process is as unconventional as our team.
                            </p>
                        </motion.div>

                        {/* NERD Framework Pillar Cards */}
                        <ul className="space-y-4 mb-12">
                            {[
                                {
                                    letter: "N",
                                    title: "NAVIGATE",
                                    text: "We start by exploring your business, objectives and what makes it all tick.",
                                    color: "from-color-1/20 to-color-1/5",
                                    glow: "shadow-color-1/20"
                                },
                                {
                                    letter: "E",
                                    title: "EXPLODE",
                                    text: "We pull it apart in search of all opportunities. We love good ol' blue sky thinking.",
                                    color: "from-color-3/20 to-color-3/5",
                                    glow: "shadow-color-3/20"
                                },
                                {
                                    letter: "R",
                                    title: "REFINE",
                                    text: "After some hustling and huddling, we refine our ideas into elegant solutions.",
                                    color: "from-color-1/20 to-color-1/5",
                                    glow: "shadow-color-1/20"
                                },
                                {
                                    letter: "D",
                                    title: "DEFINE",
                                    text: "Lastly we craft user-centric products for you to take on the world. And win.",
                                    color: "from-color-3/20 to-color-3/5",
                                    glow: "shadow-color-3/20"
                                },
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-n-8/40 backdrop-blur-xl border border-n-1/5 rounded-2xl group-hover:border-n-1/20 transition-all duration-300" />
                                    <div className="relative flex items-center p-4 md:p-6 cursor-default">
                                        <div className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${item.color} border border-n-1/10 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg ${item.glow}`}>
                                            <span className="font-grotesk font-black text-2xl text-n-1">
                                                {item.letter}
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="font-grotesk font-black tracking-[0.2em] text-color-1 text-xs mb-1 uppercase group-hover:translate-x-1 transition-transform">
                                                {item.title}
                                            </h6>
                                            <p className="body-2 text-n-4 text-xs md:text-sm leading-relaxed group-hover:text-n-2 transition-colors">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div variants={itemVariants} className="pt-6 border-t border-n-1/10">
                            <p className="body-2 text-n-3 italic text-sm">
                                Somewhat curious? Here’s a bit more about{" "}
                                <Link to="/how-we-work-detail" className="text-color-1 font-bold hover:text-n-1 transition-colors underline underline-offset-4 decoration-color-1/30">
                                    the uncommon way we work
                                </Link>{" "}
                                and{" "}
                                <a href="#what-we-do" className="text-color-3 font-bold hover:text-n-1 transition-colors underline underline-offset-4 decoration-color-3/30 ml-1">
                                    what we do.
                                </a>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* High-Tech Interactive App Nexus */}
                    <div className="lg:ml-auto xl:w-[38rem] mt-16 lg:mt-0 relative group flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex w-[20rem] md:w-[26rem] lg:w-[30rem] xl:w-[32rem] aspect-square border border-n-1/10 rounded-full group-hover:border-n-1/20 transition-all duration-1000 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                        >
                            {/* Inner Glow Center */}
                            <div className="flex w-48 md:w-64 aspect-square m-auto border border-n-1/10 rounded-full bg-[#0a0a20]/40 backdrop-blur-2xl relative">
                                <div className="absolute inset-0 bg-color-1/10 blur-[3rem] animate-pulse rounded-full" />
                                <div className="w-[5rem] md:w-[7rem] aspect-square m-auto p-[1px] bg-gradient-to-br from-color-1 to-color-3 rounded-full relative z-1 shadow-[0_0_30px_rgba(172,56,255,0.3)]">
                                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full overflow-hidden">
                                        <img
                                            src={brainwaveSymbol}
                                            width={56}
                                            height={56}
                                            alt="nerdx"
                                            className="animate-pulse"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Rotating App Nodes */}
                            <ul>
                                {collabApps.map((app, index) => (
                                    <li
                                        key={app.id}
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45} group-hover:scale-110 transition-transform duration-700`}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        <div
                                            className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-8/80 backdrop-blur-xl border border-n-1/10 rounded-xl -rotate-${index * 45} hover:border-color-1 hover:scale-125 transition-all duration-300 shadow-xl group/node`}
                                        >
                                            <div className="absolute inset-0 bg-color-1 opacity-0 group-hover/node:opacity-10 blur-md rounded-xl transition-opacity" />
                                            <img
                                                className="m-auto relative z-1"
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <LeftCurve />
                            <RightCurve />
                        </motion.div>

                        {/* Additional High-Tech Accents */}
                        <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-transparent to-transparent opacity-40 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Cinematic Scanline Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </Section>
    );
};

export default Collaboration;