import type { CaseStudyContent } from "@/content/case-study-types";

const shared = {
  subtitle: "",
  backLabel: "Volver a proyectos",
  context: "Universidad de Antioquia",
  period: "Colaboraciones por proyecto · 2024–2026",
  responsibilities: {
    title: "",
    items: [],
  },
} as const;

export const sitaCaseStudy: CaseStudyContent = {
  ...shared,
  title: "SITA",
  overview: {
    title: "Trámites administrativos",
    items: [
      "Desarrollé SITA, el sistema de información de trámites administrativos.",
    ],
  },
};

export const siarCaseStudy: CaseStudyContent = {
  ...shared,
  title: "SIAR",
  overview: {
    title: "Administración de recursos",
    items: [
      "Desarrollé SIAR, el sistema de información para la administración de recursos, con reserva de espacios y equipos y reporte de novedades.",
    ],
  },
};

export const finanzasCaseStudy: CaseStudyContent = {
  ...shared,
  title: "Finanzas",
  overview: {
    title: "Consulta de presupuesto",
    items: [
      "Desarrollé Finanzas, para la consulta de presupuesto e información financiera.",
    ],
  },
};

export const conciliacionCaseStudy: CaseStudyContent = {
  ...shared,
  title: "Conciliación",
  overview: {
    title: "Movimientos contables",
    items: [
      "Desarrollé Conciliación, para comparar movimientos contables.",
    ],
  },
};
