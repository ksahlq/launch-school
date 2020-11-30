function removeLastChar(string) {
  let remove = string.split('');
  remove.pop();
  return remove.join('');  
}

//alternative solution

function removeLastChar2(string) {
  return string.substring(0, string.length - 1);
}

console.log(removeLastChar('ciao'));
console.log(removeLastChar('hello'));

console.log(removeLastChar2('greeting'));