/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// jei konstruktoriaus funkcija į objektą neturi priimti savybių:

function Calculator() {
    this.sum = function (firstNumber, SecondNumber) {
        return firstNumber + SecondNumber;
    };
    this.subtraction = function (firstNumber, SecondNumber) {
        return firstNumber - SecondNumber;
    };
    this.multiplication = function (firstNumber, SecondNumber) {
        return firstNumber * SecondNumber;
    };
    this.division = function (firstNumber, SecondNumber) {
        return firstNumber / SecondNumber;
    };
}
const calc = new Calculator();
console.log(calc);
console.log(calc.sum(10, 10));
console.log(calc.subtraction(10, 10));
console.log(calc.multiplication(10, 10));
console.log(calc.division(10, 10));

// Jei ne taip supratau užduotį ir konstruktoriaus funkcija turi priimti savybes:

// function Calculator(number1, number2) {
//     this.firstNumber = number1;
//     this.SecondNumber = number2;
//     Calculator.prototype.sum = function () {
//         return this.firstNumber + this.SecondNumber;
//     };
//     Calculator.prototype.subtraction = function () {
//         return this.firstNumber - this.SecondNumber;
//     };
//     Calculator.prototype.multiplication = function () {
//         return this.firstNumber * this.SecondNumber;
//     };
//     Calculator.prototype.division = function () {
//         return this.firstNumber / this.SecondNumber;
//     };
// }
// const calc = new Calculator(5, 5);
// console.log(calc.sum());
// console.log(calc.subtraction());
// console.log(calc.multiplication());
// console.log(calc.division());
