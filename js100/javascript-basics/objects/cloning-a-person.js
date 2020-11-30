function clone(obj) {
  let returnObj = Object.assign({}, obj);
  return returnObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;
person.name.isStageName = false;

console.log(person.age);
console.log(clonedPerson.age);