let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

console.log(myObj);

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}
/* 
* Snippet1: It iterates through only myObj keys => qux
* Snippet2: for in loops throgh not only myObj properties, but also it's prototype => qux, foo, bar
* In other words, the output won't be the same. 
*/