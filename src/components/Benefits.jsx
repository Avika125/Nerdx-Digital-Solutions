import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import { serviceCategories } from "../pages/services";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
} from "../assets";
import ClipPath from "../assets/svg/ClipPath";
import Arrow from "../assets/svg/Arrow";

const benefitIcons = [
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
];


/* ---------------- Card Border ---------------- */

const CardBorder = ({ color, index }) => {
  const gradId = `benefit-grad-${index}`;
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 384 366"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
          stroke="white"
          strokeOpacity="0.15"
          strokeWidth="2"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
          stroke={`url(#${gradId})`}
          strokeOpacity="0.85"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id={gradId} x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse">
            <stop stopColor={color || "#AC6AFF"} />
            <stop offset="0.562842" stopColor="#D633FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

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
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative p-4 md:p-[1.8rem] md:max-w-[19rem] aspect-square md:aspect-auto md:min-h-[22rem] flex flex-col"
    >
      <CardBorder color={accentColor} index={index + service.slug} />

      <div className="relative z-2 flex flex-col flex-1 pointer-events-none">
        <h5 className="text-[1.1rem] md:h5 h-12 md:h-auto overflow-hidden line-clamp-2 mb-2 md:mb-5">{service.title}</h5>
        <p className="text-[0.7rem] leading-relaxed md:body-2 mb-3 md:mb-6 text-n-3 line-clamp-3 md:line-clamp-none">{service.description}</p>
        <div className="flex items-center mt-auto">
          <img
            src={benefitIcons[index % benefitIcons.length]}
            width={32}
            height={32}
            alt={service.title}
            className="md:w-[48px] md:h-[48px]"
          />
          <button
            onClick={() => navigate(`/service/${service.slug}`)}
            className="ml-auto pointer-events-auto flex items-center text-[0.6rem] md:text-[0.68rem] font-bold tracking-[0.1rem] md:tracking-[0.18em] uppercase text-n-1"
          >
            Explore more
            <Arrow />
          </button>
        </div>
      </div>

      {service.light && <GradientLight />}

      <div
        className="absolute inset-[1px] bg-n-8 -z-1"
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
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-10 px-4 md:px-0"
      >
        {category.services.map((service, i) => (
          <div
            key={service.slug}
            className="flex-shrink-0 w-[13.5rem] md:w-[16rem] lg:w-[18rem] aspect-square md:aspect-auto flex"
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
        <div className="mb-12 md:mb-20 text-center px-4">
          <h2 className="text-[1.75rem] md:text-[2.6rem] font-playfair font-bold text-n-1">
            <br className="hidden md:block" />
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
