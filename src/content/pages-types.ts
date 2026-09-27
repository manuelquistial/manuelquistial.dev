export type ContentSection = {
  title: string;
  paragraphs: readonly string[];
};

export type AboutPreviewContent = {
  previewParagraphs: readonly string[];
  highlights: readonly string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  focus?: string;
};

export type AboutPageContent = {
  title: string;
  intro: string;
  engineering: ContentSection;
  research: ContentSection;
  focus: {
    title: string;
    items: readonly string[];
  };
  education: {
    title: string;
    items: readonly EducationItem[];
  };
  languages: {
    title: string;
    items: readonly { language: string; level: string }[];
  };
  researchOutputs: {
    title: string;
    items: readonly {
      title: string;
      description: string;
      href?: string;
    }[];
  };
};

export type ResearchPageContent = {
  title: string;
  projectTitle: string;
  affiliation: string;
  previewTagline: string;
  summary: string;
  objective: ContentSection;
  system: {
    title: string;
    items: readonly { title: string; description: string }[];
  };
  design: ContentSection;
  evaluation: ContentSection;
};

export type ContactPageContent = {
  title: string;
  subtitle: string;
  linkedin: string;
  github: string;
  cv: string;
  availability: string;
};
