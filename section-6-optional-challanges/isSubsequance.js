/* 
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/
function isSubsequence(str1, str2) {
  // will use two pointers pattern
  // with first pointer is about fixed index for the last letter has been found
  // the second pointer is to find the letter itself only after the first pointer

  let searchLetter = 0,
    searchPointer = 0;
  while (searchPointer < str2.length) {
    const isEqual = str1[searchLetter] === str2[searchPointer];
    if (isEqual) searchLetter++;
    if (searchLetter === str1.length) return true;

    searchPointer++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
