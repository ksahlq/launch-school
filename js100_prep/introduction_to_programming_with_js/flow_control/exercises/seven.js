capsLock = (stringInput) => {
  if (stringInput.length >= 10) {
    console.log(stringInput.toUpperCase());
  }
  else {
    console.log(stringInput);
  }
}

capsLock('hello world');
capsLock('goodbye');