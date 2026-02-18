import fullStackHeroImage from "./images/image1.png";
import fullStackStatsImage from "./images/image2.jpg";
import fullStackExpertiseImage from "./images/image3.jpg";
import wordpressHeroImage from "./images/wordpress1.png";
import wordpressStatsImage from "./images/wordpress2.jpg";
import wordpressExpertiseImage from "./images/wordpress3.jpg";
import chromeHeroImage from "./images/crome1.png";
import chromeStatsImage from "./images/crome2.jpg";
import chromeExpertiseImage from "./images/crome3.jpg";
import mobileHeroImage from "./images/mobile1.png";
import mobileStatsImage from "./images/mobile2.png";
import mobileExpertiseImage from "./images/mobile3.png";
import chatbotHeroImage from "./images/chatbot1.png";
import chatbotStatsImage from "./images/chatbot2.png";
import chatbotExpertiseImage from "./images/chatbot3.png";

export const fullStackContent = {
    accent: "#FFC876",
    category: "Development Services",
    hero: {
        title: "Full Stack Web Development",
        subtitle: "Scalable, secure web applications.",
        description: "Building robust, scalable web applications using modern front-end frameworks and secure back-end architectures. From MVP to enterprise, we deliver high-performance solutions.",
        image: fullStackHeroImage
    },
    stats: {
        items: [
            { value: "150+", label: "Apps Built" },
            { value: "99.9", suffix: "%", label: "Uptime" },
            { value: "2x", label: "Faster Load Times" },
            { value: "24/7", label: "Support Ready" }
        ],
        image: fullStackStatsImage
    },
    workflow: {
        label: "Development Workflow",
        title: "We Build Web Applications",
        description: "From architecture to deployment — a proven process for building web apps that scale.",
        steps: [{ step: "01", label: "Architect" }, { step: "02", label: "Build" }, { step: "03", label: "Deploy" }],
        image: null
    },
    happyClients: {
        label: "Trusted by product teams",
        title: "Happy Clients",
        stat: "150+",
        subtext: "web applications delivered",
        tags: ["SaaS", "E‑commerce", "Dashboards", "Portals", "APIs", "Marketplaces", "B2B", "Startups"]
    },
    intelligentSection: {
        title: "Full Stack Web Development Expertise.",
        description: "At KrishNova Softwares, we build web applications from the ground up. Modern frameworks, secure backends, and scalable architecture — we deliver solutions that perform under pressure and grow with your business.",
        bullets: [
            "Modern Frontend: React, Vue, Next.js — fast, responsive interfaces that delight users.",
            "Robust Backend: Node.js, Python, or .NET — secure APIs and business logic.",
            "Database Design: SQL, NoSQL — optimized schemas for performance and scale.",
            "Cloud & DevOps: AWS, GCP, Azure — reliable deployment and infrastructure.",
            "Security First: Authentication, encryption, and best practices built in."
        ]
    },
    challengeSolution: {
        challenge: "Legacy systems, slow performance, and security vulnerabilities hold you back. Building a modern web app requires expertise across the entire stack.",
        solution: "KrishNova Softwares delivers full stack web development with modern tools and best practices. We build scalable, secure applications that launch fast and grow with you.",
        tags: ["Modern Stack", "Scalable Architecture", "Security Built-In"]
    },
    testimonial: {
        quote: "Great software is built in layers — each one solid, each one serving the whole. We build with intention.",
        attribution: "KrishNova Softwares Engineering Philosophy",
        ctaText: "Book a free technical consultation and let's architect your next web application."
    },
    principles: {
        title: "Why Full Stack Matters",
        subtitle: "Three pillars of great web applications",
        items: [
            { title: "Performance by Default", desc: "Fast load times and smooth interactions. Users don't wait.", emoji: "◇" },
            { title: "Security First", desc: "Authentication, authorization, and encryption from day one.", emoji: "◆" },
            { title: "Scalable by Design", desc: "Architecture that grows with your users and traffic.", emoji: "○" }
        ]
    },
    expertise: {
        title: "Our Full Stack Expertise",
        subtitle: "End-to-end web development from frontend to infrastructure.",
        image: fullStackExpertiseImage,
        cards: [
            { icon: "◇", title: "Frontend Development", text: "React, Vue, Next.js — responsive, accessible interfaces." },
            { icon: "◆", title: "Backend & APIs", text: "RESTful and GraphQL APIs, microservices, business logic." },
            { icon: "○", title: "Database Design", text: "PostgreSQL, MongoDB — optimized for performance." },
            { icon: "●", title: "DevOps & Deploy", text: "CI/CD, cloud hosting, monitoring, and maintenance." }
        ]
    },
    techStack: {
        subtitle: "Our tech stack",
        items: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL"],
        extra: "TypeScript · Testing · CI/CD"
    },
    processSteps: {
        subtitle: "From idea to production",
        items: [
            { num: "01", title: "Discovery & Architecture", text: "We define requirements, tech stack, and architecture. A clear plan before we write code.", link: "Know More" },
            { num: "02", title: "Sprint Development", text: "Agile sprints with regular demos. You stay in the loop every step of the way.", link: "Know More" },
            { num: "03", title: "Testing & QA", text: "Unit tests, integration tests, and QA. We ship with confidence.", link: "Know More" },
            { num: "04", title: "Launch & Support", text: "Deployment to production. Monitoring, maintenance, and ongoing support available.", link: "Know More" }
        ]
    }
};

export const wordpressContent = {
    accent: "#FFC876",
    category: "Development Services",
    hero: {
        title: "WordPress Development",
        subtitle: "Flexible, SEO-friendly content platforms.",
        description: "Developing custom themes and plugins to create flexible, SEO-friendly, and easy-to-manage content platforms. Perfect for blogs, business sites, and WooCommerce stores.",
        image: wordpressHeroImage
    },
    stats: {
        items: [
            { value: "300+", label: "Sites Built" },
            { value: "100", suffix: "%", label: "SEO Optimized" },
            { value: "Easy", label: "Content Management" },
            { value: "24", suffix: "hr", label: "Go-Live Ready" }
        ],
        image: wordpressStatsImage
    },
    workflow: {
        label: "WordPress Workflow",
        title: "We Build WordPress Sites",
        description: "From theme to launch — custom WordPress solutions that are fast, flexible, and easy to manage.",
        steps: [{ step: "01", label: "Plan" }, { step: "02", label: "Build" }, { step: "03", label: "Launch" }],
        image: null
    },
    happyClients: {
        label: "Trusted by content teams",
        title: "Happy Clients",
        stat: "300+",
        subtext: "WordPress sites live and growing",
        tags: ["Blogs", "Business Sites", "WooCommerce", "Portfolios", "News", "Membership", "Multisite", "Custom"]
    },
    intelligentSection: {
        title: "WordPress Development Excellence.",
        description: "WordPress powers over 40% of the web for a reason. At KrishNova Softwares, we build custom WordPress sites that are fast, SEO-friendly, and easy for your team to manage. No bloated themes — just clean, purpose-built solutions.",
        bullets: [
            "Custom Themes: Tailored designs that match your brand — no template limitations.",
            "WooCommerce: Full-featured online stores with custom functionality.",
            "SEO Optimized: Clean code, fast load times, and schema markup out of the box.",
            "Easy Management: Intuitive admin — your team can update content without a developer.",
            "Security & Updates: Hardened security, regular updates, and ongoing maintenance."
        ]
    },
    challengeSolution: {
        challenge: "Off-the-shelf WordPress themes are bloated and limiting. Generic designs and slow sites hurt your brand and search rankings.",
        solution: "KrishNova Softwares builds custom WordPress themes and plugins. Fast, flexible, SEO-friendly — and easy for your team to manage. You get a site that works for you, not against you.",
        tags: ["Custom Themes", "SEO Ready", "Easy to Manage"]
    },
    testimonial: {
        quote: "WordPress done right is powerful. We strip away the bloat and build exactly what you need.",
        attribution: "KrishNova Softwares WordPress Philosophy",
        ctaText: "Book a free consultation and let's build your WordPress site the right way."
    },
    principles: {
        title: "Why Custom WordPress",
        subtitle: "Three reasons to go custom",
        items: [
            { title: "Speed Matters", desc: "Lightweight, optimized themes load fast. Your users and Google will thank you.", emoji: "◇" },
            { title: "Your Brand, Your Way", desc: "No template constraints. We design and build to your exact vision.", emoji: "◆" },
            { title: "Manage With Ease", desc: "Your team updates content without touching code. Simple, powerful.", emoji: "○" }
        ]
    },
    expertise: {
        title: "Our WordPress Expertise",
        subtitle: "Custom themes, plugins, and WooCommerce solutions.",
        image: wordpressExpertiseImage,
        cards: [
            { icon: "◇", title: "Custom Themes", text: "Tailored designs built for performance and your brand." },
            { icon: "◆", title: "WooCommerce", text: "Full eCommerce solutions with custom features." },
            { icon: "○", title: "Plugins & API", text: "Custom functionality and third-party integrations." },
            { icon: "●", title: "Maintenance", text: "Updates, backups, security, and ongoing support." }
        ]
    },
    techStack: {
        subtitle: "WordPress ecosystem",
        items: ["WordPress", "WooCommerce", "ACF", "Gutenberg", "PHP", "MySQL"],
        extra: "Elementor · Custom Blocks · REST API"
    },
    processSteps: {
        subtitle: "From design to go-live",
        items: [
            { num: "01", title: "Planning & Design", text: "We define structure, design mockups, and plan the build. You approve before development.", link: "Know More" },
            { num: "02", title: "Theme Development", text: "Custom theme built to spec. Clean code, fast performance.", link: "Know More" },
            { num: "03", title: "Content & Setup", text: "We configure plugins, migrate content, and set up your admin workflow.", link: "Know More" },
            { num: "04", title: "Launch & Training", text: "Go live with confidence. We train your team and provide documentation.", link: "Know More" }
        ]
    }
};

export const chromeExtensionContent = {
    accent: "#FFC876",
    category: "Development Services",
    hero: { title: "Chrome Extension Development", subtitle: "Automate workflows, enhance productivity.", description: "Automating workflows and enhancing browser functionality through custom AI integrations and productivity tools. We build extensions that make your work easier.", image: chromeHeroImage },
    stats: { items: [{ value: "50+", label: "Extensions Built" }, { value: "4.9", suffix: "★", label: "Store Rating" }, { value: "10K+", label: "Active Users" }, { value: "2", suffix: "wk", label: "Typical Build" }], image: chromeStatsImage },
    workflow: { label: "Extension Workflow", title: "We Build Chrome Extensions", description: "From idea to Chrome Web Store — custom extensions that solve real problems.", steps: [{ step: "01", label: "Concept" }, { step: "02", label: "Build" }, { step: "03", label: "Publish" }], image: null },
    happyClients: { label: "Trusted by teams", title: "Happy Clients", stat: "50+", subtext: "Chrome extensions in the wild", tags: ["Productivity", "AI", "Automation", "SaaS", "Data", "Tools", "Integrations", "Enterprise"] },
    intelligentSection: { title: "Chrome Extension Development Expertise.", description: "Chrome extensions unlock powerful browser capabilities. At KrishNova Softwares, we build custom extensions that automate tasks, integrate with your tools, and enhance productivity — with optional AI capabilities.", bullets: ["Workflow Automation: Streamline repetitive tasks and save hours every week.", "AI Integrations: Connect extensions to LLMs and AI APIs for smart functionality.", "Cross-Platform Data: Sync data, manage tabs, and integrate with external services.", "Chrome Web Store: We handle packaging, listing, and publishing.", "Secure & Performant: Best practices for permissions, storage, and performance."] },
    challengeSolution: { challenge: "Manual, repetitive browser tasks drain productivity. Off-the-shelf extensions don't fit your unique workflow.", solution: "KrishNova Softwares builds custom Chrome extensions tailored to your workflow. Automate tasks, integrate AI, and boost productivity with solutions built exactly for you.", tags: ["Custom Logic", "AI-Ready", "Secure & Fast"] },
    testimonial: { quote: "The best tools are invisible — they just make your work flow. We build extensions that disappear into your workflow.", attribution: "KrishNova Softwares Extension Philosophy", ctaText: "Book a free consultation and let's automate your browser workflow." },
    principles: { title: "Why Custom Extensions", subtitle: "Three benefits of custom development", items: [{ title: "Fit Your Workflow", desc: "Built for your exact use case — no workarounds.", emoji: "◇" }, { title: "AI-Powered", desc: "Integrate GPT, Claude, or custom models for smart automation.", emoji: "◆" }, { title: "Own Your Data", desc: "Your extension, your data. No third-party tracking.", emoji: "○" }] },
    expertise: { title: "Our Extension Expertise", subtitle: "From concept to Chrome Web Store.", image: chromeExpertiseImage, cards: [{ icon: "◇", title: "Manifest V3", text: "Modern Chrome extension architecture for security and performance." }, { icon: "◆", title: "AI Integration", text: "Connect to OpenAI, Anthropic, or custom AI APIs." }, { icon: "○", title: "Background Logic", text: "Service workers, content scripts, and popup UX." }, { icon: "●", title: "Store Publishing", text: "Listing, compliance, and ongoing updates." }] },
    techStack: { subtitle: "Extension stack", items: ["JavaScript", "Manifest V3", "Chrome APIs", "React", "TypeScript"], extra: "AI APIs · Storage · Permissions" },
    processSteps: { subtitle: "From idea to store", items: [{ num: "01", title: "Discovery & Scope", text: "We define features, permissions, and architecture. A clear scope before we build.", link: "Know More" }, { num: "02", title: "Development", text: "Build, test, and iterate. You get demos and feedback loops.", link: "Know More" }, { num: "03", title: "Testing & Compliance", text: "Chrome Web Store requirements, security review, and quality checks.", link: "Know More" }, { num: "04", title: "Publish & Support", text: "List on the store. We handle updates and maintenance.", link: "Know More" }] }
};

export const appDevelopmentContent = {
    accent: "#FFC876",
    category: "Development Services",
    hero: { title: "APP Development", subtitle: "Native & cross-platform mobile apps.", description: "Designing and coding native or cross-platform mobile applications with high performance and smooth transitions. We build apps users love.", image: mobileHeroImage },
    stats: { items: [{ value: "80+", label: "Apps Launched" }, { value: "4.8", suffix: "★", label: "App Store Rating" }, { value: "1M+", label: "Downloads" }, { value: "8", suffix: "wk", label: "MVP Timeline" }], image: mobileStatsImage, imageContain: true },
    workflow: { label: "App Development Workflow", title: "We Build Mobile Apps", description: "From concept to App Store — native and cross-platform apps that perform.", steps: [{ step: "01", label: "Design" }, { step: "02", label: "Develop" }, { step: "03", label: "Launch" }], image: null },
    happyClients: { label: "Trusted by startups & enterprises", title: "Happy Clients", stat: "80+", subtext: "mobile apps in the stores", tags: ["iOS", "Android", "React Native", "Flutter", "SaaS", "E‑commerce", "Healthcare", "FinTech"] },
    intelligentSection: { title: "Mobile App Development Expertise.", description: "At KrishNova Softwares, we build mobile apps that perform. Native iOS and Android, or cross-platform with React Native and Flutter — we choose the right approach for your product and timeline.", bullets: ["Native Performance: Smooth animations, fast load times, and platform-specific optimizations.", "Cross-Platform Option: React Native or Flutter for iOS + Android from one codebase.", "Design-First: Pixel-perfect UI with smooth transitions and native feel.", "Backend Integration: APIs, auth, push notifications, and real-time features.", "Store Ready: App Store and Play Store submission, compliance, and updates."] },
    challengeSolution: { challenge: "Building mobile apps is complex. Poor performance, clunky UX, and long development cycles hurt adoption and ratings.", solution: "KrishNova Softwares delivers high-performance mobile apps with polished UX. We choose the right stack, design for delight, and ship on time.", tags: ["High Performance", "Polished UX", "On-Time Delivery"] },
    testimonial: { quote: "The best apps feel effortless. We obsess over every tap, swipe, and transition.", attribution: "KrishNova Softwares Mobile Philosophy", ctaText: "Book a free consultation and let's build your next mobile app." },
    principles: { title: "Why Mobile Matters", subtitle: "Three pillars of great apps", items: [{ title: "Performance First", desc: "Fast, smooth, responsive. Users expect it.", emoji: "◇" }, { title: "Native Feel", desc: "Platform conventions and patterns. It should feel at home.", emoji: "◆" }, { title: "Scalable Architecture", desc: "Built to grow with features and users.", emoji: "○" }] },
    expertise: { title: "Our App Expertise", subtitle: "Native and cross-platform mobile development.", image: mobileExpertiseImage, cards: [{ icon: "◇", title: "iOS Development", text: "Swift, SwiftUI — native iOS apps." }, { icon: "◆", title: "Android Development", text: "Kotlin, Jetpack — native Android." }, { icon: "○", title: "Cross-Platform", text: "React Native or Flutter for both platforms." }, { icon: "●", title: "App Store Launch", text: "Submission, review, and ongoing updates." }] },
    techStack: { subtitle: "Mobile tech stack", items: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"], extra: "Push · Analytics · Crash Reporting" },
    processSteps: { subtitle: "From idea to store", items: [{ num: "01", title: "Discovery & Design", text: "User flows, wireframes, and high-fidelity designs. You approve before we code.", link: "Know More" }, { num: "02", title: "Development", text: "Sprint-based development with regular builds and demos.", link: "Know More" }, { num: "03", title: "Testing & QA", text: "Device testing, performance optimization, and bug fixing.", link: "Know More" }, { num: "04", title: "Launch & Updates", text: "Store submission, launch support, and ongoing maintenance.", link: "Know More" }] }
};

export const chatBotContent = {
    accent: "#FFC876",
    category: "Development Services",
    hero: { title: "Chat Bot", subtitle: "AI-powered conversational automation.", description: "Implementing AI chat solutions to automate communication and enhance user engagement. We build chatbots that understand, respond, and drive results.", image: chatbotHeroImage },
    stats: { items: [{ value: "100+", label: "Bots Deployed" }, { value: "85", suffix: "%", label: "Query Resolution" }, { value: "24/7", label: "Availability" }, { value: "3", suffix: "wk", label: "Launch Ready" }], image: chatbotStatsImage },
    workflow: { label: "Chatbot Workflow", title: "We Build AI Chatbots", description: "From strategy to deployment — conversational AI that works.", steps: [{ step: "01", label: "Design" }, { step: "02", label: "Train" }, { step: "03", label: "Deploy" }], image: null },
    happyClients: { label: "Trusted by support & sales teams", title: "Happy Clients", stat: "100+", subtext: "chatbots in production", tags: ["Customer Support", "Sales", "Lead Gen", "FAQ", "Booking", "E‑commerce", "HR", "Internal Tools"] },
    intelligentSection: { title: "AI Chatbot Development Expertise.", description: "At KrishNova Softwares, we build chatbots that actually help. Powered by LLMs or rule-based logic, our bots handle customer support, lead qualification, bookings, and more — 24/7, at scale.", bullets: ["LLM Integration: GPT, Claude, or custom models for natural conversations.", "Rule-Based Flows: Structured bots for FAQs, bookings, and support.", "Omnichannel: Web widget, Slack, WhatsApp, or custom integrations.", "Analytics: Track conversations, satisfaction, and conversion.", "Handoff to Humans: Seamless escalation when the bot can't help."] },
    challengeSolution: { challenge: "Support backlogs, slow response times, and repetitive questions overwhelm your team. Generic chatbots frustrate users.", solution: "KrishNova Softwares builds AI chatbots tailored to your use case. They resolve queries, qualify leads, and free your team for higher-value work.", tags: ["AI-Powered", "Custom Flows", "24/7 Availability"] },
    testimonial: { quote: "The best chatbots feel human — until you realize how much they've automated. We build that.", attribution: "KrishNova Softwares AI Philosophy", ctaText: "Book a free consultation and let's build your AI chatbot." },
    principles: { title: "Why AI Chatbots", subtitle: "Three benefits", items: [{ title: "Scale Support", desc: "Handle thousands of conversations without scaling headcount.", emoji: "◇" }, { title: "Instant Response", desc: "Users get answers in seconds, 24/7.", emoji: "◆" }, { title: "Qualify & Convert", desc: "Capture leads, book meetings, drive sales.", emoji: "○" }] },
    expertise: { title: "Our Chatbot Expertise", subtitle: "From simple FAQ bots to AI-powered assistants.", image: chatbotExpertiseImage, cards: [{ icon: "◇", title: "LLM Integration", text: "GPT, Claude, or custom models for natural language." }, { icon: "◆", title: "Flow Design", text: "Conversation design and user journey mapping." }, { icon: "○", title: "Integrations", text: "CRM, ticketing, calendar, and your existing tools." }, { icon: "●", title: "Analytics", text: "Conversation metrics, satisfaction, and optimization." }] },
    techStack: { subtitle: "Chatbot stack", items: ["OpenAI", "Anthropic", "LangChain", "Rasa", "Dialogflow"], extra: "Webhook · CRM · Analytics" },
    processSteps: { subtitle: "From concept to launch", items: [{ num: "01", title: "Strategy & Flows", text: "We define use cases, conversation flows, and success metrics.", link: "Know More" }, { num: "02", title: "Design & Build", text: "Bot logic, integrations, and training data. We iterate with your feedback.", link: "Know More" }, { num: "03", title: "Testing & Tuning", text: "Test conversations, refine responses, and optimize accuracy.", link: "Know More" }, { num: "04", title: "Launch & Monitor", text: "Go live. We monitor performance and iterate based on real usage.", link: "Know More" }] }
};
