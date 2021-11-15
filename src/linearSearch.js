import { isTrue, isFalse } from "./utils/tests.js";

// time O(n) linear

// functions here
function linearSearch(arr, val) {
  let output = -1;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === val) {
      output = index;
    }
  }

  return output;
}

// instructor solution
// function linearSearch(arr, val) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === val) return index;
//   }

//   return -1;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////

// tests here
isTrue(linearSearch([10, 15, 20, 25, 30], 15) == 1);
isTrue(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) == 5);
isTrue(linearSearch([100], 100) == 0);
isTrue(linearSearch([1, 2, 3, 4, 5], 6) == -1);
isTrue(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) == -1);
isTrue(linearSearch([100], 200) == -1);
