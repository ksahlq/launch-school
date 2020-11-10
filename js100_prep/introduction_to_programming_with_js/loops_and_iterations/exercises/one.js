let rlSync = require('readline-sync');
const AGE = parseInt(rlSync.question('How old are you? '));

const TEN = 10;
const FORTY = 40;

for (let i = TEN; i <= FORTY; i += 10) {
  console.log(`In ${i} years, you will be ${AGE + i} years old.`);
}
