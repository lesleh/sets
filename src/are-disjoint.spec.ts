import { describe, expect, it } from "vitest";
import { areDisjoint } from "./are-disjoint.js";

describe("areDisjoint", () => {
  it("should return true if the sets have no elements in common", () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 4]);
    const result = areDisjoint(a, b);
    expect(result).toBe(true);
  });

  it("should return false if the sets have elements in common", () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    const result = areDisjoint(a, b);
    expect(result).toBe(false);
  });

  it("should throw an error if either `a` or `b` is not a Set", () => {
    // @ts-expect-error testing invalid types
    expect(() => areDisjoint(new Set(), null)).toThrow();
    // @ts-expect-error testing invalid types
    expect(() => areDisjoint(null, new Set())).toThrow();
  });
});
