let obj = {
  num: 42,
  'property name': 'string value',
  true: false, 
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) { // this expression is never true. Remember object properties are strings
    console.log("It's true!");
  }
}