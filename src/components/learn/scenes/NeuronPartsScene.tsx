"use client";

import { useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import {
  NeuronFigure,
  type NeuronPart,
} from "@/components/learn/illustrations/NeuronFigure";
import { LearnFrame } from "@/components/learn/LearnFrame";
import {
  learnControlActiveClass,
  learnControlClass,
} from "@/components/learn/controlClass";
import { cn } from "@/lib/utils";

export function NeuronPartsScene() {
  const scene = neuronsLesson.scenes[1];
  const [selected, setSelected] = useState<NeuronPart | null>(null);
  const part = scene.parts?.find((item) => item.id === selected);

  return (
    <div className="flex flex-col gap-4">
      <LearnFrame>
        <NeuronFigure
          label={scene.textAlternative}
          selected={selected}
          onSelect={setSelected}
        />
      </LearnFrame>
      <div role="group" aria-label={scene.title} className="flex flex-wrap gap-2">
        {scene.parts?.map((item) => (
          <button
            key={item.id}
            type="button"
            className={cn(
              learnControlClass,
              selected === item.id && learnControlActiveClass,
            )}
            aria-pressed={selected === item.id}
            onClick={() => setSelected(item.id as NeuronPart)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="max-w-[65ch] text-sm leading-relaxed text-foreground" aria-live="polite">
        {part ? (
          <>
            <span className="font-semibold">{part.label}.</span> {part.text}
          </>
        ) : (
          learnUi.choosePart
        )}
      </p>
    </div>
  );
}
