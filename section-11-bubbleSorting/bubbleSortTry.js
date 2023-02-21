function bubbleSort(arr) {
  // compare two numbers
  // positive ? increase index
  // negative ? swap and continue
  for (let round = 1; round < arr.length; round++) {
    let noSwap = true;
    for (let i = 0; i < arr.length - round; i++) {
      console.log(arr, arr[i], arr[i + 1]);
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        noSwap = false;
      }
    }
    console.log("------------------------");
    if (noSwap) {
      console.log("noswap");
      break;
    }
  }

  return arr;
}

function swap(arr, i, ii) {
  [arr[i], arr[ii]] = [arr[ii], arr[i]];
}
console.log(bubbleSort([5, 3, 4, 1, 2]));
console.log(bubbleSort([1, 4, 2, 5, 3]));
console.log(bubbleSort([-37, 45, 29, 8]));
console.log(bubbleSort([8, 3, 1, 2, 4, 5, 6, 7]));
