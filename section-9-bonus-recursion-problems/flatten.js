function flatten(arr2) {
  const result = [];

  function testElAndReturnNum(arr2) {
    if (!arr2.length) return;
    const isInt = Number.isInteger(arr2[0]);
    isInt ? result.push(arr2[0]) : testElAndReturnNum(arr2[0]);
    testElAndReturnNum(arr2.slice(1));
  }

  testElAndReturnNum(arr2);
  return result;
}

console.log(
  flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
);
console.log(
  flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
);
console.log(
  flatten([[1], [2], [3]]) // [1,2,3]
);
console.log(
  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
);
