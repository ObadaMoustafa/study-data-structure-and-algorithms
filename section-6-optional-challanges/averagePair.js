/* 
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

*/

function averagePair(arr, average) {
  // two pointers patterns
  let pointer = 0,
    j = 1;
  while (j < arr.length && pointer < arr.length - 1) {
    // compare pointer with all j cases and see the average
    // if found a good pair return true
    // if couldn't increase j
    // if j in last index increase pointer
    if (arr[pointer] + arr[j] / 2 === average) return true;
    if (j === arr.length - 1) {
      pointer++;
      j = pointer + 1;
    }
    j++;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
