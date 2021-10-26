import { isTrue } from "./utils/tests.js";

function fib(place, current = 1, prev = 0){
  if (place === 1) return current
  return fib(place - 1, current + prev, current)
}

// instructor solution
// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(fib(4) === 3)
isTrue(fib(10) === 55)
isTrue(fib(28) === 317811)
isTrue(fib(35) === 9227465)
