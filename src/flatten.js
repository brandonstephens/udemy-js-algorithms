import { isTrue } from "./utils/tests.js";

// function flatten(arr, flat = [], tail = []) {
//   // console.log('arr', arr)
//   // console.log('flat', flat)
//   console.log("tail", tail);

//   // finished
//   if (arr.length === 0 && tail.length === 0) return flat;

//   // arr is empty but still have left overs
//   if (arr.length === 0 && tail.length > 0) return flatten(tail, flat);

//   // still have values
//   if (typeof arr[0] === "object") {
//     return flatten(arr[0], flat, arr.slice(1));
//   } else {
//     return flatten(arr.slice(1), [...flat, arr[0]], tail);
//   }
// }

function flatten(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index])) {
      // recurse
      newArr = [...newArr, ...flatten(arr[index])];
    } else {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// instructor solution
// function flatten(oldArr){
//   var newArr = []
//   	for(var i = 0; i < oldArr.length; i++){
//     	if(Array.isArray(oldArr[i])){
//       		newArr = newArr.concat(flatten(oldArr[i]))
//     	} else {
//       		newArr.push(oldArr[i])
//     	}
//   }
//   return newArr;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
// isTrue(flatten([1, 2, 3, [4, 5]]).join() === [1, 2, 3, 4, 5].join());
// isTrue(flatten([1, [2, [3, 4], [[5]]]]).join() === [1, 2, 3, 4, 5].join());
// isTrue(flatten([[1], [2], [3]]).join() === [1, 2, 3]).join();
// isTrue(
//   flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]).join() === [1, 2, 3].join()
// );

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
