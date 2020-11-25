function capitalize(string) {
  let words = string.split(' ');
  let capitalizedWords = []
  let characters = [];
  words.forEach(element => {       
    characters = element.split('');    
    console.log(characters[0].toUpperCase());
    //console.log(words);
    //capitalizedWords.push(element.toUpperCase())       
  });    
  return capitalizedWords;
}

let sentence = 'launch school tech & talk';
//let oneWord = 'hello';
//oneWord.split('').forEach(c => console.log(c));
console.log(capitalize(sentence));