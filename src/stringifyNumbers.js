import { isTrue, isFalse } from "./utils/tests.js";

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// functions here
function stringifyNumbers(obj) {
  let newObj = {};

  for (let index = 0; index < Object.keys(obj).length; index++) {
    const key = Object.keys(obj)[index];
    const value = obj[key];

    if (typeof value === "number") {
      newObj[key] = value.toString();
    } else if (typeof value === "object" && !Array.isArray(value)) {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}

// instructor solution
// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
console.log(obj);
console.log(stringifyNumbers(obj));
