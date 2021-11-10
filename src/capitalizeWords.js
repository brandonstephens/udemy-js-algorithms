import { isTrue, isFalse } from "./utils/tests.js";

function capitalizeWords(words, output = []) {
  return words.length === 0
    ? output
    : capitalizeWords(words.slice(1), [...output, words[0].toUpperCase()]);
}

let words = ["i", "am", "learning", "recursion"];

// instructor solution
// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length - 1)[0].toUpperCase());
//   return res;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
