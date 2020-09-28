const readlineSync = require("readline-sync");

let numberOne = Math.floor(new Number(readlineSync.question('Number one :')));

let numberTwo = new Number(readlineSync.question('Number two :'))

console.log(numberOne * numberTwo);