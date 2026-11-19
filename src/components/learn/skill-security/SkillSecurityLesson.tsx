import { InstalledSkillsGuide } from "@/components/learn/skill-security/InstalledSkillsGuide";
import { SecurityChecklist } from "@/components/learn/skill-security/SecurityChecklist";
import { SecurityDecisionCases } from "@/components/learn/skill-security/SecurityDecisionCases";
import { SecurityIncidentGuide } from "@/components/learn/skill-security/SecurityIncidentGuide";
import { SecurityReferences } from "@/components/learn/skill-security/SecurityReferences";
import { SecurityResources } from "@/components/learn/skill-security/SecurityResources";
import { SecurityRiskExplorer } from "@/components/learn/skill-security/SecurityRiskExplorer";
import { SkillReviewSteps } from "@/components/learn/skill-security/SkillReviewSteps";
import { SkillSecurityHero } from "@/components/learn/skill-security/SkillSecurityHero";
import { SkillSecurityNav } from "@/components/learn/skill-security/SkillSecurityNav";
import {
  GuideCallout,
  GuideCopy,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import { Section } from "@/components/layout/Section";
import { LocalDateTime } from "@/components/ui/LocalDateTime";
import {
  skillSecurityLessonMeta,
  skillSecurityLimits,
} from "@/content/learn/es/skill-security";
import { getLearnUi } from "@/content/learn/ui";
import type { Locale } from "@/i18n/config";

export function SkillSecurityLesson({ locale }: { locale: Locale }) {
  const learnUi = getLearnUi(locale);
  const lesson = skillSecurityLessonMeta;

  return (
    <Section containerClassName="overflow-x-clip">
      <SkillSecurityHero locale={locale} />

      <LocalDateTime
        className="mt-5"
        dateTime={lesson.publishedAt}
        locale={locale}
        label={`${learnUi.publishedLabel}:`}
      />

      <div className="skill-sec-layout mt-[var(--section-y)]">
        <SkillSecurityNav />

        <div className="learn-lesson skill-sec-main min-w-0">
          <SecurityRiskExplorer />
          <SkillReviewSteps />
          <SecurityResources />
          <SecurityDecisionCases />
          <InstalledSkillsGuide />
          <SecurityIncidentGuide />

          <GuideSection
            id={skillSecurityLimits.id}
            title={skillSecurityLimits.title}
          >
            <GuideCopy>
              {skillSecurityLimits.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </GuideCopy>
            <GuideCallout>{skillSecurityLimits.highlight}</GuideCallout>
          </GuideSection>

          <SecurityChecklist />
          <SecurityReferences />
        </div>
      </div>
    </Section>
  );
}
