import { isTrue, isFalse } from "./utils/tests.js";

// instructor solution
const isSubsequence = (str1, str2) => {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//instructor solution - recursive
const isSubsequenceRecursive = (str1, str2) => {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}



///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(isSubsequence('hello', 'hello world'))
isTrue(isSubsequence('sing', 'sting'))
isTrue(isSubsequence('abc', 'abracadabra'))
isFalse(isSubsequence('abc', 'acb'))
