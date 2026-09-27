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
    "My experience combines full-stack development, application modernization, and service integration. I have worked on enterprise platforms and administrative tools for marketing, operations, and academic teams.",
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
  projectTitle:
    "Closed-loop motor imagery decoding with a low-density EEG–EMG interface",
  affiliation: "Master’s in Engineering · Universidad de Antioquia",
  previewTagline:
    "Master’s research on motor imagery decoding with eight-channel EEG, EMG-based muscular contamination control, and closed-loop visual feedback.",
  summary:
    "My research addresses upper-limb motor imagery decoding through a hybrid EEG–EMG brain-computer interface. The proposed approach combines eight-channel EEG, EMG-based muscular contamination control, and adaptive visual feedback to evaluate closed-loop interaction between the participant and the system.",
  objective: {
    title: "Research objective",
    paragraphs: [
      "To evaluate online motor imagery decoding with a low-density EEG setup, considering classification accuracy and latency during interaction with visual feedback.",
    ],
  },
  system: {
    title: "Proposed system",
    items: [
      {
        title: "EEG decoding",
        description:
          "The design uses eight EEG channels over sensorimotor regions to process brain activity associated with upper-limb motor imagery tasks.",
      },
      {
        title: "Muscular contamination control",
        description:
          "Forearm EMG is intended to detect unintended muscle activity and reject contaminated segments. It is not used as an additional classifier input or as an independent control channel.",
      },
      {
        title: "Adaptive visual feedback",
        description:
          "The proposed system provides a visual response linked to its output during the task. This interaction enables closed-loop evaluation, with the participant receiving feedback throughout the experiment.",
      },
    ],
  },
  design: {
    title: "Experimental design",
    paragraphs: [
      "The study is designed for 15 healthy participants aged 18–45, with two sessions on separate days. The first session covers signal acquisition, offline calibration, and task familiarization. The second focuses on online closed-loop evaluation with the same participants.",
      "Calibration and offline evaluation are planned using data acquired in the study, rather than public datasets.",
    ],
  },
  evaluation: {
    title: "Evaluation",
    paragraphs: [
      "The proposed evaluation covers classification accuracy, response latency, and the rejection of segments affected by muscular contamination. The analysis distinguishes offline performance from system behavior during closed-loop interaction.",
    ],
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
