/*
 * accept a sorted array and a value.
 * create to var one for left and right
 * loop
 * create a pointer in middle
 * if you find a value return the index
 * if the value is too small, move the left pointer up
 * if the value is too large, move the right pointer down
 * if never find a value return -1
 */
function binarySearch(sortedArr, value) {
  let left = 0,
    right = sortedArr.length - 1;

  if (value < sortedArr[left] || value > sortedArr[right]) return -1;

  function calculateMiddleIndex() {
    return left + Math.floor((right - left) / 2);
  }

  for (
    let m = calculateMiddleIndex();
    m < sortedArr.length - 2;
    m = calculateMiddleIndex()
  ) {
    const leftValue = sortedArr[left];
    const rightValue = sortedArr[right];
    const mValue = sortedArr[m];

    // compare three pointers with the value
    if (leftValue === value) return left;
    if (rightValue === value) return right;
    if (mValue === value) return m;

    // set new pointers positions
    if (value < mValue) {
      right = m - 1;
    } else {
      left = m + 1;
    }
  }

  return -1;
}

console.log("return value", binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log("return value", binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log("return value", binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log("return value", binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  "return value",
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  "return value",
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  "return value",
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
