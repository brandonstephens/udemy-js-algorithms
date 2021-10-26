import { isTrue } from "./utils/tests.js";

function flatten(arr, newArr = []){
  console.log(newArr)
  let foo = newArr
  if (arr.length === 0) return newArr
  if (typeof arr[0] !== 'object') {
    foo = [arr[0], ...newArr]
  }
  return flatten(arr.slice(1), foo)
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(flatten([1, 2, 3, [4, 5] ]).join() === [1, 2, 3, 4, 5].join())
isTrue(flatten([1, [2, [3, 4], [[5]]]]).join() === [1, 2, 3, 4, 5].join())
isTrue(flatten([[1],[2],[3]]).join() === [1,2,3]).join()
isTrue(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]).join() === [1,2,3].join())
