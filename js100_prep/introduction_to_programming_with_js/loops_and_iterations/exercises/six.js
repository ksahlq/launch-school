function factorial(number) {
  let result = 1;
  if (number === 0) {
    return result;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));

