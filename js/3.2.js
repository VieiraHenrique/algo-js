const readlineSync = require("readline-sync");

let myArray = [100, 101, 102];
let sum = 0;
let avg;

for (i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

avg = sum / myArray.length;

console.log(avg)