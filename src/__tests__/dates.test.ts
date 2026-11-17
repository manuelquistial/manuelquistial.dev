import { describe, expect, it } from "vitest";
import {
  formatLocalDate,
  formatUtcDate,
  isUtcIsoString,
} from "@/lib/dates";

describe("dates", () => {
  it("accepts only absolute UTC ISO-8601 values", () => {
    expect(isUtcIsoString("2026-10-19T19:25:25.000Z")).toBe(true);
    expect(isUtcIsoString("2026-10-19T19:25:25Z")).toBe(true);
    expect(isUtcIsoString("2026-10-19T19:25:25-05:00")).toBe(false);
    expect(isUtcIsoString("2026-10-19")).toBe(false);
    expect(isUtcIsoString("not-a-date")).toBe(false);
  });

  it("formats calendar dates without a clock time", () => {
    const utc = "2026-10-19T19:25:25.000Z";
    expect(formatUtcDate(utc, "es")).toBe("19 de octubre de 2026");
    const local = formatLocalDate(utc, "en");
    expect(local).toMatch(/2026/);
    expect(local).not.toMatch(/\d:\d{2}/);
  });
});
