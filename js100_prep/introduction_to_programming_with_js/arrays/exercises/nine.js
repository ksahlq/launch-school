let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


function checkIfNumberThree(array) {
  let value = false;  
  array.forEach(element => {
    if (element === 3) {
      return value = true;
    }    
  });
  return value;  
}

console.log(checkIfNumberThree(numbers1));
console.log(checkIfNumberThree(numbers2));
console.log(checkIfNumberThree(numbers3));

// can also use includes() method

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));