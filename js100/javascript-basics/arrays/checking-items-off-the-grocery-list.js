let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

function checkItems(array) {
  let count = 0;
  let length = array.length;
  while (count < length) {
    console.log(array.shift());    
    count++;
  }  
  return array
}

checkItems(groceryList);