function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  return [
    arr[0].split("")[0].toUpperCase() + arr[0].slice(1),
    ...capitalizeFirst(arr.slice(1)),
  ];
}

// instructor solution

///////////////////////////////////////////////////////////////////////////////
// Tests
///////////////////////////////////////////////////////////////////////////////
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
