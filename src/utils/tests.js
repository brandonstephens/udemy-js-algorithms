export const isTrue = (input) => {
  const result = input ? "🟢" : "🔴";
  console.log(result);
};

export const isFalse = (input) => {
  const result = !input ? "🟢" : "🔴";
  console.log(result);
};
