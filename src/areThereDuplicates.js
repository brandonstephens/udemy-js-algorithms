import { isTrue, isFalse } from "./utils/tests.js";

// functions here
const areThereDuplicates = (...args) => {
 let i = 0
 let obj = {}

 while (i <= args.length - 1) {
   if(obj[args[i]]) {
     return true
   }

   obj[args[i]] = 1
   i++
 }

  return false
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isFalse(areThereDuplicates(1,2,3))
isTrue(areThereDuplicates(1,2,2))
isTrue(areThereDuplicates('a', 'b', 'c', 'a'))
