let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
 
  myArray.forEach(function(even) {
    if (even % 2 === 0) return console.log(even);
  });
