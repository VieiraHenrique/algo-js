const readlineSync = require("readline-sync");

let times = new Number(readlineSync.question('How many times? '));

let sum = 0;
let temp = 0;

for (i = 0; i < times; i++) {
    temp = new Number(readlineSync.question('Enter a new number: '));
    sum += temp;
}

console.log(`The sum is ${sum}`);