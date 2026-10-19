import { learnUi } from "@/content/learn/es/ui";
import type { LearnDeepen, LearnQuestion, LearnScene, LearnSource } from "@/content/learn/types";
import { CheckQuestion } from "@/components/learn/CheckQuestion";
import { CiteMark } from "@/components/learn/CiteMark";

export function SceneSection({
  scene,
  index,
  total,
  children,
  deepen,
  question,
  numbers,
  sources,
}: {
  scene: LearnScene;
  index: number;
  total: number;
  children: React.ReactNode;
  deepen?: LearnDeepen;
  question?: LearnQuestion;
  numbers: Record<string, number>;
  sources: readonly LearnSource[];
}) {
  return (
    <section
      id={scene.id}
      aria-labelledby={`${scene.id}-title`}
      className="scroll-mt-28 border-t border-border py-12 md:py-16"
    >
      <p className="text-sm font-medium text-muted">
        {learnUi.scenePosition(index, total)}
      </p>
      <h2
        id={`${scene.id}-title`}
        className="mt-2 text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground"
      >
        {scene.title}
      </h2>
      <div className="mt-6">{children}</div>
      <div className="mt-6 max-w-[65ch] space-y-4">
        {scene.paragraphs.map((paragraph) => (
          <p key={paragraph.text} className="leading-relaxed text-muted">
            {paragraph.text}
            <CiteList cites={paragraph.cites} numbers={numbers} sources={sources} />
          </p>
        ))}
      </div>
      {deepen ? (
        <details className="mt-6 max-w-[65ch] rounded-[8px] border border-border bg-surface px-4 py-3">
          <summary className="cursor-pointer text-base font-semibold text-foreground">
            {learnUi.deepenLabel}: {deepen.title}
          </summary>
          <div className="mt-3 space-y-3">
            {deepen.paragraphs.map((paragraph) => (
              <p key={paragraph.text} className="leading-relaxed text-muted">
                {paragraph.text}
                <CiteList cites={paragraph.cites} numbers={numbers} sources={sources} />
              </p>
            ))}
          </div>
        </details>
      ) : null}
      {question ? <CheckQuestion question={question} /> : null}
    </section>
  );
}

function CiteList({
  cites,
  numbers,
  sources,
}: {
  cites?: readonly string[];
  numbers: Record<string, number>;
  sources: readonly LearnSource[];
}) {
  if (!cites?.length) return null;
  return (
    <>
      {cites.map((id) => {
        const source = sources.find((item) => item.id === id);
        const number = numbers[id];
        if (!source || !number) return null;
        return <CiteMark key={id} source={source} number={number} />;
      })}
    </>
  );
}
