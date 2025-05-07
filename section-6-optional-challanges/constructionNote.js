function constructNote(text1 = '', text2 = '') {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < text1.length; i++) {
    let index = text2.indexOf(text1[i]);
    if (index !== -1) text2 = text2.replace(text1[i], '');
    else return false;
    console.log(text2);
  }
  return true;
}

console.log(
  constructNote('aa', 'abc'), // false
  constructNote('abc', 'dcba'), // true
  constructNote('aabbcc', 'bcabcaddff') // true
);
