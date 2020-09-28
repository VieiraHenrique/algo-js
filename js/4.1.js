const readlineSync = require("readline-sync");

function calcSurface(w, h) {
    return w * h;
}

let width = new Number(readlineSync.question('What\'s the width ?'));
let height = new Number(readlineSync.question('What\'s the height ?'));

console.log(`The surface of the rectangle is ${calcSurface(width,height)}`);