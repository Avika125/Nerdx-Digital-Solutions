import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Button from "./Button";
import whatwedopage from "../assets/whatwedopage.mp4";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  /* ---------------- Background Orbs ---------------- */

  const GlowOrb = ({ color, size, top, left }) => (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: "blur(180px)",
        opacity: 0.25,
        borderRadius: "50%",
        zIndex: 0
      }}
    />
  );

  const FloatingOrb = ({ color, size, top, left, delay = 0 }) => (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: "blur(100px)",
        opacity: 0.15,
        borderRadius: "50%",
        zIndex: 0
      }}
      animate={{
        y: [0, 30, -20, 0],
        x: [0, 15, -10, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
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

  // 🔥 Modern premium system font
  const fontStyle = {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  };

  const FormInput = ({ label, placeholder, type = "text", ...props }) => (
    <div className="group relative" style={fontStyle}>
      <label className="block text-[0.7rem] uppercase tracking-[0.25em] text-white/50 mb-2 transition-all duration-300">
        {label}
      </label>

      <div className="relative">
        {type === "textarea" ? (
          <textarea
            rows="1"
            placeholder={placeholder}
            style={fontStyle}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm md:text-base font-light outline-none transition-all duration-300 focus:border-color-1/60 focus:bg-white/[0.07] placeholder:text-white/25 resize-none overflow-hidden"
            {...props}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            style={fontStyle}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm md:text-base font-light outline-none transition-all duration-300 focus:border-color-1/60 focus:bg-white/[0.07] placeholder:text-white/25"
            {...props}
          />
        )}
      </div>
    </div>
  );

  return (
    <Section
      className="py-16 lg:py-24 overflow-hidden relative"
      id="lets-talk"
    >
      {/* Background Layer - Matched from WhatWeDoDetail.jsx */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fixed Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={whatwedopage} type="video/mp4" />
          </video>
          {/* Overlay to ensure readability and match the site theme */}
          <div className="absolute inset-0 bg-[#050510]/80" />
        </div>

        {/* Ambient orbs from WhatWeDoDetail */}
        <GlowOrb color="#AC6AFF" size="600px" top="-10%" left="-10%" />
        <GlowOrb color="#7ADB78" size="600px" top="40%" left="60%" />
        <FloatingOrb color="#FFC876" size="400px" top="10%" left="70%" delay={1} />
        <FloatingOrb color="#AC6AFF" size="300px" top="60%" left="5%" delay={2} />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container relative z-10">
        <motion.div className="max-w-[56rem] mx-auto">

          {/* Heading */}
          <div className="text-center mb-12 lg:mb-16" style={fontStyle}>
            <motion.h2
              className="font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-[1.1]"
              style={{ ...fontStyle, letterSpacing: "-0.02em" }}
            >
              Let’s Talk
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AC6AFF] via-[#FFC876] to-[#7ADB78]">
                Build something legendary
              </span>
            </motion.h2>

            <p className="text-white/60 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
              Drop your brief below. We engineer digital experiences that leave a lasting impact.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative bg-[#080815]/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 md:p-10 lg:p-14 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]"
            style={fontStyle}
          >
            <div className="grid gap-12">

              <FormInput
                label="The Vision"
                placeholder="What are we building?"
                type="textarea"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <FormInput label="Your Name" placeholder="John Doe" />
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
                  <label className="text-[0.7rem] uppercase tracking-[0.25em] text-white/40">
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
                      style={fontStyle}
                      className={`cursor-pointer px-6 py-3 rounded-full border transition-all duration-300 text-[0.7rem] uppercase tracking-[0.15em]
                        ${selectedServices.includes(option)
                          ? "bg-white/15 border-color-1 text-white"
                          : "bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                        }`}
                    >
                      {option}
                    </motion.div>
                  ))}

                  <button
                    type="button"
                    onClick={() => setIsAdding(true)}
                    style={fontStyle}
                    className="px-6 py-3 rounded-full border border-dashed border-white/20 text-white/30 hover:text-white hover:border-white/60 transition-all text-[0.7rem] uppercase tracking-wider"
                  >
                    + Custom
                  </button>
                </div>

                {isAdding && (
                  <div className="flex justify-center">
                    <input
                      autoFocus
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                      onKeyDown={handleAddOption}
                      style={fontStyle}
                      placeholder="Type your custom need and press Enter"
                      className="w-full max-w-md bg-white/[0.04] border border-white/20 rounded-full px-5 py-3 text-white text-sm font-light outline-none transition-all focus:border-color-1/60 focus:bg-white/[0.07] placeholder:text-white/30"
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="pt-6 flex flex-col items-center gap-4">
                <Button
                  className="min-w-[14rem] py-5 rounded-xl"
                  white
                  onClick={() => alert("Form submitted!")}
                >
                  Submit Vision
                </Button>

                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/30">
                  Average response time: &lt; 24 hours
                </p>
              </div>

            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
