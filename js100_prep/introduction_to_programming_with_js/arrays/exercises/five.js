let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  let integers = array.filter(function(element) {
    if (Number.isInteger(element)) {
      return element;
    }
  });     
  return integers;
}
console.log(findIntegers(things));

// more compact solution:
function findIntegers2(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}