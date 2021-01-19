import { isTrue } from "./utils/tests.js";

// Variation to the solution the instructor gave
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816156#overview

const countUniqueValues = (arr) => {
  if(arr.length === 0) return 0
  
  let i = 0

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  return i + 1
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2,]) === 2)
isTrue(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]) === 7)
isTrue(countUniqueValues([]) === 0)
isTrue(countUniqueValues([1]) === 1)
isTrue(countUniqueValues([-2, -1, -1, 0, 1]) === 4)
