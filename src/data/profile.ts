export const profile = {
  name: "Manuel Alejandro Quistial Jurado",
  shortName: "Manuel Quistial",
  role: "Software Engineer",
  tagline: "Software Engineer | Full-Stack, AI & Neuroengineering",
  location: "Colombia",
  email: "manuel.quistialj@gmail.com",
  linkedin: "https://www.linkedin.com/in/manuelquistial",
  github: "https://github.com/manuelquistial",
  cv: {
    en: "/cv/manuel-quistial-cv-en.pdf",
    es: "/cv/manuel-quistial-cv-es.pdf",
  },
} as const;

export function getCvUrl(locale: "en" | "es" = "en"): string {
  return profile.cv[locale];
}

export function getCvDownloadName(locale: "en" | "es" = "en"): string {
  return locale === "es"
    ? "Manuel_Quistial_CV_es.pdf"
    : "Manuel_Quistial_CV.pdf";
}
