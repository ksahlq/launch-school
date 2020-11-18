let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let upperKeys = [];

objKeys.forEach((key) => upperKeys.push(key.toUpperCase()));

console.log(upperKeys);
console.log(obj);
