import { motion } from "framer-motion";
import { benefits } from "../constants";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12 lg:mb-20"
        >
          <div className="flex items-center space-x-3 opacity-70 px-3 py-1.5 bg-n-1/5 rounded-full backdrop-blur-md border border-n-1/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-color-1 animate-pulse" />
            <span className="uppercase tracking-[0.25em] text-[0.6rem] md:text-xs text-n-1 font-bold">
              The Advantage
            </span>
          </div>

          <h2 className="h1 font-grotesk font-black uppercase tracking-[-0.02em] 
text-[1.7rem] sm:text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] 
leading-[1.1] 
bg-clip-text text-transparent 
bg-gradient-to-b from-n-1 via-n-1 to-n-1/30">
            Chat Smarter, <br className="hidden md:block" />
            <span className="text-color-1 inline-block -skew-x-6 px-2 
  hover:scale-105 transition-transform duration-500 cursor-default">
              Not Harder
            </span>
          </h2>


          <p className="body-1 text-n-3 mt-6 max-w-2xl font-light text-base md:text-lg lg:text-xl">
            Experience the next generation of digital assistance with Nerdx's battle-tested frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {benefits
            .slice(0, benefits.length - 3)   // ✅ Removed last 3 objects
            .map((item) => (
              <div
                className="block relative p-0.5"
                key={item.id}
              >
                <div className="absolute inset-0 pointer-events-none -z-1">
                  <img
                    src={item.backgroundUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-fill"
                  />
                </div>

                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>

                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
