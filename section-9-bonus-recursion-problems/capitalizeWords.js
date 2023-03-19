function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  const results = [];
  if (arr.length === 1) return [arr[0].toUpperCase()];
  return results.concat(arr[0].toUpperCase(), capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
