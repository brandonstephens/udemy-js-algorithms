// Instructor Solutions
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11351738#overview

// frequency counter
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// mulitple pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// one liner
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
