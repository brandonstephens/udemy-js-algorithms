function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  return [
    arr[0].split("")[0].toUpperCase() + arr[0].slice(1),
    ...capitalizeFirst(arr.slice(1)),
  ];
}

// instructor solution
// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
