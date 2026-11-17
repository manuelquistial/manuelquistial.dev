import { learnUi } from "@/content/learn/es/ui";
import type { LearnDeepen, LearnQuestion, LearnScene } from "@/content/learn/types";
import { CheckQuestion } from "@/components/learn/CheckQuestion";
import { CiteList } from "@/components/learn/LearnRefs";
import { IconPlus } from "@/components/icons";

export function SceneSection({
  scene,
  index,
  children,
  deepen,
  question,
}: {
  scene: LearnScene;
  index: number;
  children: React.ReactNode;
  deepen?: LearnDeepen;
  question?: LearnQuestion;
}) {
  return (
    <section
      id={scene.id}
      aria-labelledby={`${scene.id}-title`}
      className="learn-section scroll-mt-28"
    >
      <div className="flex flex-wrap items-baseline gap-3">
        <span
          aria-hidden="true"
          className="font-display text-[length:var(--heading-2)] leading-none text-brand/30"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          id={`${scene.id}-title`}
          className="font-display text-[length:var(--heading-2)] text-brand"
        >
          {scene.title}
        </h2>
      </div>
      {scene.badge ? (
        <p className="mt-3 text-sm font-semibold text-muted">{scene.badge}</p>
      ) : null}
      {scene.paragraphs.length > 0 ? (
        <div className="learn-follow learn-reading space-y-4">
          {scene.paragraphs.map((paragraph) => (
            <p
              key={paragraph.text}
              className="text-[length:var(--body)] leading-relaxed text-muted"
            >
              {paragraph.text}
              <CiteList cites={paragraph.cites} />
            </p>
          ))}
        </div>
      ) : null}
      <div className="learn-follow learn-visual-full">{children}</div>
      {scene.closing && scene.closing.length > 0 ? (
        <div className="learn-follow learn-reading space-y-4">
          {scene.closing.map((paragraph) => (
            <p
              key={paragraph.text}
              className="text-[length:var(--body)] leading-relaxed text-muted"
            >
              {paragraph.text}
              <CiteList cites={paragraph.cites} />
            </p>
          ))}
        </div>
      ) : null}
      {deepen ? (
        <details className="learn-follow learn-deepen gp-module border border-border bg-[color-mix(in_srgb,var(--accent-violet)_8%,var(--surface))] p-[var(--learn-panel-pad)] open:bg-[color-mix(in_srgb,var(--accent-violet)_10%,var(--surface))]">
          <summary className="block min-h-11 cursor-pointer list-none py-1 text-[length:var(--body)] font-semibold text-brand transition-colors duration-200 hover:text-accent-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="learn-deepen-mark inline-flex size-6 items-center justify-center rounded-full bg-accent-violet/15 text-accent-violet"
              >
                <IconPlus className="size-3.5" />
              </span>
              {learnUi.deepenLabel}: {deepen.title}
            </span>
          </summary>
          <div className="learn-reading mt-4 space-y-3 border-t border-border/70 pt-4">
            {deepen.paragraphs.map((paragraph) => (
              <p
                key={paragraph.text}
                className="text-[length:var(--body)] leading-relaxed text-muted"
              >
                {paragraph.text}
                <CiteList cites={paragraph.cites} />
              </p>
            ))}
          </div>
        </details>
      ) : null}
      {question ? (
        <div className="learn-follow">
          <CheckQuestion question={question} />
        </div>
      ) : null}
    </section>
  );
}
