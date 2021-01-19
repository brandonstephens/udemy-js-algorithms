import { isUndefined, isEqualArray } from "./utils/tests.js";

// solution from video 30

const sumZero = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]

    if (sum === 0) {
      return [
        arr[left], arr[right]
      ]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }

  return undefined
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isEqualArray(sumZero([-4, -3, -1, 0, 1, 2, 3]), [-3, 3])
isEqualArray(sumZero([-4, -3, -2, -1, 0, 1, 2, 3]), [-3, 3])
isEqualArray(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), [-4, 4])
isEqualArray(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3])
isUndefined(sumZero([-2, 0, 1, 3]))
isUndefined(sumZero([1, 2, 3]))
