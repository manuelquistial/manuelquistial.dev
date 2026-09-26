import type {
  AboutPageContent,
  AboutPreviewContent,
  ContactPageContent,
  ResearchPageContent,
} from "../pages-types";

export const about = {
  previewParagraphs: [
    "Soy ingeniero electrónico y trabajo en desarrollo de software. Mi experiencia combina aplicaciones web, servicios backend y herramientas de gestión.",
  ],
  highlights: [],
} satisfies AboutPreviewContent;

export const aboutPage = {
  title: "Trayectoria",
  intro:
    "Soy ingeniero electrónico y trabajo en desarrollo de software. Mi experiencia combina aplicaciones web, servicios backend y herramientas de gestión. También he participado en formación tecnológica en la Universidad de Antioquia.",
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
        period: "Feb 2025 – Dic 2026 (previsto)",
      },
      {
        degree: "Especialización en Desarrollo de Software",
        institution: "Universidad EAFIT",
        period: "Jul 2025 – Dic 2026 (previsto)",
      },
      {
        degree: "Ingeniería Electrónica",
        institution: "Universidad de Antioquia",
        period: "Ago 2012 – Sep 2021",
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
        title: "Interfaces cerebro-computador e imaginación motora",
        description:
          "Investigo interfaces cerebro-computador basadas en señales EEG e imaginación motora en la Universidad de Antioquia. Mi trabajo combina procesamiento de señales y desarrollo de software.",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Investigación",
  subtitle:
    "Investigación de maestría en la Universidad de Antioquia sobre interfaces cerebro-computador e imaginación motora.",
  previewTagline:
    "Investigo interfaces cerebro-computador basadas en señales EEG e imaginación motora en la Universidad de Antioquia. Mi trabajo combina procesamiento de señales y desarrollo de software.",
  overview: {
    title: "Tema",
    paragraphs: [
      "Investigo interfaces cerebro-computador basadas en señales EEG e imaginación motora en la Universidad de Antioquia. Mi trabajo combina procesamiento de señales y desarrollo de software.",
    ],
  },
  topics: {
    title: "Enfoque",
    items: [
      {
        title: "Interfaces cerebro-computador",
        description:
          "Investigación BCI no invasiva basada en señales EEG.",
      },
      {
        title: "Imaginación motora",
        description:
          "Estudio del movimiento imaginado como base de interacción con sistemas computacionales.",
      },
    ],
  },
  methods: {
    title: "Enfoque de trabajo",
    items: [
      "Procesamiento de señales para flujos de investigación orientados a EEG",
      "Desarrollo de software que apoya el análisis y los experimentos",
    ],
  },
  goals: {
    title: "Trabajo actual",
    paragraphs: [
      "Continúo esta investigación de maestría con foco en el procesamiento de señales y en el software que sostiene los experimentos.",
    ],
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
