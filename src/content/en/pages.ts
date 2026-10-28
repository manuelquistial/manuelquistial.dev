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
  intro: [
    "I am an electronic engineer and software developer. My work has focused on building web applications and systems, while my academic training has increasingly led me toward artificial intelligence and neuroengineering.",
    "I am currently pursuing a master's degree in Engineering at Universidad de Antioquia, where I research EEG- and EMG-based brain-computer interfaces.",
  ],
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
    "I study how brain signals related to imagined movement can be interpreted.",
  summary:
    "I study how brain signals related to imagined movement can be interpreted. My master's research focuses on motor imagery decoding using low-density EEG, EMG-based control of muscular contamination, and real-time visual feedback.",
  objective: {
    title: "Research objective",
    paragraphs: [
      "Evaluate online motor imagery decoding with a low-density EEG setup. Consider classification accuracy and latency during interaction with visual feedback.",
    ],
  },
  system: {
    title: "Proposed system",
    items: [
      {
        title: "EEG decoding",
        description:
          "The design uses eight EEG channels over sensorimotor regions. It processes brain activity associated with upper-limb motor imagery tasks.",
      },
      {
        title: "Muscular contamination control",
        description:
          "Forearm EMG detects unintended muscle activity and rejects contaminated segments. It is not an additional classifier input or an independent control channel.",
      },
      {
        title: "Adaptive visual feedback",
        description:
          "The system links a visual response to its output during the task. Participants receive this feedback throughout the experiment, which enables closed-loop evaluation.",
      },
    ],
  },
  design: {
    title: "Experimental design",
    paragraphs: [
      "The study includes 15 healthy participants aged 18–45, with two sessions on separate days. The first session covers signal acquisition, offline calibration, and task familiarization. The second focuses on online closed-loop evaluation with the same participants.",
      "Calibration and offline evaluation use data acquired in the study, rather than public datasets.",
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
