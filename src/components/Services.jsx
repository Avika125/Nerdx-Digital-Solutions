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

const Services = () => {
  return (
    <Section id="what-we-do">
      <div className="container">
        <Heading
          title="Solutions that solve. Products that inspire."
          text="We combine strategic thinking with artisanal engineering to deliver genuine outcomes."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[28rem] mb-5 p-6 border border-n-1/10 rounded-3xl overflow-hidden lg:p-12 xl:h-[32rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Strategic Deep-Dives</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                We unearth truth through research, ensuring we build the right thing, the right way.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[28rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-10">
                <h4 className="h4 mb-4">Artisanal Dev</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Technically crafted solutions executed in Agile sprints with high-end code and QA.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[32rem]">
              <div className="py-8 px-4 xl:px-8">
                <h4 className="h4 mb-4">Connected AI</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Intelligent automation and conversational UI designed to evolve with your business.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                        }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <div className="relative z-1 flex justify-center mt-10 lg:mt-15">
            <Link
              to="/what-we-do-detail"
              className="h4 font-playfair text-n-1 animate-pulse hover:text-color-1 transition-colors"
            >
              Discover all our services <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
