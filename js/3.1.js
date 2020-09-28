const readlineSync = require("readline-sync");

let myArray = [100, 101, 102];

let addArray = 0;

for (i = 0; i < myArray.length; i++) {
    addArray += myArray[i];
}

console.log(addArray);