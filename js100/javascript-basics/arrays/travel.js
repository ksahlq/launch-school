let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(find, array){    
  let value = false;
  array.forEach(element => {
    if (element === find) {      
      value = true;;
    } 
  });
  return value;  
}

// alternative solution
function contains2(element, list) {
  return list.indexOf(element) >= 0;
}

console.log(contains('London', destinations));
console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));
console.log(contains2('Nairobi', destinations));
console.log(contains2('Rio de Janeiro', destinations));