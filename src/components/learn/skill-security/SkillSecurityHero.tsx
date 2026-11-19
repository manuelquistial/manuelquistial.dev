import { learnControlClass } from "@/components/learn/controlClass";
import { PageHero } from "@/components/ui/PageHero";
import {
  skillSecurityHero,
  skillSecurityUi,
} from "@/content/learn/es/skill-security";
import { getLearnBasePath } from "@/content/learn/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/localizedPath";

export function SkillSecurityHero({ locale }: { locale: Locale }) {
  const indexHref = localizedPath(locale, getLearnBasePath(locale));

  return (
    <PageHero
      tone="learn"
      variant="compact"
      eyebrow={skillSecurityUi.eyebrow}
      eyebrowHref={indexHref}
      title={skillSecurityHero.title}
      description={skillSecurityUi.bannerDescription}
      className="skills-lesson__hero"
    >
      <a href="#riesgos" className={learnControlClass}>
        {skillSecurityUi.exploreContent}
      </a>
    </PageHero>
  );
}
