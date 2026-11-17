import { isSafeHttpUrl } from "@/content/learn/catalog";
import { getLearnUi } from "@/content/learn/ui";
import type { LearnLessonContent } from "@/content/learn/types";
import type { Locale } from "@/i18n/config";
import { lessonCitationOrder } from "@/lib/learn/citations";
import { localizedPath } from "@/lib/localizedPath";
import { LearnContentProvider } from "@/components/learn/LearnContent";
import { CiteList, LearnRefsProvider } from "@/components/learn/LearnRefs";
import { SceneSection } from "@/components/learn/SceneSection";
import { SceneVisual } from "@/components/learn/SceneVisual";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/ui/PageHero";

export function LearnLesson({
  lesson,
  locale,
}: {
  lesson: LearnLessonContent;
  locale: Locale;
}) {
  const learnUi = getLearnUi(locale);
  const originalPost = isSafeHttpUrl(lesson.originalPostUrl)
    ? lesson.originalPostUrl
    : null;
  const order = lessonCitationOrder(lesson);
  const numbers = Object.fromEntries(order.map((id, index) => [id, index + 1]));
  const citedSources = order.flatMap((id) => {
    const source = lesson.sources.find((item) => item.id === id);
    return source ? [source] : [];
  });

  return (
    <LearnContentProvider lesson={lesson} ui={learnUi} locale={locale}>
      <LearnRefsProvider value={{ numbers, sources: lesson.sources }}>
        <Section containerClassName="overflow-x-clip">
          <PageHero
            tone="learn"
            illustration="learn"
            eyebrow={learnUi.backToIndex}
            eyebrowHref={localizedPath(locale, "/aprendamos")}
            title={lesson.title}
            description={lesson.description}
          />

          {lesson.intro.length > 0 ? (
            <div className="learn-lead mt-10 space-y-4">
              {lesson.intro.map((paragraph) => (
                <p
                  key={paragraph.text}
                  className="text-[length:var(--body-lg)] leading-relaxed text-muted"
                >
                  {paragraph.text}
                  <CiteList cites={paragraph.cites} />
                </p>
              ))}
            </div>
          ) : null}

          <nav className="mt-12" aria-label={learnUi.scenesLabel}>
            <p className="text-overline text-muted">{learnUi.scenesLabel}</p>
            <ol className="mt-5 grid gap-2 sm:grid-cols-2">
              {lesson.scenes.map((scene, index) => (
                <li key={scene.id}>
                  <a
                    href={`#${scene.id}`}
                    className="group flex min-h-12 items-baseline gap-3 rounded-[var(--radius-module)] px-3 py-2.5 transition-colors duration-200 hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-[length:var(--heading-3)] leading-none text-brand/35 transition-colors duration-200 group-hover:text-accent-coral"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[length:var(--body)] font-semibold text-brand transition-colors duration-200 group-hover:text-accent-violet">
                      {scene.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="learn-lesson mt-[var(--section-y)]">
            {lesson.scenes.map((scene, index) => (
              <SceneSection
                key={scene.id}
                scene={scene}
                index={index}
                deepen={lesson.deepen.find((item) => item.afterSceneId === scene.id)}
                question={lesson.questions.find(
                  (item) => item.afterSceneId === scene.id && !item.visibleIn,
                )}
              >
                <SceneVisual sceneId={scene.id} eager={index === 0} />
              </SceneSection>
            ))}

            <section
              className="learn-section scroll-mt-28"
              aria-labelledby="learn-sources"
            >
              <h2
                id="learn-sources"
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
              {originalPost ? (
                <p className="mt-8">
                  <a
                    href={originalPost}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors duration-200 hover:text-accent-violet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {learnUi.originalPost}
                  </a>
                </p>
              ) : null}
            </section>
          </div>
        </Section>
      </LearnRefsProvider>
    </LearnContentProvider>
  );
}
