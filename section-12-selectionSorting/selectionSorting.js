function selectionSort(arr) {
  // get the smallest value with it's index
  // swap with the first index and increase it

  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIndex = i;
    console.log("index", i, "----------");
    let shouldSwap = false;
    for (let j = i + 1; j < arr.length; j++) {
      // set the index of the current smallest number
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
        shouldSwap = true;
      }
    }
    if (shouldSwap) {
      console.log(i, smallestIndex);
      swap(arr, i, smallestIndex);
    }
    console.log("result", arr);
  }

  return arr;
}

function swap(arr, i, ii) {
  [arr[i], arr[ii]] = [arr[ii], arr[i]];
}

console.log(selectionSort([1, 22, 3, 9, 4, 10, 12, 8]));
