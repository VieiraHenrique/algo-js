const readlineSync = require("readline-sync");

function average(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function min(arr) {
    let min = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min
}

function max(arr) {
    let max = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max
}

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

let num = new Number(readlineSync.question('Enter the number of entries for a random array: '));

let myArray = multiRand(num);
let avg = average(myArray)
let minimum = min(myArray);
let maximum = max(myArray);

console.log(`Your random array with ${num} entries is : \n
${myArray}. \n
the average of this array is : \n
${avg}\n
the minimum number is: \n
${minimum} \n
and the maximum number is: \n
${maximum}`);