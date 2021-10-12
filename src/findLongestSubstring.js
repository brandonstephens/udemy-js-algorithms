import { isTrue } from "./utils/tests.js";

// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#overview

const findLongestSubstring = (str) => {  
  const arr = str.split('')
  let longest = 0
  let subStr = []

  for (let index = 0; index < arr.length; index++) {
    // console.log(`enter: ${subStr}`)
    if (subStr.includes(arr[index])) {
      // set longest value so far
      longest = longest > subStr.length ? longest : subStr.length
      
      // find the index of val in substr & trim substr to that index
      subStr = subStr.slice(subStr.indexOf(arr[index]) + 1)
      
      // add the new value
      subStr.push(arr[index])
    } else {
      subStr.push(arr[index])
    }
    // console.log(`exit: ${subStr}`)
  }
  return longest > subStr.length ? longest : subStr.length;
}

// instructor solution

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(findLongestSubstring('') === 0)
isTrue(findLongestSubstring('rithmschool') === 7)
isTrue(findLongestSubstring('thisisawesome') === 6)
isTrue(findLongestSubstring('thecatinthehat') === 7)
isTrue(findLongestSubstring('bbbbbb') === 1)
isTrue(findLongestSubstring('longestsubstring') === 8)
isTrue(findLongestSubstring('thisishowwedoit') === 6)
