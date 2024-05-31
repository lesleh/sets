/**
 * Computes the intersection of two sets.
 * @param a The first set.
 * @param b The second set.
 * @returns A new set containing the elements that are common to both input sets.
 * @throws {Error} If either `a` or `b` is not a Set.
 * @template T The type of elements in the sets.
 */
export function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
  if (!(a instanceof Set) || !(b instanceof Set)) {
    throw new Error("Both arguments must be sets.");
  }

  const result = new Set<T>();

  for (const item of a) {
    if (b.has(item)) {
      result.add(item);
    }
  }

  return result;
}
