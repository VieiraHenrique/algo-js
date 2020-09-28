const readlineSync = require("readline-sync");

let myArray = [1, 2, 3, 4, 5];
let duplicateArray = [];

for (i = 0; i < myArray.length; i++) {
    duplicateArray.push(myArray[i]);
}

console.log(duplicateArray);

let duplicateArrayTwo = [];

duplicateArrayTwo = myArray.slice(0);

console.log(duplicateArrayTwo);