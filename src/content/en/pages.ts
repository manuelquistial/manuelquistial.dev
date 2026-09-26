import type {
  AboutPageContent,
  AboutPreviewContent,
  ContactPageContent,
  ResearchPageContent,
} from "../pages-types";

export const about = {
  previewParagraphs: [
    "I build web applications, integrate systems, and modernize platforms across product, institutional, and client work.",
  ],
  highlights: [],
} satisfies AboutPreviewContent;

export const aboutPage = {
  title: "Background",
  intro:
    "Manuel Alejandro Quistial Jurado, software and electronic engineer. I develop web applications, integrate systems, and modernize platforms across digital products, institutional software, and client websites. Research in neuroengineering is a parallel line of work.",
  engineering: {
    title: "Software engineering",
    paragraphs: [
      "At Anthology/Blackboard I worked on enterprise learning platforms: React and TypeScript interfaces, Java and Spring Boot services, PostgreSQL, migration from Angular to React, AWS Lambda feature flags, and automated testing in CI/CD pipelines.",
      "At Digital Americas Pipeline Initiative I worked as a backend developer with Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway, and Electron-based tooling.",
      "On Babel Scores I contribute to a publishing and e-commerce platform with WooCommerce, a React-based score reader, custom plugins, S3, WPML, async jobs, multivendor flows, and federated institutional access.",
      "I contribute to institutional applications at Facultad de Comunicaciones y Filología, Universidad de Antioquia, including modernization work, reporting, and shared access with Keycloak/OIDC.",
      "Through Sal & Picciotto I implement WordPress and Elementor Pro websites for corporate, healthcare, real estate, nonprofit, and campaign clients.",
    ],
  },
  research: {
    title: "Research",
    paragraphs: [
      "As a master's student at Universidad de Antioquia, my research focuses on brain-computer interfaces and motor imagery. The work combines signal processing and software development to study how a person interacts with a system.",
      "I treat research code with the same discipline as product software: clear structure, documented steps, and reproducible evaluation when materials are available.",
    ],
  },
  focus: {
    title: "Areas of work",
    items: [
      "Enterprise full-stack systems: React, TypeScript, Java, Spring Boot, CI/CD",
      "Backend and cloud services: Node.js, AWS Lambda, messaging and APIs",
      "Publishing and e-commerce platforms for direct clients",
      "WordPress delivery with Sal & Picciotto",
      "Institutional systems: modernization, reporting, and shared identity",
      "Neuroengineering research alongside software practice",
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Master's in Engineering (neuroengineering focus)",
        institution: "Universidad de Antioquia",
        period: "Feb 2025 – Dec 2026 (expected)",
        focus:
          "Brain-computer interfaces, motor imagery, and software for signal-oriented research workflows.",
      },
      {
        degree: "Specialization in Software Development",
        institution: "Universidad EAFIT",
        period: "Jul 2025 – Dec 2026 (expected)",
      },
      {
        degree: "BS in Electronic Engineering",
        institution: "Universidad de Antioquia",
        period: "Aug 2012 – Sep 2021",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "Professional working proficiency" },
      { language: "German", level: "Limited working proficiency" },
    ],
  },
  researchOutputs: {
    title: "Research line",
    items: [
      {
        title: "Brain-computer interfaces and motor imagery",
        description:
          "Master's research combining signal processing and software development. Details are kept at a general level until current materials are ready for publication.",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Research",
  subtitle:
    "Master's research on brain-computer interfaces and motor imagery at Universidad de Antioquia.",
  previewTagline:
    "My master's research focuses on brain-computer interfaces and motor imagery. This line brings together signal processing and software development to study interaction between a person and a system.",
  overview: {
    title: "Overview",
    paragraphs: [
      "My master's research focuses on brain-computer interfaces and motor imagery. The aim is to study how signal processing and software can support interaction between a person and a system.",
      "This page describes the research line at a general level. Specific methods, datasets, and evaluation details are included only when they remain accurate and authorized for publication.",
    ],
  },
  topics: {
    title: "Focus areas",
    items: [
      {
        title: "Brain-computer interfaces",
        description:
          "Software and signal-oriented work related to non-invasive BCI research.",
      },
      {
        title: "Motor imagery",
        description:
          "Studying imagined movement as a basis for interaction with computational systems.",
      },
      {
        title: "Signal processing and software",
        description:
          "Combining analysis workflows with engineering practices that keep experiments traceable.",
      },
      {
        title: "Reproducible research practice",
        description:
          "Organizing code, documentation, and evaluation so results can be inspected and revisited.",
      },
    ],
  },
  methods: {
    title: "Working approach",
    items: [
      "Signal processing for EEG-oriented research workflows",
      "Software structure for experiments and evaluation",
      "Documentation of assumptions and steps",
      "Python tooling for analysis and research code",
      "Clear separation between goals and confirmed findings",
      "Publication of materials only when authorized",
    ],
  },
  goals: {
    title: "Goals",
    paragraphs: [
      "Near term: continue the master's research with clear methods, careful evaluation, and software that supports the work.",
      "Longer term: keep research prototypes aligned with solid engineering practice without claiming clinical outcomes that the work does not demonstrate.",
    ],
  },
} satisfies ResearchPageContent;

export const contactPage = {
  title: "Contact",
  subtitle:
    "If you want to talk about a job opportunity, a software project, or a research collaboration, write to me on LinkedIn.",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Download CV",
  availability: "Based in Colombia. Open to remote and hybrid conversations.",
} satisfies ContactPageContent;
