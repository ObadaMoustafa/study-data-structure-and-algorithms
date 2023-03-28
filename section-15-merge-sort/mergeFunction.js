/* function mergeTwoSortedArrays(arr1, arr2) {
  const result = [];
  let j = 0;
  for (let i = 0; i < arr1.length || j < arr2.length; i++) {
    // console.log("...new round");
    // console.table({ value1: arr1[i], value2: arr2[j] });
    if (!arr1[i]) {
      result.push(...arr2.slice(j));
      break;
    }

    if (!arr2[j]) {
      result.push(...arr1.slice(i));
      break;
    }

    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
    } else {
      result.push(arr2[j]);
      j++;
      i--;
    }
  }
  return result;
} */

function mergeTwoSortedArrays(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
  const results = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    console.table({ left: arr1[i], right: arr2[j] });
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  const willPush = !arr1[i]
    ? arr2.slice(j)
    : !arr2[j]
    ? arr1.slice(i)
    : "nothing";

  console.log("finish & gonna push the rest to results", willPush);
  if (!arr1[i]) results.push(...arr2.slice(j));
  if (!arr2[j]) results.push(...arr1.slice(i));

  return results;
}

function mergeSort(arr) {
  const arrays = [];
}
console.log(mergeTwoSortedArrays([1, 2, 3], [4, 5, 6, 8, 22]));
console.log(mergeTwoSortedArrays([2, 4, 10, 55, 60], [1, 5, 22]));
console.log(mergeTwoSortedArrays([1, 35, 50], [5, 33, 55]));
console.log(mergeTwoSortedArrays([1, 3, 4, 6, 10, 11], [5]));
console.log(mergeTwoSortedArrays([5], [1]));
console.log(mergeTwoSortedArrays([], [1]));
