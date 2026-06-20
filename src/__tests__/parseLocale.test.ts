import { describe, expect, it } from "vitest";
import { isLocale } from "@/i18n/parseLocale";

describe("isLocale", () => {
  it("returns true for supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(true);
  });

  it("returns false for unsupported locales", () => {
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("")).toBe(false);
  });
});
