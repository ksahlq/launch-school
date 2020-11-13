let array1 = [1, 2, undefined, 4]; // => array.length === 4 

let array2 = [1]; 
array2.length = 5; // array2 = [1, undefined, undefined, undefined, undefined]

let array3 = []; 
array3[-1] = [1]; // => array3.length = 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // => array4.length = 3

let array5 = [];
array5[100] = 3; // => array5.length = 101