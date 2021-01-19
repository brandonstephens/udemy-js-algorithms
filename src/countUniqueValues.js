import { isTrue, isFalse } from "./utils/tests.js";

// video 31

const countUniqueValues = (arr) => {
  let count = 0
  let index = 0

  if (arr.length > 0) {
    count += 1
  }

  while (index < arr.length - 1) {
    if (arr[index] !== arr[index + 1]) {
      count += 1
    }

    index += 1
  }

  return count
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2,]) === 2)
isTrue(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]) === 7)
isTrue(countUniqueValues([]) === 0)
isTrue(countUniqueValues([1]) === 1)
isTrue(countUniqueValues([-2, -1, -1, 0, 1]) === 4)
