// coding challenge #4

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1 No team wins..
let scoreDolphis = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphis, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {

  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphis, scoreKoalas);

checkWinner(576, 111);

// test 2 Dolphins win

scoreDolphis = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphis, scoreKoalas);

checkWinner(scoreDolphis, scoreKoalas);