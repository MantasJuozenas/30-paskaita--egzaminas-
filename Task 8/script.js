/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (num1, num2) {
    return num1 + num2;
  };
  this.subtraction = function (num1, num2) {
    return num1 - num2;
  };
  this.multiplication = function (num1, num2) {
    return num1 * num2;
  };
  this.division = function (num1, num2) {
    return num1 / num2;
  };
}

const testObj = new Calculator();
const sum = testObj.sum(20, 10);
console.log(sum);
const sub = testObj.subtraction(10, 20);
console.log(sub);
const multi = testObj.multiplication(10, 10);
console.log(multi);
const division = testObj.division(20, 10);
console.log(division);
