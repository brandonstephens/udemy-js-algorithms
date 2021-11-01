import { isFalse, isTrue } from "./utils/tests.js";

function isPalindrome(str, arr = []) {
  if (str.length === 0) return arr.join("") === arr.reverse().join("");
  return isPalindrome(str.split("").slice(1).join(""), [
    str.split("")[0],
    ...arr,
  ]);
}

// instructor solution
// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//   return false;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isFalse(isPalindrome("awesome"));
isFalse(isPalindrome("foobar"));
isTrue(isPalindrome("tacocat"));
isTrue(isPalindrome("amanaplanacanalpanama"));
isFalse(isPalindrome("amanaplanacanalpandemonium"));
