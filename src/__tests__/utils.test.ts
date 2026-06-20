import { describe, expect, it } from "vitest";
import { localizedPath, stripLocale, getUrlHost } from "@/lib/utils";

describe("localizedPath", () => {
  it("returns locale root", () => {
    expect(localizedPath("en")).toBe("/en");
    expect(localizedPath("es", "/")).toBe("/es");
  });

  it("returns nested paths", () => {
    expect(localizedPath("en", "/about")).toBe("/en/about");
    expect(localizedPath("es", "projects")).toBe("/es/projects");
  });
});

describe("stripLocale", () => {
  it("removes locale prefix from paths", () => {
    expect(stripLocale("/en")).toBe("/");
    expect(stripLocale("/en/about")).toBe("/about");
    expect(stripLocale("/es/projects")).toBe("/projects");
  });

  it("returns original path when no locale prefix", () => {
    expect(stripLocale("/about")).toBe("/about");
  });
});

describe("getUrlHost", () => {
  it("extracts host from URLs", () => {
    expect(getUrlHost("https://github.com/manuelquistial")).toBe(
      "github.com",
    );
  });
});
