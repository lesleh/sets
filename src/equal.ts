/**
 * Check if two sets are equal.
 * @template T The type of items in the sets.
 * @param {Set<T>} a - The first set to compare.
 * @param {Set<T>} b - The second set to compare.
 * @returns {boolean} - Returns true if the two sets are equal, false otherwise.
 */
export function equal<T>(a: Set<T>, b: Set<T>): boolean {
  if (a.size !== b.size) return false;

  for (const item of a) {
    if (!b.has(item)) return false;
  }

  return true;
}
