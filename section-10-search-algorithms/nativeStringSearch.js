function nativeSearch(str, pattern) {
  const lengthToSearch = pattern.length;
  let counter = 0;
  let isMatch = false;
  for (let i = 0; i < str.length - lengthToSearch + 1; i++, isMatch = false) {
    if (str[i] !== pattern[0]) continue;
    for (let x = 1; x < lengthToSearch; x++, i++) {
      console.log("i from inner for loop " + i);
      if (pattern[x] !== str[i + 1]) {
        isMatch = false;
        break;
      }
      console.log(pattern[x], str[i + 1]);
      isMatch = true;
    }
    if (isMatch) counter++;
  }

  return counter;
}

console.log(nativeSearch("omhkjgom isdfomghhgomg", "omg"));
