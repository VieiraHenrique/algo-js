const readlineSync = require("readline-sync");

let myArray = [1, 34, 3, 0, 5];
let min = myArray[0];
let max = myArray[0];

for (i = 0; i < myArray.length; i++) {
    if (min > myArray[i]) {
        min = myArray[i];
    }
    if (max < myArray[i]) {
        max = myArray[i]
    }
}

console.log(`min: ${min}`);
console.log(`max: ${max}`);