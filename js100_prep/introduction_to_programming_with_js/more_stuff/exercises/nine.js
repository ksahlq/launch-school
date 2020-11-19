function findNegativeZero(input) {
  if (1/input === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(findNegativeZero(0));
console.log(findNegativeZero(-0));
console.log(findNegativeZero(-5));