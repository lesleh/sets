import { describe, expect, it } from "vitest";
import { equal } from "./equal.js";

describe("equal", () => {
  it("should return true for equal sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);

    expect(equal(a, b)).toBe(true);
  });

  it("should return false for different sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 4]);

    expect(equal(a, b)).toBe(false);
  });

  it("should return false for different sizes", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2]);

    expect(equal(a, b)).toBe(false);
  });
});
