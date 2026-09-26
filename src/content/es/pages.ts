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
    "Mi trayectoria comprende ingeniería full-stack, desarrollo backend y asesoría técnica en aplicaciones web. Soy ingeniero electrónico y he sido profesor de programación, desarrollo web, análisis de datos e inteligencia artificial en la Universidad de Antioquia.",
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
      "Investigación de maestría en la Universidad de Antioquia sobre interfaces cerebro-computador basadas en EEG e imaginación motora, con trabajo en procesamiento de señales y software experimental.",
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
    "Contacto profesional para posiciones de ingeniería de software, proyectos de desarrollo y colaboraciones de investigación.",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Descargar CV",
  availability: "",
} satisfies ContactPageContent;
