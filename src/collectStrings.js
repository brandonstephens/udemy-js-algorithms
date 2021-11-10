import { isTrue, isFalse } from "./utils/tests.js";

// functions here
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj, result = []) {
  let values = Object.values(obj);

  for (let index = 0; index < values.length; index++) {
    let value = values[index];

    if (typeof value === "string") {
      result.push(value);
    }

    if (typeof value === "object") {
      collectStrings(value, result);
    }
  }
  return result;
}

// instructor solution

// function collectStrings(obj) {
//   var stringsArr = [];
//   for(var key in obj) {
//       if(typeof obj[key] === 'string') {
//           stringsArr.push(obj[key]);
//       }
//       else if(typeof obj[key] === 'object') {
//           stringsArr = stringsArr.concat(collectStrings(obj[key]));
//       }
//   }

//   return stringsArr;
// }

// function collectStrings(obj) {
//   var stringsArr = [];

//   function gatherStrings(o) {
//       for(var key in o) {
//           if(typeof o[key] === 'string') {
//               stringsArr.push(o[key]);
//           }
//           else if(typeof o[key] === 'object') {
//               return gatherStrings(o[key]);
//           }
//       }
//   }

//   gatherStrings(obj);

//   return stringsArr;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
