/* 
function countUniqueValues (arr = []){
    // make array of unique Values to return it's length.
    const uniqueValues = []

    // check if the number in the array (skip or push)
    arr.forEach(num => {
        const isUnique = !uniqueValues.includes(num);
        if (isUnique) uniqueValues.push(num);
    })

    return uniqueValues.length
}

*/

function countUniqueValues(arr = []) {
  // I have sorted array
  // I check two numbers
  if (!arr.length) return 0;
  const uniqueValues = [];
  let leftPointer = 0,
    rightPointer = 1;
  const lastIndex = arr.length - 1;

  while (rightPointer <= lastIndex) {
    const leftNumber = arr[leftPointer];
    const rightNumber = arr[rightPointer];
    const isMatch = leftNumber === rightNumber;

    // in the last index I push both if not similar and push only left if similar
    if (rightPointer === lastIndex) {
      if (!isMatch) uniqueValues.push(leftNumber, rightNumber);
      else uniqueValues.push(leftNumber);
    } else {
      if (!isMatch) uniqueValues.push(leftNumber);
    }
    leftPointer++;
    rightPointer++;
    // generally if match I skip if not I push the first one (always push the left one)
  }

  // return how many Values
  return uniqueValues.length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
