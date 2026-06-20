import { describe, expect, it } from "vitest";
import { getUrlHost } from "@/lib/utils";

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
