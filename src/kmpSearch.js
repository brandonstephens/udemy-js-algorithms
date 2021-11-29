#! node

import { isTrue, isFalse } from "./utils/tests.js";

// this method makes a look up table to let you skip patterns that contain suffix and prefix match
// still seems broken if the search pattern is length < 2

function makePrefixTable(pattern) {
  let table = [0, 0];
  let longest = 0;

  for (let index = 2; index < pattern.length; index++) {
    while (longest > 0 && pattern[longest] !== pattern[index]) {
      longest = table[longest];
    }

    if (pattern[longest] === pattern[index]) {
      longest = longest + 1;
    }

    table[index] = longest || 0;
  }

  return table;
}

// functions here
function kmpSearch(str, pattern) {
  let count = 0;
  let longest = 0;
  let prefixTable = makePrefixTable(str);

  for (let index = 1; index < str.length; index++) {
    // console.log(longest, pattern.length, index);
    while (longest > 0 && pattern[longest + 1] !== str[index]) {
      longest = prefixTable[longest];
    }

    if (pattern[longest + 1] === str[index]) {
      longest = longest + 1;
    }

    if (longest + 1 === pattern.length) {
      count += 1;
      longest = prefixTable[longest];
    }
  }

  console.log(count);
  return count;
}

// instructor solution
// this video had been removed from udemy so went with
// https://www.youtube.com/watch?v=5i7oKodCRJo

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////

isTrue(kmpSearch("acacagt", "ac") === 2);
isTrue(kmpSearch("atag", "a") === 2);
isTrue(kmpSearch("omgzsadfomgasdf", "omg") === 2);
isTrue(kmpSearch("omgzsadfomgasdf", "poop") === 0);
isTrue(kmpSearch("lorie loled", "lol") === 1);
