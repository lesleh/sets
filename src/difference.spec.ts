import { describe, expect, it } from "vitest";
import { difference } from "./difference.js";

describe("difference", () => {
  it("should return a new set containing the elements that are in `a` but not in `b`", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);
    const result = difference(a, b);
    expect(result).toEqual(new Set([1]));
  });

  it("should return an empty set if `a` is a subset of `b`", () => {
    const a = new Set([1, 2]);
    const b = new Set([1, 2, 3]);
    const result = difference(a, b);
    expect(result).toEqual(new Set());
  });

  it("should throw an error if either `a` or `b` is not a Set", () => {
    // @ts-expect-error testing invalid types
    expect(() => difference(new Set(), null)).toThrow();
    // @ts-expect-error testing invalid types
    expect(() => difference(null, new Set())).toThrow();
  });
});
