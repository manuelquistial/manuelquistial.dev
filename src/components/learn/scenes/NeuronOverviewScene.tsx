"use client";

import { useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { NeuronFigure } from "@/components/learn/illustrations/NeuronFigure";
import { LearnFrame } from "@/components/learn/LearnFrame";
import {
  learnControlActiveClass,
  learnControlClass,
} from "@/components/learn/controlClass";
import { cn } from "@/lib/utils";

export function NeuronOverviewScene() {
  const [zoom, setZoom] = useState(1);
  const scene = neuronsLesson.scenes[0];

  return (
    <div className="flex flex-col gap-4">
      <LearnFrame>
        <NeuronFigure label={scene.textAlternative} zoom={zoom} />
      </LearnFrame>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={cn(learnControlClass, zoom > 1 && learnControlActiveClass)}
          aria-pressed={zoom > 1}
          onClick={() => setZoom(1.7)}
        >
          {learnUi.zoomIn}
        </button>
        <button
          type="button"
          className={learnControlClass}
          onClick={() => setZoom(1)}
          disabled={zoom === 1}
        >
          {learnUi.zoomOut}
        </button>
      </div>
    </div>
  );
}
