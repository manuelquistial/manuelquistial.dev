/** Centralized external links for the AI skills security lesson. */
export const skillSecurityLinks = {
  skillscanDirectory: "https://skillscan.io/skills/",
  skillscanMethodology: "https://skillscan.io/methodology/",
  owaspAgenticSkills: "https://owasp.org/projects/agentic-skills-top-10",
  owaspExcessiveAgency:
    "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/",
  ciscoSkillScannerDocs:
    "https://cisco-ai-defense.github.io/docs/skill-scanner",
  openaiSkills:
    "https://developers.openai.com/api/docs/guides/tools-skills",
  anthropicAgentSkills:
    "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview",
  schmotzSkillInject: "https://doi.org/10.48550/arxiv.2602.20156",
  zhanInjecAgent: "https://doi.org/10.18653/v1/2024.findings-acl.624",
  liuAgentSkillsWild: "https://doi.org/10.48550/arxiv.2601.10338",
  ferragAgentThreats: "https://doi.org/10.1016/j.icte.2025.12.001",
} as const;

export type SkillSecurityLinkId = keyof typeof skillSecurityLinks;
