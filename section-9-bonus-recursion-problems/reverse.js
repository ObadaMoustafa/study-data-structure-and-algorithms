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

reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'
