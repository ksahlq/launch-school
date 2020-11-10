let counter = 0;

while (counter = 1) { // Because this assignment inside the conditional while loop sets counter always to 1. 
  console.log(counter); // => Counter is printet out to console as 1.
  counter += 1;

  if (counter > 2) { // The value of counter is always 2 at this stage because of the conditional part of the while loop, so this is always false. 
    break;
  }
}