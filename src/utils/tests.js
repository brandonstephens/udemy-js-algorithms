const PASS = "🟢"
const FAIL = "🔴"

export const isTrue = (input) => {
  const result = input ? PASS : FAIL;
  console.log(result);
};

export const isFalse = (input) => {
  const result = !input ? PASS : FAIL;
  console.log(result);
};

export const isUndefined = (input) => {
  const result = input == undefined ? PASS : FAIL;
  console.log(result);
};

export const isEqualArray = (a1, a2) => {
  if (a1 === undefined || a2 === undefined || a1.length !== a2.length) {
    console.log(FAIL);
    return false
  }

  for (let index = 0; index < a1.length; index++) {
    if (a1[index] !== a2[index]) {
      console.log(FAIL);
      return false
    }
  }

  console.log(PASS);
  return
}
