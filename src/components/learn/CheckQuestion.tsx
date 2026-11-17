"use client";

import { useRef, useState } from "react";
import { useLearnUi } from "@/components/learn/LearnContent";
import type { LearnQuestion } from "@/content/learn/types";
import { CiteList } from "@/components/learn/LearnRefs";
import { learnControlClass } from "@/components/learn/controlClass";

export function CheckQuestion({ question }: { question: LearnQuestion }) {
  const learnUi = useLearnUi();
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
      className="gp-module border border-border bg-surface p-[var(--learn-panel-pad)] md:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        if (!checked) check();
      }}
    >
      <div className="learn-reading">
        <p className="text-overline text-muted">{learnUi.questionEyebrow}</p>
        <fieldset className="mt-3" disabled={checked}>
          <legend className="text-[length:var(--body-lg)] font-semibold text-brand">
            {question.prompt}
          </legend>
          <div className="mt-4 space-y-2">
            {question.options.map((option, index) => (
              <label
                key={option.id}
                className="flex min-h-12 cursor-pointer items-start gap-3 rounded-[calc(var(--radius-module)-0.35rem)] border border-transparent bg-surface-soft/60 px-3 py-2.5 transition-colors duration-200 hover:border-brand/20 has-[:checked]:border-brand/35 has-[:checked]:bg-[color-mix(in_srgb,var(--accent-yellow)_18%,var(--surface))] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent-violet has-[:disabled]:cursor-default"
              >
                <input
                  ref={index === 0 ? firstOptionRef : undefined}
                  className="mt-1 size-4 accent-[var(--accent-violet)]"
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={choice === option.id}
                  onChange={() => setChoice(option.id)}
                />
                <span className="min-w-0 text-[length:var(--body)] leading-snug text-foreground">
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
            className="mt-5 rounded-[calc(var(--radius-module)-0.35rem)] bg-surface-soft px-4 py-3 text-[length:var(--body)] leading-relaxed text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
          >
            {result === "correct" ? (
              <span className="font-semibold text-accent-green">{learnUi.correct} </span>
            ) : (
              <span className="font-semibold text-accent-coral">{learnUi.incorrect} </span>
            )}
            {selected.feedback}
            <CiteList cites={selected.cites} />
          </p>
        ) : null}
        {checked ? (
          <button
            type="button"
            className={`${learnControlClass} mt-5`}
            onClick={retry}
          >
            {learnUi.retry}
          </button>
        ) : (
          <button
            type="submit"
            className={`${learnControlClass} mt-5`}
            disabled={!choice}
          >
            {learnUi.check}
          </button>
        )}
      </div>
    </form>
  );
}
