import { describe, expect, it } from "vitest";
import { learnLessons } from "@/content/learn/catalog";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { neuronSceneIds } from "@/content/learn/scene-ids";
import {
  getLearnLocaleAvailability,
  getLearnSitemapEntries,
  learnRoutes,
} from "@/content/learn/routes";
import {
  advancePlayback,
  createPlaybackController,
  createSnapshot,
} from "@/lib/learn/playback";
import {
  crossesLipidOutsideChannel,
  ionPositions,
  membraneVoltage,
  networkState,
  signalFrameVars,
  synapseFrameVars,
  voltageStageAt,
} from "@/lib/learn/physiology";
import {
  readLearnProgress,
  writeLearnProgress,
} from "@/lib/learn/progress";
import {
  localizedPathForAvailableContent,
  switchLocaleHref,
} from "@/lib/localizedPath";
import { resolveUnlocalizedRedirect } from "@/lib/unlocalizedRedirect";

const verifiedSources = [
  "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue",
  "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential",
  "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons",
  "https://www.ncbi.nlm.nih.gov/books/NBK10921/",
  "https://www.ncbi.nlm.nih.gov/books/NBK11009/",
];

describe("learn catalog", () => {
  it("publishes one spanish lesson with eight stable scenes", () => {
    expect(learnLessons).toHaveLength(1);
    expect(neuronsLesson.locales).toEqual(["es"]);
    expect("originalPostUrl" in neuronsLesson).toBe(false);
    expect(neuronsLesson.scenes.map((scene) => scene.id)).toEqual([
      ...neuronSceneIds,
    ]);
    expect(learnRoutes).toEqual([
      { slug: neuronsLesson.slug, locales: [...neuronsLesson.locales] },
    ]);
  });

  it("keeps questions, sources and copy tied to real scenes", () => {
    expect(neuronsLesson.questions).toHaveLength(3);
    for (const question of neuronsLesson.questions) {
      expect(neuronSceneIds).toContain(question.afterSceneId);
      expect(question.options.map((option) => option.id)).toContain(question.correctId);
    }
    for (const block of neuronsLesson.deepen) {
      expect(neuronSceneIds).toContain(block.afterSceneId);
    }
    expect(neuronsLesson.sources.map((source) => source.href)).toEqual(verifiedSources);
    const copy = JSON.stringify(neuronsLesson);
    expect(copy).not.toContain("\u2014");
    expect(copy).not.toMatch(/\d+\s*ms/);
  });

  it("lists only spanish urls for the sitemap and language switcher", () => {
    expect(getLearnSitemapEntries()).toEqual([
      { locale: "es", path: "/aprendamos" },
      {
        locale: "es",
        path: "/aprendamos/como-se-comunican-las-neuronas",
      },
    ]);
    expect(getLearnLocaleAvailability("/aprendamos")).toEqual(["es"]);
    expect(getLearnLocaleAvailability("/about")).toBeNull();
    expect(switchLocaleHref("/es/aprendamos", "en")).toEqual({
      href: "/en",
      fallback: true,
    });
    expect(switchLocaleHref("/es/about", "en")).toEqual({
      href: "/en/about",
      fallback: false,
    });
    expect(localizedPathForAvailableContent("en", "/aprendamos")).toEqual({
      href: "/es/aprendamos",
      lang: "es",
    });
  });
});

describe("unlocalized aprendamos redirect", () => {
  it("sends /aprendamos to spanish before the locale cookie", () => {
    expect(resolveUnlocalizedRedirect("/aprendamos", "en")).toBe("/es/aprendamos");
    expect(
      resolveUnlocalizedRedirect(
        "/aprendamos/como-se-comunican-las-neuronas",
        "en",
      ),
    ).toBe("/es/aprendamos/como-se-comunican-las-neuronas");
    expect(resolveUnlocalizedRedirect("/es/aprendamos", "en")).toBeNull();
    expect(resolveUnlocalizedRedirect("/about", "en")).toBe("/en/about");
    expect(resolveUnlocalizedRedirect("/", "es")).toBe("/es");
  });
});

describe("scene playback", () => {
  const stages = [
    { id: "a", start: 0, end: 1 },
    { id: "b", start: 1, end: 2 },
  ];

  it("does not advance while paused and restart cancels playback", () => {
    const paused = createSnapshot(stages);
    expect(advancePlayback(paused, 500, stages)).toBe(paused);

    const controller = createPlaybackController(stages);
    controller.play();
    expect(controller.frame(400)).toBe(true);
    const mid = controller.getSnapshot().time;
    controller.play();
    expect(controller.getSnapshot().time).toBe(mid);

    controller.restart();
    expect(controller.getSnapshot()).toMatchObject({
      time: 0,
      playing: false,
      speed: 1,
      stageId: "a",
    });
    expect(controller.frame(500)).toBe(false);
    expect(controller.getSnapshot().time).toBe(0);
  });

  it("steps once when motion is reduced and stops on the last stage", () => {
    const controller = createPlaybackController(stages);
    controller.play({ reducedMotion: true });
    expect(controller.getSnapshot()).toMatchObject({
      playing: false,
      stageId: "b",
    });
    controller.step();
    expect(controller.getSnapshot().stageId).toBe("b");
  });
});

describe("neuron models", () => {
  it("keeps the spike at zero until the propagation stage", () => {
    expect(signalFrameVars(6, 10)["--spike"]).toBe("0");
    expect(Number(signalFrameVars(9, 10)["--spike"])).toBeGreaterThan(0);
  });

  it("uses approximate textbook voltages without a millisecond axis", () => {
    expect(membraneVoltage(0)).toBe(-70);
    expect(membraneVoltage(0.42)).toBeCloseTo(30, 5);
    expect(voltageStageAt(0.5).id).toBe("repolarization");
    expect(membraneVoltage(0.76)).toBeLessThan(-70);
    expect(membraneVoltage(1)).toBeGreaterThan(-80);
    expect(membraneVoltage(1)).toBeLessThan(-70);
  });

  it("moves ions only through their channels", () => {
    const samples = [0, 0.5, 1];
    const stages = ["rest", "depolarization", "repolarization", "hyperpolarization"];

    for (const stage of stages) {
      for (const progress of samples) {
        const ions = ionPositions(stage, progress);
        expect(crossesLipidOutsideChannel(ions.na, "na")).toBe(false);
        expect(crossesLipidOutsideChannel(ions.k, "k")).toBe(false);
      }
    }

    const entering = ionPositions("depolarization", 0.5).na;
    expect(entering.x).toBe(118);
    expect(entering.y).toBeGreaterThan(96);
    expect(entering.y).toBeLessThan(144);
  });

  it("keeps chemical and electrical synapses distinct", () => {
    expect(synapseFrameVars("electrical", "current", 0.4)["--diffuse"]).toBe("0");
    expect(synapseFrameVars("chemical", "arrival", 1)["--diffuse"]).toBe("0");
    expect(Number(synapseFrameVars("chemical", "diffusion", 0.5)["--diffuse"])).toBeGreaterThan(0);
  });

  it("follows one controlled network sequence", () => {
    for (const stageId of ["idle", "input", "relay", "split"]) {
      expect(networkState(stageId).active).not.toContain("n4");
    }
    expect(networkState("split")).toEqual({
      active: ["n3"],
      inhibited: ["n4"],
    });
  });
});

describe("learn progress storage", () => {
  it("ignores broken storage and unknown scenes", () => {
    const memory = new Map<string, string>();
    const storage = {
      getItem: (key: string) => memory.get(key) ?? null,
      setItem: (key: string, value: string) => {
        memory.set(key, value);
      },
    };

    expect(writeLearnProgress(storage, { slug: "demo", sceneId: "partes" })).toBe(true);
    expect(readLearnProgress(storage, "demo", ["partes", "sinapsis"])).toBe("partes");
    expect(readLearnProgress(storage, "demo", ["sinapsis"])).toBeNull();
    expect(readLearnProgress(null, "demo", ["partes"])).toBeNull();
    expect(
      writeLearnProgress(
        {
          getItem: () => null,
          setItem: () => {
            throw new Error("blocked");
          },
        },
        { slug: "demo", sceneId: "partes" },
      ),
    ).toBe(false);
    expect(
      readLearnProgress(
        {
          getItem: () => {
            throw new Error("blocked");
          },
        },
        "demo",
        ["partes"],
      ),
    ).toBeNull();
  });
});
