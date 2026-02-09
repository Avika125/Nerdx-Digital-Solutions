import { useRef } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import Arrow from "../assets/svg/Arrow";

const Roadmap = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section className="overflow-hidden" id="stuff-that-worked">
      <div className="container relative">
        <div className="flex items-center justify-between mb-10">
          <Heading
            className="mb-0 !mb-0"
            tag="Ready to get started"
            title="Stuff that worked"
          />

          <div className="hidden lg:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-n-1/10 flex items-center justify-center bg-n-7 hover:border-color-1 transition-colors group"
            >
              <Arrow className="rotate-180 ml-0 fill-n-1 group-hover:fill-color-1 transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-n-1/10 flex items-center justify-center bg-n-7 hover:border-color-1 transition-colors group"
            >
              <Arrow className="ml-0 fill-n-1 group-hover:fill-color-1 transition-colors" />
            </button>
          </div>
        </div>

        <div className="relative group">
          <div
            ref={scrollRef}
            className="relative flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-10 -mx-5 px-5 md:-mx-10 md:px-10"
          >
            {roadmap.map((item) => (
              <div
                className={`flex-shrink-0 w-[19rem] md:w-[22rem] p-0.25 rounded-3xl overflow-hidden ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                key={item.id}
              >
                <div className="relative bg-n-8 rounded-[1.45rem] overflow-hidden flex flex-col h-full">
                  {/* Top part: Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />

                    {/* Status Overlay - clean and minimalist */}
                    <div className="absolute top-4 right-4 flex items-center px-3 py-1 bg-n-8/80 backdrop-blur-sm rounded-full border border-n-1/10">
                      <img
                        className="mr-2"
                        src={item.status === "done" ? check2 : loading1}
                        width={14}
                        height={14}
                        alt={item.status}
                      />
                      <span className="tagline text-[0.65rem] uppercase tracking-widest text-n-1">
                        {item.status === "done" ? "Done" : "In Progress"}
                      </span>
                    </div>
                  </div>

                  {/* Bottom part: Content (Size minimized like in picture) */}
                  <div className="p-6 bg-n-7 flex-grow">
                    <h4 className="h4 text-n-1 mb-2 tracking-wide text-lg lg:text-xl uppercase">
                      {item.title}
                    </h4>
                    <p className="body-2 text-n-4 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating "More" Arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex absolute top-1/2 right-4 lg:-right-4 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-n-8/90 backdrop-blur-md border border-n-1/20 rounded-full items-center justify-center text-n-1 transition-all hover:bg-n-6 hover:scale-110 hover:border-color-1 shadow-2xl z-10 animate-pulse"
            aria-label="Scroll Right"
          >
            <Arrow className="ml-1 w-6 h-6" />
          </button>
        </div>

        <Gradient />

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/contact">Our Roadmap</Button>
        </div>
      </div>
    </Section >
  );
};

export default Roadmap;
