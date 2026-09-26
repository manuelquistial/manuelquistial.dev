import type {
  AboutPageContent,
  AboutPreviewContent,
  ContactPageContent,
  ResearchPageContent,
} from "../pages-types";

export const about = {
  previewParagraphs: [
    "Desarrollo aplicaciones web, integro sistemas y modernizo plataformas en trabajo de producto, entornos institucionales y proyectos para clientes.",
  ],
  highlights: [],
} satisfies AboutPreviewContent;

export const aboutPage = {
  title: "Trayectoria",
  intro:
    "Manuel Alejandro Quistial Jurado, ingeniero de software y electrónico. Desarrollo aplicaciones web, integro sistemas y modernizo plataformas en productos digitales, software institucional y sitios para clientes. La investigación en neuroingeniería es una línea paralela.",
  engineering: {
    title: "Ingeniería de software",
    paragraphs: [
      "En Anthology/Blackboard trabajé en plataformas de aprendizaje empresariales: interfaces en React y TypeScript, servicios en Java y Spring Boot, PostgreSQL, migración de Angular a React, feature flags con AWS Lambda y pruebas automatizadas en pipelines de CI/CD.",
      "En Digital Americas Pipeline Initiative trabajé como desarrollador backend con Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway y herramientas basadas en Electron.",
      "En Babel Scores contribuyo a una plataforma editorial y de e-commerce con WooCommerce, un lector de partituras en React, plugins personalizados, S3, WPML, tareas asíncronas, flujos multivendor y acceso institucional federado.",
      "Contribuyo a aplicaciones institucionales en Facultad de Comunicaciones y Filología, Universidad de Antioquia, con modernización, reportes e integración de acceso con Keycloak/OIDC.",
      "Con Sal & Picciotto implemento sitios WordPress y Elementor Pro para clientes corporativos, del sector salud, inmobiliarios, organizaciones sin fines de lucro y campañas.",
    ],
  },
  research: {
    title: "Investigación",
    paragraphs: [
      "Como estudiante de maestría en la Universidad de Antioquia, mi investigación se centra en interfaces cerebro-computador e imaginación motora. El trabajo reúne procesamiento de señales y desarrollo de software para estudiar la interacción entre una persona y un sistema.",
      "Trato el código de investigación con la misma disciplina que el software de producto: estructura clara, pasos documentados y evaluación reproducible cuando hay materiales disponibles.",
    ],
  },
  focus: {
    title: "Áreas de trabajo",
    items: [
      "Sistemas full-stack empresariales: React, TypeScript, Java, Spring Boot, CI/CD",
      "Servicios backend y cloud: Node.js, AWS Lambda, mensajería y APIs",
      "Plataformas editoriales y de e-commerce para clientes directos",
      "Entrega WordPress con Sal & Picciotto",
      "Sistemas institucionales: modernización, reportes e identidad compartida",
      "Investigación en neuroingeniería en paralelo a la práctica de software",
    ],
  },
  education: {
    title: "Formación",
    items: [
      {
        degree: "Maestría en Ingeniería (enfoque en neuroingeniería)",
        institution: "Universidad de Antioquia",
        period: "Feb 2025 – Dic 2026 (previsto)",
        focus:
          "Interfaces cerebro-computador, imaginación motora y software para flujos de investigación orientados a señales.",
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
    title: "Línea de investigación",
    items: [
      {
        title: "Interfaces cerebro-computador e imaginación motora",
        description:
          "Investigación de maestría que combina procesamiento de señales y desarrollo de software. El detalle se mantiene general hasta que los materiales actuales estén listos para publicación.",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Investigación",
  subtitle:
    "Investigación de maestría en interfaces cerebro-computador e imaginación motora en la Universidad de Antioquia.",
  previewTagline:
    "Mi investigación de maestría se centra en interfaces cerebro-computador e imaginación motora. Esta línea reúne procesamiento de señales y desarrollo de software para estudiar la interacción entre una persona y un sistema.",
  overview: {
    title: "Resumen",
    paragraphs: [
      "Mi investigación de maestría se centra en interfaces cerebro-computador e imaginación motora. El objetivo es estudiar cómo el procesamiento de señales y el software pueden apoyar la interacción entre una persona y un sistema.",
      "Esta página describe la línea de investigación de forma general. Métodos, datasets y detalles de evaluación se incluyen solo cuando siguen siendo exactos y están autorizados para publicación.",
    ],
  },
  topics: {
    title: "Áreas de trabajo",
    items: [
      {
        title: "Interfaces cerebro-computador",
        description:
          "Trabajo de software y señales relacionado con investigación BCI no invasiva.",
      },
      {
        title: "Imaginación motora",
        description:
          "Estudio del movimiento imaginado como base de interacción con sistemas computacionales.",
      },
      {
        title: "Procesamiento de señales y software",
        description:
          "Combinación de flujos de análisis con prácticas de ingeniería que mantienen los experimentos trazables.",
      },
      {
        title: "Práctica de investigación reproducible",
        description:
          "Organización de código, documentación y evaluación para poder revisar y retomar resultados.",
      },
    ],
  },
  methods: {
    title: "Enfoque de trabajo",
    items: [
      "Procesamiento de señales para flujos de investigación orientados a EEG",
      "Estructura de software para experimentos y evaluación",
      "Documentación de supuestos y pasos",
      "Herramientas en Python para análisis y código de investigación",
      "Separación clara entre objetivos y hallazgos confirmados",
      "Publicación de materiales solo cuando esté autorizada",
    ],
  },
  goals: {
    title: "Objetivos",
    paragraphs: [
      "Corto plazo: continuar la investigación de maestría con métodos claros, evaluación cuidadosa y software que sostenga el trabajo.",
      "Largo plazo: mantener los prototipos de investigación alineados con una ingeniería sólida, sin atribuir resultados clínicos que el trabajo no demuestre.",
    ],
  },
} satisfies ResearchPageContent;

export const contactPage = {
  title: "Contacto",
  subtitle:
    "Si quieres hablar sobre una oportunidad de trabajo, un proyecto de software o una colaboración de investigación, escríbeme por LinkedIn.",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Descargar CV",
  availability:
    "Basado en Colombia. Abierto a conversaciones remotas e híbridas.",
} satisfies ContactPageContent;
