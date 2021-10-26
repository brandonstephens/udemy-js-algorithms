import { isTrue } from "./utils/tests.js";

function reverse(str, arr = []){
  if (str.length === 0) return arr.join('')
  return reverse(str.split('').slice(1).join(''), [str.split('')[0], ...arr])
}

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
isTrue(reverse('awesome') == 'emosewa')
isTrue(reverse('rithmschool') == 'loohcsmhtir')
