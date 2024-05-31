import { describe, expect, it } from "vitest";
import { areEqual } from "./are-equal.js";

describe("areEqual", () => {
  it("should return true for areEqual sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);

    expect(areEqual(a, b)).toBe(true);
  });

  it("should return false for different sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 4]);

    expect(areEqual(a, b)).toBe(false);
  });

  it("should return false for different sizes", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2]);

    expect(areEqual(a, b)).toBe(false);
  });
});
