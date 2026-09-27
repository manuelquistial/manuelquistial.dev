import type { LocaleData } from "@/content/locale-data-types";

export const data: LocaleData = {
  projects: {
    sita: {
      title: "SITA",
      clientType: "Universidad de Antioquia",
      description:
        "Desarrollo de una aplicación para gestionar trámites administrativos de la Facultad de Comunicaciones y Filología.",
      imageAlt:
        "Página principal de SITA para preparar un trámite administrativo.",
    },
    siar: {
      title: "SIAR",
      clientType: "Universidad de Antioquia",
      description:
        "Desarrollo del sistema de reservas de espacios y equipos, con registro de novedades para la administración de recursos de la Facultad de Comunicaciones y Filología.",
      imageAlt:
        "Página principal de SIAR para reservar espacios, reservar equipos y reportar novedades.",
    },
    finanzas: {
      title: "Finanzas",
      clientType: "Universidad de Antioquia",
      description:
        "Desarrollo de una aplicación de consulta presupuestal y financiera para apoyar el trabajo administrativo de la Facultad de Comunicaciones y Filología.",
      imageAlt: "Página principal de Finanzas con las categorías de presupuesto.",
    },
    conciliacion: {
      title: "Conciliación",
      clientType: "Universidad de Antioquia",
      description:
        "Desarrollo de una herramienta para comparar movimientos contables y apoyar su revisión por el equipo administrativo.",
      imageAlt:
        "Página principal de Conciliación para comparar movimientos contables.",
    },
    "babel-scores": {
      title: "Babel Scores",
      description:
        "Plataforma de publicación, consulta y venta de partituras digitales, con lector web de partituras.",
      imageAlt:
        "Página de inicio de Babel Scores con su navegación y una imagen de unas manos sobre un teclado.",
    },
    "eeg-motor-imagery-pipeline": {
      title: "Interfaces cerebro-computador e imaginación motora",
      description:
        "Investigación de maestría en decodificación de imaginación motora con EEG de ocho canales, control de contaminación muscular mediante EMG y retroalimentación visual en lazo cerrado.",
    },
    "sal-picciotto-website": {
      title: "Sal & Picciotto",
      description:
        "Implementación del sitio corporativo que presenta los servicios y el portafolio de la agencia.",
      imageAlt:
        "Página de inicio de Sal & Picciotto con una cuadrícula de proyectos de marca.",
    },
    "trapatsa-eye-center": {
      title: "Trapatsas Eye Center",
      description:
        "Desarrollo del sitio web para presentar los servicios de atención de un centro oftalmológico.",
      imageAlt:
        "Página de inicio de Trapatsas Eye Center con su navegación y una imagen de cirugía ocular.",
    },
    "giving-tuesday-panama": {
      title: "Giving Tuesday Panamá",
      description:
        "Desarrollo del sitio de comunicación de la campaña Giving Tuesday en Panamá.",
      imageAlt:
        "Página de inicio de Giving Tuesday Panamá con su navegación y el horizonte de la ciudad.",
    },
    "barrio-alto-panama": {
      title: "Barrio Alto Panamá",
      description:
        "Desarrollo de un sitio inmobiliario multilingüe para presentar el proyecto residencial y recibir consultas de personas interesadas.",
      imageAlt:
        "Página de Barrio Alto con imagen de acceso al proyecto y formulario de contacto.",
    },
    "fci-pty-box": {
      title: "FCI PTY Box",
      description:
        "Desarrollo de la página de FCI Box para presentar su servicio de casillero internacional y las opciones de envío a Panamá.",
      imageAlt:
        "Página de FCI Box con su navegación y la imagen principal del servicio.",
    },
    "pdc-colombia": {
      title: "PDC Colombia",
      description:
        "Implementación de sitio corporativo con WordPress y Elementor Pro.",
    },
  },
  experience: {
    "independent-consulting": {
      company: "Ingeniería de software y consultoría independiente",
      role: "Ingeniero full-stack y consultor de plataformas web",
      period: "may. 2022 – Presente",
      description:
        "Desarrollo aplicaciones e integraciones para clientes empresariales e institucionales, con especial atención a las herramientas que sus equipos utilizan para administrar contenidos, productos y procesos.",
      highlights: [
        "Construí interfaces para que equipos no técnicos administraran páginas, información de programas, galerías, contenidos multilingües y datos de productos sin depender de un desarrollador para cada actualización.",
        "Implementé integraciones de autenticación, automatización de reportes y funcionalidades de administración adaptadas a las necesidades de cada cliente.",
      ],
      engagements: {
        "babel-scores": {
          highlights: [
            "Desarrollé el lector web de partituras y funcionalidades de previsualización de documentos PDF.",
            "Mejoré los flujos de vendedores y administradores para gestionar catálogos digitales, información de productos y contenidos de acceso restringido.",
            "Trabajé en las integraciones de comercio electrónico, almacenamiento y autenticación de la plataforma.",
          ],
          technologiesLabel: "Tecnologías",
        },
        "sal-picciotto": {
          highlights: [
            "Desarrollé soluciones en WordPress y Shopify con estructuras de contenido administrables por equipos no técnicos.",
            "Habilité la actualización de páginas, información de programas y galerías para que los equipos pudieran mantener sus contenidos sin solicitar cambios de código.",
            "Implementé los diseños de la agencia y funcionalidades de administración específicas para sus proyectos.",
          ],
          technologiesLabel: "Tecnologías",
        },
        "udea-fcf": {
          period: "Colaboraciones por proyecto · 2024–2026",
          highlights: [
            "Desarrollé SITA y SIAR para atender trámites administrativos, reservas de espacios y equipos, y registro de novedades.",
            "Desarrollé Finanzas y Conciliación para consultar información presupuestal y apoyar la revisión de movimientos contables.",
            "Participé en la modernización de interfaces y la migración de servicios backend, con trabajo en autenticación, reportes y flujos de datos institucionales.",
            "Brindé soporte técnico y capacitación para el uso de las aplicaciones.",
          ],
          technologiesLabel: "Tecnologías de la colaboración",
        },
      },
    },
    "anthology-blackboard": {
      role: "Ingeniero de software",
      period: "nov. 2021 – may. 2026",
      location: "Bogotá, Colombia",
      description:
        "Desarrollo full-stack de funcionalidades empresariales, con trabajo en interfaces administrativas, servicios backend y modernización de frontend.",
      technologiesLabel: "Tecnologías",
      highlights: [
        "Desarrollé módulos en React y TypeScript dentro de una arquitectura modular, con componentes reutilizables para mantener consistencia entre las interfaces.",
        "Extendí y mantuve APIs REST y lógica de negocio en Java y Spring Boot para soportar las integraciones del frontend y los flujos de la plataforma.",
        "Diseñé e implementé interfaces de gestión de funcionalidades conectadas con servicios de feature flags en Python y AWS Lambda, para administrar su configuración y activación.",
        "Participé en la migración de funcionalidades de Angular a React, coordinando su integración con los servicios backend y los contratos de las APIs.",
        "Implementé pruebas automatizadas de interfaz con WebdriverIO para verificar flujos críticos y apoyar la detección de regresiones.",
      ],
    },
    "digital-americas-pipeline": {
      role: "Desarrollador backend",
      period: "feb. 2020 – nov. 2021",
      location: "Medellín, Colombia",
      description:
        "Desarrollo de servicios y herramientas de operación para aplicaciones distribuidas en AWS.",
      technologiesLabel: "Tecnologías",
      highlights: [
        "Desarrollé microservicios con Node.js y Express para soportar el procesamiento de datos y la integración entre componentes.",
        "Implementé flujos distribuidos de procesamiento y notificaciones con servicios de AWS para ejecutar tareas de forma asíncrona.",
        "Construí aplicaciones con Electron e integraciones con Elastic Stack para consultar la actividad de los servicios y apoyar las tareas de monitoreo y soporte.",
      ],
    },
    "udea-teaching": {
      role: "Profesor de cátedra",
      period: "Contratos por periodos · 2022–2025",
      location: "Medellín, Colombia",
      description:
        "Profesor de cátedra en programación, desarrollo web, análisis de datos e inteligencia artificial para MisionTic y TalentoTech, tanto en modalidad presencial como virtual.",
    },
  },
  skills: {
    "core-engineering": { name: "Desarrollo de software" },
    "ai-neuroengineering": { name: "Datos e investigación" },
    "cloud-auth": { name: "Infraestructura e integración" },
  },
};
