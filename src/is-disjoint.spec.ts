import { describe, expect, it } from "vitest";
import { isDisjoint } from "./is-disjoint.js";

describe("isDisjoint", () => {
  it("should return true if the sets have no elements in common", () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 4]);
    const result = isDisjoint(a, b);
    expect(result).toBe(true);
  });

  it("should return false if the sets have elements in common", () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    const result = isDisjoint(a, b);
    expect(result).toBe(false);
  });

  it("should throw an error if either `a` or `b` is not a Set", () => {
    // @ts-expect-error testing invalid types
    expect(() => isDisjoint(new Set(), null)).toThrow();
    // @ts-expect-error testing invalid types
    expect(() => isDisjoint(null, new Set())).toThrow();
  });
});
