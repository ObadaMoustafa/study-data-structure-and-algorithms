/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
 */
function maxSubarraySum(arr, n) {
  // loop and find the max
  // in the new increment the right and decrement the left number (first element in last sub-array)
  if (n > arr.length) return null;
  if (n === arr.length) return sumArr(arr);

  let max = -Infinity;
  let i = 0;
  const subArray = arr.slice(0, n);
  let sum = sumArr(subArray);
  if (sum > max) max = sum;
  for (let j = n; j < arr.length; j++, i++) {
    console.log(`sum ${sum} - ${arr[i]} + ${arr[j]}`);
    sum = sum - arr[i] + arr[j];
    console.log(`= ${sum}`);
    if (sum > max) max = sum;
  }

  return max;
}

function sumArr(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
