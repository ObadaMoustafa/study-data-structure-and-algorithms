/* 
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

Time Complexity - O(n)

Space Complexity - O(1)
*/

function minSubArrayLen(arr = [], n) {
  //  use smallest window them go with bigger one
  // first see in the is an element is equal to or greater than the number
  // then make window of two, tree etc.
  // or return zero.
  const arrSum = sumArr(arr);
  if (arrSum < n) return 0;

  const canReturn = arr.find((e) => e >= n);
  if (canReturn) return 1;

  let windowSize = 1,
    start = 0,
    end = start + windowSize;

  const startNewWindow = () => {
    windowSize++;
    start = 0;
    end = start + windowSize;
  };

  while (windowSize < arr.length) {
    if (end > arr.length) startNewWindow();

    const windowArr = arr.slice(start, end);
    const windowSum = sumArr(windowArr);
    if (windowSum >= n) {
      return windowSize;
    }
    start++;
    end++;
    // compare it with n
  }
}

const sumArr = (arr) => arr.reduce((a, b) => a + b, 0);

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
