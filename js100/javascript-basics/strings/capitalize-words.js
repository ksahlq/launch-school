function capitalize(string) {  
  let words = string.split(' ');  
  let capitalizedWords = [];
  words.forEach(word => {    
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));    
  })
  return capitalizedWords.join(' ');
}

let sentence = 'launch school tech & talk';

console.log(capitalize(sentence));