import { isTrue, isFalse } from "./utils/tests.js";

// functions here
function naiveStringSearch(str, pattern) {
  let count = 0;

  for (let i1 = 0; i1 < str.length; i1++) {
    for (let i2 = 0; i2 < pattern.length; i2++) {
      if (str[i1 + i2] !== pattern[i2]) break;
      if (str[i2 + i2] === pattern[i2]) continue; // this is not needed ¯\_(ツ)_/¯
      if (i2 + 1 === pattern.length) count += 1;
    }
  }

  return count;
}

// instructor solution
// function naiveSearch(long, short){
//   var count = 0;
//   for(var i = 0; i < long.length; i++){
//       for(var j = 0; j < short.length; j++){
//          if(short[j] !== long[i+j]) break;
//          if(j === short.length - 1) count++;
//       }
//   }
//   return count;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////

// tests here
isTrue(naiveStringSearch("omgzsadfomgasdf", "omg") === 2);
isTrue(naiveStringSearch("omgzsadfomgasdf", "poop") === 0);
isTrue(naiveStringSearch("lorie loled", "lol") === 1);
