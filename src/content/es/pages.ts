import type {
  AboutPageContent,
  AboutPreviewContent,
  ContactPageContent,
  ResearchPageContent,
} from "../pages-types";

export const about = {
  previewParagraphs: [
    "Soy ingeniero de software y electrónico de Colombia con 10 años de experiencia entregando sistemas en producción. En Anthology/Blackboard trabajo en plataformas edtech empresariales: frontends en React y TypeScript, APIs en Java y Spring Boot, PostgreSQL y pipelines de CI/CD que sirven instituciones a escala.",
    "En la Universidad de Antioquia contribuyo al Ecosistema Digital FCF y a la plataforma editorial Babel Scores, mientras curso una maestría en neuroingeniería con pipelines EEG para clasificación de imaginación motora.",
  ],
  highlights: [
    "React y TypeScript empresarial en Anthology/Blackboard",
    "Sistemas institucionales multi-servicio en UdeA FCF",
    "Investigación EEG/BCI: FBCSP, LDA, ML subject-disjoint",
  ],
} satisfies AboutPreviewContent;

export const aboutPage = {
  title: "Sobre mí",
  intro:
    "Manuel Alejandro Quistial Jurado, ingeniero de software y electrónico que construye software empresarial e institucional confiable, y pipelines de machine learning basados en EEG para investigación BCI.",
  engineering: {
    title: "Ingeniería de Software",
    paragraphs: [
      "En Anthology/Blackboard contribuyo a plataformas de aprendizaje empresariales usadas por instituciones en todo el mundo. Mi día a día abarca interfaces en React y TypeScript, microservicios en Java y Spring Boot, esquemas PostgreSQL, autenticación con Keycloak y pruebas automatizadas en pipelines de CI/CD.",
      "En la Universidad de Antioquia, Facultad de Comunicaciones y Filología, trabajo en el Ecosistema Digital FCF con modernización legacy, aplicaciones Laravel y Symfony, frontends React y Next.js, servicios de reportes en Python con FastAPI y Flask, entornos Docker, scripts de validación y autenticación centralizada con Keycloak/OIDC para flujos administrativos y académicos y reportes institucionales.",
      "En Babel Scores, desarrollo una plataforma editorial y de e-commerce personalizada con WooCommerce, React, Fabric.js, PDF.js, S3, WPML, plugins personalizados, jobs asíncronos, flujos multivendor y acceso institucional federado.",
      "Entregué sitios WordPress con Elementor Pro a través de Sal & Picciotto para clientes corporativos, de salud, inmobiliarios, sin fines de lucro y campañas, usando Polylang, ACF, WordPress Code Snippets, CSS y JavaScript personalizados.",
    ],
  },
  research: {
    title: "Neuroingeniería e Investigación",
    paragraphs: [
      "Como estudiante de maestría en la Universidad de Antioquia, investigo la clasificación de imaginación motora a partir de EEG: decodificar movimientos imaginados de mano a partir de registros en el cuero cabelludo. Mi pipeline aplica filtrado pasabanda, extracción de características FBCSP y clasificadores como LDA y SVM.",
      "La evaluación sigue validación cruzada subject-disjoint para reflejar generalización entre participantes, no sobreajuste intra-sujeto. Trato el código de investigación como software en producción: experimentos versionados, preprocesamiento trazable y notebooks reproducibles.",
    ],
  },
  focus: {
    title: "Enfoque actual",
    items: [
      "Ecosistemas institucionales: modernización legacy, Keycloak/OIDC, arquitectura multi-servicio",
      "Arquitectura frontend: React, TypeScript, Next.js, microfrontends",
      "Sistemas backend: Java, Spring Boot, Laravel, Python, FastAPI",
      "Desarrollo asistido por IA y herramientas RAG de conocimiento",
      "Procesamiento de señales EEG y pipelines de clasificación BCI",
    ],
  },
  education: {
    title: "Educación",
    items: [
      {
        degree: "Maestría en Ingeniería (enfoque en neuroingeniería)",
        institution: "Universidad de Antioquia",
        period: "Feb 2025 – Dic 2026 (previsto)",
        focus:
          "Clasificación de imaginación motora con EEG, extracción FBCSP y evaluación ML subject-disjoint para sistemas BCI.",
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
    title: "Resultados de investigación",
    items: [
      {
        title: "Pipeline de Imaginación Motora EEG",
        description:
          "Pipeline de investigación reproducible en Python con preprocesamiento MNE, características FBCSP y evaluación leave-one-subject-out.",
        href: "/research",
      },
    ],
  },
} satisfies AboutPageContent;

export const researchPage = {
  title: "Investigación",
  subtitle:
    "Clasificación de imaginación motora con EEG en la Universidad de Antioquia: uniendo procesamiento de señales, ML clásico e ingeniería de software.",
  previewTagline:
    "Decodificación de imaginación motora, extracción FBCSP y evaluación subject-disjoint para sistemas BCI no invasivos.",
  overview: {
    title: "Resumen",
    paragraphs: [
      "Mi investigación de maestría aborda la clasificación de imaginación motora a partir de EEG: distinguir movimientos imaginados de mano izquierda vs. derecha a partir de registros ruidosos en el cuero cabelludo. Es un bloque fundamental para interfaces cerebro–computadora no invasivas que podrían apoyar rehabilitación motora o control de dispositivos.",
      "El trabajo combina preprocesamiento con MNE, Filter Bank Common Spatial Patterns (FBCSP) y clasificadores lineales evaluados con validación cruzada leave-one-subject-out. Documento cada paso para que los experimentos sean reproducibles y comparables.",
    ],
  },
  topics: {
    title: "Temas de investigación",
    items: [
      {
        title: "Clasificación de Imaginación Motora",
        description:
          "Decodificación binaria y multiclase de movimientos imaginados de extremidades a partir de registros EEG multicanal.",
      },
      {
        title: "Extracción de Características FBCSP",
        description:
          "Filtrado espacial en bandas de frecuencia para maximizar la separabilidad de clases antes de la clasificación.",
      },
      {
        title: "Evaluación Subject-Disjoint",
        description:
          "Validación cruzada leave-one-subject-out, matrices de confusión y análisis de rendimiento por participante.",
      },
      {
        title: "Pipelines Reproducibles",
        description:
          "Flujos en Python desde archivos .edf en bruto hasta modelos entrenados con preprocesamiento versionado y logging.",
      },
    ],
  },
  methods: {
    title: "Métodos y herramientas",
    items: [
      "Adquisición EEG y filtrado pasabanda / notch",
      "Extracción de características FBCSP y CSP",
      "Clasificadores LDA, SVM y k-means",
      "scikit-learn, pandas, NumPy y MNE-Python",
      "Validación cruzada leave-one-subject-out",
      "Matrices de confusión y reportes estadísticos de rendimiento",
    ],
  },
  goals: {
    title: "Objetivos de investigación",
    paragraphs: [
      "Corto plazo: refinar el pipeline de imaginación motora, comparar configuraciones FBCSP y publicar benchmarks reproducibles bajo protocolos de evaluación consistentes.",
      "Largo plazo: conectar prototipos de investigación con software de calidad productiva que haga la neurotecnología más accesible: modelos interpretables, APIs limpias y herramientas que los investigadores puedan desplegar.",
    ],
  },
} satisfies ResearchPageContent;

export const contactPage = {
  title: "Contacto",
  subtitle:
    "Abierto a roles senior full-stack, colaboraciones de IA/ML y alianzas de investigación en neuroingeniería.",
  email: "Correo",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Descargar CV",
  availability:
    "Basado en Colombia (COT). Disponible para oportunidades remotas e híbridas en distintos husos horarios.",
} satisfies ContactPageContent;
