import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { companyLogos } from "../constants";
import point1 from "../assets/point1.mp4";

const POINTS = [
  {
    title: "Defining Identity...",
    desc: "We dive deep into your brand DNA to uncover what makes you unique and powerful.",
  },
  {
    title: "Connecting Audiences...",
    desc: "Seamlessly bridging the gap between your vision and the people who matter most.",
  },
  {
    title: "Sculpting the Future...",
    desc: "Transforming raw ideas into production-ready digital masterpieces that lead the way.",
  },
];
const Hero = () => {
  const outerRef = useRef(null);
  const targetProgressRef = useRef(0);
  const [progress, setProgress] = useState(0); // Smooth progress
  const [autoProgress, setAutoProgress] = useState(0); // Automatic cycling for mobile
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth Scroll Logic (Lerp + RAF)
  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = height - vh;
      const scrolled = Math.max(0, -top);
      targetProgressRef.current = Math.min(1, Math.max(0, scrolled / scrollable));
    };

    let rafId;
    let currentPos = 0;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const loop = () => {
      // Smoothing factor: 0.1 is responsive yet stable
      currentPos = lerp(currentPos, targetProgressRef.current, 0.1);

      // Update state
      setProgress(currentPos);

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Automatic Cycle for Mobile (Point 1 -> 2 -> 3)
  useEffect(() => {
    if (!isMobile) return;

    const DURATION = 12000; // 12 seconds for full cycle (4s per point)
    let start;
    let rafId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const p = (elapsed % DURATION) / DURATION;
      setAutoProgress(p);
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  // ── Animation values (inline, no CSS transitions) ──
  // On mobile, we use the automatic timer; on desktop, we use scroll progress
  const effectiveProgress = isMobile ? autoProgress : progress;

  // ── PHASE 1: Intro Text (0% → 20% scroll) ──
  const introOpacity = isMobile ? 1 : Math.max(0, 1 - effectiveProgress * 5);
  const introY = isMobile ? 0 : effectiveProgress * -80;

  // ── PHASE 2: Visual Entry (10% → 40% scroll) ──
  const entryStart = 0.1;
  const entryEnd = 0.4;
  const entryProgress = Math.min(1, Math.max(0, (effectiveProgress - entryStart) / (entryEnd - entryStart)));

  // Slide from center to right (Desktop only)
  const visualX = isMobile ? 0 : (1 - entryProgress) * -25;
  const visualOpacity = isMobile ? 1 : Math.min(1, effectiveProgress * 10);

  // ── PHASE 3: Sidebar Reveal (30% → 50% scroll) ──
  const sidebarStart = 0.3;
  const sidebarEnd = 0.5;
  const sidebarOpacity = isMobile ? 1 : Math.min(1, Math.max(0, (effectiveProgress - sidebarStart) / (sidebarEnd - sidebarStart)));
  const sidebarX = isMobile ? 0 : (1 - sidebarOpacity) * -20;

  // ── PHASE 4: Main Points Logic (40% → 100% scroll) ──
  const mainStart = 0.4;

  // Normalized progress specifically for visual content cycling
  // On mobile, we use the full 0-1 range of autoProgress
  // On desktop, we map scroll progress 0.4 -> 1.0
  const normalizedCycle = isMobile ? effectiveProgress : Math.min(1, Math.max(0, (effectiveProgress - mainStart) / (1 - mainStart)));

  // Logic for individual points progress (0-1 within each point)
  const pointsCount = POINTS.length;
  const rawIndex = normalizedCycle * pointsCount;
  const activeIndex = Math.min(pointsCount - 1, Math.floor(rawIndex));
  const pointProgress = Math.min(1, rawIndex % 1); // 0 -> 1 for the current point

  const barProgress = isMobile ? 1 : Math.min(1, normalizedCycle * 1.1);

  // AI Orb Pulsing & Glow (Linked to either scroll or time)
  const orbScale = 1 + Math.sin(Date.now() / 1000) * 0.05 + normalizedCycle * 0.1;
  const orbOpacity = 0.5 + normalizedCycle * 0.5;

  // Scroll hint: fades out quickly
  const hintOpacity = Math.max(0, 1 - progress * 10);

  return (
    <section
      ref={outerRef}
      className={`relative ${isMobile ? "overflow-hidden" : ""}`}
      style={{ minHeight: isMobile ? "auto" : "400vh", background: "#0d0d1a" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(100,60,255,0.18) 0%, transparent 70%)" }}
      />

      {/* ── STICKY PANEL ── */}
      <div className={`${isMobile ? "relative" : "sticky top-0"} w-full`} style={{ height: isMobile ? "auto" : "100vh", zIndex: 10 }}>

        {/* Grid overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ════════════════════════════════
            TOP HALF — FIXED HEADLINE (Intro phase)
        ════════════════════════════════ */}
        <div className={`${isMobile ? "relative pt-24 pb-12" : "absolute inset-x-0 top-[25%]"} z-30 flex flex-col items-center px-4 md:px-6 text-center pointer-events-none transition-all duration-300 ease-out`}
          style={{
            opacity: introOpacity,
            transform: isMobile ? "none" : `translateY(${introY}px)`
          }}
        >
          <h1 className="font-playfair font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)" }}>
            We transform imagination into <br />
            <span className="italic bg-gradient-to-r from-[#AC6AFF] to-[#00F5FF] bg-clip-text text-transparent">
              purposeful digital experiences.
            </span>
          </h1>
          <p className="text-white/60 max-w-2xl text-sm md:text-lg leading-relaxed px-4 md:px-0">
            By combining creative thinking, advanced technology, and refined design, we help ambitious brands shape their identity, connect with audiences, and stand confidently in the digital future.
          </p>
        </div>

        <div className={`${isMobile ? "relative" : "absolute inset-0"} z-20 grid grid-cols-1 lg:grid-cols-[40%_1fr] items-center px-4 md:px-12 lg:px-20 pt-10 lg:pt-32 gap-x-12 gap-y-10 lg:gap-y-0 pb-20 overflow-hidden`}>

          {/* ── 1. HEADING (Mobile Top / Desktop Top Left) ── */}
          <div
            className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-300 ease-out"
            style={{ opacity: sidebarOpacity, transform: `translateX(${sidebarX}px)` }}
          >
            <h2 className="text-[#AC6AFF] font-semibold tracking-wider text-xs md:text-base mb-2 uppercase">
              AI Pipeline
            </h2>
            <h1 className="font-playfair font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 6vw, 3.5rem)" }}
            >
              Building sites,<br className="hidden md:block" /> end-to-end.
            </h1>
          </div>

          {/* ── 2. VISUAL (Mobile Middle / Desktop Right) ── */}
          <div
            className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex items-center justify-center relative transition-all duration-100 ease-out h-full"
            style={{
              transform: `translateX(${visualX}vw)`,
              opacity: visualOpacity,
            }}
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[600px] rounded-2xl overflow-hidden bg-[#050510] border border-white/5 shadow-2xl mx-auto">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="mx-auto flex items-center gap-3">
                  <div className="w-3 h-3 rounded bg-white/10" />
                  <div className="w-3 h-3 rounded bg-white/10" />
                  <div className="w-3 h-3 rounded bg-white/10" />
                </div>
              </div>

              {/* Internal Visual Area */}
              <div className="absolute inset-x-0 bottom-0 top-12 flex flex-col items-center justify-center p-4">
                {/* THE AI ORB (Point 1) */}
                {activeIndex === 0 && (
                  <div className="relative w-40 h-40 md:w-64 md:h-64 mb-6 md:mb-8 transition-all duration-500 animate-in fade-in zoom-in">
                    {/* Outer Glows */}
                    <div className="absolute inset-0 rounded-full blur-[30px] md:blur-[40px] opacity-40 animate-pulse-slow"
                      style={{ background: "radial-gradient(circle, #AC6AFF 0%, #00F5FF 100%)" }}
                    />
                    <div className="absolute inset-[-20%] rounded-full blur-[40px] md:blur-[60px] opacity-20"
                      style={{ background: "radial-gradient(circle, #00F5FF 0%, transparent 70%)" }}
                    />

                    {/* Main Orb Body */}
                    <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,245,255,0.1) 0%, transparent 50%), #0d0d1a",
                      }}
                    >
                      <div
                        className="absolute inset-0 transition-transform duration-300 ease-out"
                        style={{ transform: `scale(${orbScale}) rotate(${progress * 180}deg)` }}
                      >
                        <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full blur-xl opacity-60"
                          style={{ background: "conic-gradient(from 180deg, #AC6AFF, #00F5FF, #AC6AFF)" }}
                        />
                      </div>
                    </div>

                    {/* Center Star Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="40" height="40" md-width="60" md-height="60" viewBox="0 0 24 24" fill="white" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                        <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* THE VIDEO CONTAINER (Point 2) */}
                {activeIndex === 1 && (
                  <div className="relative w-full h-auto flex items-center justify-center mb-6 md:mb-8 px-2 transition-all duration-700 animate-in fade-in slide-in-from-bottom-12">
                    <div className="w-full aspect-video rounded-xl bg-black border border-white/10 flex items-center justify-center overflow-hidden relative group shadow-[0_0_40px_rgba(172,106,255,0.15)]">
                      <video
                        src={point1}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Animated Glow Border Overlay */}
                      <div className="absolute inset-0 rounded-xl border border-white/10 opacity-30 group-hover:opacity-60 transition-opacity" />
                    </div>
                  </div>
                )}

                {/* FINAL STATE (Point 3) */}
                {activeIndex === 2 && (
                  <div className="relative w-40 h-40 md:w-64 md:h-64 mb-6 md:mb-8 flex items-center justify-center transition-all duration-500 animate-in fade-in zoom-in">
                    <div className="absolute inset-0 rounded-full blur-[40px] md:blur-[60px] bg-gradient-to-r from-[#AC6AFF] to-[#00F5FF] opacity-30 animate-pulse" />
                    <div className="relative z-10 w-full h-full rounded-full border border-white/20 bg-black/40 backdrop-blur-3xl flex items-center justify-center">
                      <div className="text-white font-bold text-2xl md:text-4xl tracking-tighter italic">KrishNova</div>
                    </div>
                  </div>
                )}

                {/* Progress Text */}
                <div className="text-center">
                  <p className="text-white/60 text-xs md:text-sm font-medium tracking-tight mb-1">
                    {activeIndex === 0 ? "Defining Identity..." : activeIndex === 1 ? "Connecting Audiences..." : "Sculpting the Future..."}
                  </p>
                  <p className="text-white text-base md:text-lg font-bold">
                    {Math.round(pointProgress * 100)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3. POINTS LIST (Mobile Bottom / Desktop Bottom Left) ── */}
          <div
            className="order-3 lg:col-start-1 lg:row-start-2 relative pl-0 lg:pl-8 mt-4 lg:mt-0 transition-all duration-300 ease-out self-start pb-12 lg:pb-0"
            style={{ opacity: sidebarOpacity, transform: `translateX(${sidebarX}px)` }}
          >
            {/* Vertical Progress Bar Container */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-white/10 rounded-full lg:block hidden">
              <div
                className="w-full bg-gradient-to-b from-[#AC6AFF] to-[#00F5FF] transition-all duration-300 ease-out"
                style={{ height: `${barProgress * 100}%` }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 blur-[4px] rounded-full bg-white shadow-[0_0_15px_#fff]"
                style={{ top: `${barProgress * 100}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>

            {/* Points List Items */}
            <div className={`flex flex-col gap-6 lg:gap-10 items-center lg:items-start text-center lg:text-left ${isMobile ? "opacity-100" : ""}`}>
              {POINTS.map((point, i) => {
                const isActive = isMobile || (i <= activeIndex);
                return (
                  <div
                    key={i}
                    className={`transition-all duration-500 px-4 lg:px-0 ${isActive ? "opacity-100 translate-x-0" : "opacity-30 -translate-x-2"}`}
                  >
                    <h3 className={`text-lg md:text-2xl font-bold mb-2 md:mb-3 ${isActive ? "text-white" : "text-white/60"}`}>
                      {point.title}
                    </h3>
                    <p className={`text-white/40 text-xs md:text-base max-w-xs md:max-w-sm leading-relaxed mx-auto lg:ml-0 ${isMobile ? "opacity-100" : ""}`}>
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Scroll hint (Bottom Right) ── */}
          <div
            className="absolute right-6 bottom-10 flex flex-col items-center gap-2"
            style={{ opacity: hintOpacity }}
          >
            <span className="text-white/30 text-[10px] uppercase tracking-[0.18em] [writing-mode:vertical-rl]">
              Scroll
            </span>
            <div className="w-px h-16 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="w-full rounded-full" style={{
                height: "40%",
                background: "linear-gradient(to bottom, #AC6AFF, #00F5FF)",
                animation: "scrollLine 1.6s ease-in-out infinite",
              }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
