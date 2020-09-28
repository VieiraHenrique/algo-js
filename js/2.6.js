const readlineSync = require("readline-sync");

let pick = new Number(readlineSync.question('Number between 1 and 7: '));

let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

console.log(`Your pick was ${pick} and it is related to ${days[pick-1]}`);