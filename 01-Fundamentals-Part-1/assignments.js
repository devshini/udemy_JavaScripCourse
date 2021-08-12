console.log('========= assignments ==========');

console.log('\n\n+++++ 1. Values and Variables +++++');

let country = 'Republic of Korea';
let continent = 'Asia';
let population = 51;

console.log(country);
console.log(continent);
console.log(population);

console.log('\n\n+++++ 2. Data Types +++++');

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log('\n\n+++++ 3. let, const and var +++++');

language = 'korean';
// const country = 'republic of korea'; // const country
// const continent = 'Asia'; // const continent
// const isIsland = false; // const isIsland
isIsland = true;

console.log('\n\n+++++ 4. Basic Operators +++++');

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = 
  country + 
  ' is in ' + 
  continent +
  ', and its ' + 
  population + 
  ' million people speak ' + 
  language;
console.log(description);

console.log('\n\n+++++ 5. Strings and Template Literals +++++');

description = (`${country} is in ${continent}, and its ${population} million people speak ${language}`);
console.log(description);

console.log('\n\n+++++ 6. Taking Decisions: if /else Statements +++++');

if(population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average`);
}

console.log('\n\n+++++ 7. Type Conversion and Coercion +++++');

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

console.log('\n\n+++++ 8. Equality Operators: == vs. === +++++');

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//   console.log('Only 1 border');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

console.log('\n\n+++++ 9. Logical Operators +++++');

if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} ! 🇰🇷`);
} else {
  console.log(`${country} does not meet your criteria 😭`);
}