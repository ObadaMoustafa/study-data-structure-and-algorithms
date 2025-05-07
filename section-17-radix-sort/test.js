function getDigit(num, i) {
  // using this function may be helpful. good luck!
  const stringNum = num.toString();
  return Number(stringNum[stringNum.length - 1 - i]) || 0;
}

function digitCount(num) {
  // using this function may be helpful. good luck!
  return num.toString().length;
}

function mostDigits(nums) {
  // using this function may be helpful. good luck!
  if (!nums.length) return 0;
  const digitNumbers = nums.map((num) => digitCount(num));
  return Math.max(...digitNumbers);
}

function constructTable() {
  const table = Array.from({ length: 10 }, () => []);
  return table;
}

const flatten = (array) =>
  array.reduce(
    (flattened, elem) =>
      flattened.concat(Array.isArray(elem) ? flatten(elem) : elem),
    []
  );

function radixSort(arr) {
  // good luck!
  let rounds = mostDigits(arr);

  for (let r = 0; r <= rounds; r++) {
    let table = constructTable();
    for (let i = 0; i < arr.length; i++) {
      const tableIndex = getDigit(arr[i], r);
      table[tableIndex].push(arr[i]);
    }
    // console.log('table = ', table);

    arr = flatten(table);
    console.log('arr = ', arr);
  }

  return arr;
}
console.log(
  radixSort([8, 6, 1, 12]), // [1, 6, 8, 12]
  radixSort([10, 100, 1, 1000, 10000000]), // [1, 10, 100, 1000, 10000000]
  radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])
);
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
