import { isTrue } from "./utils/tests.js";

function factorial(val){
  if (val === 0) return 1
  return val * factorial(val - 1)
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(factorial(0) === 1)
isTrue(factorial(1) === 1)
isTrue(factorial(2) === 2)
isTrue(factorial(4) === 24)
isTrue(factorial(7) === 5040)
