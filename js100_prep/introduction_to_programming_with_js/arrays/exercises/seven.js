let arr = [3, 5, 7];

function sumOfSquares(array) {
  let reduce = array.reduce((accumulator, element) => accumulator + (element * element), 0);
  return reduce;
}

console.log(sumOfSquares(arr));