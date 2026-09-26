import type { CaseStudyContent } from "@/content/case-study-types";

export const babelScoresCaseStudy: CaseStudyContent = {
  title: "Babel Scores",
  subtitle:
    "A platform for consulting and publishing digital sheet music.",
  backLabel: "Back to projects",
  overview: {
    title: "What it is",
    paragraphs: [
      "Babel Scores is a digital sheet music platform used to browse, purchase, and consult scores online, including access for institutions.",
      "I contributed as a software engineer on the web reader and on platform features that support commerce and institutional access.",
    ],
  },
  frontend: {
    title: "Web score reader",
    paragraphs: [
      "I developed the web score reader so users can consult musical documents in the browser instead of relying only on downloaded files.",
    ],
  },
  commerce: {
    title: "Commerce and institutional access",
    paragraphs: [
      "I implemented e-commerce functionality and institutional access integrations so the platform can serve both individual and institutional users.",
    ],
  },
  responsibilities: {
    title: "My contribution",
    items: [
      "Web score reader for consulting documents in the browser",
      "E-commerce functionality for the digital catalog",
      "Integrations for institutional access",
    ],
  },
};
