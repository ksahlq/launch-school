let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let reduce = array.reduce((accumulated, element) => {
    if (element.length % 2 !== 0) {         
      accumulated.push(element.length); 
    }
    return accumulated;        
  }, []);
  return reduce;      
}

console.log(oddLengths(arr));