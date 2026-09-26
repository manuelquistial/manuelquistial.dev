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
  title: "Trayectoria",
  intro:
    "Soy ingeniero electrónico y trabajo en desarrollo de software. También he impartido formación en programación, análisis de datos e inteligencia artificial en la Universidad de Antioquia.",
  engineering: {
    title: "Ingeniería de software",
    paragraphs: [],
  },
  research: {
    title: "Investigación",
    paragraphs: [],
  },
  focus: {
    title: "Áreas de trabajo",
    items: [],
  },
  education: {
    title: "Formación académica",
    items: [
      {
        degree: "Maestría en Ingeniería (enfoque en neuroingeniería)",
        institution: "Universidad de Antioquia",
        period: "feb. 2025 – dic. 2026 (previsto)",
      },
      {
        degree: "Especialización en Desarrollo de Software",
        institution: "Universidad EAFIT",
        period: "jul. 2025 – dic. 2026 (previsto)",
      },
      {
        degree: "Ingeniería Electrónica",
        institution: "Universidad de Antioquia",
        period: "ago. 2012 – sep. 2021",
      },
    ],
  },
  languages: {
    title: "Idiomas",
    items: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "Competencia profesional" },
      { language: "Alemán", level: "Competencia limitada" },
    ],
  },
  researchOutputs: {
    title: "Investigación",
    items: [
      {
        title: "Investigación",
        description: "",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Investigación",
  subtitle: "Interfaces cerebro-computador e imaginación motora",
  previewTagline:
    "Mi investigación de maestría en la Universidad de Antioquia se centra en interfaces cerebro-computador basadas en señales EEG e imaginación motora.",
  overview: {
    title: "Investigación",
    paragraphs: [
      "Mi investigación de maestría en la Universidad de Antioquia se centra en interfaces cerebro-computador basadas en señales EEG e imaginación motora. Trabajo en procesamiento de señales y desarrollo de software para los experimentos.",
      "La imaginación motora consiste en imaginar un movimiento sin ejecutarlo. El EEG permite registrar la actividad eléctrica cerebral desde el cuero cabelludo.",
    ],
  },
  topics: {
    title: "Enfoque",
    items: [],
  },
  methods: {
    title: "Enfoque de trabajo",
    items: [],
  },
  goals: {
    title: "Trabajo actual",
    paragraphs: [],
  },
} satisfies ResearchPageContent;

export const contactPage = {
  title: "Contacto",
  subtitle:
    "Para oportunidades de trabajo, proyectos de software o colaboraciones de investigación, escríbeme por LinkedIn.",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Descargar CV",
  availability: "",
} satisfies ContactPageContent;
