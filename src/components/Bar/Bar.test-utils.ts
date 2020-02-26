export function recursePermutations<T> (arrOfArrays: T[][], callback: (permutation: T[]) => void, i: number = 0, previousElements: T[] = []) {
  if (i < arrOfArrays.length) {
    const currentElements = arrOfArrays[i]
    for (const element of currentElements) {
      recursePermutations(arrOfArrays, callback, i + 1, previousElements.concat(element))
    }
    if (currentElements.length < 1) {
      recursePermutations(arrOfArrays, callback, i + 1, Array.from(previousElements))
    }
  } else if (previousElements.length > 0) {
    callback(previousElements)
  }
}
