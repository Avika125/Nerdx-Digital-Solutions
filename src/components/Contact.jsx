import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Button from "./Button";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);

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
      className="py-16 lg:py-24 overflow-hidden relative z-10"
      id="lets-talk"
    >
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
