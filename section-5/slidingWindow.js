function slidingWindow(arr = [], n) {
  if (arr.length < n) return null;
  if (n === 1) return Math.max(...arr);
  // make a window from 0 to n-1 index
  // sum the values and save the number in results for the first time
  // ++ the two edges and increment the right one and decrement the old one.
  let max = -Infinity;
  let temp;
  for (
    let leftEdge = 0, rightEdge = n - 1;
    rightEdge < arr.length;
    leftEdge++, rightEdge++
  ) {
    if (leftEdge === 0) {
      const firstWindow = arr.slice(leftEdge, n);
      temp = firstWindow.reduce((a, b) => a + b, 0);
    } else {
      const prevFirstNum = arr[leftEdge - 1];
      const presentLastNumber = arr[rightEdge];
      temp = max - prevFirstNum + presentLastNumber;
    }

    if (temp > max) max = temp;
  }

  return max;
}

console.log(slidingWindow([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(slidingWindow([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(slidingWindow([4, 2, 1, 6], 1)); // 6
console.log(slidingWindow([4, 2, 1, 6, 2], 4)); // 13
console.log(slidingWindow([], 4)); // null
