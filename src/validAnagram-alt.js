import { isTrue, isFalse } from "./utils/tests.js";

// Variation to the solution the instructor gave
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816156#overview
const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  let count = {};

  for (let char of string1) {
    count[char] ? (count[char] += 1) : (count[char] = 1);
  }

  for (let char of string2) {
    if (!count[char]) {
      return false;
    }

    count[char] -= 1;
  }

  return true;
};

// Tests
isTrue(validAnagram("", ""));
isFalse(validAnagram("aaz", "zza"));
isTrue(validAnagram("anagram", "nagaram"));
isFalse(validAnagram("rat", "car"));
isFalse(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
isTrue(validAnagram("qwerty", "qeywrt"));
isTrue(validAnagram("texttwisttime", "timetwisttext"));
