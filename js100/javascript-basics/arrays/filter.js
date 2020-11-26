let scores = [96, 47, 113, 89, 100, 102];

function hundredOrAbove(array) {
  let count = 0;
  array.forEach(element => {
    if (element >= 100) {
      count += 1;
    }
  });
  return count;
}

function getHundredOrAbove(array) {
  let count = 0;
  return array.filter(element => (element >= 100));    
}

console.log(hundredOrAbove(scores));
console.log(getHundredOrAbove(scores));