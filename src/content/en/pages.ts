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
    "I am an electronics engineer working in software development. I have also taught programming, data analysis, and artificial intelligence at Universidad de Antioquia.",
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
      "My master's research at Universidad de Antioquia focuses on brain-computer interfaces based on EEG signals and motor imagery. I work on signal processing and software development for the experiments.",
      "Motor imagery involves imagining a movement without performing it. EEG records the brain's electrical activity from the scalp.",
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
    "For job opportunities, software projects, or research collaborations, contact me on LinkedIn.",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Download CV",
  availability: "",
} satisfies ContactPageContent;
