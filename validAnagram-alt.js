const isTrue = (input) => {
  return input ? "🟢" : "🔴";
};

const isFalse = (input) => {
  return !input ? "🟢" : "🔴";
};

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

console.log(isTrue(validAnagram("", "")));
console.log(isFalse(validAnagram("aaz", "zza")));
console.log(isTrue(validAnagram("anagram", "nagaram")));
console.log(isFalse(validAnagram("rat", "car")));
console.log(
  isFalse(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"))
);
console.log(isTrue(validAnagram("qwerty", "qeywrt")));
console.log(isTrue(validAnagram("texttwisttime", "timetwisttext")));
