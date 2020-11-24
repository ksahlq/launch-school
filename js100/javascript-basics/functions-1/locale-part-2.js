function extractRegion(locale) {
  let localeSplit = locale.split('_');
  let region;
  localeSplit.forEach(element => {
    region = element.split('.')    
  });
  return region[0];
}

// more smooth function using method chaining
function extractRegion2(locale) {
  return locale.split('.')[0]
  .split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

console.log(extractRegion2('en_US.UTF-8'));