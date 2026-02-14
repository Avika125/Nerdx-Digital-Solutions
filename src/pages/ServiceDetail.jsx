import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";
import { getServiceBySlug } from "./services";
import UIUXWebDesignPage from "./services/design/UIUXWebDesignPage";

const ServiceDetail = () => {
    const { slug } = useParams();

    if (slug === "ui-ux-web-design") {
        return <UIUXWebDesignPage />;
    }

    const service = getServiceBySlug(slug);

    if (!service) {
        return <Navigate to="/what-we-do-detail" replace />;
    }

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

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

    return (
        <div
            className="relative min-h-screen overflow-hidden text-white"
            style={{ background: "#050510" }}
        >
            <GlowOrb color={service.accent} size="500px" top="-10%" left="-10%" />
            <GlowOrb color="#7ADB78" size="400px" top="50%" left="70%" />

            <Section className="pt-[12rem] pb-20 relative z-10">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                        className="max-w-[70rem]"
                    >
                        <motion.div
                            variants={textVariants}
                            className="mb-6"
                        >
                            <Link
                                to="/what-we-do-detail"
                                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                            >
                                <span>←</span> Back to services
                            </Link>
                        </motion.div>

                        <motion.span
                            variants={textVariants}
                            className="uppercase text-xs tracking-widest block mb-4"
                            style={{ color: service.accent }}
                        >
                            {service.category}
                        </motion.span>

                        <motion.h1
                            variants={textVariants}
                            className="font-playfair font-semibold tracking-tight leading-[1.05] mb-6"
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                color: service.accent
                            }}
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            variants={textVariants}
                            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
                        >
                            {service.description}
                        </motion.p>
                    </motion.div>
                </div>
            </Section>

            <Section className="relative z-10 pb-32">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-3xl p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            boxShadow: `0 0 60px ${service.accent}15`
                        }}
                    >
                        <h2 className="font-playfair text-2xl mb-6 text-white/90">
                            What we deliver
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-8">
                            Our {service.title.toLowerCase()} approach combines industry best practices with tailored solutions to meet your specific goals. We focus on delivering measurable results that drive your business forward.
                        </p>
                        <div
                            className="h-[2px] w-24 rounded-full mb-8"
                            style={{ background: service.accent }}
                        />
                        <Link to="/contact">
                            <Button white>
                                Discuss this service
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Section>

            <Section className="relative z-10 pb-28">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="font-playfair mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Let's find the right way for you.
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/contact">
                                <Button white>Get started</Button>
                            </Link>
                            <Link to="/what-we-do-detail">
                                <Button>View all services</Button>
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

export default ServiceDetail;
