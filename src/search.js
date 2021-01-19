import { isTrue, isFalse } from "./utils/tests.js";

// vid 34
// assums sorted numbers

const search = (arr, val) => {
  // tracks index
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    let index = Math.floor((min + max) / 2)

    if (arr[index] < val) {
      // shift right
      min = index + 1
    } else if (arr[index] > val) {
      // shift left
      max = index - 1
    } else {
      return index
    }
  }

  return -1
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(search([1, 2, 3], 3) === 2)
isTrue(search([1, 2, 3], 1) === 0)
isTrue(search([1, 2, 3, 4, 5, 6], 2) === 1)
isTrue(search([1, 2, 3, 4, 5, 6], 4) === 3)
isTrue(search([1, 2, 3, 4, 5, 6], 6) === 5)
isTrue(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9) === 8)
isTrue(search([1, 2, 3, 4, 5, 6], 11) === -1)
isTrue(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1) === 0)
isTrue(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10) === 9)
