export const about = {
  title: "About",
  previewParagraphs: [
    "I am a software engineer from Colombia with nearly a decade of experience shipping production systems. At Anthology/Blackboard I work on enterprise edtech platforms: React and TypeScript frontends, Java and Spring Boot APIs, PostgreSQL, and CI/CD pipelines that serve institutions at scale.",
    "At Universidad de Antioquia I contribute to the FCF Digital Ecosystem and Babel Scores publishing platform, while pursuing a master's in neuroengineering with EEG pipelines for motor imagery classification.",
  ],
  paragraphs: [
    "I am a software engineer from Colombia with nearly a decade of experience shipping production systems. At Anthology/Blackboard I work on enterprise edtech platforms: React and TypeScript frontends, Java and Spring Boot APIs, PostgreSQL, and CI/CD pipelines that serve institutions at scale.",
    "At Universidad de Antioquia I contribute to the FCF Digital Ecosystem: a multi-service institutional environment spanning legacy Laravel and Symfony applications, modern React and Next.js frontends, Python reporting services and centralized Keycloak authentication for faculty administrative workflows.",
    "In parallel, I pursue a master's in neuroengineering at the same university, where I design EEG pipelines for motor imagery classification. I bring the same discipline to both worlds: clear architecture, reproducible workflows, and honest evaluation.",
  ],
  highlights: [
    "Enterprise React & TypeScript at Anthology/Blackboard",
    "Institutional multi-service systems at UdeA FCF",
    "EEG/BCI research: FBCSP, LDA, subject-disjoint ML",
  ],
};

export const aboutPage = {
  title: "About Me",
  intro:
    "Manuel Alejandro Quistial Jurado, full-stack engineer building reliable enterprise and institutional software, and EEG-based machine learning pipelines for BCI research.",
  engineering: {
    title: "Software Engineering",
    paragraphs: [
      "At Anthology/Blackboard I contribute to enterprise learning platforms used by institutions worldwide. My day-to-day spans React and TypeScript interfaces, Java and Spring Boot microservices, PostgreSQL schemas, Keycloak-based auth, and automated testing in CI/CD pipelines.",
      "At Universidad de Antioquia, Facultad de Comunicaciones y Filología, I work on the FCF Digital Ecosystem with legacy modernization, Laravel and Symfony applications, React and Next.js frontends, Python reporting services with FastAPI and Flask, Docker environments, validation scripts and centralized authentication with Keycloak/OIDC for classroom reservations, institutional requests, financial workflows and reporting.",
      "On Babel Scores, I engineer a custom publishing and e-commerce platform with WooCommerce, React, Fabric.js, PDF.js, S3, WPML, custom plugins, async jobs, multivendor flows, Shibboleth and IP-based institutional login.",
      "Delivered WordPress and Elementor Pro-based websites through Sal & Picciotto for corporate, healthcare, real estate, nonprofit and campaign-oriented clients, using Polylang, ACF, WordPress Code Snippets, custom CSS and JavaScript.",
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
      "Institutional ecosystems: legacy modernization, Keycloak/OIDC, multi-service architecture",
      "Frontend architecture: React, TypeScript, Next.js, microfrontends",
      "Backend systems: Java, Spring Boot, Laravel, Python, FastAPI",
      "AI-assisted development and RAG-based knowledge tools",
      "EEG signal processing and BCI classification pipelines",
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        program: "Master's in Neuroengineering",
        institution: "Universidad de Antioquia",
        focus:
          "EEG-based motor imagery classification, FBCSP feature extraction, and subject-disjoint ML evaluation for BCI systems.",
      },
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
};

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
};

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
};
