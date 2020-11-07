function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); // => undefined. function returns before logging output.