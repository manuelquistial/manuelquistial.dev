import type { CaseStudyContent } from "@/content/case-study-types";

export const babelScoresCaseStudy: CaseStudyContent = {
  title: "Babel Scores",
  subtitle:
    "Custom e-commerce engineering for a digital music scores platform built on WordPress and WooCommerce.",
  backLabel: "Back to projects",
  overview: {
    title: "Platform Context",
    paragraphs: [
      "Babel Scores is a custom e-commerce platform for digital music scores, combining catalog browsing, score sales and institutional access workflows. The product extends far beyond a standard WordPress theme: it requires custom commerce logic, a responsive React-based flipbook, multilingual content and federated institutional access for libraries and institutions.",
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
    title: "React Tooling and Flipbook UX",
    paragraphs: [
      "Score browsing and preview require specialized browser tooling beyond typical CMS widgets. React components integrate with Fabric.js, PDF.js and React PageFlip for canvas-based editing and responsive flipbook preview, giving content teams visual control without leaving the admin workflow.",
    ],
    items: [
      "React tooling embedded in WordPress admin workflows",
      "Fabric.js canvas editing for score layout adjustments",
      "PDF.js rendering for in-browser preview",
      "React PageFlip for responsive flipbook experiences",
    ],
  },
  access: {
    title: "Multilingual Content and Institutional Access",
    paragraphs: [
      "The platform serves international audiences through WPML-managed multilingual content. Institutional customers access the catalog through federated institutional access and entitlement mapping, requiring careful session handling without exposing internal infrastructure details.",
    ],
    items: [
      "WPML for multilingual pages, products and editorial content",
      "Federated institutional access for library and campus users",
      "Institutional access workflows for entitled catalog users",
      "Role and entitlement mapping for institutional vs. retail users",
    ],
  },
  responsibilities: {
    title: "Responsibilities",
    items: [
      "Design and implement custom WooCommerce and WordPress plugin functionality",
      "Build React-based admin tooling for score editing, preview and flipbook UX",
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
      "Institutional access requires explicit session and entitlement design",
      "React tooling inside WordPress admin works best with isolated, well-documented bundles",
      "Multivendor and multilingual requirements compound early unless modeled explicitly",
    ],
  },
};
