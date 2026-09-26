import type { LocaleData } from "@/content/locale-data-types";

export const data: LocaleData = {
  projects: {
    "udea-fcf-digital-ecosystem": {
      title: "Ecosistema digital, Universidad de Antioquia",
      clientType: "Facultad de Comunicaciones y Filología, Universidad de Antioquia",
      description:
        "Aplicaciones institucionales para la Universidad de Antioquia. Trabajo en la modernización de sistemas, la generación de reportes y la integración del acceso entre aplicaciones.",
      longDescription:
        "Ecosistema multi-aplicación que combina sistemas legacy, aplicaciones modernizadas e infraestructura compartida. El trabajo incluye aplicaciones legacy en Laravel y Symfony, APIs Laravel modernas, frontends React y Next.js, servicios de reportes en Python con FastAPI y Flask, flujos de datos con MySQL y PostgreSQL, entornos Docker, documentación, scripts de validación y autenticación centralizada con Keycloak/OIDC.",
    },
    "babel-scores": {
      title: "Babel Scores",
      clientType: "Proyecto directo con cliente",
      description:
        "Plataforma de venta y lectura de partituras digitales. Mi trabajo incluye el lector web, funcionalidades de comercio electrónico e integraciones para el acceso institucional.",
      longDescription:
        "Babel Scores es una plataforma de e-commerce desarrollada directamente para el cliente, combinando WordPress y WooCommerce con funcionalidad personalizada avanzada. El proyecto incluyó una experiencia flipbook con React.js, Fabric.js, PDF.js y React PageFlip, plugins WordPress personalizados, integración AWS S3, soporte WPML, migración de base de datos, jobs asíncronos, flujos multivendor y acceso institucional federado.",
    },
    "eeg-motor-imagery-pipeline": {
      title: "Pipeline de Imaginación Motora EEG",
      description:
        "Pipeline de investigación BCI de extremo a extremo: preprocesamiento MNE, características FBCSP, clasificadores LDA/SVM y evaluación leave-one-subject-out en datasets de imaginación motora.",
    },
    "sal-picciotto-website": {
      title: "Sitio web Sal & Picciotto",
      description:
        "Desarrollo e implementación de sitios web en colaboración con Sal & Picciotto, con trabajo en interfaces adaptables, gestión de contenido y funcionalidades específicas de cada proyecto.",
    },
    "trapatsa-eye-center": {
      title: "Trapatsas Eye Center",
      description:
        "Sitio web de salud desarrollado con WordPress y Elementor Pro, incluyendo páginas responsive, secciones orientadas a servicios y actualizaciones en producción.",
    },
    "giving-tuesday-panama": {
      title: "Giving Tuesday Panamá",
      description:
        "Sitio web de campaña y nonprofit implementado con WordPress y Elementor Pro, enfocado en estructura de contenido clara, diseño responsive y secciones de llamada a la acción.",
    },
    "barrio-alto-panama": {
      title: "Barrio Alto Panamá",
      description:
        "Sitio web inmobiliario construido con WordPress, Elementor Pro y Polylang, incluyendo secciones multilingües, layouts orientados a propiedades e implementación responsive.",
    },
    "fci-pty-box": {
      title: "FCI PTY Box",
      description:
        "Landing page empresarial implementada con WordPress y Elementor Pro, enfocada en bloques de contenido estructurados, diseño responsive y presentación orientada a campañas.",
    },
    "pdc-colombia": {
      title: "PDC Colombia",
      description:
        "Sitio web corporativo desarrollado con WordPress y Elementor Pro, incluyendo layouts responsive, gestión de contenido, campos personalizados e implementación lista para producción.",
    },
  },
  experience: {
    "anthology-blackboard": {
      role: "Ingeniero de Software / Full-Stack",
      type: "Software empresarial",
      period: "Nov 2021 – May 2026",
      location: "Bogotá, Colombia",
      description:
        "Software educativo empresarial a escala: frontends en React y TypeScript, servicios en Java y Spring Boot, PostgreSQL, migración de Angular a React, feature flags con AWS Lambda, pipelines CI/CD y pruebas automatizadas.",
      highlights: [
        "Entregué features full-stack en plataformas edtech usadas por instituciones a escala global",
        "Migré interfaces desarrolladas con Angular a React/TypeScript sin romper el ritmo de releases",
        "Fortalecí CI/CD y pruebas automatizadas en servicios Java y clientes React",
      ],
    },
    "digital-americas-pipeline": {
      role: "Desarrollador Backend",
      type: "Backend / Cloud",
      period: "Feb 2020 – Nov 2021",
      location: "Medellín, Colombia",
      description:
        "Desarrollo backend en sistemas cloud con Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway y herramientas basadas en Electron.",
      highlights: [
        "Construí backends event-driven con AWS Lambda, SNS/SQS y API Gateway",
        "Entregué servicios Node.js/Express para flujos de datos en la nube",
        "Soporté tooling en Electron para operaciones cloud",
      ],
    },
    "sal-picciotto": {
      role: "Desarrollador WordPress / Frontend",
      type: "Freelance / Agencia",
      period: "May 2022 – Presente",
      location: "Remoto",
      description:
        "Proyectos freelance de WordPress y Elementor Pro con Sal & Picciotto para clientes corporativos, del sector salud, inmobiliarios, organizaciones sin fines de lucro y campañas. Layouts responsive, ACF, Polylang, CSS y JavaScript personalizados y actualizaciones en producción.",
      highlights: [
        "Lancé sitios WordPress en producción para salud, inmobiliario y nonprofit",
        "Entregué layouts multilingües con Polylang, ACF y Elementor Pro",
        "Mantuve frontends responsive y actualizaciones de contenido en producción",
      ],
    },
    "babel-scores": {
      role: "Ingeniero de Software / Full-Stack",
      type: "Cliente directo / Plataforma editorial",
      period: "May 2022 – Presente",
      location: "Remoto",
      description:
        "Plataforma editorial y de e-commerce para cliente directo sobre WordPress y WooCommerce: plugins personalizados, herramientas flipbook en React con Fabric.js y PDF.js, AWS S3, WPML, tareas asíncronas, flujos multivendor y acceso institucional federado.",
      highlights: [
        "Lideré la ingeniería end-to-end de una plataforma de partituras digitales en producción",
        "Construí un lector flipbook en React con Fabric.js, PDF.js y flujos asíncronos en S3",
        "Habilité acceso institucional federado y flujos de publicación multivendor",
      ],
    },
    "udea-fcf": {
      role: "Ingeniero de Software",
      type: "Ecosistema de software institucional",
      period: "May 2022 – Presente",
      location: "Medellín, Colombia",
      description:
        "Software institucional para el ecosistema digital de Facultad de Comunicaciones y Filología, Universidad de Antioquia: modernización legacy, aplicaciones Laravel y Symfony, frontends React y Next.js, servicios de reportes en Python, entornos Docker, scripts de validación y autenticación centralizada con Keycloak/OIDC.",
      highlights: [
        "Modernicé aplicaciones institucionales legacy hacia un ecosistema compartido",
        "Centralicé identidad con Keycloak/OIDC en interfaces Laravel y React",
        "Construí servicios de reportes en Python y flujos de entrega con Docker",
      ],
    },
    "universidad-antioquia-research": {
      role: "Investigador en Neuroingeniería / Estudiante de Maestría",
      type: "Investigación",
      period: "Feb 2025 – Presente",
      location: "Medellín, Colombia",
      description:
        "Investigación de maestría en interfaces cerebro-computador e imaginación motora, con procesamiento de señales y desarrollo de software.",
      highlights: [
        "Desarrollo de software y flujos de análisis para investigación BCI",
        "Documentación y organización del trabajo de maestría",
        "Trato el código de investigación con disciplina de ingeniería",
      ],
    },
  },
  skills: {
    "core-engineering": { name: "Core Engineering" },
    "ai-neuroengineering": { name: "AI & Neuroengineering" },
    "cloud-auth": { name: "Cloud & Auth" },
  },
};
