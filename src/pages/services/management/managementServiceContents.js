import devopsHeroImage from "./images/devops1.png";
import devopsWorkflowImage from "./images/devops2.jpg";
import devopsExpertiseImage from "./images/devops3.jpg";
import epicorHeroImage from "./images/erp1.png";
import epicorWorkflowImage from "./images/erp2.jpg";
import epicorExpertiseImage from "./images/erp3.jpg";

export const devopsContent = {
    accent: "#7ADB78",
    category: "Management Services",
    hero: {
        title: "DevOps",
        subtitle: "Fast, reliable, automated delivery.",
        description: "Bridging the gap between development and operations to ensure fast, reliable, and automated software delivery. We streamline your pipeline.",
        image: devopsHeroImage
    },
    stats: {
        items: [
            { value: "50+", label: "Pipelines Built" },
            { value: "80", suffix: "%", label: "Deploy Time Cut" },
            { value: "99.9", suffix: "%", label: "Uptime" },
            { value: "24/7", label: "Monitoring" }
        ],
        image: null
    },
    workflow: {
        label: "CI/CD Pipeline Workflow",
        title: "We Streamline Delivery",
        description: "From code to production — automated, reliable pipelines.",
        steps: [
            { step: "01", label: "Assess" },
            { step: "02", label: "Automate" },
            { step: "03", label: "Monitor" }
        ],
        image: devopsWorkflowImage
    },
    happyClients: {
        label: "Trusted by engineering teams",
        title: "Happy Clients",
        stat: "50+",
        subtext: "pipelines and infra managed",
        tags: ["CI/CD", "AWS", "Docker", "Kubernetes", "Terraform", "Monitoring", "Security", "Compliance"]
    },
    intelligentSection: {
        title: "DevOps Expertise.",
        description: "At KrishNova Softwares, we bridge development and operations. CI/CD pipelines, cloud infrastructure, and monitoring — we make shipping software fast, reliable, and stress-free.",
        bullets: [
            "CI/CD Pipelines: Automate build, test, and deploy. Ship with confidence.",
            "Cloud Infrastructure: AWS, GCP, Azure — scalable and cost-optimized.",
            "Containers & Orchestration: Docker, Kubernetes for consistency and scale.",
            "Monitoring & Alerting: Know when something breaks before users do.",
            "Security & Compliance: Hardened pipelines and infrastructure."
        ]
    },
    challengeSolution: {
        challenge: "Manual deployments, slow feedback loops, and infrastructure drift slow you down. Operations become a bottleneck.",
        solution: "KrishNova Softwares automates your delivery pipeline. CI/CD, IaC, and monitoring — we make deployments fast, reliable, and predictable.",
        tags: ["Automated", "Reliable", "Scalable"]
    },
    testimonial: {
        quote: "The best DevOps is invisible — developers ship, and it just works. We build that.",
        attribution: "KrishNova Softwares DevOps Philosophy",
        ctaText: "Book a free DevOps assessment and let's streamline your pipeline."
    },
    principles: {
        title: "Why DevOps Matters",
        subtitle: "Three pillars of modern delivery",
        items: [
            { title: "Automation", desc: "Eliminate manual steps and human error.", emoji: "◇" },
            { title: "Reliability", desc: "Consistent, repeatable, predictable deployments.", emoji: "◆" },
            { title: "Visibility", desc: "Monitor, alert, and respond before users notice.", emoji: "○" }
        ]
    },
    expertise: {
        title: "Our DevOps Expertise",
        subtitle: "Pipelines, infrastructure, and monitoring.",
        image: devopsExpertiseImage,
        cards: [
            { icon: "◇", title: "CI/CD", text: "GitHub Actions, Jenkins, GitLab — automated pipelines." },
            { icon: "◆", title: "Cloud & IaC", text: "AWS, Terraform, Kubernetes." },
            { icon: "○", title: "Monitoring", text: "Datadog, Prometheus, Grafana, PagerDuty." },
            { icon: "●", title: "Security", text: "Secrets, scanning, compliance." }
        ]
    },
    techStack: {
        subtitle: "DevOps stack",
        items: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions"],
        extra: "Monitoring · Logging · Alerting"
    },
    processSteps: {
        subtitle: "From assessment to automation",
        items: [
            { num: "01", title: "Assessment", text: "We review your current pipeline, tooling, and pain points.", link: "Know More" },
            { num: "02", title: "Design & Build", text: "Design pipeline, set up CI/CD, and automate deployments.", link: "Know More" },
            { num: "03", title: "Infrastructure", text: "IaC, containers, and cloud optimization.", link: "Know More" },
            { num: "04", title: "Monitor & Iterate", text: "Monitoring, alerting, and ongoing optimization.", link: "Know More" }
        ]
    }
};

export const epicorErpContent = {
    accent: "#7ADB78",
    category: "Management Services",
    hero: {
        title: "Epicor ERP",
        subtitle: "Streamlined operations & data.",
        description: "Implementing and customizing enterprise resource planning solutions to streamline business operations and data. We help you run smarter.",
        image: epicorHeroImage
    },
    stats: {
        items: [
            { value: "25+", label: "Implementations" },
            { value: "50", suffix: "%", label: "Process Efficiency" },
            { value: "Real-time", label: "Data Visibility" },
            { value: "Ongoing", label: "Support" }
        ],
        image: null
    },
    workflow: {
        label: "Unified Data Flow",
        title: "We Implement Epicor ERP",
        description: "From assessment to go-live — ERP that fits your operations.",
        steps: [
            { step: "01", label: "Assess" },
            { step: "02", label: "Implement" },
            { step: "03", label: "Optimize" }
        ],
        image: epicorWorkflowImage
    },
    happyClients: { label: "Trusted by operations", title: "Happy Clients", stat: "25+", subtext: "Epicor implementations", tags: ["Manufacturing", "Distribution", "Retail", "Supply Chain", "Finance", "Inventory", "CRM", "Custom"] },
    intelligentSection: { title: "Epicor ERP Expertise.", description: "At KrishNova Softwares, we implement and customize Epicor ERP. From requirements to go-live, we streamline your operations, unify your data, and help you make better decisions.", bullets: ["Implementation: Requirements, configuration, and go-live support.", "Customization: Extend Epicor to fit your unique processes.", "Data Migration: Clean, accurate data from legacy systems.", "Training & Support: Your team equipped to use the system.", "Integration: Connect Epicor to other systems and tools."] },
    challengeSolution: { challenge: "Siloed data, manual processes, and legacy systems slow operations. Without unified ERP, visibility and efficiency suffer.", solution: "KrishNova Softwares implements Epicor ERP tailored to your business. Streamlined processes, real-time data, and a single source of truth.", tags: ["Streamlined Ops", "Real-Time Data", "Custom Fit"] },
    testimonial: { quote: "ERP is the backbone of operations. Done right, it makes everything else possible.", attribution: "KrishNova Softwares ERP Philosophy", ctaText: "Book a free ERP assessment and let's streamline your operations." },
    principles: { title: "Why Epicor ERP", subtitle: "Three benefits of proper implementation", items: [{ title: "Unified Data", desc: "One source of truth across finance, inventory, and operations.", emoji: "◇" }, { title: "Process Efficiency", desc: "Automate workflows and eliminate manual errors.", emoji: "◆" }, { title: "Visibility", desc: "Real-time dashboards and reporting for better decisions.", emoji: "○" }] },
    expertise: {
        title: "Our Epicor Expertise",
        subtitle: "Implementation, customization, and support.",
        image: epicorExpertiseImage,
        cards: [
            { icon: "◇", title: "Implementation", text: "Requirements, configuration, and go-live." },
            { icon: "◆", title: "Customization", text: "Extend Epicor for your unique needs." },
            { icon: "○", title: "Data Migration", text: "Clean migration from legacy systems." },
            { icon: "●", title: "Training", text: "User training and documentation." }
        ]
    },
    techStack: { subtitle: "Epicor ecosystem", items: ["Epicor ERP", "Kinetic", "BPM", "BAQ", "Custom Scripts"], extra: "Integration · Reporting · Support" },
    processSteps: { subtitle: "From assessment to go-live", items: [{ num: "01", title: "Discovery & Design", text: "Requirements gathering, process mapping, and solution design.", link: "Know More" }, { num: "02", title: "Configuration", text: "Epicor setup, customization, and data migration.", link: "Know More" }, { num: "03", title: "Testing & Training", text: "UAT, user training, and documentation.", link: "Know More" }, { num: "04", title: "Go-Live & Support", text: "Cutover, go-live support, and ongoing optimization.", link: "Know More" }] }
};
