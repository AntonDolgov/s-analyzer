export function groupBy<T, K extends keyof any>(
  collection: T[],
  iteratee: ((item: T) => K) | K,
) {
  type GroupedObject = Record<K, T[]>

  return collection.reduce<GroupedObject>((result, item) => {
    const key =
      typeof iteratee === 'function'
        ? iteratee(item)
        : item[iteratee as unknown as keyof T]

    // @ts-ignore
    if (!result[key]) {
      // @ts-ignore
      result[key] = []
    }

    // @ts-ignore
    result[key].push(item)

    return result
  }, {} as GroupedObject)
}
