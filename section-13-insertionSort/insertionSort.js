function insertionSort(arr) {
  function swap(arr, i, ii) {
    [arr[i], arr[ii]] = [arr[ii], arr[i]];
  }
  // loop from the second index
  // loop to compare with previous
  for (let i = 1; i < arr.length; i++) {
    // console.log("new check ", i);
    let checkIndex = i;
    for (let j = i - 1; j >= 0 && arr[checkIndex] < arr[j]; j--) {
      // console.log("swap", checkIndex, j);
      swap(arr, checkIndex, j);
      checkIndex = j;
      console.log(arr);
    }
  }

  return arr;
}

console.log(insertionSort([5, 6, 2, 1, 5, 8, 10]));
console.log(insertionSort([15, 20, 1, 11, 2, 8, 8, 7, 4]));
console.log(insertionSort([45, 1, 95, 2, 15, 8, -15, 0]));
console.log(insertionSort([45, 1, 95, 2, 15, 8, -15, 94]));
