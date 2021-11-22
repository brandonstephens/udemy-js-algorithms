import { isTrue, isFalse } from "./utils/tests.js";

// function binarySearch(arr, val, lp = 0, rp = arr.length - 1) {
//   let middle = Math.floor(arr.length);

//   while (lp < rp) {
//     console.log(lp, rp);
//     middle = lp + (lp - rp) / 2;
//     if (arr[middle] === val) {
//       return middle;
//     } else if (arr[middle < val]) {
//       lp = middle + 1;
//     } else {
//       rp = middle - 1;
//     }
//   }

//   return -1;
// }

// instructor solution
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(binarySearch([1, 2, 3, 4, 5], 2) === 1);
isTrue(binarySearch([1, 2, 3, 4, 5], 3) === 2);
isTrue(binarySearch([1, 2, 3, 4, 5], 5) === 4);
isTrue(binarySearch([1, 2, 3, 4, 5], 6) === -1);
isTrue(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      88,
    ],
    10
  ) === 2
);
isTrue(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      88,
    ],
    95
  ) === 16
);
isTrue(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      88,
    ],
    100
  ) === -1
);
