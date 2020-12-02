const isTrue = (input) => {
  return input ? "🟢" : "🔴";
};

const isFalse = (input) => {
  return !input ? "🟢" : "🔴";
};

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

console.log(isTrue(validAnagram("", "")));
console.log(isFalse(validAnagram("aaz", "zza")));
console.log(isTrue(validAnagram("anagram", "nagaram")));
console.log(isFalse(validAnagram("rat", "car")));
console.log(
  isFalse(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"))
);
console.log(isTrue(validAnagram("qwerty", "qeywrt")));
console.log(isTrue(validAnagram("texttwisttime", "timetwisttext")));
