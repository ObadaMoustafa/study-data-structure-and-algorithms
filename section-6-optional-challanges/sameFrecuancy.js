function sameFrequency(n1, n2) {
  // change the number to string
  n1 = n1.toString();
  n2 = n2.toString();

  if (n1.length !== n2.length) {
    return false;
  }

  // good luck. Add any arguments you deem necessary.
  // use counter object
  const counter = {};
  // compare it with the second number
  for (const int of n1) {
    counter[int] = ++counter[int] || 1;
  }

  for (const int2 of n2) {
    if (!counter[int2]) {
      return false;
    }
    counter[int2]--;
  }

  return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
