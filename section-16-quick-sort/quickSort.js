function swapArr(arr, swapI, swapII) {
  const temp = arr[swapI];
  arr[swapI] = arr[swapII];
  arr[swapII] = temp;
}
function pivotHelper(arr, start = 0, end = arr.length) {
  if (arr.length === 1) return arr;
  let pivotIndex = start,
    checker = start + 1;

  while (checker < end) {
    if (arr[checker] <= arr[start]) {
      pivotIndex++;
      if (checker !== pivotIndex) {
        swapArr(arr, checker, pivotIndex);
      }
    }
    checker++;
  }

  swapArr(arr, start, pivotIndex);
  // return the number or smaller element
  // the same as returning where should the pivot index be
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    const pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([1, 2, 3, 4, 5, 6]));
console.log(quickSort([5, 2, 10, 4, 3, 1, 9]));
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(quickSort([19, 2, 43, 34, 28, 19, 5, 18, 27, 25, 24]));
console.log(quickSort([4, 6, 9, 1, 2, 5]));
