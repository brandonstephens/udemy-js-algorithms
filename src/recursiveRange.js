import { isTrue } from "./utils/tests.js";

function recursiveRange(val){
  if (val === 0) return 0
  return val + recursiveRange(val - 1)
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(recursiveRange(6) === 21)
isTrue(recursiveRange(10) === 55)
