import { getLearnUi } from "@/content/learn/ui";
import type { LearnSceneLessonContent } from "@/content/learn/types";
import type { Locale } from "@/i18n/config";
import { lessonCitationOrder } from "@/lib/learn/citations";
import { getLearnBasePath } from "@/content/learn/routes";
import { localizedPath } from "@/lib/localizedPath";
import { LearnContentProvider } from "@/components/learn/LearnContent";
import { CiteList, LearnRefsProvider } from "@/components/learn/LearnRefs";
import { LearnSidebarNav } from "@/components/learn/LearnSidebarNav";
import { SceneSection } from "@/components/learn/SceneSection";
import { SceneVisual } from "@/components/learn/SceneVisual";
import { Section } from "@/components/layout/Section";
import { LocalDateTime } from "@/components/ui/LocalDateTime";
import { PageHero } from "@/components/ui/PageHero";

export function LearnLesson({
  lesson,
  locale,
}: {
  lesson: LearnSceneLessonContent;
  locale: Locale;
}) {
  const learnUi = getLearnUi(locale);
  const order = lessonCitationOrder(lesson);
  const numbers = Object.fromEntries(order.map((id, index) => [id, index + 1]));
  const citedSources = order.flatMap((id) => {
    const source = lesson.sources.find((item) => item.id === id);
    return source ? [source] : [];
  });
  const navItems = [
    ...lesson.scenes.map((scene) => ({ id: scene.id, title: scene.title })),
    { id: "learn-sources", title: learnUi.sourcesTitle },
  ];

  return (
    <LearnContentProvider lesson={lesson} ui={learnUi} locale={locale}>
      <LearnRefsProvider value={{ numbers, sources: lesson.sources }}>
        <Section containerClassName="overflow-x-clip">
          <div className="skills-lesson">
            <PageHero
              tone="learn"
              variant="compact"
              illustration="learn"
              eyebrow={learnUi.backToIndex}
              eyebrowHref={localizedPath(locale, getLearnBasePath(locale))}
              title={lesson.title}
              description={lesson.description}
            />

            <LocalDateTime
              className="mt-5"
              dateTime={lesson.publishedAt}
              locale={locale}
              label={`${learnUi.publishedLabel}:`}
            />

            <div className="skills-lesson__layout">
              <LearnSidebarNav label={learnUi.scenesLabel} items={navItems} />

              <div className="skills-lesson__content min-w-0">
                {lesson.intro.length > 0 ? (
                  <div className="skills-lesson__intro space-y-4">
                    {lesson.intro.map((paragraph) => (
                      <p
                        key={paragraph.text}
                        className="text-[length:var(--body)] leading-[1.65] text-muted"
                      >
                        {paragraph.text}
                        <CiteList cites={paragraph.cites} />
                      </p>
                    ))}
                  </div>
                ) : null}

                {lesson.scenes.map((scene, index) => (
                  <SceneSection
                    key={scene.id}
                    scene={scene}
                    index={index}
                    deepen={lesson.deepen.find(
                      (item) => item.afterSceneId === scene.id,
                    )}
                    question={lesson.questions.find(
                      (item) =>
                        item.afterSceneId === scene.id && !item.visibleIn,
                    )}
                  >
                    <SceneVisual sceneId={scene.id} eager={index === 0} />
                  </SceneSection>
                ))}

                <section
                  id="learn-sources"
                  className="learn-section scroll-mt-28"
                  aria-labelledby="learn-sources-heading"
                >
                  <h2
                    id="learn-sources-heading"
                    className="font-display text-[length:var(--heading-2)] text-brand"
                  >
                    {learnUi.sourcesTitle}
                  </h2>
                  <ol className="mt-[var(--section-heading-gap)] space-y-5">
                    {citedSources.map((source) => (
                      <li
                        key={source.id}
                        id={`ref-${source.id}`}
                        className="scroll-mt-28 border-t border-border pt-5 first:border-t-0 first:pt-0"
                      >
                        <p className="text-sm font-semibold text-brand">
                          <span className="font-display text-brand/40">
                            {numbers[source.id]}.
                          </span>{" "}
                          {source.authors}, {source.year}
                        </p>
                        <a
                          href={source.href}
                          className="mt-1 inline-block max-w-[65ch] text-sm leading-relaxed text-muted transition-colors duration-200 hover:text-accent-violet"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.edition}
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            </div>
          </div>
        </Section>
      </LearnRefsProvider>
    </LearnContentProvider>
  );
}
