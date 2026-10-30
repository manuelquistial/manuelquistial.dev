"use client";

import { useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnQuestion } from "@/content/learn/types";
import { CiteList } from "@/components/learn/LearnRefs";
import { learnControlClass } from "@/components/learn/controlClass";

export function CheckQuestion({ question }: { question: LearnQuestion }) {
  const [choice, setChoice] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "review" | null>(null);
  const feedbackRef = useRef<HTMLParagraphElement>(null);
  const firstOptionRef = useRef<HTMLInputElement>(null);
  const selected = question.options.find((option) => option.id === choice);
  const checked = Boolean(result);

  const check = () => {
    if (!choice) return;
    setResult(choice === question.correctId ? "correct" : "review");
    requestAnimationFrame(() => feedbackRef.current?.focus());
  };

  const retry = () => {
    setResult(null);
    setChoice(null);
    requestAnimationFrame(() => firstOptionRef.current?.focus());
  };

  return (
    <form
      className="rounded-[8px] border border-border bg-surface p-[var(--learn-panel-pad)]"
      onSubmit={(event) => {
        event.preventDefault();
        if (!checked) check();
      }}
    >
      <div className="learn-reading">
        <p className="text-sm font-semibold text-muted">{learnUi.questionEyebrow}</p>
        <fieldset className="mt-3" disabled={checked}>
          <legend className="text-base font-semibold text-foreground">
            {question.prompt}
          </legend>
          <div className="mt-3 space-y-2">
            {question.options.map((option, index) => (
              <label
                key={option.id}
                className="flex min-h-11 cursor-pointer items-start gap-3 rounded-[6px] border border-transparent px-2 py-2 has-[:focus-visible]:border-foreground has-[:disabled]:cursor-default"
              >
                <input
                  ref={index === 0 ? firstOptionRef : undefined}
                  className="mt-1 size-4 accent-[var(--accent)]"
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={choice === option.id}
                  onChange={() => setChoice(option.id)}
                />
                <span className="min-w-0 text-base leading-snug text-foreground">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        {result && selected ? (
          <p
            ref={feedbackRef}
            tabIndex={-1}
            aria-live="polite"
            className="mt-4 text-base leading-relaxed text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            {result === "correct" ? (
              <span className="font-semibold">{learnUi.correct} </span>
            ) : (
              <span className="font-semibold">{learnUi.incorrect} </span>
            )}
            {selected.feedback}
            <CiteList cites={selected.cites} />
          </p>
        ) : null}
        {checked ? (
          <button
            type="button"
            className={`${learnControlClass} mt-4`}
            onClick={retry}
          >
            {learnUi.retry}
          </button>
        ) : (
          <button
            type="submit"
            className={`${learnControlClass} mt-4`}
            disabled={!choice}
          >
            {learnUi.check}
          </button>
        )}
      </div>
    </form>
  );
}
