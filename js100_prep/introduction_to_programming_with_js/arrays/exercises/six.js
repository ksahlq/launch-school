let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let oddArray = array.filter(function(element) {
    if (element.length % 2 !== 0) {      
      return element.length;
    } 
  });
  let stringsToNumbers = oddArray.map(function(element){
    if (element.length !== 0) {
      return element.length;
    }
  });  
  return stringsToNumbers;
}

console.log(oddLengths(arr));