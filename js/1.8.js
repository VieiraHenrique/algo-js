const readlineSync = require("readline-sync");

let questions = 3;

let character = readlineSync.question(`Character : (still ${questions} to be asked)`);
questions--;
let adjective = readlineSync.question(`adjective : (still ${questions} to be asked)`);
questions--;
let verb = readlineSync.question(`Verb : (still ${questions} to be asked)`);
questions--;
let complement = readlineSync.question(`Complement : (still ${questions} to be asked)`);

console.log(
    `${character}, who is very ${adjective}, ${verb} ${complement}.`
)