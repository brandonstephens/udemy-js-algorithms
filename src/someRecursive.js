import { isFalse, isTrue } from "./utils/tests.js";

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, func) {
  if (arr.length === 0) return false;
  return func(arr[0]) ? true : someRecursive(arr.slice(1), func);
}

// instructor solution
// function someRecursive(array, callback) {
//   if (array.length === 0) return false;
//   if (callback(array[0])) return true;
//   return someRecursive(array.slice(1),callback);
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(someRecursive([1, 2, 3, 4], isOdd));
isTrue(someRecursive([4, 6, 8, 9], isOdd));
isFalse(someRecursive([4, 6, 8], isOdd));
isFalse(someRecursive([4, 6, 8], (val) => val > 10));
