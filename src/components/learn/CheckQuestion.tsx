"use client";

import { useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnQuestion } from "@/content/learn/types";
import { learnControlClass } from "@/components/learn/controlClass";

export function CheckQuestion({ question }: { question: LearnQuestion }) {
  const [choice, setChoice] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "review" | null>(null);
  const feedbackRef = useRef<HTMLParagraphElement>(null);
  const firstOptionRef = useRef<HTMLInputElement>(null);

  const check = () => {
    if (!choice) return;
    const next = choice === question.correctId ? "correct" : "review";
    setResult(next);
    requestAnimationFrame(() => feedbackRef.current?.focus());
  };

  const retry = () => {
    setResult(null);
    setChoice(null);
    requestAnimationFrame(() => firstOptionRef.current?.focus());
  };

  return (
    <form
      className="mt-8 max-w-[65ch] rounded-[8px] border border-border bg-surface p-4 sm:p-5"
      onSubmit={(event) => {
        event.preventDefault();
        check();
      }}
    >
      <p className="text-sm font-semibold text-muted">{learnUi.questionEyebrow}</p>
      <fieldset className="mt-3" disabled={result !== null}>
        <legend className="text-base font-semibold text-foreground">
          {question.prompt}
        </legend>
        <div className="mt-4 space-y-2">
          {question.options.map((option, index) => (
            <label
              key={option.id}
              className="flex min-h-11 cursor-pointer items-start gap-3 rounded-[6px] border border-transparent px-1 py-2 has-[:focus-visible]:border-foreground"
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
              <span className="text-base leading-snug text-foreground">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      {result ? (
        <p
          ref={feedbackRef}
          tabIndex={-1}
          aria-live="polite"
          className="mt-4 text-base leading-relaxed text-foreground outline-none"
        >
          <span className="font-semibold">
            {result === "correct" ? learnUi.correct : learnUi.review}
          </span>{" "}
          {question.feedback}
        </p>
      ) : (
        <button
          type="submit"
          className={`${learnControlClass} mt-4`}
          disabled={!choice}
        >
          {learnUi.check}
        </button>
      )}
      {result ? (
        <button type="button" className={`${learnControlClass} mt-4`} onClick={retry}>
          {learnUi.retry}
        </button>
      ) : null}
    </form>
  );
}
