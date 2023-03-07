/* 
  Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  const arr = [1, 1];
  const length = arr.length;

  function completeArray(index) {
    if (index === num) return;
    const previousIndex = arr[index - 1];
    const secondPreviousIndex = arr[index - 2];
    const sum = previousIndex + secondPreviousIndex;

    arr.push(sum);
    completeArray(index + 1);
  }
  if (num > length) completeArray(2);
  const lastIndex = arr.length - 1;
  return arr[lastIndex];
}

console.log(
  fib(1) // 1
);
console.log(
  fib(2) // 1
);
console.log(
  fib(4) // 3
);
console.log(
  fib(10) // 55
);
console.log(
  fib(28) // 317811
);
console.log(
  fib(35) // 9227465
);
