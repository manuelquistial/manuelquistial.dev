import { learnUi } from "@/content/learn/es/ui";
import type { LearnDeepen, LearnQuestion, LearnScene } from "@/content/learn/types";
import { CheckQuestion } from "@/components/learn/CheckQuestion";
import { CiteList } from "@/components/learn/LearnRefs";

export function SceneSection({
  scene,
  children,
  deepen,
  question,
}: {
  scene: LearnScene;
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
      <h2
        id={`${scene.id}-title`}
        className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground"
      >
        {scene.title}
      </h2>
      {scene.badge ? (
        <p className="mt-2 text-sm font-semibold text-muted">{scene.badge}</p>
      ) : null}
      {scene.paragraphs.length > 0 ? (
        <div className="learn-follow learn-reading space-y-4">
          {scene.paragraphs.map((paragraph) => (
            <p key={paragraph.text} className="leading-relaxed text-muted">
              {paragraph.text}
              <CiteList cites={paragraph.cites} />
            </p>
          ))}
        </div>
      ) : null}
      <div className="learn-follow">{children}</div>
      {scene.closing && scene.closing.length > 0 ? (
        <div className="learn-follow learn-reading space-y-4">
          {scene.closing.map((paragraph) => (
            <p key={paragraph.text} className="leading-relaxed text-muted">
              {paragraph.text}
              <CiteList cites={paragraph.cites} />
            </p>
          ))}
        </div>
      ) : null}
      {deepen ? (
        <details className="learn-follow rounded-[8px] border border-border bg-surface p-[var(--learn-panel-pad)]">
          <summary className="block min-h-11 cursor-pointer py-2 text-base font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
            {learnUi.deepenLabel}: {deepen.title}
          </summary>
          <div className="learn-reading mt-3 space-y-3">
            {deepen.paragraphs.map((paragraph) => (
              <p key={paragraph.text} className="leading-relaxed text-muted">
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
