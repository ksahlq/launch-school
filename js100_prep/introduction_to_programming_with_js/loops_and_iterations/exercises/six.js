function factorial(number) {
  let result = 1;
  if (number === 0) {
    return result;
  } else {
    return number * recursive(number - 1);
  }
}

console.log(recursive(0));
console.log(recursive(5));
console.log(recursive(6));
console.log(recursive(7));