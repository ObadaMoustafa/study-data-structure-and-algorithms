/* function isPalindrome(str) {
  console.log(str === reverse(str));
  return str === reverse(str);
}

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  const word = str;
  const result = [];
  function takeFirstLetter(word) {
    const wordLength = word.length;
    if (!wordLength) return;

    result.unshift(word[0]);
    takeFirstLetter(word.slice(1));
  }

  takeFirstLetter(word);
  return result.join("");
} */

function isPalindrome(str) {
  const length = str.length;
  if (length === 1) return true;
  if (length === 2) return str[0] === str[1];
  if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(
  isPalindrome("awesome") // false
);
console.log(
  isPalindrome("foobar") // false
);
console.log(
  isPalindrome("tacocat") // true
);
console.log(
  isPalindrome("amanaplanacanalpanama") // true
);
console.log(
  isPalindrome("amanaplanacanalpandemonium") // false
);
