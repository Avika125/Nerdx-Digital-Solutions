import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import { serviceCategories } from "../pages/services";
import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
} from "../assets";
import ClipPath from "../assets/svg/ClipPath";
import Arrow from "../assets/svg/Arrow";

const benefitCards = [
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
];

const benefitIcons = [
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
];


/* ---------------- Service Card ---------------- */

const ServiceCard = ({ service, index, accentColor }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        style={{
        rotateX,
      rotateY,
      transformStyle: "preserve-3d",
        backgroundImage: `url(${benefitCards[index % benefitCards.length]})`,
      }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, margin: "-50px" }}
transition = {{ duration: 0.6, delay: index * 0.08 }}
className = "relative p-[1.8rem] bg-no-repeat bg-[length:100%_100%] md:max-w-[19rem]"
  >
  <div className="relative z-2 flex flex-col min-h-[17rem] pointer-events-none">
    <h5 className="h5 mb-5">{service.title}</h5>
    <p className="body-2 mb-6 text-n-3">{service.description}</p>
    <div className="flex items-center mt-auto">
      <img
        src={benefitIcons[index % benefitIcons.length]}
        width={48}
        height={48}
        alt={service.title}
      />
      <button
        onClick={() => navigate(`/service/${service.slug}`)}
        className="ml-auto pointer-events-auto flex items-center text-[0.68rem] font-bold tracking-[0.18em] uppercase text-n-1"
      >
        Explore more
        <Arrow />
      </button>
    </div>
  </div>

{ service.light && <GradientLight /> }

<div
  className="absolute inset-0.5 bg-n-8"
  style={{ clipPath: "url(#benefits)" }}
>
  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
    {service.imageUrl && (
      <img
        src={service.imageUrl}
        width={380}
        height={362}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    )}
  </div>
</div>
    </motion.div >
  );
};

/* ---------------- Category Section ---------------- */

const CategorySection = ({ category }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-20 relative z-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-5">
          <div
            className="w-1.5 h-10 rounded-full"
            style={{ backgroundColor: category.accent }}
          />
          <h3 className="text-[1.6rem] md:text-[1.9rem] font-playfair font-bold text-n-1">
            {category.metaphor}
          </h3>
        </div>

        <div className="hidden lg:flex gap-3">
          <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-n-1/10">
            ←
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-n-1/10">
            →
          </button>
        </div>

      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-10"
      >
        {category.services.map((service, i) => (
          <div
            key={service.slug}
            className="flex-shrink-0 w-[15rem] md:w-[16rem] lg:w-[18rem] flex"
          >
            <ServiceCard
              service={service}
              index={i}
              accentColor={category.accent}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- Main Section ---------------- */

const Benefits = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <Section id="features" className="relative pt-24 pb-24 overflow-hidden">
      <ClipPath />

      <div
        ref={containerRef}
        onMouseMove={(e) => {
          const rect = containerRef.current.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        className="container relative z-2"
      >

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-[2rem] md:text-[2.6rem] font-playfair font-bold text-n-1">
            <br />
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-color-1 via-n-1 to-color-4">
              What We Do..
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {serviceCategories.map((category) => (
            <CategorySection key={category.metaphor} category={category} />
          ))}
        </div>

        <GradientLight />
      </div>
    </Section>
  );
};

export default Benefits;
