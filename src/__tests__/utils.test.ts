import { describe, expect, it } from "vitest";
import { localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { getUrlHost } from "@/lib/utils";

describe("localizedSectionPath", () => {
  it("builds locale-prefixed paths with section anchors", () => {
    expect(
      localizedSectionPath("en", "/about", pageSections.experience),
    ).toBe("/en/about#experience");
  });
});

describe("getUrlHost", () => {
  it("extracts host from valid URLs", () => {
    expect(getUrlHost("https://github.com/manuelquistial")).toBe(
      "github.com",
    );
  });

  it("returns original string for invalid URLs", () => {
    expect(getUrlHost("not-a-url")).toBe("not-a-url");
  });
});
