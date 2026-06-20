export const meta = {
  title: "Manuel Quistial | Software Engineer",
  description:
    "Full-stack software engineer at Anthology/Blackboard, institutional systems at UdeA FCF, publishing platform engineering on Babel Scores, and EEG/BCI research at Universidad de Antioquia.",
    pages: {
    about: {
      title: "About",
      description:
        "Enterprise full-stack engineering, institutional systems at UdeA FCF, and neuroengineering research.",
    },
    projects: {
      title: "Projects",
      description:
        "Institutional ecosystems, publishing platforms, research pipelines, and production WordPress websites.",
    },
    research: {
      title: "Research",
      description:
        "EEG-based motor imagery classification, FBCSP feature extraction, and subject-disjoint ML evaluation for BCI systems.",
    },
    contact: {
      title: "Contact",
      description:
        "Reach out for senior engineering roles, research collaborations, or AI and neuroengineering projects.",
    },
  },
};

export const nav = {
  home: "Home",
  about: "About",
  projects: "Projects",
  research: "Research",
  contact: "Contact",
};

export const a11y = {
  skipToContent: "Skip to main content",
  mainNav: "Main navigation",
  mobileNav: "Mobile navigation",
};

export const hero = {
  title: "Software Engineer | Full-Stack, AI & Neuroengineering",
  subtitle:
    "Enterprise platforms at Anthology/Blackboard, the UdeA FCF institutional ecosystem, Babel Scores publishing engineering, and EEG-based BCI research at Universidad de Antioquia.",
  secondary:
    "Nearly ten years across React, TypeScript, Java, Spring Boot, Laravel, WordPress, Keycloak, and Python: from legacy modernization and CI/CD to applied ML with FBCSP, LDA, and subject-disjoint evaluation.",
  viewProjects: "View Projects",
  downloadCv: "Download CV",
  linkedin: "LinkedIn",
  github: "GitHub",
};

export const sections = {
  about: "About",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  engineeringProjects: "Engineering Projects",
  researchProjects: "Research Projects",
  agencyWebProjects: "Agency Web Projects",
  research: "Research",
  contact: "Contact",
  viewAll: "View all",
};

export const agencyWebProjectsIntro =
  "Selected production websites delivered through Sal & Picciotto, focused on WordPress implementation, Elementor Pro layouts, custom fields, code snippets, responsive design, multilingual content with Polylang and business-oriented web experiences.";

export const footer = {
  rights: "All rights reserved.",
  builtWith: "Built with Next.js, TypeScript & Tailwind CSS",
};

export const experiencePreview = {
  currentLabel: "Current",
};

export const projectStatus = {
  planned: "Planned",
  inProgress: "In progress",
  completed: "Completed",
  live: "Live",
  comingSoon: "Coming soon",
};

export const projectCard = {
  github: "GitHub",
  liveDemo: "Live Demo",
  liveSite: "Live Site",
  caseStudy: "Case Study",
  deliveredThrough: "Delivered through",
};

export const contactCta = {
  title: "Let's connect",
  description:
    "Open to senior full-stack roles, AI engineering work, and research collaborations at the intersection of software and neurotechnology.",
  button: "Get in touch",
};

export const notFound = {
  title: "Page not found",
  description: "The page you are looking for does not exist or has been moved.",
  backHome: "Back to home",
};

export const projectCategories = {
  engineering: "Engineering Projects",
  research: "Research Projects",
  "agency-web": "Agency Web Projects",
} as const;

export const homeSkillCategoryIds = [
  "frontend",
  "backend",
  "authentication-iam",
  "data-reporting",
  "ai-ml",
  "research",
  "cloud-devops",
  "cms-web-platforms",
] as const;
