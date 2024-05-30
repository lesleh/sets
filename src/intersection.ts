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
