const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('Enter a minimum number: '));
let max = new Number(readlineSync.question('Enter a maximum number: '));
let current = new Number(readlineSync.question('Enter a current number: '));

if (current > min && current < max) {
    console.log('Your current number is between the min and the max');
} else if (min > max) {
    console.log('You dumm\'ass ! You didn\'t understood the game ?!!!');
} else {
    console.log('Your current number isn\'t in the range');
}