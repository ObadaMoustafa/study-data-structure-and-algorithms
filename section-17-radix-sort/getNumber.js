function getNumber(num, i) {
  const stringNum = num.toString();
  return Number(stringNum[stringNum.length - 1 - i]) || 0;
}

function digitCount(num) {
  return num.toString().length;
}

function getMaxDigit(arrOfNumbers) {
  const digitNumbers = arrOfNumbers.map((num) => digitCount(num));
  return Math.max(...digitNumbers);
}

function constructTable() {
  const table = Array.from({ length: 10 }, () => []);
  return table;
}

function radixSort(arr) {
  let rounds = getMaxDigit(arr);

  for (let r = 0; r <= rounds; r++) {
    let table = constructTable();
    for (let i = 0; i < arr.length; i++) {
      const tableIndex = getNumber(arr[i], r);
      table[tableIndex].push(arr[i]);
    }

    arr = flat(table);
  }

  return arr;
}

console.log(
  radixSort([
    5622, 3221, 9420, 2020, 82, 9680, 1, 10, 4793, 743, 577, 7, 4127, 3138,
    2599,
  ])
);
