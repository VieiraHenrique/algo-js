const readlineSync = require("readline-sync");

let pick = new Number(readlineSync.question('What is your favourite number ? '));

while (pick != 42) {
    pick = new Number(readlineSync.question('Are you sure ? Try again : '));
}