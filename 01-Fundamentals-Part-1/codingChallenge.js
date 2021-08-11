console.log('========= Coding Challenge ==========');

// coding challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// coding challenge #2
if(BMIMark > BMIJohn) {
  console.log(`Mark's BMI(${BMIMark}) is higher than John's BMI(${BMIJohn}) !`)
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's BMI(${BMIMark}) !`)
}