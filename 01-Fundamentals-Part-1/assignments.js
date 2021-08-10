console.log('========= assignments ==========');

console.log('+++++ 1. Values and Variables +++++');

let country = 'Republic of Korea';
let continent = 'Asia';
let population = 51;

console.log(country);
console.log(continent);
console.log(population);

console.log('+++++ 2. Data Types +++++');

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log('+++++ 3. let, const and var +++++');

/* language = 'korean';
const country = 'republic of korea'; // const country
const continent = 'Asia'; // const continent
const isIsland = false; // const isIsland
isIsland = true;*/

console.log('+++++ 4. Basic Operators +++++');

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const descriptionTotal = 
  country + 
  ' is in ' + 
  continent +
  ', and its ' + 
  population + 
  ' million people speak ' + 
  language;
console.log(descriptionTotal);