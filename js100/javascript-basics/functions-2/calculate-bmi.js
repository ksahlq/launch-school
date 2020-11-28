function calculateBMI(height, weight) { // cm, kg
  let heightInMeters = height / 100;
  let bmi = weight / heightInMeters **2;
  return bmi.toFixed(4);
}

console.log(calculateBMI(180, 80));