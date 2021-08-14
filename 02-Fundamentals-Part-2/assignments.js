'use strict';

console.log('========= assignments ==========');

console.log('\n\n+++++ 1. Functions +++++');

function describeCountry (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry('Portugal', '10', 'Lisbon');
const descGermany = describeCountry('Germany', '83', 'Berlin');
const descFinland = describeCountry('Finland', '6', 'Helsinki');

console.log(descPortugal, descGermany, descFinland);

console.log('\n\n+++++ 2. Function Declarations vs. Expressions +++++');

function percentageOfWorld1 (population) {
 return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal2 = percentageOfWorld1(10);
const percChina2 = percentageOfWorld1(1441);
const percUSA2 = percentageOfWorld1(332);

console.log(percPortugal2, percChina2, percUSA2);

console.log('\n\n+++++ 3. Arrow Functions +++++');

const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld1(10);
const percChina3 = percentageOfWorld1(1441);
const percUSA3 = percentageOfWorld1(332);

console.log(percPortugal3, percChina3, percUSA3);

console.log('\n\n+++++ 4. Functions Calling Other Functions +++++');

const describePopulation = function(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage} of the world.`;
  console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);

console.log('\n\n+++++ 5. Introduction to Arrays +++++');

const populations = [10, 1441, 332, 51];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
]
console.log(percentages);

console.log('\n\n+++++ 6. Basic Array Operations (Methods) +++++');

const neighbours = ['Sweden', 'Norway', 'Finland'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :d');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);