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
  intro: [
    "Soy ingeniero electrónico y desarrollador de software. Mi trabajo se ha concentrado en construir aplicaciones y sistemas web, mientras mi formación académica me ha llevado hacia la inteligencia artificial y la neuroingeniería.",
    "Actualmente curso una maestría en Ingeniería en la Universidad de Antioquia, donde investigo interfaces cerebro-computador basadas en EEG y EMG.",
  ],
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
  projectTitle:
    "Decodificación de imaginación motora en lazo cerrado con una interfaz EEG–EMG de baja densidad",
  affiliation: "Maestría en Ingeniería · Universidad de Antioquia",
  previewTagline:
    "Investigo cómo podemos interpretar señales cerebrales relacionadas con la imaginación de movimiento.",
  summary:
    "Investigo cómo podemos interpretar señales cerebrales relacionadas con la imaginación de movimiento. Mi investigación de maestría estudia la decodificación de imaginación motora utilizando EEG de baja densidad, control de contaminación muscular mediante EMG y retroalimentación visual en tiempo real.",
  objective: {
    title: "Objetivo de investigación",
    paragraphs: [
      "Evaluar el desempeño de la decodificación en línea de imaginación motora con un montaje EEG de baja densidad. Considerar la precisión de clasificación y la latencia durante la interacción con retroalimentación visual.",
    ],
  },
  system: {
    title: "Sistema propuesto",
    items: [
      {
        title: "Decodificación EEG",
        description:
          "El diseño contempla ocho canales EEG sobre regiones sensoriomotoras. Procesa la actividad cerebral asociada a tareas de imaginación motora del miembro superior.",
      },
      {
        title: "Control de contaminación muscular",
        description:
          "El EMG de antebrazo detecta actividad muscular no intencionada y rechaza segmentos contaminados. No se utiliza como entrada adicional del clasificador ni como canal independiente de control.",
      },
      {
        title: "Retroalimentación visual adaptativa",
        description:
          "El sistema vincula una respuesta visual a su salida durante la tarea. El participante recibe esta retroalimentación mientras realiza el experimento, lo que permite evaluar la decodificación en lazo cerrado.",
      },
    ],
  },
  design: {
    title: "Diseño experimental",
    paragraphs: [
      "El estudio incluye 15 participantes sanos, de 18 a 45 años, y dos sesiones en días separados. La primera cubre la adquisición de señales, la calibración offline y la familiarización con la tarea. La segunda se centra en la evaluación online en lazo cerrado con los mismos participantes.",
      "La calibración y la evaluación offline usan los datos adquiridos en el estudio, no bases de datos públicas.",
    ],
  },
  evaluation: {
    title: "Evaluación",
    paragraphs: [
      "La evaluación propuesta considera la precisión de clasificación, la latencia de respuesta y el rechazo de segmentos con contaminación muscular. El análisis distingue el desempeño offline del comportamiento del sistema durante la interacción en lazo cerrado.",
    ],
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
