import { skillSecurityLinks } from "@/content/learn/links/skill-security";
import type { LearnGuideLessonContent, LearnSource } from "@/content/learn/types";

export const skillSecurityLessonMeta = {
  kind: "guide",
  guideId: "skill-security",
  cardArt: "skill-security",
  cardImageLabel:
    "Guía para revisar skills de inteligencia artificial antes de instalarlas.",
  slug: "seguridad-skills-ia",
  locales: ["es"],
  title: "¿Sabes qué estás instalando en tus herramientas de IA?",
  description:
    "Aprende a identificar riesgos en skills de IA, revisar las herramientas que utilizas y actuar ante posibles problemas de seguridad, sin necesidad de programar.",
  cardDescription:
    "Investiga cómo funcionan las skills de IA, qué riesgos pueden presentar y cómo comprobar su procedencia antes de utilizarlas.",
  metaTitle: "¿Sabes qué estás instalando en tus herramientas de IA? | Aprendamos",
  publishedAt: "2026-11-18T23:00:00.000Z",
  category: "Inteligencia artificial",
  subcategory: "Seguridad digital",
  author: "Manuel Quistial",
  contentReviewLabel: "Fecha inicial de revisión del contenido",
  contentReviewDate: "18 de noviembre de 2026",
} as const satisfies LearnGuideLessonContent;

export const skillSecurityLesson = skillSecurityLessonMeta;

export const skillSecurityUi = {
  eyebrow: "APRENDAMOS / SEGURIDAD EN IA",
  sectionsLabel: "Contenido",
  bannerDescription:
    "Aprende a reconocer los riesgos de las skills y los MCP antes de darles acceso a tus herramientas y archivos.",
  exploreContent: "Explorar el contenido",
  exploreRisks: "Explorar los riesgos",
  howToReview: "Cómo revisar una skill",
  whatWouldYouDo: "¿Qué harías?",
  decisionRecommended: "Decisión recomendada",
  reviewDecision: "Revisa esta decisión",
  recommendedAnswer: "Respuesta recomendada",
  caseProgress: "Caso {current} de {total}",
  previousCase: "Caso anterior",
  nextCase: "Siguiente caso",
  reviewCases: "Revisar los casos nuevamente",
  previousStep: "Etapa anterior",
  nextStep: "Etapa siguiente",
  stepProgress: "Etapa {current} de {total}",
  structureCaption:
    "Representación ilustrativa de componentes que pueden existir en una skill.",
  selectSkillMd: "SKILL.md",
  copyRecommendations: "Copiar recomendaciones",
  copyChecks: "Copiar comprobaciones",
  copied: "Copiado",
  copyFailed: "No se pudo copiar. Selecciona el texto e inténtalo de nuevo.",
  illustrationPending: "Espacio reservado para ilustración editorial",
  backToIndex: "Volver a Aprendamos",
} as const;

export const skillSecurityHero = {
  title: "¿Sabes qué estás instalando en tus herramientas de IA?",
  intro: [
    "Encuentras una skill que promete mejorar tus diseños, ayudarte a crear contenido o automatizar tareas. La instalas en ChatGPT, Claude u otra herramienta de IA y comienzas a utilizarla.",
    "Pero ¿sabes qué contiene y qué puede hacer con los accesos disponibles en tu equipo?",
    "Algunas skills incorporan instrucciones y programas que pueden influir en las acciones de un agente. Si su contenido es malicioso o ha sido comprometido, podría intentar acceder a archivos, modificar información o enviarla a servicios externos sin tu autorización.",
    "Estos riesgos están documentados en investigaciones sobre seguridad de agentes de IA. No significa que todas las skills sean peligrosas, pero sí que conviene comprobar qué instalas antes de confiarles tu información.",
  ],
  highlight:
    "En esta guía aprenderás a identificar riesgos, revisar las herramientas que utilizas y actuar ante posibles problemas de seguridad, sin necesidad de programar.",
} as const;

export const skillSecurityNav = [
  { id: "riesgos", title: "¿Qué riesgos puede introducir una skill?" },
  { id: "antes-de-instalar", title: "Antes de instalar una skill, revisa esto" },
  { id: "donde-comprobar", title: "¿Dónde puedes comprobar una skill?" },
  { id: "casos", title: "Aprende a reconocer situaciones sospechosas" },
  { id: "ya-instaladas", title: "¿Y si ya tienes varias skills instaladas?" },
  { id: "si-detectas", title: "¿Qué hacer si detectas algo sospechoso?" },
  {
    id: "limites",
    title: "¿Hasta dónde puedes revisar la seguridad sin programar?",
  },
  { id: "cierre", title: "Antes de instalar tu próxima skill" },
  { id: "fuentes", title: "Investigación y fuentes" },
] as const;

export const skillSecurityRisks = {
  id: "riesgos",
  title: "¿Qué riesgos puede introducir una skill?",
  intro: [
    "Una skill puede contener instrucciones y archivos auxiliares que un agente utiliza para completar tareas. Lo que puede hacer depende de las herramientas disponibles y los permisos de su entorno.",
    "Estos son cuatro riesgos que debes conocer.",
  ],
  items: [
    {
      id: "malicious-instructions",
      title: "Instrucciones maliciosas",
      paragraphs: [
        "Una skill puede contener instrucciones diseñadas para desviar al agente de la tarea que solicitaste.",
        "Por ejemplo, podría intentar que consulte archivos adicionales o utilice una conexión para enviar información a un tercero.",
        "Este tipo de manipulación puede realizarse mediante prompt injection, un mecanismo de ataque que busca alterar el comportamiento de sistemas de IA a través de instrucciones incorporadas en contenidos que procesan.",
        "Que exista una instrucción maliciosa no significa que necesariamente consiga ejecutarse. Su éxito depende de las capacidades del agente y sus mecanismos de protección.",
      ],
    },
    {
      id: "improper-access",
      title: "Acceso indebido a información",
      paragraphs: [
        "Una herramienta maliciosa podría intentar aprovechar los permisos disponibles para consultar información ajena a la tarea.",
        "Por ejemplo, si trabajas con documentos de un proyecto, el riesgo aumenta cuando el agente también tiene acceso a otras carpetas que no necesita.",
        "Cuanto más amplio sea el acceso disponible, mayor puede ser el alcance de una acción indebida.",
      ],
    },
    {
      id: "malicious-programs",
      title: "Ejecución de programas maliciosos",
      paragraphs: [
        "Algunas skills incluyen programas auxiliares o instrucciones para ejecutar comandos.",
        "Estos recursos pueden ser legítimos, pero también representar un riesgo si contienen código malicioso.",
        "Cuando un agente ejecuta programas en tu computador, las posibles consecuencias dependen de los permisos concedidos y de las restricciones del entorno.",
        "No todas las skills contienen programas ni todas las aplicaciones permiten ejecutarlos.",
      ],
    },
    {
      id: "untrusted-connections",
      title: "Conexiones externas no confiables",
      paragraphs: [
        "Los agentes pueden interactuar con servicios mediante conectores o servidores MCP.",
        "Una conexión maliciosa o comprometida podría intentar obtener información o provocar acciones no autorizadas.",
        "El uso de MCP no implica, por sí mismo, que exista una vulnerabilidad. La seguridad depende del servicio conectado, las funciones que ofrece y los permisos que tiene disponibles.",
      ],
    },
  ],
  closing:
    "Estos riesgos pueden afectar la privacidad de tu información, la integridad de tus archivos y las acciones que realiza el agente.",
  relatedNote:
    "Investigaciones relacionadas: Schmotz et al. (2026), Zhan et al. (2024) y Ferrag et al. (2025).",
} as const;

export const skillSecurityBeforeInstall = {
  id: "antes-de-instalar",
  title: "Antes de instalar una skill, revisa esto",
  intro: [
    "No necesitas analizar código para realizar algunas comprobaciones importantes.",
  ],
  items: [
    {
      id: "origin",
      title: "Comprueba su procedencia",
      paragraphs: [
        "Identifica quién publica la skill y busca su fuente original.",
        "Si la encontraste en redes sociales, verifica que el enlace corresponda al proyecto anunciado.",
        "Una descripción convincente, muchas recomendaciones o un repositorio público no garantizan seguridad.",
        "Si no puedes verificar su origen, evita instalarla con acceso a información importante.",
      ],
    },
    {
      id: "contents",
      title: "Consulta qué contiene",
      paragraphs: [
        "Muchas skills utilizan un archivo de instrucciones llamado SKILL.md, que puedes consultar cuando el proyecto publica su contenido.",
        "Revisa qué tareas describe y si menciona programas auxiliares, instalaciones adicionales o conexiones externas.",
        "No necesitas interpretar cada línea de código. El objetivo es conocer los componentes principales y reconocer cuándo necesitas ayuda para evaluarlos.",
      ],
      warning:
        "No ejecutes comandos desconocidos para comprobar si una herramienta es segura.",
    },
    {
      id: "access",
      title: "Revisa qué accesos necesita",
      paragraphs: [
        "Comprueba qué archivos, carpetas o servicios podrá utilizar.",
        "No es lo mismo permitir que consulte un documento que autorizar modificaciones, eliminaciones o acciones en cuentas conectadas.",
        "Cuando sea posible, limita los permisos a lo necesario y conserva las confirmaciones antes de realizar operaciones importantes.",
      ],
    },
    {
      id: "analysis",
      title: "Busca análisis de seguridad",
      paragraphs: [
        "Algunas skills cuentan con análisis automatizados publicados en directorios especializados.",
        "Estos informes pueden identificar instrucciones sospechosas y otros patrones de riesgo.",
        "Comprueba que el análisis corresponda a la misma herramienta y versión. Un reporte anterior puede no reflejar modificaciones recientes.",
      ],
    },
  ],
} as const;

export const skillSecurityWhereToCheck = {
  id: "donde-comprobar",
  title: "¿Dónde puedes comprobar una skill?",
  intro: [
    "Existen recursos que puedes consultar sin programar y herramientas destinadas a evaluaciones especializadas.",
  ],
  tools: [
    {
      id: "skillscan",
      title: "skillscan.io: consultar análisis publicados",
      href: skillSecurityLinks.skillscanDirectory,
      hrefLabel: "https://skillscan.io/skills/",
      description:
        "Permite buscar skills incluidas en su directorio y consultar resultados de análisis automatizados.",
      howToTitle: "Cómo utilizarlo",
      howTo: [
        "Busca la skill que quieres revisar.",
        "Comprueba que corresponda al mismo proyecto.",
        "Revisa la fecha y la versión analizada, cuando estén disponibles.",
        "Lee los hallazgos y sus explicaciones.",
      ],
      safeTitle: "¿Qué significa que aparezca como SAFE?",
      safeParagraphs: [
        "Significa que obtuvo esa clasificación según los criterios del escáner.",
        "No es una certificación universal de seguridad.",
        "La metodología de skillscan.io permite que una skill reciba la clasificación SAFE y conserve determinados hallazgos de severidad media.",
        "Por eso debes leer las advertencias, incluso cuando el resultado general sea favorable.",
        "Un análisis sin alertas tampoco garantiza que la herramienta esté libre de vulnerabilidades.",
      ],
      methodologyHref: skillSecurityLinks.skillscanMethodology,
      methodologyLabel: "Consulta su metodología",
    },
    {
      id: "owasp",
      title: "OWASP: comprender riesgos documentados",
      href: skillSecurityLinks.owaspAgenticSkills,
      hrefLabel: "https://owasp.org/projects/agentic-skills-top-10",
      paragraphs: [
        "OWASP publica documentación sobre riesgos relacionados con skills y agentes de IA, junto con criterios y recomendaciones de seguridad.",
        "Es una referencia para comprender las amenazas, no un servicio que certifique herramientas individuales.",
      ],
    },
    {
      id: "cisco",
      title: "Cisco AI Defense Skill Scanner: análisis especializado",
      href: skillSecurityLinks.ciscoSkillScannerDocs,
      hrefLabel:
        "https://cisco-ai-defense.github.io/docs/skill-scanner",
      paragraphs: [
        "Herramienta diseñada para detectar determinados patrones de riesgo en skills, incluidas instrucciones sospechosas.",
        "Su utilización directa requiere conocimientos técnicos y puede formar parte de una evaluación especializada.",
        "Como ocurre con otros escáneres, sus resultados pueden incluir falsos positivos o pasar por alto determinados problemas.",
      ],
      warning:
        "Antes de cargar archivos en un servicio de análisis, verifica quién lo administra y cómo trata la información. Evita compartir documentos privados o credenciales con servicios que no hayas comprobado.",
    },
  ],
} as const;

export const skillSecurityCases = {
  id: "casos",
  title: "Aprende a reconocer situaciones sospechosas",
  intro: [
    "Los siguientes casos son simulaciones educativas basadas en riesgos documentados.",
    "Selecciona qué harías y consulta la explicación de cada respuesta.",
  ],
  cases: [
    {
      id: "program",
      title: "Caso A. Una skill solicita ejecutar un programa",
      situation: [
        "Instalaste una skill para mejorar presentaciones.",
        "Durante su configuración, el agente indica que necesita descargar y ejecutar un programa adicional.",
        "La documentación no explica qué hace ese programa.",
      ],
      options: [
        {
          id: "a",
          label: "Permitir su ejecución porque forma parte de la instalación.",
          recommended: false,
        },
        {
          id: "b",
          label: "Pedirle a la misma skill que confirme si es seguro.",
          recommended: false,
        },
        {
          id: "c",
          label:
            "No ejecutarlo hasta verificar su procedencia y función.",
          recommended: true,
        },
      ],
      feedback: [
        "Un programa auxiliar puede ser legítimo, pero necesitas conocer su origen y finalidad antes de autorizarlo.",
        "Puedes utilizar otra IA para comprender sus instrucciones, pero esa explicación no equivale a una evaluación de seguridad.",
        "Si no puedes verificar el programa, evita ejecutarlo y solicita ayuda especializada.",
      ],
    },
    {
      id: "files",
      title: "Caso B. El agente intenta consultar otros archivos",
      situation: [
        "Le pediste a una IA organizar los documentos de un proyecto.",
        "Durante la tarea, observas que intenta acceder a otra carpeta que contiene información que no necesita.",
      ],
      options: [
        {
          id: "a",
          label: "Permitirlo porque el agente sabe qué archivos necesita.",
          recommended: false,
        },
        {
          id: "b",
          label: "Detener la acción y revisar por qué solicita ese acceso.",
          recommended: true,
        },
        {
          id: "c",
          label: "Concluir que la skill está robando información.",
          recommended: false,
        },
      ],
      feedback: [
        "El acceso a archivos ajenos a la tarea merece una revisión.",
        "Puede deberse a un error, una interpretación incorrecta de la solicitud o una instrucción maliciosa.",
        "Es una señal de alerta, pero no confirma por sí sola que se haya producido un ataque.",
      ],
    },
    {
      id: "permissions",
      title: "Caso C. Una conexión solicita permisos adicionales",
      situation: [
        "Conectas una herramienta para consultar eventos de tu calendario.",
        "Durante la autorización, también solicita permiso para modificar y eliminar eventos.",
      ],
      options: [
        {
          id: "a",
          label: "Aceptar todos los permisos.",
          recommended: false,
        },
        {
          id: "b",
          label:
            "Comprobar si puedes autorizar únicamente la consulta de eventos.",
          recommended: true,
        },
        {
          id: "c",
          label: "Confiar en que solo realizará lo que escribas en el chat.",
          recommended: false,
        },
      ],
      feedback: [
        "Consultar información y modificarla son capacidades diferentes.",
        "Si únicamente necesitas leer eventos, limita los permisos cuando la plataforma lo permita.",
        "También conviene conservar las confirmaciones antes de realizar operaciones que modifiquen información.",
      ],
    },
  ],
} as const;

export const skillSecurityAlreadyInstalled = {
  id: "ya-instaladas",
  title: "¿Y si ya tienes varias skills instaladas?",
  intro: [
    "También puedes comprobar las herramientas que utilizas actualmente.",
  ],
  items: [
    {
      id: "identify",
      title: "Identifica cuáles tienes",
      paragraphs: [
        "Consulta la sección donde tu aplicación administra skills, plugins o herramientas.",
        "Revisa cuáles añadiste y cuáles sigues utilizando.",
        "Si encuentras alguna que no reconoces, comprueba su procedencia antes de volver a ejecutarla.",
      ],
    },
    {
      id: "permissions",
      title: "Revisa sus permisos y conexiones",
      paragraphs: [
        "Comprueba qué archivos y aplicaciones tienen disponibles, según las opciones que ofrezca la plataforma.",
        "Si una conexión ya no es necesaria, considera revocar su autorización desde el servicio correspondiente.",
        "Eliminar una skill y revocar el acceso a una cuenta conectada pueden ser operaciones diferentes.",
      ],
    },
    {
      id: "alerts",
      title: "Comprueba si existen alertas o cambios",
      paragraphs: [
        "Busca información sobre problemas conocidos, actualizaciones y análisis disponibles para la versión instalada.",
        "Una modificación del contenido puede cambiar los riesgos de una herramienta.",
      ],
    },
    {
      id: "other-ai",
      title: "¿Puedes utilizar otra IA para revisarlas?",
      paragraphs: [
        "Puedes pedirle a una IA que explique las instrucciones de una skill o identifique componentes que merezcan atención.",
        "Sin embargo, su respuesta no constituye una certificación de seguridad.",
        "Tampoco conviene ejecutar una skill desconocida para pedirle que se analice a sí misma.",
        "Si necesitas evaluar programas o comportamientos que no comprendes, recurre a herramientas especializadas o asistencia técnica.",
      ],
    },
  ],
} as const;

export const skillSecurityIfSuspicious = {
  id: "si-detectas",
  title: "¿Qué hacer si detectas algo sospechoso?",
  intro: [
    "La respuesta depende de lo que hayas observado y de la información que podría estar comprometida.",
  ],
  items: [
    {
      id: "scanner-alert",
      title: "Encontraste una alerta en un escáner",
      paragraphs: [
        "Comprueba la versión analizada y revisa la explicación del hallazgo.",
        "Una advertencia no demuestra necesariamente que haya ocurrido una filtración.",
        "Si no puedes aclarar el problema, evita utilizar la herramienta con información importante hasta contar con una evaluación adecuada.",
      ],
    },
    {
      id: "unauthorized-action",
      title: "El agente intenta realizar una acción que no autorizaste",
      paragraphs: [
        "Detén la operación, si todavía está activa y la aplicación lo permite.",
        "No apruebes nuevas acciones relacionadas hasta comprender qué ocurrió.",
        "Conserva los registros o mensajes disponibles y revisa los archivos o servicios potencialmente afectados.",
        "Solicita ayuda especializada si no puedes determinar las consecuencias.",
      ],
    },
    {
      id: "private-data",
      title: "Sospechas que se comprometió información privada",
      paragraphs: [
        "Si existen indicios de exposición de cuentas o credenciales:",
      ],
      bullets: [
        "Deja de utilizar la herramienta sospechosa.",
        "Revoca los accesos potencialmente comprometidos desde los servicios oficiales.",
        "Cambia las contraseñas que pudieran haberse expuesto.",
        "Revoca y sustituye las claves o tokens afectados.",
        "Revisa la actividad reciente de tus cuentas.",
      ],
      afterBullets: [
        "Si manejas información de una organización, informa al área responsable de seguridad.",
        "Cuando existan indicios de compromiso del computador, puede ser necesaria una revisión técnica.",
      ],
    },
  ],
  warning:
    "Desinstalar una skill no revierte automáticamente sus acciones anteriores ni elimina necesariamente las autorizaciones concedidas a otros servicios.",
} as const;

export const skillSecurityLimits = {
  id: "limites",
  title: "¿Hasta dónde puedes revisar la seguridad sin programar?",
  paragraphs: [
    "Puedes verificar la procedencia de una skill, consultar sus instrucciones publicadas, revisar permisos y conexiones, buscar informes de seguridad y reconocer acciones inesperadas.",
    "Estas comprobaciones son útiles, pero no permiten garantizar que una herramienta esté libre de código malicioso ni reconstruir toda su actividad anterior.",
    "Una evaluación más profunda puede requerir analizar programas, comunicaciones y registros de ejecución.",
  ],
  highlight:
    "Si no puedes determinar qué hace una herramienta y necesita acceso importante a tu información, evita autorizarla hasta contar con una evaluación adecuada.",
} as const;

export const skillSecurityClosing = {
  id: "cierre",
  title: "Antes de instalar tu próxima skill",
  intro: "Recuerda estas comprobaciones:",
  checks: [
    {
      label: "Procedencia",
      text: "¿puedes identificar quién la publicó?",
    },
    {
      label: "Contenido",
      text: "¿conoces sus instrucciones y componentes principales?",
    },
    {
      label: "Accesos",
      text: "¿sabes qué archivos y servicios podrá utilizar?",
    },
    {
      label: "Seguridad",
      text: "¿existen análisis o advertencias sobre esa herramienta?",
    },
    {
      label: "Control",
      text: "¿puedes limitar permisos y confirmar operaciones importantes?",
    },
  ],
  closing: [
    "Las skills y las conexiones externas pueden ser muy útiles. El objetivo no es dejar de utilizarlas, sino evitar conceder acceso a tu información o ejecutar programas cuyo origen y funcionamiento no has podido comprobar.",
  ],
} as const;

export const skillSecuritySources: readonly LearnSource[] = [
  {
    id: "schmotz",
    title:
      "Skill-Inject: Measuring Agent Vulnerability to Skill File Attacks",
    authors: "Schmotz, Beurer-Kellner, Abdelnabi y Andriushchenko",
    year: "2026",
    edition:
      "Estudia ataques de inyección de instrucciones mediante archivos de skills y sus efectos en agentes de IA. Preprint. Sus resultados experimentales no representan una tasa general de vulnerabilidad.",
    href: skillSecurityLinks.schmotzSkillInject,
  },
  {
    id: "zhan",
    title:
      "InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents",
    authors: "Zhan, Liang, Ying y Kang",
    year: "2024",
    edition:
      "Findings of the Association for Computational Linguistics: ACL 2024. Investiga cómo instrucciones maliciosas incorporadas en contenidos externos pueden manipular agentes que utilizan herramientas.",
    href: skillSecurityLinks.zhanInjecAgent,
  },
  {
    id: "liu",
    title:
      "Agent Skills in the Wild: An Empirical Study of Security Vulnerabilities at Scale",
    authors: "Liu et al.",
    year: "2026",
    edition:
      "Analiza patrones potenciales de riesgo en una muestra de skills públicas mediante técnicas automatizadas. Preprint. Los resultados dependen de la muestra y del método de detección utilizado.",
    href: skillSecurityLinks.liuAgentSkillsWild,
  },
  {
    id: "ferrag",
    title:
      "From Prompt Injections to Protocol Exploits: Threats in LLM-Powered AI Agents Workflows",
    authors: "Ferrag et al.",
    year: "2025",
    edition:
      "ICT Express. Revisa amenazas relacionadas con agentes, herramientas externas y protocolos de comunicación.",
    href: skillSecurityLinks.ferragAgentThreats,
  },
  {
    id: "openai-skills",
    title: "OpenAI Skills",
    authors: "OpenAI",
    year: "2025",
    edition: "Documentación de skills.",
    href: skillSecurityLinks.openaiSkills,
  },
  {
    id: "anthropic-skills",
    title: "Anthropic Agent Skills",
    authors: "Anthropic",
    year: "2025",
    edition: "Documentación de Agent Skills.",
    href: skillSecurityLinks.anthropicAgentSkills,
  },
  {
    id: "owasp",
    title: "OWASP Agentic Skills Top 10",
    authors: "OWASP",
    year: "2025",
    edition: "Riesgos relacionados con skills y agentes de IA.",
    href: skillSecurityLinks.owaspAgenticSkills,
  },
  {
    id: "owasp-agency",
    title: "OWASP Excessive Agency",
    authors: "OWASP",
    year: "2025",
    edition: "Riesgo de agencia excesiva en sistemas de IA generativa.",
    href: skillSecurityLinks.owaspExcessiveAgency,
  },
  {
    id: "skillscan",
    title: "skillscan.io Methodology and Limitations",
    authors: "skillscan.io",
    year: "2025",
    edition: "Metodología y limitaciones de los análisis publicados.",
    href: skillSecurityLinks.skillscanMethodology,
  },
  {
    id: "cisco",
    title: "Cisco AI Defense Skill Scanner",
    authors: "Cisco",
    year: "2025",
    edition: "Documentación del escáner de skills.",
    href: skillSecurityLinks.ciscoSkillScannerDocs,
  },
] as const;

export const skillSecurityBibliography = {
  id: "fuentes",
  title: "Investigación y fuentes",
  intro: [
    "Este contenido se fundamenta en investigaciones académicas sobre ataques a agentes de IA y documentación técnica de seguridad.",
    "Los casos interactivos son simulaciones educativas basadas en mecanismos documentados, no reproducciones de incidentes específicos.",
  ],
  academicTitle: "Investigaciones académicas",
  technicalTitle: "Documentación técnica",
  academicIds: ["schmotz", "zhan", "liu", "ferrag"] as const,
  technicalIds: [
    "openai-skills",
    "anthropic-skills",
    "owasp",
    "owasp-agency",
    "skillscan",
    "cisco",
  ] as const,
  disclaimer:
    "Esta guía tiene fines educativos. Los riesgos y controles disponibles dependen de cada aplicación y su configuración. Las comprobaciones recomendadas no constituyen una certificación de seguridad.",
} as const;
