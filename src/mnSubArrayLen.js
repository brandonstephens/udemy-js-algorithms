import { isTrue, isFalse } from "./utils/tests.js";

// functions here
const minSubArrayLen = (arr, val) => {
  size = 0

  while (size < arr.lengh) {
    
  }

  return 0
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(minSubArrayLen([2,3,1,2,4,3], 7) === 2)
isTrue(minSubArrayLen([2,1,6,5,4], 9) === 2)
isTrue(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) === 1)
isTrue(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) === 3)
isTrue(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) === 5)
isTrue(minSubArrayLen([4,3,3,8,1,2,3], 11) === 2)
isTrue(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) === 0)
