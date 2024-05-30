import { describe, expect, it } from "vitest";
import { union } from "./union.js";

describe("union", () => {
  it("should return a new set with all items from both sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);

    const result = union(a, b);

    expect(result).toEqual(new Set([1, 2, 3, 4]));
  });

  it("should not modify the original sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);

    union(a, b);

    expect(a).toEqual(new Set([1, 2, 3]));
    expect(b).toEqual(new Set([2, 3, 4]));
  });

  it("should throw an error if either argument is not a set", () => {
    // @ts-expect-error testing invalid types
    expect(() => union(new Set(), null)).toThrow();
    // @ts-expect-error testing invalid types
    expect(() => union(null, new Set())).toThrow();
  });
});
