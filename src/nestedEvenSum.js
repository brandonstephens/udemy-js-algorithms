import { isTrue, isFalse } from "./utils/tests.js";

function nestedEvenSum(obj, result = []) {
  let values = Object.values(obj);

  for (let index = 0; index < values.length; index++) {
    if (typeof values[index] === "number") {
      result.push(values[index] % 2 === 0 ? values[index] : 0);
    }

    if (typeof values[index] === "object") {
      nestedEvenSum(values[index], result);
    }
  }

  return result.reduce((acc, val) => acc + val, 0);
}

// instructor solution
// function nestedEvenSum (obj, sum=0) {
//   for (var key in obj) {
//       if (typeof obj[key] === 'object'){
//           sum += nestedEvenSum(obj[key]);
//       } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//           sum += obj[key];
//       }
//   }
//   return sum;
// }

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));

// isTrue(nestedEvenSum(obj1) === 6);
// isTrue(nestedEvenSum(obj2) === 10);
