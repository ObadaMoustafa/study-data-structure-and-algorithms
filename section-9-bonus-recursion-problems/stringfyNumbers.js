function stringifyNumbers(obj) {
  const deepCopy = structuredClone(obj);
  function checkTheDeepCopy(deepCopy) {
    for (const key in deepCopy) {
      const value = deepCopy[key];
      if (typeof value === "number") deepCopy[key] = deepCopy[key].toString();
      else if (typeof value === "object") checkTheDeepCopy(value);
    }
  }

  checkTheDeepCopy(deepCopy);
  return deepCopy;
}

let obj = {
  num: 1,
  test: [1, 2, 1, 3],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
    test: { 1: 10, 2: { 1: 20 } },
  },
};

console.log(stringifyNumbers(obj));
