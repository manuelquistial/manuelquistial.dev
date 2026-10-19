import Link from "next/link";
import { isSafeHttpUrl } from "@/content/learn/catalog";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnLessonContent } from "@/content/learn/types";
import type { Locale } from "@/i18n/config";
import { lessonCitationOrder } from "@/lib/learn/citations";
import { localizedPath } from "@/lib/localizedPath";
import { CiteMark } from "@/components/learn/CiteMark";
import { ContinueBanner } from "@/components/learn/ContinueBanner";
import { SceneProgressTracker } from "@/components/learn/SceneProgressTracker";
import { SceneSection } from "@/components/learn/SceneSection";
import { SceneVisual } from "@/components/learn/SceneVisual";
import { Section } from "@/components/layout/Section";

export function LearnLesson({
  lesson,
  locale,
}: {
  lesson: LearnLessonContent;
  locale: Locale;
}) {
  const sceneIds = lesson.scenes.map((scene) => scene.id);
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
    <Section containerClassName="overflow-x-clip">
      <SceneProgressTracker slug={lesson.slug} sceneIds={sceneIds} />
      <p className="text-sm font-semibold">
        <Link
          href={localizedPath(locale, "/aprendamos")}
          className="prose-link"
        >
          {learnUi.backToIndex}
        </Link>
      </p>
      <h1 className="mt-4 max-w-[18ch] text-[clamp(2.375rem,4vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
        {lesson.title}
      </h1>
      <div className="mt-6 max-w-[65ch] space-y-4">
        {lesson.intro.map((paragraph) => (
          <p key={paragraph.text} className="leading-relaxed text-muted">
            {paragraph.text}
            {paragraph.cites?.map((id) => {
              const source = lesson.sources.find((item) => item.id === id);
              const number = numbers[id];
              if (!source || !number) return null;
              return <CiteMark key={id} source={source} number={number} />;
            })}
          </p>
        ))}
      </div>
      <ContinueBanner slug={lesson.slug} sceneIds={sceneIds} />
      <nav className="mt-10" aria-label={learnUi.scenesLabel}>
        <p className="text-base font-semibold text-foreground">{learnUi.scenesLabel}</p>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
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
          index={index + 1}
          total={lesson.scenes.length}
          deepen={lesson.deepen.find((item) => item.afterSceneId === scene.id)}
          question={lesson.questions.find((item) => item.afterSceneId === scene.id)}
          numbers={numbers}
          sources={lesson.sources}
        >
          <SceneVisual sceneId={scene.id} />
        </SceneSection>
      ))}
      <section className="border-t border-border py-12 md:py-16" aria-labelledby="learn-closing">
        <p className="text-sm font-medium text-muted">{learnUi.closingLabel}</p>
        <h2
          id="learn-closing"
          className="mt-2 max-w-[22ch] text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground"
        >
          {lesson.closingTitle}
        </h2>
        <div className="mt-6 max-w-[65ch] space-y-4">
          {lesson.closing.map((paragraph) => (
            <p key={paragraph.text} className="leading-relaxed text-muted">
              {paragraph.text}
            </p>
          ))}
        </div>
      </section>
      <section className="border-t border-border py-12" aria-labelledby="learn-sources">
        <h2
          id="learn-sources"
          className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground"
        >
          {learnUi.sourcesTitle}
        </h2>
        <ol className="mt-6 max-w-[65ch] space-y-4">
          {citedSources.map((source) => (
            <li key={source.id} id={`ref-${source.id}`} className="scroll-mt-28">
              <p className="text-sm font-semibold text-foreground">
                {numbers[source.id]}. {source.authors}, {source.year}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{source.edition}</p>
              <a
                href={source.href}
                className="prose-link mt-1 inline-block text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.title}
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
      </section>
    </Section>
  );
}
