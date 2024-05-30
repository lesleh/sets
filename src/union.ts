export function union<T>(a: Set<T>, b: Set<T>): Set<T> {
  if (!(a instanceof Set) || !(b instanceof Set)) {
    throw new Error("Both arguments must be sets.");
  }

  const result = new Set<T>(a);

  for (const item of b) {
    result.add(item);
  }

  return result;
}
