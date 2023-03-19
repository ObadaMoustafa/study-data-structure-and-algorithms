function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 1) return [arr[0].toUpperCase()];
  return [arr[0].toUpperCase(), capitalizeWords(arr.slice(1))].flatMap(
    (num) => num
  );
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
