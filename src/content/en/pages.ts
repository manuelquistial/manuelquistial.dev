import type {
  AboutPageContent,
  AboutPreviewContent,
  ContactPageContent,
  ResearchPageContent,
} from "../pages-types";

export const about = {
  previewParagraphs: [
    "I am an electronic engineer working in software development. My experience combines web applications, backend services, and management tools.",
  ],
  highlights: [],
} satisfies AboutPreviewContent;

export const aboutPage = {
  title: "Background",
  intro:
    "I am an electronic engineer working in software development. My experience combines web applications, backend services, and management tools. I have also taken part in technical training at Universidad de Antioquia.",
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
        title: "Brain-computer interfaces and motor imagery",
        description:
          "I research brain-computer interfaces based on EEG signals and motor imagery at Universidad de Antioquia. My work combines signal processing and software development.",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Research",
  subtitle:
    "Master's research at Universidad de Antioquia on brain-computer interfaces and motor imagery.",
  previewTagline:
    "I research brain-computer interfaces based on EEG signals and motor imagery at Universidad de Antioquia. My work combines signal processing and software development.",
  overview: {
    title: "Topic",
    paragraphs: [
      "I research brain-computer interfaces based on EEG signals and motor imagery at Universidad de Antioquia. My work combines signal processing and software development.",
    ],
  },
  topics: {
    title: "Focus",
    items: [
      {
        title: "Brain-computer interfaces",
        description:
          "Non-invasive BCI research based on EEG signals.",
      },
      {
        title: "Motor imagery",
        description:
          "Studying imagined movement as a basis for interaction with computational systems.",
      },
    ],
  },
  methods: {
    title: "Approach",
    items: [
      "Signal processing for EEG-oriented research workflows",
      "Software development supporting analysis and experiments",
    ],
  },
  goals: {
    title: "Current work",
    paragraphs: [
      "I continue this master's research with a focus on signal processing and the software that supports the experiments.",
    ],
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
