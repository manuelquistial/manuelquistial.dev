import type { LocaleData } from "@/content/locale-data-types";

export const data: LocaleData = {
  projects: {
    "udea-fcf-digital-ecosystem": {
      title: "Ecosistema Digital: Facultad de Comunicaciones y Filología, Universidad de Antioquia",
      clientType: "Proyecto institucional",
      description:
        "Ecosistema de software institucional para Facultad de Comunicaciones y Filología, Universidad de Antioquia, incluyendo modernización legacy, flujos administrativos y académicos, servicios de reportes institucionales y gestión centralizada de identidad con Keycloak/OIDC.",
      longDescription:
        "Ecosistema multi-aplicación que combina sistemas legacy, aplicaciones modernizadas e infraestructura compartida. El trabajo incluye aplicaciones legacy en Laravel y Symfony, APIs Laravel modernas, frontends React y Next.js, servicios de reportes en Python con FastAPI y Flask, flujos de datos con MySQL y PostgreSQL, entornos Docker, documentación, scripts de validación y autenticación centralizada con Keycloak/OIDC.",
    },
    "babel-scores": {
      title: "Babel Scores",
      clientType: "Proyecto directo con cliente",
      description:
        "Plataforma de e-commerce personalizada para partituras digitales, construida sobre WordPress y WooCommerce con desarrollo avanzado, incluyendo flipbook responsive en React, plugins personalizados, soporte multilingüe, jobs asíncronos, integración S3, flujos multivendor y acceso institucional federado.",
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
        "Sitio web de agencia implementado con WordPress y Elementor Pro, enfocado en layouts responsive, estructura de contenido, consistencia visual y secciones mantenibles.",
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
      description:
        "Software educativo empresarial a escala: frontends en React y TypeScript, servicios en Java y Spring Boot, PostgreSQL, migración de Angular a React, feature flags con AWS Lambda, pipelines CI/CD y pruebas automatizadas.",
    },
    "digital-americas-pipeline": {
      role: "Desarrollador Backend",
      type: "Backend / Cloud",
      description:
        "Desarrollo backend en sistemas cloud con Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway y herramientas basadas en Electron.",
    },
    "sal-picciotto": {
      role: "Desarrollador WordPress / Frontend",
      type: "Freelance / Agencia",
      description:
        "Proyectos freelance de WordPress y Elementor Pro con Sal & Picciotto para clientes corporativos, del sector salud, inmobiliarios, organizaciones sin fines de lucro y campañas. Layouts responsive, ACF, Polylang, CSS y JavaScript personalizados y actualizaciones en producción.",
    },
    "babel-scores": {
      role: "Ingeniero de Software / Full-Stack",
      type: "Cliente directo / Plataforma editorial",
      description:
        "Plataforma editorial y de e-commerce para cliente directo sobre WordPress y WooCommerce: plugins personalizados, herramientas flipbook en React con Fabric.js y PDF.js, AWS S3, WPML, tareas asíncronas, flujos multivendor y acceso institucional federado.",
    },
    "udea-fcf": {
      role: "Ingeniero de Software",
      type: "Ecosistema de software institucional",
      description:
        "Software institucional para el ecosistema digital de Facultad de Comunicaciones y Filología, Universidad de Antioquia: modernización legacy, aplicaciones Laravel y Symfony, frontends React y Next.js, servicios de reportes en Python, entornos Docker, scripts de validación y autenticación centralizada con Keycloak/OIDC.",
    },
    "universidad-antioquia-research": {
      role: "Investigador en Neuroingeniería / Estudiante de Maestría",
      type: "Investigación",
      description:
        "Investigación de maestría en clasificación de imaginación motora con EEG, sistemas BCI, procesamiento de señales y evaluación con machine learning, con base en trabajo previo en rehabilitación cognitiva.",
    },
  },
  skills: {
    frontend: { name: "Frontend" },
    backend: { name: "Backend" },
    databases: { name: "Bases de datos" },
    "authentication-iam": { name: "Autenticación e IAM" },
    "data-reporting": { name: "Datos y reportes" },
    "ai-ml": { name: "IA / ML" },
    research: { name: "Investigación" },
    "cloud-devops": { name: "Cloud y DevOps" },
    "cms-web-platforms": { name: "CMS y plataformas web" },
    testing: { name: "Testing" },
  },
};
