function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const lettersCounter = {};

  // loop to every letter and count it in the str1
  for (const letter of str1) {
    lettersCounter[letter] = ++lettersCounter[letter] || 1;
  }

  for (const letter of str2) {
    if (!lettersCounter[letter]) return false;
    lettersCounter[letter]--;
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false)
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
