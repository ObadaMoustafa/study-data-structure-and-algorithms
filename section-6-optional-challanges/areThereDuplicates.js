/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  console.log("args", args);
  const counter = {};
  for (const element of args) {
    counter[element] = ++counter[element] || 1;
    console.log(element);
    if (counter[element] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a", "b")); // true
