export const profile = {
  name: "Manuel Alejandro Quistial Jurado",
  shortName: "Manuel Quistial",
  role: "Software Engineer",
  tagline: "Software Engineer | Full-Stack, AI & Neuroengineering",
  location: "Colombia",
  email: "manuel.quistialj@gmail.com",
  linkedin: "https://www.linkedin.com/in/manuelquistial",
  github: "https://github.com/manuelquistial",
  cv: "/cv/manuel-quistial-cv-en.pdf",
} as const;

export function getCvUrl(): string {
  return profile.cv;
}

export function getCvDownloadName(): string {
  return "Manuel_Quistial_CV.pdf";
}
