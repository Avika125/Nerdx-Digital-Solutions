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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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

    // Reusable Input Component for cleaner JSX
    const FormInput = ({ label, placeholder, type = "text", ...props }) => (
        <div className="group relative">
            <label className="block font-code text-[0.65rem] uppercase tracking-[0.2em] text-n-4 mb-2 group-focus-within:text-color-1 transition-colors">
                {label}
            </label>
            <div className="relative">
                {type === "textarea" ? (
                    <textarea
                        rows="1"
                        placeholder={placeholder}
                        className="w-full bg-transparent border-b border-n-6 py-3 text-n-1 text-lg lg:text-xl font-light outline-none transition-all focus:border-color-1 placeholder:text-n-6 resize-none overflow-hidden"
                        style={{ minHeight: "3rem" }}
                        onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = e.target.scrollHeight + "px";
                        }}
                        {...props}
                    ></textarea>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full bg-transparent border-b border-n-6 py-3 text-n-1 text-lg lg:text-xl font-light outline-none transition-all focus:border-color-1 placeholder:text-n-6"
                        {...props}
                    />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-color-1 transition-all duration-500 group-focus-within:w-full" />
            </div>
        </div>
    );

    return (
        <Section className="py-20 lg:py-24 overflow-hidden" id="lets-talk" crosses>
            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-color-1/10 rounded-full blur-[10rem] pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[20%] right-[20%] w-[35rem] h-[35rem] bg-color-2/10 rounded-full blur-[8rem] pointer-events-none mix-blend-screen" />

            <div className="container relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-[60rem] mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-16 lg:mb-20">
                        <motion.h2
                            variants={textVariants}
                            className="font-grotesk font-black uppercase tracking-tighter text-[1rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.9] text-white mb-6"
                        >
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-2">
                                The Future
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={textVariants}
                            className="text-n-3 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Have a vision? We have the engineering artistry to realize it.
                            <br className="hidden md:block" /> Drop your brief below or request a quote.
                        </motion.p>
                    </div>

                    {/* Form Container */}
                    <motion.form
                        variants={textVariants}
                        className="relative bg-[#050510]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {/* Decorative Top Border Gradient */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color-1 to-transparent opacity-50" />

                        <div className="grid gap-12 lg:gap-16">
                            {/* Section 1: Project Details */}
                            <div className="space-y-8">
                                <FormInput
                                    label="The Vision"
                                    placeholder="Tell us about your project, goals, and any specific requirements..."
                                    type="textarea"
                                />
                            </div>

                            {/* Section 2: User Info */}
                            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                                <FormInput
                                    label="Your Name"
                                    placeholder="John Doe"
                                    type="text"
                                />
                                <FormInput
                                    label="Email Address"
                                    placeholder="john@example.com"
                                    type="email"
                                />
                            </div>

                            {/* Section 3: Services */}
                            <div className="space-y-6">
                                <label className="block font-code text-[1rem] uppercase tracking-[0.2em] text-n-4">
                                    I need help with:
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {options.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => toggleService(option)}
                                            className={`
                                                relative cursor-pointer px-6 py-3 rounded-full border transition-all duration-300 font-code text-xs uppercase tracking-wider
                                                ${selectedServices.includes(option)
                                                    ? "bg-white/5 border-color-1 text-white shadow-[0_0_20px_rgba(172,106,255,0.3)]"
                                                    : "bg-transparent border-white/10 text-n-3 hover:border-white/30 hover:text-white"
                                                }
                                            `}
                                        >
                                            {selectedServices.includes(option) && (
                                                <div className="absolute inset-0 rounded-full bg-color-1/10 blur-md -z-1" />
                                            )}
                                            {option}
                                        </div>
                                    ))}

                                    {/* Add Custom Tag Logic */}
                                    {isAdding ? (
                                        <input
                                            autoFocus
                                            type="text"
                                            value={newOption}
                                            onChange={(e) => setNewOption(e.target.value)}
                                            onKeyDown={handleAddOption}
                                            onBlur={() => setIsAdding(false)}
                                            className="px-6 py-3 rounded-full border border-color-1 bg-transparent text-white text-xs font-code uppercase tracking-wider outline-none w-40 placeholder:text-white/20"
                                            placeholder="TYPE & ENTER"
                                        />
                                    ) : (
                                        <button
                                            onClick={() => setIsAdding(true)}
                                            className="px-6 py-3 rounded-full border border-dashed border-white/20 text-white/40 hover:text-white hover:border-white/60 transition-all font-code text-xs uppercase tracking-wider flex items-center gap-2 group"
                                        >
                                            <span>+ Build Custom</span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-8 flex justify-center">
                                <Button
                                    className="w-full sm:w-auto min-w-[12rem]"
                                    white // Use white variant for high contrast CTA
                                    onClick={() => alert("Form submitted!")}
                                >
                                    Let's Make It Happen
                                </Button>
                            </div>
                        </div>

                    </motion.form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
