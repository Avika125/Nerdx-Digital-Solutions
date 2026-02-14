import uiUxWebDesign from "./design/ui-ux-web-design.js";
import brandIdentityStrategy from "./design/brand-identity-strategy.js";
import marketingAdvertisingDesign from "./design/marketing-advertising-design.js";

import fullStackWebDevelopment from "./development/full-stack-web-development.js";
import wordpressDevelopment from "./development/wordpress-development.js";
import chromeExtensionDevelopment from "./development/chrome-extension-development.js";
import appDevelopment from "./development/app-development.js";
import chatBot from "./development/chat-bot.js";

import seoSem from "./marketing/seo-sem.js";
import brandingStrategics from "./marketing/branding-strategics.js";
import socialMediaMarketing from "./marketing/social-media-marketing.js";
import ebayStoreSetupManagement from "./marketing/ebay-store-setup-management.js";

import devops from "./management/devops.js";
import epicorErp from "./management/epicor-erp.js";

export const serviceCategories = [
    {
        metaphor: "Design Services",
        accent: "#AC6AFF",
        services: [uiUxWebDesign, brandIdentityStrategy, marketingAdvertisingDesign]
    },
    {
        metaphor: "Development Services",
        accent: "#FFC876",
        services: [
            fullStackWebDevelopment,
            wordpressDevelopment,
            chromeExtensionDevelopment,
            appDevelopment,
            chatBot
        ]
    },
    {
        metaphor: "Marketing Services",
        accent: "#FF776F",
        services: [
            seoSem,
            brandingStrategics,
            socialMediaMarketing,
            ebayStoreSetupManagement
        ]
    },
    {
        metaphor: "Management Services",
        accent: "#7ADB78",
        services: [devops, epicorErp]
    }
];

export const getServiceBySlug = (slug) => {
    for (const cat of serviceCategories) {
        const service = cat.services.find((s) => s.slug === slug);
        if (service) {
            return { ...service, category: cat.metaphor, accent: cat.accent };
        }
    }
    return null;
};
