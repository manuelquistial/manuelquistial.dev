import type { LocaleData } from "@/content/locale-data-types";

export const data: LocaleData = {
  projects: {
    sita: {
      title: "SITA",
      clientType: "Universidad de Antioquia",
      description:
        "Sistema de información de trámites administrativos de la Facultad de Comunicaciones y Filología.",
      imageAlt:
        "Página principal de SITA para preparar un trámite administrativo.",
    },
    siar: {
      title: "SIAR",
      clientType: "Universidad de Antioquia",
      description:
        "Administración de recursos de la Facultad de Comunicaciones y Filología, con reserva de espacios y equipos y reporte de novedades.",
      imageAlt:
        "Página principal de SIAR para reservar espacios, reservar equipos y reportar novedades.",
    },
    finanzas: {
      title: "Finanzas",
      clientType: "Universidad de Antioquia",
      description:
        "Consulta de presupuesto e información financiera de la Facultad de Comunicaciones y Filología.",
      imageAlt: "Página principal de Finanzas con las categorías de presupuesto.",
    },
    conciliacion: {
      title: "Conciliación",
      clientType: "Universidad de Antioquia",
      description:
        "Comparación de movimientos contables de la Facultad de Comunicaciones y Filología.",
      imageAlt:
        "Página principal de Conciliación para comparar movimientos contables.",
    },
    "babel-scores": {
      title: "Babel Scores",
      description:
        "Lector de partituras en React e integraciones de comercio electrónico y acceso institucional.",
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
      description: "Sitio corporativo de la agencia.",
      homeDescription:
        "Desarrollo del sitio corporativo de la agencia en WordPress.",
      imageAlt:
        "Página de inicio de Sal & Picciotto con una cuadrícula de proyectos de marca.",
    },
    "trapatsa-eye-center": {
      title: "Trapatsas Eye Center",
      description: "Sitio web de un centro oftalmológico.",
      imageAlt:
        "Página de inicio de Trapatsas Eye Center con su navegación y una imagen de cirugía ocular.",
    },
    "giving-tuesday-panama": {
      title: "Giving Tuesday Panamá",
      description: "Sitio web de la campaña.",
      imageAlt:
        "Página de inicio de Giving Tuesday Panamá con su navegación y el horizonte de la ciudad.",
    },
    "barrio-alto-panama": {
      title: "Barrio Alto Panamá",
      description: "Sitio inmobiliario multilingüe.",
      imageAlt:
        "Página de Barrio Alto con imagen de acceso al proyecto y formulario de contacto.",
    },
    "fci-pty-box": {
      title: "FCI PTY Box",
      description: "Página del servicio de casillero internacional FCI Box.",
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
    "anthology-blackboard": {
      role: "Ingeniero de software",
      period: "nov. 2021 – may. 2026",
      location: "Bogotá, Colombia",
      description:
        "Ingeniería de software en plataformas de aprendizaje.",
      highlights: [
        "Desarrollé módulos administrativos en React y TypeScript para configurar plataformas de aprendizaje y gestionar la activación de funcionalidades, con integración a servicios backend.",
        "Participé en la migración de módulos de Angular a React y en la automatización de pruebas de los flujos administrativos.",
      ],
    },
    "digital-americas-pipeline": {
      role: "Desarrollador backend",
      period: "feb. 2020 – nov. 2021",
      location: "Medellín, Colombia",
      description:
        "Servicios backend y herramientas de monitoreo para aplicaciones en la nube.",
      highlights: [
        "Desarrollé servicios backend con Node.js y Express, con procesamiento de datos y mensajería asíncrona en AWS mediante Lambda, SNS y SQS.",
        "Implementé herramientas de monitoreo con Electron y Elastic Stack para consultar la actividad y el estado de los servicios.",
      ],
    },
    "sal-picciotto": {
      role: "Desarrollador WordPress / Frontend",
      period: "2022 – Presente",
      location: "Remoto",
      description:
        "Implementación de sitios web a partir de los diseños de la agencia.",
      highlights: [
        "Desarrollé sitios WordPress a partir de los diseños de la agencia, con implementación responsive en Elementor Pro y campos de contenido con ACF.",
        "Implementé versiones multilingües con Polylang.",
      ],
    },
    "babel-scores": {
      role: "Ingeniero de software",
      period: "2022 – Presente",
      location: "Remoto",
      description:
        "Lector de partituras e integraciones de plataforma.",
      highlights: [
        "Desarrollé el lector web de partituras en React.",
        "Implementé funcionalidades de comercio electrónico con WooCommerce e integraciones de acceso institucional.",
      ],
    },
    "udea-fcf": {
      role: "Asesoría y desarrollo de software",
      period: "Colaboraciones por proyecto · 2024–2026",
      location: "Medellín, Colombia",
      description:
        "Asesoría y desarrollo por proyecto en aplicaciones de la Facultad de Comunicaciones y Filología.",
      highlights: [
        "Desarrollé SITA y SIAR para trámites administrativos y para la administración de espacios, equipos y novedades.",
        "Desarrollé Finanzas y Conciliación para consultar presupuesto y comparar movimientos contables.",
        "Brindé soporte técnico y capacitación a los usuarios de las aplicaciones.",
      ],
    },
    "udea-teaching": {
      role: "Profesor de cátedra",
      period: "Contratos por periodos · 2022–2025",
      location: "Medellín, Colombia",
      description:
        "Profesor de cátedra en programación, desarrollo web, análisis de datos e inteligencia artificial. Mi actividad docente también incluyó prácticas académicas.",
    },
  },
  skills: {
    "core-engineering": { name: "Desarrollo de software" },
    "ai-neuroengineering": { name: "Datos e investigación" },
    "cloud-auth": { name: "Infraestructura e integración" },
  },
};
