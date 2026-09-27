export const experience = [
  {
    id: "independent-consulting",
    company: "Independent Software Engineering and Consulting",
    role: "Full-Stack Engineer and Web Platform Consultant",
    description:
      "I develop applications and integrations for business and institutional clients, with a focus on the tools their teams use to manage content, products, and workflows.",
    highlights: [
      "Built interfaces that enabled non-technical teams to manage pages, program information, galleries, multilingual content, and product data without developer support for each update.",
      "Implemented authentication integrations, reporting automation, and administrative functionality tailored to each client’s needs.",
    ],
    period: "May 2022 – Present",
    engagements: [
      {
        id: "babel-scores",
        company: "Babel Scores",
        highlights: [
          "Developed the web sheet music reader and PDF preview functionality.",
          "Improved vendor and administrator workflows for managing digital catalogs, product information, and access-controlled content.",
          "Worked on the platform’s e-commerce, storage, and authentication integrations.",
        ],
        technologies: [
          "React",
          "PDF.js",
          "WordPress",
          "WooCommerce",
          "Amazon S3",
        ],
        technologiesLabel: "Technologies",
      },
      {
        id: "sal-picciotto",
        company: "Sal & Picciotto",
        highlights: [
          "Developed WordPress and Shopify solutions with content structures that non-technical teams could manage.",
          "Enabled teams to update pages, program information, and galleries without requesting code changes.",
          "Implemented the agency’s designs and project-specific administrative functionality.",
        ],
        technologies: ["WordPress", "Shopify"],
        technologiesLabel: "Technologies",
      },
      {
        id: "udea-fcf",
        company:
          "Universidad de Antioquia — Facultad de Comunicaciones y Filología",
        period: "Project-based work · 2024–2026",
        highlights: [
          "Developed SITA and SIAR for administrative procedures, room and equipment bookings, and issue reporting.",
          "Developed Finanzas and Conciliación for budget information access and accounting entry review.",
          "Contributed to interface modernization and backend service migrations, working on authentication, reporting, and institutional data workflows.",
          "Provided technical support and training on the applications.",
        ],
        technologies: ["React", "TypeScript", "Redux", "Laravel", "Flask"],
        technologiesLabel: "Technologies used across the engagement",
      },
    ],
  },
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    role: "Software Engineer",
    description:
      "Full-stack development of enterprise functionality, covering administrative interfaces, backend services, and frontend modernization.",
    highlights: [
      "Developed React and TypeScript modules within a modular architecture, using reusable components to maintain consistency across interfaces.",
      "Extended and maintained REST APIs and business logic in Java and Spring Boot to support frontend integrations and platform workflows.",
      "Designed and implemented feature management interfaces connected to Python and AWS Lambda feature flag services for configuration and activation.",
      "Contributed to migrating Angular functionality to React, coordinating integration with backend services and API contracts.",
      "Implemented automated UI tests with WebdriverIO to verify critical workflows and support regression detection.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Angular",
      "Java",
      "Spring Boot",
      "Python",
      "AWS Lambda",
      "WebdriverIO",
    ],
    technologiesLabel: "Technologies",
    period: "Nov 2021 – May 2026",
    location: "Bogotá, Colombia",
  },
  {
    id: "digital-americas-pipeline",
    company: "Digital Americas Pipeline Initiative",
    role: "Backend Developer",
    description:
      "Development of services and operational tools for distributed applications on AWS.",
    highlights: [
      "Developed microservices with Node.js and Express to support data processing and integration between components.",
      "Implemented distributed processing and notification workflows with AWS services for asynchronous task execution.",
      "Built Electron applications and Elastic Stack integrations to inspect service activity and support monitoring and operational support tasks.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "AWS EC2",
      "API Gateway",
      "Lambda",
      "SNS",
      "SQS",
      "Electron",
      "Elastic Stack",
    ],
    technologiesLabel: "Technologies",
    period: "Feb 2020 – Nov 2021",
    location: "Medellín, Colombia",
  },
  {
    id: "udea-teaching",
    company: "Universidad de Antioquia",
    role: "Adjunct Instructor",
    description:
      "Taught programming, web development, data analysis, and artificial intelligence as an adjunct instructor for MisionTic and TalentoTech, both in person and online.",
    period: "Teaching appointments · 2022–2025",
    location: "Medellín, Colombia",
  },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];

export type ExperienceEngagementId = "babel-scores" | "sal-picciotto" | "udea-fcf";

export type ExperienceEngagement = {
  id: ExperienceEngagementId;
  company: string;
  period?: string;
  highlights: readonly string[];
  technologies: readonly string[];
  technologiesLabel: string;
};

export type Experience = {
  id: ExperienceId;
  company: string;
  role: string;
  description: string;
  highlights?: readonly string[];
  type?: string;
  technologies?: readonly string[];
  technologiesLabel?: string;
  engagements?: readonly ExperienceEngagement[];
  period: string;
  location?: string;
  current?: boolean;
};

export const featuredExperienceIds = [
  "independent-consulting",
  "anthology-blackboard",
  "digital-americas-pipeline",
] as const satisfies readonly ExperienceId[];

export const teachingExperienceIds = [
  "udea-teaching",
] as const satisfies readonly ExperienceId[];

export function getFeaturedExperience(
  limit: number = featuredExperienceIds.length,
): Experience[] {
  return featuredExperienceIds.slice(0, limit).flatMap((id) => {
    const item = experience.find((entry) => entry.id === id);
    return item ? [item as Experience] : [];
  });
}

export function getProfessionalExperience(): Experience[] {
  return experience
    .filter((item) => item.id !== "udea-teaching")
    .map((item) => item as Experience);
}

export function getTeachingExperience(): Experience[] {
  return teachingExperienceIds.flatMap((id) => {
    const item = experience.find((entry) => entry.id === id);
    return item ? [item as Experience] : [];
  });
}
