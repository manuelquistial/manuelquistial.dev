import type { CaseStudyContent } from "./types";

export const babelScoresCaseStudy: CaseStudyContent = {
  title: "Babel Scores",
  subtitle:
    "Custom publishing and e-commerce engineering for a contemporary music platform built on WordPress and WooCommerce.",
  backLabel: "Back to projects",
  overview: {
    title: "Platform Context",
    paragraphs: [
      "Babel Scores is a digital publishing platform for contemporary music, combining catalog browsing, score sales and institutional access workflows. The product extends far beyond a standard WordPress theme: it requires custom commerce logic, in-browser score tooling, multilingual content and federated authentication for libraries and institutions.",
      "The engineering work spans WooCommerce customization, React-based tooling, background job processing and integration with cloud storage, all while keeping editorial and commerce workflows maintainable for non-technical stakeholders.",
    ],
  },
  platform: {
    title: "WordPress and WooCommerce Foundation",
    paragraphs: [
      "The platform is built on WordPress with heavily customized WooCommerce flows. Standard checkout and catalog patterns were extended to support publisher-specific business rules, product variations tied to digital assets and operational workflows that a vanilla store cannot provide.",
    ],
    items: [
      "Custom WooCommerce extensions and checkout behavior",
      "Multivendor commerce flows for publisher workflows",
      "Custom post types and admin UX for catalog management",
      "Production updates with regression-safe plugin architecture",
    ],
  },
  commerce: {
    title: "Commerce and Async Processing",
    paragraphs: [
      "Digital score products involve asset preparation, entitlement checks and post-purchase delivery. Long-running tasks are handled through asynchronous job processing so interactive requests stay responsive while file generation, notifications and sync tasks run in the background.",
    ],
    items: [
      "Async job queues for asset processing and notifications",
      "S3-backed storage for score files and derived assets",
      "Order lifecycle hooks for digital product fulfillment",
      "Operational tooling for support and content teams",
    ],
  },
  frontend: {
    title: "React Tooling and In-Browser Score UX",
    paragraphs: [
      "Score editing and preview require specialized browser tooling beyond typical CMS widgets. React components integrate with Fabric.js for canvas-based editing and PDF.js for in-browser preview, giving content teams visual control without leaving the admin workflow.",
    ],
    items: [
      "React tooling embedded in WordPress admin workflows",
      "Fabric.js canvas editing for score layout adjustments",
      "PDF.js rendering for in-browser preview",
      "Custom CSS and JavaScript for responsive catalog experiences",
    ],
  },
  access: {
    title: "Multilingual Content and Institutional Access",
    paragraphs: [
      "The platform serves international audiences through WPML-managed multilingual content. Institutional customers access the catalog through Shibboleth federation and IP-based login patterns, requiring careful session handling and entitlement mapping without exposing internal infrastructure details.",
    ],
    items: [
      "WPML for multilingual pages, products and editorial content",
      "Shibboleth federation for institutional single sign-on",
      "IP-based access patterns for library and campus networks",
      "Role and entitlement mapping for institutional vs. retail users",
    ],
  },
  responsibilities: {
    title: "Responsibilities",
    items: [
      "Design and implement custom WooCommerce and WordPress plugin functionality",
      "Build React-based admin tooling for score editing and preview",
      "Integrate S3 asset storage and async background job processing",
      "Implement WPML workflows and institutional access patterns",
      "Maintain responsive front-end experiences across catalog and checkout flows",
      "Support production releases and iterative platform improvements",
    ],
  },
  learnings: {
    title: "Technical Learnings",
    items: [
      "Publishing platforms need clear boundaries between CMS, commerce and asset pipelines",
      "Async jobs are essential when digital products involve file generation and delivery",
      "Institutional auth (Shibboleth, IP login) requires explicit session and entitlement design",
      "React tooling inside WordPress admin works best with isolated, well-documented bundles",
      "Multivendor and multilingual requirements compound early unless modeled explicitly",
    ],
  },
};
