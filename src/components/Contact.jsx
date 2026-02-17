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

    const FormInput = ({ label, placeholder, type = "text", ...props }) => (
        <div className="group relative">
            <label className="block font-code text-[0.65rem] uppercase tracking-[0.25em] text-white/50 mb-2 group-focus-within:text-color-1 transition-all duration-300">
                {label}
            </label>
            <div className="relative">
                {type === "textarea" ? (
                    <textarea
                        rows="1"
                        placeholder={placeholder}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm md:text-base font-light outline-none transition-all duration-300 focus:border-color-1/50 focus:bg-white/[0.06] placeholder:text-white/20 resize-none overflow-hidden"
                        style={{ minHeight: "3.5rem" }}
                        onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = e.target.scrollHeight + "px";
                        }}
                        {...props}
                    />
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm md:text-base font-light outline-none transition-all duration-300 focus:border-color-1/50 focus:bg-white/[0.06] placeholder:text-white/20"
                        {...props}
                    />
                )}
                <div className="absolute inset-0 rounded-xl bg-color-1/5 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </div>
    );

    return (
        <Section className="py-16 lg:py-24 overflow-hidden relative z-10" id="lets-talk">
            <div className="container relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-[56rem] mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <motion.h2
                            variants={textVariants}
                            className="font-playfair font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-[1.15]"
                        >
                            Ready to build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AC6AFF] via-[#FFC876] to-[#7ADB78]">
                                something legendary?
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={textVariants}
                            className="text-white/50 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed"
                        >
                            Drop your brief below. We engineer digital experiences that leave a lasting impact.
                        </motion.p>
                    </div>

                    {/* Form */}
                    <motion.form
                        variants={textVariants}
                        className="relative group/form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="relative bg-[#080815]/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 md:p-10 lg:p-14 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">

                            <div className="relative z-10 grid gap-12">

                                {/* Vision */}
                                <FormInput
                                    label="The Vision"
                                    placeholder="What are we building?"
                                    type="textarea"
                                />

                                {/* User Info */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <FormInput
                                        label="Your Name"
                                        placeholder="John Doe"
                                    />
                                    <FormInput
                                        label="Email Address"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                </div>

                                {/* Services */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-px flex-1 bg-white/10" />
                                        <label className="font-code text-[0.65rem] uppercase tracking-[0.25em] text-white/40 whitespace-nowrap">
                                            What do you need?
                                        </label>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-3">
                                        {options.map((option) => (
                                            <motion.div
                                                key={option}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => toggleService(option)}
                                                className={`
                                                    relative cursor-pointer px-6 py-3 rounded-full border transition-all duration-500 font-code text-[0.6rem] uppercase tracking-[0.15em]
                                                    ${selectedServices.includes(option)
                                                        ? "bg-white/15 border-color-1 text-white"
                                                        : "bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                                                    }
                                                `}
                                            >
                                                {option}
                                            </motion.div>
                                        ))}

                                        <button
                                            onClick={() => setIsAdding(true)}
                                            className="px-6 py-3 rounded-full border border-dashed border-white/20 text-white/30 hover:text-white hover:border-white/60 transition-all font-code text-[0.6rem] uppercase tracking-wider"
                                        >
                                            + Custom
                                        </button>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="pt-6 flex flex-col items-center gap-4">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto"
                                    >
                                        <Button
                                            className="w-full sm:w-auto min-w-[14rem] py-5 rounded-xl"
                                            white
                                            onClick={() => alert("Form submitted!")}
                                        >
                                            Submit Vision
                                        </Button>
                                    </motion.div>

                                    <p className="text-[0.6rem] font-code uppercase tracking-[0.2em] text-white/25">
                                        Average response time: &lt; 24 hours
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
