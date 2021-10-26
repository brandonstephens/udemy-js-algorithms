import { isFalse, isTrue } from "./utils/tests.js";

function isPalindrome(str, arr = []){
  if (str.length === 0) return arr.join('') === arr.reverse().join('')
  return isPalindrome(str.split('').slice(1).join(''), [str.split('')[0], ...arr])
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isFalse(isPalindrome('awesome'))
isFalse(isPalindrome('foobar'))
isTrue(isPalindrome('tacocat'))
isTrue(isPalindrome('amanaplanacanalpanama'))
isFalse(isPalindrome('amanaplanacanalpandemonium'))
