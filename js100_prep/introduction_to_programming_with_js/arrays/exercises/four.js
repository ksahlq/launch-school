let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let mapedArray = myArray.map(function(value) {
  if (value % 2 == 0) {
    return 'even';
  }
  return 'odd';
})

console.log(mapedArray);
