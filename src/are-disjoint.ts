/**
 * Checks if two sets are disjoint.
 *
 * @template T The type of elements in the sets.
 * @param {Set<T>} a The first set.
 * @param {Set<T>} b The second set.
 * @returns {boolean} `true` if the sets are disjoint, `false` otherwise.
 * @throws {Error} If either `a` or `b` is not a Set.
 */
export function areDisjoint<T>(a: Set<T>, b: Set<T>): boolean {
  if (!(a instanceof Set) || !(b instanceof Set)) {
    throw new Error("Both arguments must be sets.");
  }

  for (const item of a) {
    if (b.has(item)) {
      return false;
    }
  }

  return true;
}
