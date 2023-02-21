function sumOfZero(arr = []) {
  // start two pointers
  let leftIndex = 0,
    rightIndex = arr.length - 1;

  // return the two number if equal to zero
  while (leftIndex < rightIndex) {
    const leftNumber = arr[leftIndex];
    const rightNumber = arr[rightIndex];
    const sumOfNumbers = leftNumber + rightNumber;
    if (sumOfNumbers === 0) return [leftNumber, rightNumber];
    // minus from right of add to left and check again
    else if (sumOfNumbers > 0) rightIndex--;
    else leftIndex++;
  }

  return undefined;
}

sumOfZero([-4, -2, 0, 1, 2, 3, 4]);
sumOfZero([-4, -2, 0, 1, 2, 3]);
