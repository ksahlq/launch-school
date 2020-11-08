let evenOrOdd = (input) => {
  if (!Number.isInteger(input)) {
    console.log('Input is not an integer')
    return;
  }

  if (input % 2 === 1) {
    console.log(`Odd number: ${input}`);
  } else {
    console.log(`Even number: ${input}`);
  }
}

evenOrOdd(1.5);
evenOrOdd("7");

evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(5);