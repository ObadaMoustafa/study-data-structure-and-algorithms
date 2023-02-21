function insertionSort(arr) {
  // console.log("-------------------------");
  // console.log("array", arr);
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([5, 6, 2, 1, 5, 8, 10]));
console.log(insertionSort([15, 20, 1, 11, 2, 8, 8, 7, 4]));
console.log(insertionSort([45, 1, 95, 2, 15, 8, -15, 0]));
console.log(insertionSort([45, 1, 95, 2, 15, 8, -15, 94]));
