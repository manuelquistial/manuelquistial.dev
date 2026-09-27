import type { CaseStudyContent } from "@/content/case-study-types";

const shared = {
  subtitle: "",
  backLabel: "Back to projects",
  context: "Universidad de Antioquia",
  period: "Project-based work · 2024–2026",
  responsibilities: {
    title: "",
    items: [],
  },
} as const;

export const sitaCaseStudy: CaseStudyContent = {
  ...shared,
  title: "SITA",
  overview: {
    title: "Administrative procedures",
    items: [
      "Developed SITA, the administrative procedures information system.",
    ],
  },
};

export const siarCaseStudy: CaseStudyContent = {
  ...shared,
  title: "SIAR",
  overview: {
    title: "Resource administration",
    items: [
      "Developed SIAR, the resource administration information system, including space and equipment reservations and incident reports.",
    ],
  },
};

export const finanzasCaseStudy: CaseStudyContent = {
  ...shared,
  title: "Finanzas",
  overview: {
    title: "Budget consultation",
    items: [
      "Developed Finanzas for budget consultation and financial information.",
    ],
  },
};

export const conciliacionCaseStudy: CaseStudyContent = {
  ...shared,
  title: "Conciliación",
  overview: {
    title: "Accounting movements",
    items: [
      "Developed Conciliación for comparing accounting movements.",
    ],
  },
};
