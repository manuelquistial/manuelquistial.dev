import type {
  AboutPageContent,
  AboutPreviewContent,
  ContactPageContent,
  ResearchPageContent,
} from "../pages-types";

export const about = {
  previewParagraphs: [],
  highlights: [],
} satisfies AboutPreviewContent;

export const aboutPage = {
  title: "Experience",
  intro:
    "My experience spans full-stack engineering, backend development, and technical consulting for web applications. I hold a degree in Electronic Engineering and have taught programming, web development, data analysis, and artificial intelligence at Universidad de Antioquia.",
  engineering: {
    title: "Software engineering",
    paragraphs: [],
  },
  research: {
    title: "Research",
    paragraphs: [],
  },
  focus: {
    title: "Areas of work",
    items: [],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Master's in Engineering (neuroengineering focus)",
        institution: "Universidad de Antioquia",
        period: "Feb 2025 – Dec 2026 (expected)",
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
    title: "Research",
    items: [
      {
        title: "Research",
        description: "",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Research",
  subtitle: "Brain-computer interfaces and motor imagery",
  previewTagline:
    "My master's research at Universidad de Antioquia focuses on brain-computer interfaces based on EEG signals and motor imagery.",
  overview: {
    title: "Research",
    paragraphs: [
      "Master’s research at Universidad de Antioquia on EEG-based brain-computer interfaces and motor imagery, with work on signal processing and experimental software.",
    ],
  },
  topics: {
    title: "Focus",
    items: [],
  },
  methods: {
    title: "Approach",
    items: [],
  },
  goals: {
    title: "Current work",
    paragraphs: [],
  },
} satisfies ResearchPageContent;

export const contactPage = {
  title: "Contact",
  subtitle:
    "Professional inquiries about software engineering roles, development projects, and research collaborations.",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Download CV",
  availability: "",
} satisfies ContactPageContent;
