import { isTrue, isFalse } from "./utils/tests.js";

const makeCounts = (string) =>
  string.split("").reduce((acc, val) => {
    acc[val] ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const counts1 = makeCounts(string1);
  const counts2 = makeCounts(string2);

  for (let count in counts1) {
    if (counts1[count] !== counts2[count]) {
      return false;
    }
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
