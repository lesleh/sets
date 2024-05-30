import { describe, expect, it } from "vitest";
import { intersection } from "./intersection.js";

describe("intersection", () => {
  it("should return a new set with items that are in both sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);

    const result = intersection(a, b);

    expect(result).toEqual(new Set([2, 3]));
  });

  it("should not modify the original sets", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);

    intersection(a, b);

    expect(a).toEqual(new Set([1, 2, 3]));
    expect(b).toEqual(new Set([2, 3, 4]));
  });

  it("should throw an error if either argument is not a set", () => {
    // @ts-expect-error testing invalid types
    expect(() => intersection(new Set(), null)).toThrow();
    // @ts-expect-error testing invalid types
    expect(() => intersection(null, new Set())).toThrow();
  });
});
