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