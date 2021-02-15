import { isTrue, isFalse } from "./utils/tests.js";

const maxSubarraySum = (arr, len) => {
  let index = 0
  let max = null

  while (index + len <= arr.length) {
    let sum = arr.slice(index, index + len).reduce((acc, val) => acc + val, 0)
    max = sum > max ? sum : max
    index++
  }
  
  return max
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(maxSubarraySum([100,200,300,400], 2) === 700)
isTrue(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) === 39)
isTrue(maxSubarraySum([-3,4,0,-2,6,-1], 2) === 5)
isTrue(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) === 5)
isTrue(maxSubarraySum([2,3], 0) === null)
