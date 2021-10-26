import { isTrue } from "./utils/tests.js";

function productOfArray(arr){
  console.log(arr.length)
  if (arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(productOfArray([1,2,3]) === 6)
isTrue(productOfArray([1,2,3,10]) === 60)
