function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return;
  const word = arr[0];
  const afterCapitalize = word[0].toUpperCase() + word.slice(1);
  if (arr.length === 1) return afterCapitalize;
  return [afterCapitalize].concat(capitalizeFirst(arr.slice(1)));
}

console.log(
  capitalizeFirst(["car", "taco", "banana"]) // ['Car','Taco','Banana']
);
