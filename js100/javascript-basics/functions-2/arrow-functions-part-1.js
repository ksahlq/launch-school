const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}
console.log(sentence('like', 'birds'));

// arrow function
let sent = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);

console.log(sent('like', 'birds'));