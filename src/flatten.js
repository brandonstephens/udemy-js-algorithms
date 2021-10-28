import { isTrue } from "./utils/tests.js";

function flatten(arr, flat = [], leftOvers = []){
  // console.log('arr', arr)
  // console.log('flat', flat)
  console.log('leftOvers', leftOvers)

  // finished
  if (arr.length === 0 && leftOvers.length === 0) return flat

  // still have left overs
  if (arr.length === 0 && leftOvers.length > 0) return flatten(leftOvers, flat)

  // still have values
  if (typeof arr[0] === 'object') {
    return flatten(arr[0], flat, arr.slice(1))
  } else {
    return flatten(arr.slice(1), [...flat, arr[0]], leftOvers)
  }
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
// isTrue(flatten([1, 2, 3, [4, 5] ]).join() === [1, 2, 3, 4, 5].join())
// isTrue(flatten([1, [2, [3, 4], [[5]]]]).join() === [1, 2, 3, 4, 5].join())
// isTrue(flatten([[1],[2],[3]]).join() === [1,2,3]).join()
// isTrue(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]).join() === [1,2,3].join())

// console.log(flatten([1, 2, 3, [4, 5] ]))
// console.log(flatten([1, [2, [3, 4], [[5]]]]))
// console.log(flatten([[1],[2],[3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))