import { isTrue, isFalse } from "./utils/tests.js";

const averagePair = (arr, val) => {
  if(arr.length === 0 || !val ) {
    return false
  }

  let p1 = 0
  let p2 = arr.length - 1

  while (p1 < p2 ) {
    const avg = (arr[p1] + arr[p2]) / 2
    if (avg === val) {
      return true
    }

    const mirrorVal = (val * 2 - arr[p1])
    if(arr[p2] > mirrorVal) {
      p2--
    } 
    if (arr[p2] < mirrorVal) {
      p1++
    }
  }

  return false
}
 
///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(averagePair([1,2,3], 2.5))
isTrue(averagePair([1,3,3,5,6,7,10,12,19], 8))
isFalse(averagePair([-1,0,3,4,5,6], 4.1))
isFalse(averagePair([], 4))
isFalse(averagePair([], ))
