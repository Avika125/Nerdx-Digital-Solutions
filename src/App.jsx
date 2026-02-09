import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./components/Section";
import { useLocation, useNavigate, Routes, Route, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave, grid, searchMd, sliders04, plusSquare } from "./assets";
import { navigation } from "./constants";
import Button from "./components/Button";
import MenuSvg from "./assets/svg/MenuSvg";
import { HamburgerMenu } from "./components/design/Header";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Contact from "./components/Contact";

const Header = () => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleNavItemClick = (e, item) => {
    // Specialized logic for "How we work"
    if (item.id === "1") {
      if (pathname.pathname === "/" && pathname.hash === "#how-we-work") {
        e.preventDefault();
        navigate("/how-we-work-detail");
      }
    }
    // Specialized logic for "What we do"
    if (item.id === "2") {
      if (pathname.pathname === "/" && pathname.hash === "#what-we-do") {
        e.preventDefault();
        navigate("/what-we-do-detail");
      }
    }
    handleClick();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </Link>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url.startsWith("#") ? `/${item.url}` : item.url}
                onClick={(e) => handleNavItemClick(e, item)}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

const WhoWeAre = () => {
  return (
    <Section id="who-we-are" crosses>
      <div className="container relative">
        {/* Background Atmosphere */}
        <div className="hidden lg:block absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-color-1/5 blur-[12rem] rounded-full pointer-events-none -z-1" />

        <div className="lg:flex items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[45rem]"
          >
            <h2 className="h2 font-playfair mb-4 md:mb-8 text-[2rem] lg:text-[3rem] leading-tight bg-clip-text text-transparent bg-gradient-to-br from-n-1 to-n-1/50">
              We're a digital solutions business made up by tech misfits, passionate creatives and curious humans.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:ml-auto xl:w-[38rem] mt-4 lg:mt-2"
          >
            <div className="space-y-8 lg:w-[26rem] lg:mx-auto">
              <p className="body-2 text-n-4 leading-relaxed group hover:text-n-3 transition-colors">
                We work with entrepreneurs and forward-looking companies to transform ideas into products that <span className="text-n-1 font-semibold">HELP</span>, <span className="text-n-1 font-semibold">CHALLENGE</span>, and <span className="text-n-1 font-semibold">INSPIRE</span>.
              </p>
              <p className="body-2 text-n-4 leading-relaxed group hover:text-n-3 transition-colors">
                From design through to code, we delight in finding simple solutions to complex challenges. And by collaborating with our clients to form rewarding relationships, we help their companies grow and evolve.
              </p>
              <p className="body-2 text-n-4 leading-relaxed group hover:text-n-3 transition-colors">
                This process is further fuelled by our integrated approach to strategy, design and development, which allows us to help deliver ideas from concept to launch, and beyond.
              </p>
              <p className="body-2 text-n-4 font-bold border-l-2 border-color-1 pl-4">
                Not in a rush? Here’s a bit more about{" "}
                <Link to="/who-we-are-detail" className="text-n-1 underline decoration-color-1 underline-offset-4 hover:text-color-1 transition-colors">
                  who we are.
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const WhoWeAreDetail = () => {
  return (
    <Section id="who-we-are-detail" crosses>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="h1 font-playfair mb-8 text-center sm:text-left">
            We are problem solvers…
          </h1>
          <p className="body-1 italic text-n-3 mb-12 text-center sm:text-left">
            Who live for that feeling you get when a problem is solved.
          </p>
          <div className="mb-20">
            <h3 className="h3 mb-6 font-playfair">
              Our partners choose to work with us because we aren’t…
            </h3>
            <ul className="space-y-6">
              {[
                "Only looking towards digital, and ignoring the reality of outside the screen.",
                "Scared by ugly solutions (because not everything needs to be pretty to solve big problems).",
                "Waiting for other people to solve the challenges we all face.",
                "Only chasing trends (we are also a part of creating them).",
              ].map((reason, index) => (
                <li key={index} className="flex items-start body-2 text-n-2">
                  <span className="mr-4 text-color-1">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-15 mb-20">
            <div className="space-y-8">
              <div>
                <h4 className="h4 font-playfair mb-4">Where we came from</h4>
                <p className="body-2 text-n-4">
                  With many years combined in big agencies at the forefront of the ‘digital revolution’, it became clear to us that our jobs were about commercial efficiency, not problem solving effectiveness. Fitting jobs to limited resources, not fitting the right resources to the job which resulted in overpriced and ineffective ‘solutions’. The feeling of effectively solving a problem, was set aside for suffocating process, pursuing awards and margin maximisation. So we abandoned ship and created a new way of doing things.
                </p>
              </div>
              <div>
                <h4 className="h4 font-playfair mb-4">Where we are now</h4>
                <p className="body-2 text-n-4">
                  While others continue to paint zebra stripes on their horses, we continue to connect ourselves with the strategic, design and engineering misfits capable of taking ideas on a piece of scrap paper to an efficiently implementable solution that actually addresses real business problems through our offering. And in doing so, we continue to be lucky enough to work with some incredible people on some incredible projects.
                </p>
              </div>
            </div>
            <div className="bg-n-7 p-10 rounded-3xl border border-n-6 flex flex-col justify-center">
              <h4 className="h4 font-playfair mb-4 text-color-1">What’s happened since</h4>
              <p className="body-2 text-n-4 italic">
                Eight years since we set out to challenge the offering available, ‘digital’ has become much like teenage sex: everyone talks about it, not many know how to do it, everyone thinks everyone else is doing it, so everyone claims they’re doing it. And despite the growth in options, the industry is still characterised by a low level of technical competence and solution based craftmanship.
              </p>
            </div>
          </div>

          <div className="text-center py-20 border-t border-n-6">
            <h2 className="h2 font-playfair mb-8">
              Let’s make some magic. Together.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button white>
                  Get a quote
                </Button>
              </Link>
              <Link to="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const HowWeWorkDetail = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const FloatingOrb = ({ color, size, top, left, delay }) => (
    <motion.div
      className={`absolute ${size} ${color} blur-[12rem] rounded-full pointer-events-none -z-1`}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 60, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{ top, left }}
    />
  );

  return (
    <div className="bg-n-8 overflow-hidden relative">
      {/* Background Atmosphere */}
      <FloatingOrb color="bg-color-1/10" size="w-[60rem] h-[60rem]" top="10%" left="-10%" delay={0} />
      <FloatingOrb color="bg-color-2/10" size="w-[40rem] h-[40rem]" top="40%" left="70%" delay={2} />
      <FloatingOrb color="bg-color-3/10" size="w-[50rem] h-[50rem]" top="70%" left="10%" delay={4} />
      {/* Hero Section */}
      <Section className="pt-[12rem] -mt-[5.25rem]" id="how-we-work-hero" crosses customPaddings>
        <div className="container relative z-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-[62rem] mb-12 lg:mb-20"
          >
            <motion.h1
              variants={textVariants}
              className="h1 font-playfair mb-6 text-n-1 text-[2.5rem] leading-tight md:text-[5rem]"
            >
              We keep you close, and your users closer
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="body-1 text-n-3 max-w-3xl"
            >
              We know that delivering work that doesn’t meet the needed user outcomes hurts us as much as our partners. So we focus every part of our process around the end users, and only them.
            </motion.p>
          </motion.div>
        </div>

        {/* Terrain/Wireframe Background Placeholder Effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#AC6AFF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FFC876" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,500 Q250,400 500,500 T1000,500" fill="none" stroke="url(#gradient-hero)" strokeWidth="1" />
            <path d="M0,600 Q250,500 500,600 T1000,600" fill="none" stroke="url(#gradient-hero)" strokeWidth="1" />
            <path d="M0,700 Q250,600 500,700 T1000,700" fill="none" stroke="url(#gradient-hero)" strokeWidth="1" />
            {/* Simple grid lines for effect */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={i} x1={i * 70} y1="0" x2={i * 70} y2="1000" stroke="#252134" strokeWidth="0.5" />
            ))}
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-color-1/10 blur-[12rem] rounded-full" />
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section id="philosophy" crosses>
        <div className="container py-12 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-10 md:gap-20"
          >
            <motion.h2 variants={textVariants} className="h2 font-playfair leading-tight text-n-1">
              We always set out to get it right the first time
            </motion.h2>
            <motion.div variants={textVariants} className="space-y-6 body-2 text-n-4">
              <p>
                We work with you to revisit your brief and your pain points, ensuring that what’s been identified is the actual user problem to address.
              </p>
              <p>
                We use the precious time we have with you to chat, ask questions, listen and observe, rather than try sell an idea, or worse yet, a solution only we have fallen in love with.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* NERD Horizontal Section */}
      <Section id="nerd-framework" crosses>
        <div className="container py-12 lg:py-24 relative z-2">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="h3 font-playfair text-center mb-20 text-n-1/80 uppercase tracking-widest"
          >
            Put simply (again), we are nerds
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { letter: "N", title: "NAVIGATE", text: "We start by exploring your business, objectives and what makes it all tick." },
              { letter: "E", title: "EXPLODE", text: "We pull it apart in search of all opportunities. We love good ol' blue sky thinking." },
              { letter: "R", title: "REFINE", text: "After some hustling and huddling, we refine our ideas into elegant solutions." },
              { letter: "D", title: "DEFINE", text: "Lastly we craft user-centric products for you to take on the world. And win." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                whileHover={{ scale: 1.05, borderColor: "rgba(172, 106, 255, 0.5)" }}
                className="relative p-6 md:p-8 bg-n-7 rounded-3xl border border-n-6 text-center group transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-n-8/0 to-n-8/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-1">
                  <div className="font-playfair text-[6rem] leading-none mb-2 text-n-1 transition-colors group-hover:text-color-1">
                    {item.letter}
                  </div>
                  <h6 className="h6 font-code uppercase tracking-widest mb-4 text-xs font-bold text-n-1/50 group-hover:text-n-1">{item.title}</h6>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Stages Section */}
      <Section id="stages" crosses>
        <div className="container py-12 lg:py-24 relative z-2">
          <h3 className="h3 font-playfair text-center mb-20 text-n-1">And this is how we work</h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                stage: "Discover",
                title: "Research & Strategy",
                text: "We unearth everything about the brief. This delivers the strategic underpinning, culminating in key insights, target audience segmentation, and defined functional scope.",
                icon: searchMd,
                color: "text-color-1"
              },
              {
                stage: "Design",
                title: "UI/UX & Creative",
                text: "We bring strategy to life with a focus on simplification. We strive to make content accessible and consumable, delivering the best user experience for identified audiences.",
                icon: sliders04,
                color: "text-color-2"
              },
              {
                stage: "Develop",
                title: "Code & QA",
                text: "We wrap recommendations into a technically crafted solution. Executed in sprints with ongoing QA, bringing the project to life via high-end code and agile procedures.",
                icon: plusSquare,
                color: "text-color-3"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative p-6 md:p-8 bg-n-8 border border-n-6 rounded-3xl overflow-hidden group hover:border-color-1/50 transition-colors"
              >
                <div className="absolute inset-0 bg-n-8 z-0" />
                <div className="absolute inset-0 opacity-10 mix-blend-soft-light z-0 pointer-events-none" style={{ backgroundImage: `url(${grid})`, backgroundSize: '300px' }} />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-color-1 to-color-2 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                <div className="relative z-10 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-n-7 font-code text-[0.75rem] uppercase tracking-wider text-n-1 border border-n-6">
                      Stage 0{index + 1}
                    </span>
                    <div className={`p-3 rounded-xl bg-n-7 border border-n-6 ${item.color}`}>
                      <img src={item.icon} width={24} height={24} alt={item.title} />
                    </div>
                  </div>

                  <h4 className="h4 font-playfair text-n-1 mb-2">{item.stage}</h4>
                  <p className="font-code text-xs font-bold text-n-1/50 uppercase tracking-widest">{item.title}</p>
                </div>

                <p className="relative z-10 body-2 text-n-4 leading-relaxed group-hover:text-n-3 transition-colors">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer CTA Section */}
      <Section id="work-cta" crosses>
        <div className="container py-12 lg:py-24 text-center relative z-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="h2 font-playfair mb-10 text-n-1">Let’s make some magic, together.</h2>
            <Link to="/contact" className="h4 font-playfair text-n-1/80 hover:text-color-1 transition-colors group">
              Get a quote <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </Link>
            <div className="mt-20">
              <Link to="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

const WhatWeDoDetail = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categories = [
    {
      metaphor: "Above the screen",
      title: "Strategy",
      description: "Digital audits, facilitated design thinking workshops, digital strategy development, campaign and website analytics, user research, content strategy development.",
      color: "bg-color-1/20",
      delay: 0,
    },
    {
      metaphor: "On the screen",
      title: "Design + UX",
      description: "UX design, interface design, visual design, digital advertising campaigns, branding, IA + wireframing, motion graphics and video.",
      color: "bg-color-2/20",
      delay: 0.2,
    },
    {
      metaphor: "Below the screen",
      title: "Tech + Dev",
      description: "CMS (Custom, Wordpress, Drupal), front end development, API integration, mobile app development, website and eCommerce development.",
      color: "bg-color-3/20",
      delay: 0.4,
    },
    {
      metaphor: "In the brain",
      title: "AI + Automation",
      description: "AI chatbot development, conversational UI/UX, intelligent automation, predictive analytics, NLP integration, machine learning.",
      color: "bg-color-4/20",
      delay: 0.6,
    },
  ];

  const FloatingOrb = ({ color, size, top, left, delay }) => (
    <motion.div
      className={`absolute ${size} ${color} blur-[12rem] rounded-full pointer-events-none -z-1`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 40, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{ top, left }}
    />
  );

  return (
    <div className="bg-n-8 overflow-hidden relative min-h-screen">
      <FloatingOrb color="bg-color-1/10" size="w-[50rem] h-[50rem]" top="-10%" left="-10%" delay={0} />
      <FloatingOrb color="bg-color-2/10" size="w-[40rem] h-[40rem]" top="50%" left="60%" delay={5} />

      <Section className="pt-[12rem] -mt-[5.25rem]" id="what-we-do-hero" crosses customPaddings>
        <div className="container relative z-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-[62rem]"
          >
            <motion.h1 variants={textVariants} className="h1 font-playfair mb-6">
              We can help in many ways…
            </motion.h1>
            <motion.p variants={textVariants} className="body-1 text-n-3 max-w-3xl mb-12">
              Or just a few depending on what you need.
            </motion.p>
          </motion.div>
        </div>
      </Section>

      <Section id="services-grid" crosses>
        <div className="container pb-20 relative z-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                whileHover={{ y: -5 }}
                className={`p-6 lg:p-8 rounded-2xl border border-n-6 bg-n-7 transition-colors hover:border-color-1/50 flex flex-col h-full`}
              >
                <div className="mb-6">
                  <span className="font-code text-xs uppercase tracking-widest text-n-4 block mb-2">
                    {cat.metaphor}
                  </span>
                  <h3 className="h3 font-playfair text-n-1">{cat.title}</h3>
                </div>
                <p className="body-2 text-n-4 leading-relaxed mb-8 flex-grow">
                  {cat.description}
                </p>
                <div className={`w-12 h-1 ${cat.color} rounded-full`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="work-cta" crosses>
        <div className="container py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="h2 font-playfair mb-10">Let’s find the right way for you.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button white>
                  Get started
                </Button>
              </Link>
              <Link to="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

const LandingPage = () => (
  <>
    <Hero />
    <WhoWeAre />
    <Benefits />
    <Collaboration />
    <Services />
    <Roadmap />
    <Contact />
  </>
);

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/who-we-are-detail" element={<WhoWeAreDetail />} />
          <Route path="/how-we-work-detail" element={<HowWeWorkDetail />} />
          <Route path="/what-we-do-detail" element={<WhatWeDoDetail />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
