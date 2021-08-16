console.log('=============================================')

// coding challenge #1

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

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


// coding challenge #2

// function calcTip(bill) {
//   if(bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// } 

// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

const calcTip = bill => 
bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


// coding challenge #3
const mark = {
  fullName : 'Mark Miller',
  mass : 78,
  height: 1.69,
  calcBMI : function (){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName : 'John Smith',
  mass : 92,
  height: 1.95,
  calcBMI : function (){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const resultBMI = function (){
  if(mark.bmi > john.bmi) {
    return `${mark.fullName}'s BMI(${mark.bmi} is higher than ${john.fullName}'s (${john.bmi}))`
  } else if (john.bmi > mark.bmi) {
    return `${john.fullName}'s BMI(${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi}))`
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);


console.log(resultBMI());
*/

// coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => 
bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push (tip + bills[i]);
  
  // console.log(`bill is ${bills[i]}, tip is ${tips[i]}, total is ${totals[i]}`);
}
console.log(bills, tips, totals);

// Bonus

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));