/* let js = 'amazing';

// - Linking a JavaScript File
// if (js === 'amazing') alert ('JavaScript is FUN!');
// 40+8+23-10;

// console.log(40+8+23-10); 주석처리 단축키 command + /

console.log("Shin");
console.log(23);

let firstName = "Shin"; // camelCase

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let Shin_eunjung = "SEJ";
let $function = 35;

let person = 'Shin';
let PI = 3.1415;

let myFirstJob = 'oL';
let myCurrentJob = 'Programmer';

let job1 = 'OL';
let job2 = 'Programmer';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Shin');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 35;
age = 36;

const birthYear = 1991;
// birthYear = 1986;

// const job;

var job = 'programmer';
job = 'teacher';


lastName = 'Eunjung';
console.log(lastName);


// Math operator
const now = 2037;
const ageShin = now - 1991;
const ageKim = now - 2018;
console.log(ageShin, ageKim);

console.log(ageShin * 2, ageKim / 10, 2 ** 3);
// 2 ** 3 means 2 to ther power of 3 = 2 * 2 * 2

const firstName = 'Shin';
const lastName = 'Eunjung';
console.log(firstName + ' ' + lastName);


// Assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);


// Comparison operators
console.log(ageShin > ageKim); // > , < , >= , <=
console.log(ageKim >= 18);

const isFullAge = ageKim >= 18;

console.log(now - 1991 > now - 2018)


const now = 2037;
const ageShin = now - 1991;
const ageKim = now - 2018;

console.log(now - 1991 > now - 2018)

let x , y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageShin + ageKim) / 2;
console.log(ageShin, ageKim, averageAge);


const firstName = 'Shin';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const shin = "I'm " + firstName + ', a ' + (year - birthYear) +  ' years old ' + job + '!';
console.log(shin);

const shinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(shinNew);

console.log(`Just a reqular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years 😊`)
}

const birthYear = 2021;

let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


