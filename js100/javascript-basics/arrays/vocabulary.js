let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function printArray(array) {
  array.forEach(element => element.forEach(innerElement => {
    console.log(innerElement);
  }));
}

// alternative solution
function printArray2(array) {
  for (let subArray of array) {
    subArray.forEach(innerElement => console.log(innerElement));
  }
}

printArray(vocabulary);
printArray2(vocabulary);