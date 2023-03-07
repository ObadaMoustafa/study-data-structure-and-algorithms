/* 
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

Time Complexity - O(n)
*/
/* function findLongestSubstring(str) {
  // will use a counter object
  // loop until I find the same property
  // when find the same property I return the length to results
  // start new loop from duplicated letter
  // see if the lenght - new letter < max => return max
  //  return the max number of results
  if (!str.length) return 0;
  let counter = { [str[0]]: { count: 1, index: 0 } };
  let max = 0;
  let i = 0;
  for (let j = i + 1; str.length - i > max && j < str.length; j++) {
    // initialize letter object > count property
    if (!counter[str[j]]) counter[str[j]] = {};

    counter[str[j]].count = ++counter[str[j]].count || 1;

    const isLastIndex = j === str.length - 1;
    const isFound = counter[str[j]].count > 1;
    // if the property found before
    if (isFound) {
      const windowLength = j - i;
      max = Math.max(max, windowLength);
      i = counter[str[j]].index + 1;
      j = i;
      counter = { [str[i]]: { count: 1, index: i } };
      continue;
    }

    // not found and last index
    if (!isFound && isLastIndex) {
      const windowLength = str.length - i;
      max = Math.max(max, windowLength);
    }
    counter[str[j]].index = j;
  }

  return max;
} */
function findLongestSubstring(str) {
  let max = 0,
    letters = {},
    start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // check if the letter found before
    // change the max
    // put the index of the number +1
    const letterIndex = letters[char];
    if (letterIndex) start = Math.max(letterIndex, start);

    const currentWindowLength = i - start + 1;
    max = Math.max(max, currentWindowLength);
    letters[char] = i + 1;

    // console.table({ char, start, letterIndex, max, letters });
  }

  return max;
}
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
console.log(findLongestSubstring("bcadefghijklmnoa")); // 15
