import { Link } from "react-router-dom";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Section id="what-we-do">
      <div className="container px-4 sm:px-6">
        <Heading
          title="Solutions that solve. Products that inspire."
          text="We combine strategic thinking with artisanal engineering to deliver genuine outcomes."
        />

        <div className="relative">

          {/* MAIN CARD */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="relative z-1 flex flex-col lg:flex-row min-h-[20rem] mb-6 p-5 sm:p-6 md:p-8 border border-n-1/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 lg:w-3/5 pointer-events-none">
              <img
                src={service1}
                alt="AI Strategy"
                className="w-full h-full object-cover opacity-30 sm:opacity-40 lg:opacity-90 transition-opacity duration-500"
              />
            </div>

            {/* Content */}
            <div className="relative z-1 lg:ml-auto lg:max-w-[18rem]">
              <h4 className="h4 mb-3 text-lg sm:text-xl md:text-2xl">
                Strategic Deep-Dives
              </h4>

              <p className="body-2 mb-6 text-n-3 text-sm sm:text-base">
                We unearth truth through research, ensuring we build the right thing, the right way.
              </p>

              <ul className="text-sm sm:text-base">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-2 sm:py-3 border-t border-n-6"
                  >
                    <img src={check} width={18} height={18} alt="check" />
                    <p className="ml-3">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="hidden lg:block absolute left-1/2 bottom-6 -translate-x-1/2 border-n-1/10 border" />
          </motion.div>

          {/* GRID CARDS */}
          <div className="grid gap-6 lg:grid-cols-2">

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[18rem] sm:min-h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="Development"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 bg-gradient-to-b from-n-8/0 to-n-8/90">
                <h4 className="h4 mb-2 text-lg sm:text-xl md:text-2xl">
                  Artisanal Dev
                </h4>

                <p className="text-n-3 text-sm sm:text-base">
                  Technically crafted solutions executed in Agile sprints with high-end code and QA.
                </p>
              </div>

              <PhotoChatMessage />
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="p-4 sm:p-5 bg-n-7 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:bg-n-7/90"
            >
              <div className="py-4 sm:py-6">
                <h4 className="h4 mb-2 text-lg sm:text-xl md:text-2xl">
                  Connected AI
                </h4>

                <p className="text-n-3 mb-5 text-sm sm:text-base">
                  Intelligent automation and conversational UI designed to evolve with your business.
                </p>

                {/* Icons */}
                <ul className="flex flex-wrap justify-between gap-3">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-xl flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-n-6 transition-transform duration-300 hover:scale-110"
                    >
                      <img src={item} width={22} height={22} alt="icon" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Section */}
              <div className="relative h-[14rem] sm:h-[18rem] bg-n-8 rounded-xl overflow-hidden">
                <img
                  src={service3}
                  alt="AI"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </motion.div>
          </div>

          {/* LINK */}
          <div className="flex justify-center mt-10 sm:mt-14">
            <Link
              to="/what-we-do-detail"
              className="text-lg sm:text-xl font-playfair text-n-1 hover:text-color-1 transition-all group"
            >
              Discover all our services
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;