import type { LocaleData } from "@/content/locale-data-types";

export const data: LocaleData = {
  projects: {
    "udea-fcf-digital-ecosystem": {
      title: "Ecosistema Digital UdeA FCF",
      clientType: "Proyecto institucional",
      description:
        "Ecosistema de software institucional para la Facultad de Comunicaciones y Filología de la Universidad de Antioquia, incluyendo modernización legacy, flujos administrativos y académicos, servicios de reportes institucionales y gestión centralizada de identidad con Keycloak/OIDC.",
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
      title: "TrapatSa Eye Center",
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
        "Trabajé en software de educación empresarial usando React, TypeScript, Redux, migración Angular a React, Java, Spring Boot, PostgreSQL, feature flags con AWS Lambda, pipelines CI/CD, pruebas automatizadas y pruebas end-to-end de UI.",
    },
    "udea-fcf": {
      role: "Ingeniero de Software",
      type: "Ecosistema de software institucional",
      description:
        "Trabajé en sistemas de software institucional con modernización legacy, aplicaciones Laravel y Symfony, frontends React y Next.js, servicios de reportes en Python, flujos de datos, entornos Docker, documentación, scripts de validación y autenticación centralizada con Keycloak/OIDC.",
    },
    "universidad-antioquia-research": {
      role: "Investigador en Neuroingeniería / Estudiante de Maestría",
      type: "Investigación",
      description:
        "Trabajé en software orientado a investigación y proyectos de neuroingeniería, incluyendo aplicaciones de rehabilitación cognitiva y un enfoque actual de maestría en clasificación de imaginación motora con EEG, sistemas BCI, procesamiento de señales y evaluación de machine learning.",
    },
    "sal-picciotto": {
      role: "Desarrollador WordPress / Frontend",
      type: "Proyectos de agencia",
      description:
        "Entregué sitios web con WordPress y Elementor Pro a través de Sal & Picciotto para clientes corporativos, de salud, inmobiliarios, sin fines de lucro y campañas. Trabajé en layouts responsive, estructura de contenido, campos ACF, WordPress Code Snippets, CSS personalizado, JavaScript, secciones multilingües con Polylang y actualizaciones en producción.",
    },
    "digital-americas-pipeline": {
      role: "Desarrollador Backend",
      type: "Backend / Cloud",
      description:
        "Trabajé en sistemas backend y cloud usando Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway y herramientas basadas en Electron.",
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
