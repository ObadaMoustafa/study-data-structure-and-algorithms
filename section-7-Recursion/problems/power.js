/* 
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

/* function power(x, y) {
  if (y === 0) return 1;
  let result = x;
  function xBYy(round) {
    if (round === 1) return;
    result = result * x;
    xBYy(round - 1);
  }
  xBYy(y);

  return result;
} */
function power(x, y) {
  if (y === 0) return 1;

  return x * power(x, y - 1);
}

console.log(power(-2, 0));
console.log(power(-2, 1));
console.log(power(-2, 2));
console.log(power(-2, 3));
console.log(power(-2, 4));
console.log(Math.pow(-2, 3));
