const list = {
  head: null,
  tail: null,
  length: 0,
};

function pushVal(val) {
  const newNode = { value: val, next: null };
  const firstValue = list.length === 0;
  if (firstValue) {
    console.log("is first value");
    list.head = newNode;
    list.tail = newNode;
  } else {
    console.log("else");
    list.tail.next = newNode;
    list.tail = newNode;
  }
  list.length++;
}
pushVal(5);
pushVal(6);
pushVal(1);
pushVal(7);

console.log(list);
