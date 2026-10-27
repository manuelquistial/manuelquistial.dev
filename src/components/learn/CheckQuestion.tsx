"use client";

import { useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import type { LearnQuestion } from "@/content/learn/types";
import { CiteList } from "@/components/learn/LearnRefs";

export function CheckQuestion({ question }: { question: LearnQuestion }) {
  const [choice, setChoice] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "review" | null>(null);
  const feedbackRef = useRef<HTMLParagraphElement>(null);
  const firstOptionRef = useRef<HTMLInputElement>(null);
  const selected = question.options.find((option) => option.id === choice);

  const answer = (id: string) => {
    setChoice(id);
    setResult(id === question.correctId ? "correct" : "review");
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
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="learn-reading">
        <p className="text-sm font-semibold text-muted">{learnUi.questionEyebrow}</p>
        <fieldset className="mt-3">
          <legend className="text-base font-semibold text-foreground">
            {question.prompt}
          </legend>
          <div className="mt-3 space-y-2">
            {question.options.map((option, index) => (
              <label
                key={option.id}
                className="flex min-h-11 cursor-pointer items-start gap-3 rounded-[6px] border border-transparent px-2 py-2 has-[:focus-visible]:border-foreground"
              >
                <input
                  ref={index === 0 ? firstOptionRef : undefined}
                  className="mt-1 size-4 accent-[var(--accent)]"
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={choice === option.id}
                  onChange={() => answer(option.id)}
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
            ) : null}
            {selected.feedback}
            <CiteList cites={selected.cites} />
          </p>
        ) : null}
        {result ? (
          <button
            type="button"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-[6px] border border-border bg-surface px-4 text-base font-semibold text-foreground transition-colors duration-150 hover:border-foreground/40 hover:bg-surface-soft"
            onClick={retry}
          >
            {learnUi.retry}
          </button>
        ) : null}
      </div>
    </form>
  );
}
