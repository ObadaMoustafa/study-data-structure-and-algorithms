function isPalindrome(str) {
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
}
isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
