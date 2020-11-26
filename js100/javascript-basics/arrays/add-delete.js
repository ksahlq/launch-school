let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

function addAndDelete(array) {  
  array.shift();
  array.push('geothermal');
  return array;
}

console.log(addAndDelete(energy));
