const readlineSync = require("readline-sync");

let numberOne = new Number(readlineSync.question('Number one:'));
let numberTwo = new Number(readlineSync.question('Number two:'));

let modulo = numberOne % numberTwo;

console.log(modulo);