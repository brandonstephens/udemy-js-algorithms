import { isTrue } from "./utils/tests.js";

// sliding window methods 
// assumes array are sorted low to high
// ~ video 33

const maxSubarraySum = (arr, len) => {
  if (len > arr.length) return null

  let sum = -Infinity // allows for negative values in array
  let index = 0
  let prevSum = null

  while (index < arr.length) {
    const window = arr.slice(index, index + len)
    if (window.length < len) break

    // keeps from looping the entire window array to calc sum
    let subSum = (index < 1)
      ? window.reduce((acc, val) => { return acc + val }, 0)
      : prevSum - arr[index - 1] + arr[index + len - 1]

    if (subSum > sum) {
      sum = subSum
    }

    prevSum = subSum
    index++
  }

  return sum
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10)
isTrue(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17)
isTrue(maxSubarraySum([4, 2, 1, 6], 1) === 6)
isTrue(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13)
isTrue(maxSubarraySum([], 4) === null)
isTrue(maxSubarraySum([-2, -1, -1], 2) === -2)
