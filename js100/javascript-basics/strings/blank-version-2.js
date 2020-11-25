function isBlank(string) {
  if (string.length === 0) {
    return true;
  } else if (string.includes(' ')) {
    return true;
  } else {
    return false;
  }
}

// alternative solution
function isBlank2(string) {
  return string.trim().length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true