let rlSync = require('readline-sync');
const AGE = parseInt(rlSync.question('How old are you? '));

const TEN = 10;
const TWENTY = 20;
const THIRTY = 30;
const FORTY = 40;

console.log(`In ${TEN} years, you will be ${AGE + TEN} years old.`);
console.log(`In ${TWENTY} years, you will be ${AGE + TWENTY} years old.`);
console.log(`In ${THIRTY} years, you will be ${AGE + THIRTY} years old.`);
console.log(`In ${FORTY} years, you will be ${AGE + FORTY} years old.`);