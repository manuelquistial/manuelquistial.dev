import { IconPlus } from "@/components/icons";
import {
  GuideCopy,
  GuideExternalLink,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import { skillSecurityWhereToCheck } from "@/content/learn/es/skill-security";

export function SecurityResources() {
  const data = skillSecurityWhereToCheck;
  const [skillscan, ...others] = data.tools;

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        {data.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>

      {skillscan ? (
        <article className="skills-lesson__demo">
          <h3 className="font-display text-[1.1875rem] leading-[1.25] text-brand md:text-[1.3125rem]">
            {skillscan.title}
          </h3>
          <p className="mt-3">
            <GuideExternalLink href={skillscan.href}>
              {skillscan.hrefLabel}
            </GuideExternalLink>
          </p>
          {"description" in skillscan && skillscan.description ? (
            <p className="mt-4 max-w-[68ch] text-[length:var(--body)] leading-[1.65] text-muted">
              {skillscan.description}
            </p>
          ) : null}

          {"howTo" in skillscan && skillscan.howTo ? (
            <div className="mt-6">
              <p className="text-overline text-muted">{skillscan.howToTitle}</p>
              <ol className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {skillscan.howTo.map((step, index) => (
                  <li key={step} className="relative pl-8">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 font-display text-[1.1875rem] leading-none text-brand/25"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[length:var(--body)] leading-[1.65] text-muted">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {"safeTitle" in skillscan && skillscan.safeTitle ? (
            <details className="learn-deepen mt-6 border-t border-border/70 pt-4">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-[length:var(--body)] font-semibold text-brand [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="learn-deepen-mark inline-flex size-6 items-center justify-center rounded-full bg-accent-violet/15 text-accent-violet"
                >
                  <IconPlus className="size-3.5" />
                </span>
                {skillscan.safeTitle}
              </summary>
              <div className="mt-4 max-w-[68ch] space-y-4">
                {skillscan.safeParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[length:var(--body)] leading-[1.65] text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                <GuideExternalLink href={skillscan.methodologyHref}>
                  {skillscan.methodologyLabel}
                </GuideExternalLink>
              </div>
            </details>
          ) : null}
        </article>
      ) : null}

      <div className="space-y-5">
        {others.map((tool) => (
          <article key={tool.id} className="skills-lesson__card">
            <h3 className="font-display text-[1.1875rem] leading-[1.25] text-brand md:text-[1.3125rem]">
              {tool.title}
            </h3>
            <p className="mt-3">
              <GuideExternalLink href={tool.href}>{tool.hrefLabel}</GuideExternalLink>
            </p>
            {"paragraphs" in tool && tool.paragraphs
              ? tool.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 max-w-[68ch] text-[length:var(--body)] leading-[1.65] text-muted"
                  >
                    {paragraph}
                  </p>
                ))
              : null}
            {"warning" in tool && tool.warning ? (
              <p className="skills-lesson__supplement mt-4 border-l-2 border-brand/25 pl-4 text-[length:var(--body)] font-semibold leading-[1.65] text-brand">
                {tool.warning}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </GuideSection>
  );
}
