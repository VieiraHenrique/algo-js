const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    let myArray = [];
    for (i = 0; i < n; i++) {
        myArray.push(rand10());
    }
    return myArray;
}

let times = new Number(readlineSync.question('How many entries you want in the array ? '));

console.log(multiRand(times));