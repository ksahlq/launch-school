let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // => foo = 'bar'. Declared foo within braces is not reckognizable. 