function collectStrings(obj) {
  const results = [];
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") results.push(value);
    else if (typeof value === "object") results.push(collectStrings(value));
  }

  return results.flatMap((num) => num);
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
