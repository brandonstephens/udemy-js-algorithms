import { isTrue, isFalse } from "./utils/tests.js";

const isSubsequence = (str1, str2) => {
  const arr1 = str1.split('')
  const arr2 = str2.split('')
  
  let output = false
  let count1 = 0
  let count2 = 0
  
  while (count2 < arr2.length) {
    if(count1 >= arr1.length) {
      output = true
      break
    } else if(arr1[count1] === arr2[count2]) {
      count1++
    } else {
      count2++
    }
  }

  return output
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(isSubsequence('hello', 'hello world'))
isTrue(isSubsequence('sing', 'sting'))
isTrue(isSubsequence('abc', 'abracadabra'))
isFalse(isSubsequence('abc', 'acb'))
