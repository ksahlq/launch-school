function repeat(times, string) {
  let repeat = "";
  for (let i = 0; i < times; i += 1) {
    repeat += string;    
  }  
  return repeat;
}

console.log(repeat(3, 'ha'));