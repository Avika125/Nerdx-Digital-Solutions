// Re-export all service contents from folder-specific files for backward compatibility.
// Content is organized in: design/, development/, marketing/, management/

export { brandIdentityContent, marketingAdvertisingContent } from "./design/designServiceContents";
export { fullStackContent, wordpressContent, chromeExtensionContent, appDevelopmentContent, chatBotContent } from "./development/developmentServiceContents";
export { seoSemContent, brandingStrategicsContent, socialMediaContent, ebayStoreContent } from "./marketing/marketingServiceContents";
export { devopsContent, epicorErpContent } from "./management/managementServiceContents";
export { aiAutomationSystemsContent, dataEngineeringAnalyticsContent, saasProductDevelopmentContent, customAiAgentsContent } from "./automation/automationServiceContents";
