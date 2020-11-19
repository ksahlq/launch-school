function isNotAnumber(value) {
  return value !== value;
}

console.log(isNotAnumber('blubber'));
console.log(isNotAnumber(555));
console.log(isNotAnumber());
console.log(isNotAnumber(NaN));