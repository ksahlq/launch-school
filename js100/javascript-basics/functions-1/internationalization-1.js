function greet(languageCode) {
  switch (languageCode) {
    case 'en':
      console.log('Hi!'); // can use return instead of printing to console. This way we won't need a break after each statement
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
    case 'af':
      console.log('Haai!');
    default:
      break;
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'