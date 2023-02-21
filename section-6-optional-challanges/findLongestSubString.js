/* 
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

Time Complexity - O(n)
*/
function findLongestSubstring(str) {
  // will use a counter object
  // loop until I find the same property
  // when find the same property I return the length to results
  // start new loop from duplicated letter
  // see if the lenght - new letter < max => return max
  //  return the max number of results

  const counter = {};
  let max = 0;
  const i = 0;

  for (let j = i + 1, temp = 2; str.length - i > max; j++, temp++) {
    // if the property found
    if (counter[str[j]] > 0) {
      i = counter[str[j].index] + 1;
    }
  }
}
// console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6
// console.log(findLongestSubstring("bcadefghijklmnoa")); // 6
