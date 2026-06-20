export const projects = [
  {
    id: "enterprise-access-platform",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "Docker",
    ],
    status: "planned",
  },
  {
    id: "microfrontend-learning-dashboard",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Module Federation",
      "Microfrontends",
    ],
    status: "planned",
  },
  {
    id: "ai-knowledge-assistant",
    tags: ["Python", "FastAPI", "RAG", "PostgreSQL", "pgvector", "LLMs"],
    status: "planned",
  },
  {
    id: "eeg-motor-imagery-pipeline",
    tags: [
      "Python",
      "EEG",
      "BCI",
      "FBCSP",
      "LDA",
      "SVM",
      "Machine Learning",
    ],
    status: "in-progress",
  },
] as const;

export type ProjectId = (typeof projects)[number]["id"];
export type ProjectStatus = (typeof projects)[number]["status"];

export type Project = {
  id: ProjectId;
  tags: readonly string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
};
