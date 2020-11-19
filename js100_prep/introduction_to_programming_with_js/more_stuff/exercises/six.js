let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(input, search) {
  let matches = [];
  input.forEach(element => {
    if (search.test(element)) {
      matches.push(element);    
    }
  });
  return matches;
}

console.log(allMatches(words, /lab/));