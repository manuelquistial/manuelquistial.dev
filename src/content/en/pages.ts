import type {
  AboutPageContent,
  AboutPreviewContent,
  ContactPageContent,
  ResearchPageContent,
} from "../pages-types";

export const about = {
  previewParagraphs: [
    "I spent ~4 years at Anthology/Blackboard on enterprise edtech: React and TypeScript frontends, Java and Spring Boot APIs, PostgreSQL and CI/CD pipelines for institutions at scale.",
    "Before that, I worked on backend and cloud systems at Digital Americas Pipeline Initiative. I also take on selected freelance WordPress projects through Sal & Picciotto, contribute to the digital ecosystem at Facultad de Comunicaciones y Filología, Universidad de Antioquia and to Babel Scores, while pursuing neuroengineering research aligned with my master's program.",
  ],
  highlights: [
    "~4 years enterprise full-stack at Anthology/Blackboard",
    "Backend and cloud at Digital Americas (2020–2021)",
    "Direct-client platform engineering on Babel Scores",
    "WordPress freelance delivery via Sal & Picciotto",
  ],
} satisfies AboutPreviewContent;

export const aboutPage = {
  title: "About Me",
  intro:
    "Manuel Alejandro Quistial Jurado, software and electronic engineer focused on enterprise full-stack work at Anthology/Blackboard, with backend and cloud experience from Digital Americas, selective freelance delivery and parallel institutional and neuroengineering projects.",
  engineering: {
    title: "Software Engineering",
    paragraphs: [
      "At Anthology/Blackboard I worked on enterprise learning platforms used by institutions worldwide: React and TypeScript interfaces, Java and Spring Boot microservices, PostgreSQL, Angular-to-React migration, AWS Lambda feature flags and automated testing in CI/CD pipelines.",
      "At Digital Americas Pipeline Initiative I worked as a backend developer on Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway and Electron-based tooling.",
      "On Babel Scores I build a direct-client publishing and e-commerce platform with WooCommerce, React, Fabric.js, PDF.js, S3, WPML, custom plugins, async jobs, multivendor flows and federated institutional access.",
      "I contribute to the institutional digital ecosystem at Facultad de Comunicaciones y Filología, Universidad de Antioquia (Laravel, Symfony, React, Next.js, Python, Keycloak/OIDC).",
      "Through Sal & Picciotto I deliver freelance WordPress and Elementor Pro projects for corporate, healthcare, real estate, nonprofit and campaign clients, using Polylang, ACF, WordPress Code Snippets, custom CSS and JavaScript.",
    ],
  },
  research: {
    title: "Neuroengineering & Research",
    paragraphs: [
      "As a master's student at Universidad de Antioquia, I research EEG-based motor imagery classification: decoding imagined hand movements from scalp recordings. My pipeline applies band-pass filtering, FBCSP feature extraction, and classifiers such as LDA and SVM.",
      "Evaluation follows subject-disjoint cross-validation so results reflect generalization across participants, not within-subject overfitting. I treat research code like production software: versioned experiments, traceable preprocessing, and reproducible notebooks.",
    ],
  },
  focus: {
    title: "Current Focus",
    items: [
      "Enterprise full-stack at Anthology/Blackboard: React, TypeScript, Java, Spring Boot, CI/CD",
      "Backend and cloud foundations from Digital Americas: Node.js, AWS Lambda, SNS/SQS",
      "Direct-client platform engineering on Babel Scores",
      "WordPress freelance delivery via Sal & Picciotto",
      "Institutional systems at Facultad de Comunicaciones y Filología, Universidad de Antioquia: Laravel, Keycloak/OIDC, Python reporting",
      "EEG signal processing and BCI classification pipelines",
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Master's in Engineering (Neuroengineering focus)",
        institution: "Universidad de Antioquia",
        period: "Feb 2025 – Dec 2026 (expected)",
        focus:
          "EEG-based motor imagery classification, FBCSP feature extraction, and subject-disjoint ML evaluation for BCI systems.",
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
    title: "Research Outputs",
    items: [
      {
        title: "EEG Motor Imagery Pipeline",
        description:
          "Reproducible Python research pipeline with MNE preprocessing, FBCSP features, and leave-one-subject-out evaluation.",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Research",
  subtitle:
    "EEG-based motor imagery classification at Universidad de Antioquia: bridging signal processing, classical ML, and software engineering.",
  previewTagline:
    "Motor imagery decoding, FBCSP feature extraction, and subject-disjoint evaluation for non-invasive BCI systems.",
  overview: {
    title: "Overview",
    paragraphs: [
      "My master's research tackles motor imagery classification from EEG: distinguishing imagined left-hand vs. right-hand movements from noisy scalp recordings. This is a foundational building block for non-invasive brain-computer interfaces that could assist motor rehabilitation or device control.",
      "The work combines MNE-based preprocessing, Filter Bank Common Spatial Patterns (FBCSP), and linear classifiers evaluated with leave-one-subject-out cross-validation. I document every step so experiments can be reproduced and compared fairly.",
    ],
  },
  topics: {
    title: "Research Topics",
    items: [
      {
        title: "Motor Imagery Classification",
        description:
          "Binary and multi-class decoding of imagined limb movements from multi-channel EEG recordings.",
      },
      {
        title: "FBCSP Feature Extraction",
        description:
          "Spatial filtering across frequency bands to maximize class separability before classification.",
      },
      {
        title: "Subject-Disjoint Evaluation",
        description:
          "Leave-one-subject-out cross-validation, confusion matrices, and per-participant performance analysis.",
      },
      {
        title: "Reproducible Pipelines",
        description:
          "Python workflows from raw .edf files to trained models with versioned preprocessing and logging.",
      },
    ],
  },
  methods: {
    title: "Methods & Tools",
    items: [
      "EEG acquisition and band-pass / notch filtering",
      "FBCSP and CSP spatial feature extraction",
      "LDA, SVM, and k-means clustering classifiers",
      "scikit-learn, pandas, NumPy, and MNE-Python",
      "Leave-one-subject-out cross-validation",
      "Confusion matrices and statistical performance reporting",
    ],
  },
  goals: {
    title: "Research Goals",
    paragraphs: [
      "Short term: refine the motor imagery pipeline, compare FBCSP configurations, and publish reproducible benchmarks under consistent evaluation protocols.",
      "Long term: connect research prototypes with production-grade software that makes neurotechnology more accessible: interpretable models, clean APIs, and tools researchers can actually deploy.",
    ],
  },
} satisfies ResearchPageContent;

export const contactPage = {
  title: "Contact",
  subtitle:
    "Open to senior full-stack engineering roles, AI/ML collaborations, and neuroengineering research partnerships.",
  email: "Email",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Download CV",
  availability:
    "Based in Colombia (COT). Available for remote and hybrid opportunities across time zones.",
} satisfies ContactPageContent;
