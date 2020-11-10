function factorial(number) {
  let previousFactorial = 1;
  let currentFactorial = 1;
  for (let i = 1; i <= number; i += 1) {
    currentFactorial = previousFactorial * i;
    previousFactorial = currentFactorial;
  }
  return currentFactorial;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(8));

/*
Better solution:

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}
*/

function recursiveFactorial(number) {
  result = 1;
  for (let i = number; i > 0; i -= 1) {
    result *= i
  }
}