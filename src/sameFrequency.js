import { isTrue, isFalse } from "./utils/tests.js";

// functions here
const sameFrequency = (v1,v2) => {
  if(v1.toString().length !== v2.toString().length) {
    return false
  }

  let numbs = v1.toString().split('').reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1
    return acc
  }, {})
  
  let numbs2 = v2.toString().split('')
  
  let i = 0
  while (i <= numbs2.length - 1) {
    if(numbs[numbs2[i]] === undefined) {
      return false
    } 

    numbs[numbs2[i]] = numbs[numbs2[i]] - 1    
    i++
  }

  return Object.values(numbs).reduce((acc, val) => {
    return acc + val
  }, 0) === 0
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(sameFrequency(182,281))
isFalse(sameFrequency(34,14))
isTrue(sameFrequency(3589578,5879385))
isFalse(sameFrequency(22,222))
isTrue(sameFrequency(3333333,3333333))
