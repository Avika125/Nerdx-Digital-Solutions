import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "./Section";

const WhoWeAre = () => {
    return (
        <Section id="who-we-are" crosses>
            <div className="container relative">
                {/* Background Atmosphere */}
                <div className="hidden lg:block absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-color-1/5 blur-[12rem] rounded-full pointer-events-none -z-1" />

                <div className="lg:flex items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-[45rem]"
                    >
                        <h2 className="h2 font-playfair mb-4 md:mb-8 text-[2rem] lg:text-[3rem] leading-tight bg-clip-text text-transparent bg-gradient-to-br from-n-1 to-n-1/50">
                            We're a digital solutions business made up by tech misfits, passionate creatives and curious humans.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:ml-auto xl:w-[38rem] mt-4 lg:mt-2"
                    >
                        <div className="space-y-8 lg:w-[26rem] lg:mx-auto">
                            <p className="body-2 text-n-4 leading-relaxed group hover:text-n-3 transition-colors">
                                We work with entrepreneurs and forward-looking companies to transform ideas into products that <span className="text-n-1 font-semibold">HELP</span>, <span className="text-n-1 font-semibold">CHALLENGE</span>, and <span className="text-n-1 font-semibold">INSPIRE</span>.
                            </p>
                            <p className="body-2 text-n-4 leading-relaxed group hover:text-n-3 transition-colors">
                                From design through to code, we delight in finding simple solutions to complex challenges. And by collaborating with our clients to form rewarding relationships, we help their companies grow and evolve.
                            </p>
                            <p className="body-2 text-n-4 leading-relaxed group hover:text-n-3 transition-colors">
                                This process is further fuelled by our integrated approach to strategy, design and development, which allows us to help deliver ideas from concept to launch, and beyond.
                            </p>
                            <p className="body-2 text-n-4 font-bold border-l-2 border-color-1 pl-4">
                                Not in a rush? Here’s a bit more about{" "}
                                <Link to="/who-we-are-detail" className="text-n-1 underline decoration-color-1 underline-offset-4 hover:text-color-1 transition-colors">
                                    who we are.
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default WhoWeAre;
