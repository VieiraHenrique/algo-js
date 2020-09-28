const readlineSync = require("readline-sync");

function calcDistance(ax, ay, bx, by) {
    let x = ax - bx;
    let y = ay - by;
    let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return dist;
}

console.log(calcDistance(-2, 2, 2, -2));