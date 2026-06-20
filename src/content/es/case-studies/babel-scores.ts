import type { CaseStudyContent } from "@/content/case-study-types";

export const babelScoresCaseStudy: CaseStudyContent = {
  title: "Babel Scores",
  subtitle:
    "Ingeniería de e-commerce personalizada para una plataforma de partituras musicales digitales construida sobre WordPress y WooCommerce.",
  backLabel: "Volver a proyectos",
  overview: {
    title: "Contexto de la plataforma",
    paragraphs: [
      "Babel Scores es una plataforma de e-commerce personalizada para partituras musicales digitales, que combina navegación de catálogo, venta de partituras y flujos de acceso institucional. El producto va mucho más allá de un tema WordPress estándar: requiere lógica de comercio personalizada, un flipbook responsive basado en React, contenido multilingüe y acceso institucional federado para bibliotecas e instituciones.",
      "El trabajo de ingeniería abarca personalización de WooCommerce, herramientas basadas en React, procesamiento de jobs en background e integración con almacenamiento en la nube, manteniendo flujos editoriales y de comercio mantenibles para stakeholders no técnicos.",
    ],
  },
  platform: {
    title: "Base WordPress y WooCommerce",
    paragraphs: [
      "La plataforma se construye sobre WordPress con flujos WooCommerce fuertemente personalizados. Los patrones estándar de checkout y catálogo se extendieron para soportar reglas de negocio específicas de editoriales, variaciones de producto ligadas a activos digitales y flujos operativos que una tienda vanilla no puede ofrecer.",
    ],
    items: [
      "Extensiones WooCommerce personalizadas y comportamiento de checkout",
      "Flujos de comercio multivendor para workflows editoriales",
      "Custom post types y UX de admin para gestión de catálogo",
      "Actualizaciones en producción con arquitectura de plugins segura ante regresiones",
    ],
  },
  commerce: {
    title: "Comercio y procesamiento async",
    paragraphs: [
      "Los productos de partituras digitales implican preparación de activos, verificación de derechos y entrega post-compra. Las tareas de larga duración se manejan mediante procesamiento asíncrono de jobs para que las peticiones interactivas sigan siendo responsivas mientras generación de archivos, notificaciones y tareas de sincronización corren en background.",
    ],
    items: [
      "Colas de jobs async para procesamiento de activos y notificaciones",
      "Almacenamiento respaldado por S3 para archivos de partituras y activos derivados",
      "Hooks del ciclo de vida de pedidos para fulfillment de productos digitales",
      "Herramientas operativas para equipos de soporte y contenido",
    ],
  },
  frontend: {
    title: "Herramientas React y UX de flipbook",
    paragraphs: [
      "La navegación y vista previa de partituras requiere herramientas especializadas en el navegador más allá de widgets típicos de CMS. Componentes React se integran con Fabric.js, PDF.js y React PageFlip para edición basada en canvas y vista previa flipbook responsive, dando a los equipos de contenido control visual sin salir del flujo de admin.",
    ],
    items: [
      "Herramientas React integradas en flujos de admin de WordPress",
      "Edición canvas con Fabric.js para ajustes de layout de partituras",
      "Renderizado PDF.js para vista previa en el navegador",
      "React PageFlip para experiencias flipbook responsive",
    ],
  },
  access: {
    title: "Contenido multilingüe y acceso institucional",
    paragraphs: [
      "La plataforma atiende audiencias internacionales mediante contenido multilingüe gestionado con WPML. Los clientes institucionales acceden al catálogo a través de acceso institucional federado y mapeo de derechos, con manejo cuidadoso de sesiones sin exponer detalles de infraestructura interna.",
    ],
    items: [
      "WPML para páginas, productos y contenido editorial multilingüe",
      "Acceso institucional federado para usuarios de bibliotecas y campus",
      "Flujos de acceso institucional para usuarios del catálogo con derechos",
      "Mapeo de roles y derechos para usuarios institucionales vs. retail",
    ],
  },
  responsibilities: {
    title: "Responsabilidades",
    items: [
      "Diseñar e implementar funcionalidad personalizada de plugins WooCommerce y WordPress",
      "Construir herramientas de admin basadas en React para edición, vista previa y UX de flipbook",
      "Integrar almacenamiento de activos S3 y procesamiento async de jobs en background",
      "Implementar flujos WPML y patrones de acceso institucional",
      "Mantener experiencias frontend responsive en flujos de catálogo y checkout",
      "Apoyar releases en producción y mejoras iterativas de la plataforma",
    ],
  },
  learnings: {
    title: "Aprendizajes técnicos",
    items: [
      "Las plataformas editoriales necesitan límites claros entre CMS, comercio y pipelines de activos",
      "Los jobs async son esenciales cuando productos digitales implican generación y entrega de archivos",
      "El acceso institucional requiere diseño explícito de sesiones y derechos",
      "Las herramientas React dentro del admin de WordPress funcionan mejor con bundles aislados y bien documentados",
      "Los requisitos multivendor y multilingües se complican pronto si no se modelan explícitamente desde el inicio",
    ],
  },
};
