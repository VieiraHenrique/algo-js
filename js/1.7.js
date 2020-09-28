const readlineSync = require("readline-sync");

let shoeSize = new Number(readlineSync.question('Shoe size :'));

let birthYear = new Number(readlineSync.question('Year of birth:'));

let result = ((shoeSize * 2 + 5) * 50 - birthYear) + 1766;

console.log(result);