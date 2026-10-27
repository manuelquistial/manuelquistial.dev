"use client";

import { createContext, use, type ReactNode } from "react";
import type { LearnSource } from "@/content/learn/types";
import { CiteMark } from "@/components/learn/CiteMark";

type LearnRefsValue = {
  numbers: Record<string, number>;
  sources: readonly LearnSource[];
};

const LearnRefsContext = createContext<LearnRefsValue | null>(null);

export function LearnRefsProvider({
  value,
  children,
}: {
  value: LearnRefsValue;
  children: ReactNode;
}) {
  return (
    <LearnRefsContext.Provider value={value}>{children}</LearnRefsContext.Provider>
  );
}

export function useLearnRefs() {
  return use(LearnRefsContext);
}

export function CiteList({ cites }: { cites?: readonly string[] }) {
  const refs = useLearnRefs();
  if (!refs || !cites?.length) return null;

  return (
    <>
      {cites.map((id) => {
        const source = refs.sources.find((item) => item.id === id);
        const number = refs.numbers[id];
        if (!source || !number) return null;
        return <CiteMark key={id} source={source} number={number} />;
      })}
    </>
  );
}
