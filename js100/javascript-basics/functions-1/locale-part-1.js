function extractLanguage(locale) {  
  let langCode = locale.split('_');    
  return langCode[0];
}
console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'