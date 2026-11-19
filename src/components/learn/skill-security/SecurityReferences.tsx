import {
  GuideCallout,
  GuideCopy,
  GuideExternalLink,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import {
  skillSecurityBibliography,
  skillSecuritySources,
} from "@/content/learn/es/skill-security";

export function SecurityReferences() {
  const data = skillSecurityBibliography;
  const byId = new Map(skillSecuritySources.map((source) => [source.id, source]));

  const groups = [
    {
      id: "academic",
      title: data.academicTitle,
      ids: data.academicIds,
    },
    {
      id: "technical",
      title: data.technicalTitle,
      ids: data.technicalIds,
    },
  ] as const;

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        {data.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>

      {groups.map((group) => (
        <div key={group.id} className="skills-lesson__references">
          <h3 className="font-display text-[1.1875rem] leading-[1.25] text-brand md:text-[1.3125rem]">
            {group.title}
          </h3>
          <ul className="mt-4 divide-y divide-border/80 border-y border-border/80">
            {group.ids.map((id) => {
              const item = byId.get(id);
              if (!item) return null;
              return (
                <li key={item.id} className="py-3.5">
                  <p className="max-w-[68ch] font-semibold leading-snug text-brand">
                    {item.title}
                  </p>
                  <p className="mt-1 text-muted">
                    {item.authors}
                    {item.year ? ` · ${item.year}` : null}
                  </p>
                  {item.edition ? (
                    <p className="mt-2 max-w-[68ch] text-muted">{item.edition}</p>
                  ) : null}
                  <p className="mt-2">
                    <GuideExternalLink href={item.href}>
                      {item.href}
                    </GuideExternalLink>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <GuideCallout>{data.disclaimer}</GuideCallout>
    </GuideSection>
  );
}
