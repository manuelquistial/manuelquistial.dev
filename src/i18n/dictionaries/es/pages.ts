export const about = {
  title: "Sobre mí",
  paragraphs: [
    "Soy ingeniero de software de Colombia con casi una década de experiencia entregando sistemas en producción. En Anthology/Blackboard trabajo en plataformas edtech empresariales — frontends en React y TypeScript, APIs en Java y Spring Boot, PostgreSQL y pipelines de CI/CD que sirven instituciones a escala.",
    "En paralelo, curso una maestría en neuroingeniería en la Universidad de Antioquia, donde diseño pipelines EEG para clasificación de imaginación motora. Aplico la misma disciplina en ambos mundos: arquitectura clara, flujos reproducibles y evaluación honesta.",
  ],
  highlights: [
    "React y TypeScript empresarial en Anthology/Blackboard",
    "Servicios backend con Java, Spring Boot y PostgreSQL",
    "Investigación EEG/BCI — FBCSP, LDA, ML subject-disjoint",
  ],
};

export const aboutPage = {
  title: "Sobre mí",
  intro:
    "Manuel Alejandro Quistial Jurado — ingeniero full-stack que construye software empresarial confiable de día, y pipelines de machine learning basados en EEG para investigación BCI de noche.",
  engineering: {
    title: "Ingeniería de Software",
    paragraphs: [
      "En Anthology/Blackboard contribuyo a plataformas de aprendizaje empresariales usadas por instituciones en todo el mundo. Mi día a día abarca interfaces en React y TypeScript, microservicios en Java y Spring Boot, esquemas PostgreSQL, autenticación con Keycloak y pruebas automatizadas en pipelines de CI/CD.",
      "Antes, entregué funcionalidades full-stack para clientes como freelancer — desde integraciones WordPress hasta APIs personalizadas. En todos los roles priorizo arquitectura frontend mantenible, diseño pragmático de APIs y código que los equipos puedan extender sin fricción.",
    ],
  },
  research: {
    title: "Neuroingeniería e Investigación",
    paragraphs: [
      "Como estudiante de maestría en la Universidad de Antioquia, investigo la clasificación de imaginación motora a partir de EEG — decodificar movimientos imaginados de mano a partir de registros en el cuero cabelludo. Mi pipeline aplica filtrado pasabanda, extracción de características FBCSP y clasificadores como LDA y SVM.",
      "La evaluación sigue validación cruzada subject-disjoint para reflejar generalización entre participantes, no sobreajuste intra-sujeto. Trato el código de investigación como software en producción: experimentos versionados, preprocesamiento trazable y notebooks reproducibles.",
    ],
  },
  focus: {
    title: "Enfoque actual",
    items: [
      "Arquitectura frontend — React, TypeScript, Next.js, microfrontends",
      "Sistemas backend — Java, Spring Boot, Python, FastAPI",
      "Desarrollo asistido por IA y herramientas RAG de conocimiento",
      "Procesamiento de señales EEG y pipelines de clasificación BCI",
      "Despliegue en la nube, Docker, GitHub Actions y CI/CD",
    ],
  },
};

export const researchPage = {
  title: "Investigación",
  subtitle:
    "Clasificación de imaginación motora con EEG en la Universidad de Antioquia — uniendo procesamiento de señales, ML clásico e ingeniería de software.",
  previewTagline:
    "Decodificación de imaginación motora, extracción FBCSP y evaluación subject-disjoint para sistemas BCI no invasivos.",
  overview: {
    title: "Resumen",
    paragraphs: [
      "Mi investigación de maestría aborda la clasificación de imaginación motora a partir de EEG — distinguir movimientos imaginados de mano izquierda vs. derecha a partir de registros ruidosos en el cuero cabelludo. Es un bloque fundamental para interfaces cerebro–computadora no invasivas que podrían apoyar rehabilitación motora o control de dispositivos.",
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
      "Clasificadores LDA, SVM y k-means clustering",
      "scikit-learn, pandas, NumPy y MNE-Python",
      "Validación cruzada leave-one-subject-out",
      "Matrices de confusión y reporte estadístico de rendimiento",
    ],
  },
  goals: {
    title: "Objetivos de investigación",
    paragraphs: [
      "Corto plazo: refinar el pipeline de imaginación motora, comparar configuraciones FBCSP y publicar benchmarks reproducibles bajo protocolos de evaluación consistentes.",
      "Largo plazo: conectar prototipos de investigación con software de nivel producción que haga la neurotecnología más accesible — modelos interpretables, APIs limpias y herramientas que los investigadores puedan desplegar.",
    ],
  },
};

export const contactPage = {
  title: "Contacto",
  subtitle:
    "Abierto a roles senior de ingeniería full-stack, colaboraciones en IA/ML y alianzas de investigación en neuroingeniería.",
  email: "Correo",
  linkedin: "LinkedIn",
  github: "GitHub",
  cv: "Descargar CV",
  availability:
    "Con base en Colombia (COT). Disponible para oportunidades remotas e híbridas en diferentes zonas horarias.",
};
