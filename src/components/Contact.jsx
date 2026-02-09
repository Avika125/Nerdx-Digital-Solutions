import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Button from "./Button";
import Arrow from "../assets/svg/Arrow";

const Contact = () => {
    const [selectedServices, setSelectedServices] = useState([]);

    const toggleService = (service) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

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

    const [options, setOptions] = useState([
        "website",
        "mobile app",
        "digital strategy",
        "banner campaign",
        "brand design",
        "video",
        "digital newsletter",
        "not sure, help!",
    ]);
    const [isAdding, setIsAdding] = useState(false);
    const [newOption, setNewOption] = useState("");

    const handleAddOption = (e) => {
        if (e.key === "Enter" && newOption.trim()) {
            e.preventDefault();
            if (!options.includes(newOption.trim())) {
                setOptions([...options, newOption.trim()]);
                setSelectedServices([...selectedServices, newOption.trim()]);
            }
            setNewOption("");
            setIsAdding(false);
        }
    };

    return (
        <Section className="py-20 lg:py-32" id="lets-talk" crosses>
            <div className="container relative z-2">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-[55rem] mx-auto text-center"
                >
                    <motion.h2
                        variants={textVariants}
                        className="h2 font-playfair mb-6 bg-clip-text text-transparent bg-gradient-to-br from-n-1 to-n-1/50"
                    >
                        Let's do this
                    </motion.h2>
                    <motion.p variants={textVariants} className="body-1 font-sora text-n-3 mb-12 max-w-2xl mx-auto">
                        Check out what we do, drop your brief below or get an instant quote.
                    </motion.p>

                    <motion.form
                        variants={textVariants}
                        className="text-left space-y-10 bg-n-8/80 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-n-1/10 shadow-2xl relative overflow-hidden"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-color-1 to-color-2 opacity-50" />

                        {/* Project Description */}
                        <div className="space-y-4">
                            <label className="block font-code text-[0.75rem] uppercase tracking-widest text-n-4 font-bold">
                                My project is...
                            </label>
                            <textarea
                                rows="3"
                                placeholder="Tell us about your project, goals, and any specific requirements..."
                                className="w-full bg-n-7 rounded-xl p-4 md:p-6 border-2 border-transparent focus:border-color-1 outline-none transition-all font-sora text-n-1 text-lg font-light resize-none placeholder:text-n-4/50"
                            ></textarea>
                        </div>

                        {/* Name and Email */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div className="space-y-4">
                                <label className="block font-code text-[0.75rem] uppercase tracking-widest text-n-4 font-bold">
                                    My name is...
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-n-7 rounded-xl p-4 md:p-6 border-2 border-transparent focus:border-color-1 outline-none transition-all font-sora text-n-1 text-lg font-light placeholder:text-n-4/50"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="block font-code text-[0.75rem] uppercase tracking-widest text-n-4 font-bold">
                                    My email is...
                                </label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full bg-n-7 rounded-xl p-4 md:p-6 border-2 border-transparent focus:border-color-1 outline-none transition-all font-sora text-n-1 text-lg font-light placeholder:text-n-4/50"
                                />
                            </div>
                        </div>

                        {/* Help Options */}
                        <div className="space-y-6">
                            <label className="block font-code text-[0.75rem] uppercase tracking-widest text-n-4 font-bold">
                                I need help with a:
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {options.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => toggleService(option)}
                                        className={`
                                            cursor-pointer px-5 py-2.5 rounded-full border transition-all duration-300 font-sora text-sm font-medium
                                            ${selectedServices.includes(option)
                                                ? "bg-color-1 border-color-1 text-n-1 shadow-[0_0_15px_rgba(172,106,255,0.4)]"
                                                : "bg-n-7/50 border-n-6 text-n-3 hover:border-n-4 hover:text-n-1"
                                            }
                                        `}
                                    >
                                        <span className="capitalize">{option}</span>
                                    </div>
                                ))}
                                {isAdding ? (
                                    <input
                                        autoFocus
                                        type="text"
                                        value={newOption}
                                        onChange={(e) => setNewOption(e.target.value)}
                                        onKeyDown={handleAddOption}
                                        onBlur={() => setIsAdding(false)}
                                        className="px-5 py-2.5 rounded-full border border-color-1 bg-n-7 text-n-1 text-sm font-medium outline-none placeholder:text-n-4/50 w-32"
                                        placeholder="Type & Enter"
                                    />
                                ) : (
                                    <button
                                        onClick={() => setIsAdding(true)}
                                        className="px-5 py-2.5 rounded-full border border-n-6 bg-n-7/50 text-n-3 hover:border-color-1 hover:text-color-1 transition-all duration-300 font-sora text-sm font-medium flex items-center gap-2 group"
                                    >
                                        <span>Add</span>
                                        <span className="text-lg leading-none group-hover:rotate-90 transition-transform duration-300">+</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-center pt-6">
                            <Button
                                className="w-full sm:w-auto px-12 group"
                                white
                                onClick={() => alert("Form submitted!")}
                            >
                                <span className="flex items-center justify-center">
                                    <span className="font-code font-bold uppercase tracking-wider">Send Message</span>
                                    <Arrow className="ml-2 fill-n-8 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </div>
                    </motion.form>
                </motion.div>
            </div>

            {/* Background Atmosphere */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-color-1/5 blur-[12rem] rounded-full -z-1 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-color-2/5 blur-[12rem] rounded-full -z-1 pointer-events-none" />
        </Section>
    );
};

export default Contact;
