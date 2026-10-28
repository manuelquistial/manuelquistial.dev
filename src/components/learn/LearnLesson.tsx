import Link from "next/link";
import { isSafeHttpUrl } from "@/content/learn/catalog";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnLessonContent } from "@/content/learn/types";
import type { Locale } from "@/i18n/config";
import { lessonCitationOrder } from "@/lib/learn/citations";
import { localizedPath } from "@/lib/localizedPath";
import { CiteList, LearnRefsProvider } from "@/components/learn/LearnRefs";
import { SceneSection } from "@/components/learn/SceneSection";
import { SceneVisual } from "@/components/learn/SceneVisual";

export function LearnLesson({
  lesson,
  locale,
}: {
  lesson: LearnLessonContent;
  locale: Locale;
}) {
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
    <LearnRefsProvider value={{ numbers, sources: lesson.sources }}>
      <section className="overflow-x-clip bg-background">
        <div className="learn-lesson py-14 md:py-16 lg:py-24">
          <p className="text-sm font-semibold">
            <Link
              href={localizedPath(locale, "/aprendamos")}
              className="prose-link"
            >
              {learnUi.backToIndex}
            </Link>
          </p>
          <h1 className="mt-4 max-w-[18ch] text-balance font-display text-[length:var(--heading-1)] text-foreground">
            {lesson.title}
          </h1>
          <div className="learn-reading mt-6 space-y-4">
            {lesson.intro.map((paragraph) => (
              <p key={paragraph.text} className="leading-relaxed text-muted">
                {paragraph.text}
                <CiteList cites={paragraph.cites} />
              </p>
            ))}
          </div>
          <nav className="mt-8" aria-label={learnUi.scenesLabel}>
            <p className="text-base font-semibold text-foreground">{learnUi.scenesLabel}</p>
            <ol className="learn-index mt-4">
              {lesson.scenes.map((scene, index) => (
                <li key={scene.id}>
                  <a href={`#${scene.id}`} className="prose-link">
                    {index + 1}. {scene.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {lesson.scenes.map((scene, index) => (
            <SceneSection
              key={scene.id}
              scene={scene}
              deepen={lesson.deepen.find((item) => item.afterSceneId === scene.id)}
              question={lesson.questions.find(
                (item) => item.afterSceneId === scene.id && !item.visibleIn,
              )}
            >
              <SceneVisual sceneId={scene.id} eager={index === 0} />
            </SceneSection>
          ))}
          <section className="learn-section scroll-mt-28" aria-labelledby="learn-sources">
            <h2
              id="learn-sources"
              className="text-balance text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground"
            >
              {learnUi.sourcesTitle}
            </h2>
            <div className="learn-reading">
              <ol className="mt-6 space-y-4">
                {citedSources.map((source) => (
                  <li key={source.id} id={`ref-${source.id}`} className="scroll-mt-28">
                    <p className="text-sm font-semibold text-foreground">
                      {numbers[source.id]}. {source.authors}, {source.year}
                    </p>
                    <a
                      href={source.href}
                      className="prose-link mt-1 inline-block text-sm leading-relaxed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.edition}
                    </a>
                  </li>
                ))}
              </ol>
              {originalPost ? (
                <p className="mt-4">
                  <a
                    href={originalPost}
                    className="prose-link font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {learnUi.originalPost}
                  </a>
                </p>
              ) : null}
            </div>
          </section>
        </div>
      </section>
    </LearnRefsProvider>
  );
}
