/* function productOfArray(arr) {
  let result = 1;
  function resultByFirstElement(arr) {
    if (!arr.length) return;

    result = result * arr[0];
    resultByFirstElement(arr.slice(1));
  }
  resultByFirstElement(arr);
  return result;
} */
function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(
  productOfArray([1, 2, 3]) // 6
);
console.log(
  productOfArray([1, 2, 3, 10]) // 60
);
