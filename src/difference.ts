/**
 * Calculates the difference between two sets.
 * @template T The type of elements in the sets.
 * @param {Set<T>} a The first set.
 * @param {Set<T>} b The second set.
 * @returns {Set<T>} A new set containing the elements that are in `a` but not in `b`.
 * @throws {Error} If either `a` or `b` is not a Set.
 */
export function difference<T>(a: Set<T>, b: Set<T>): Set<T> {
  if (!(a instanceof Set) || !(b instanceof Set)) {
    throw new Error("Both arguments must be sets.");
  }

  const result = new Set<T>();

  for (const item of a) {
    if (!b.has(item)) {
      result.add(item);
    }
  }

  return result;
}
