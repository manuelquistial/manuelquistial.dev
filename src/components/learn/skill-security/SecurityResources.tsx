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
        <article className="rounded-[1.5rem] bg-[color-mix(in_srgb,var(--surface-soft)_75%,white)] p-6 md:p-8">
          <h3 className="font-display text-[length:var(--heading-3)] text-brand">
            {skillscan.title}
          </h3>
          <p className="mt-3">
            <GuideExternalLink href={skillscan.href}>
              {skillscan.hrefLabel}
            </GuideExternalLink>
          </p>
          {"description" in skillscan && skillscan.description ? (
            <p className="mt-4 max-w-[48rem] text-[length:var(--body)] leading-relaxed text-muted">
              {skillscan.description}
            </p>
          ) : null}

          {"howTo" in skillscan && skillscan.howTo ? (
            <div className="mt-6">
              <p className="text-overline text-muted">{skillscan.howToTitle}</p>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {skillscan.howTo.map((step, index) => (
                  <li key={step} className="relative pl-8">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 font-display text-[length:var(--heading-3)] leading-none text-brand/25"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[length:var(--body)] leading-relaxed text-muted">
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
              <div className="mt-4 max-w-[48rem] space-y-3">
                {skillscan.safeParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[length:var(--body)] leading-relaxed text-muted"
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

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {others.map((tool) => (
          <article key={tool.id} className="border-t border-border pt-5">
            <h3 className="font-display text-[length:var(--heading-3)] text-brand">
              {tool.title}
            </h3>
            <p className="mt-3">
              <GuideExternalLink href={tool.href}>{tool.hrefLabel}</GuideExternalLink>
            </p>
            {"paragraphs" in tool && tool.paragraphs
              ? tool.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-[length:var(--body)] leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))
              : null}
            {"warning" in tool && tool.warning ? (
              <p className="mt-4 text-[length:var(--body)] font-semibold leading-relaxed text-brand">
                {tool.warning}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </GuideSection>
  );
}
