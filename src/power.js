import { isTrue } from "./utils/tests.js";

function power(base, exp){
  if (exp === 0) return 1
  return base * power(base, exp - 1)
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(power(2,0) === 1)
isTrue(power(2,2) === 4)
isTrue(power(2,4) === 16)
isTrue(power(2,6) === 64)
