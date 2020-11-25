function isBlank(string) {
  return string === '';  
}

//alternative solution
function isblank2(string) {
  return string.length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true