const readlineSync = require("readline-sync");

/* function factorial(a) {
    let sum = 1;
    for (i = 1; i <= a; i++) {
        sum *= i;
    }
    return sum;
}
 */

sum = 1;

function factorial(a) {
    if (a >= 1) {
        sum *= a;
        factorial(a - 1);
    }
    return sum
}


console.log(factorial(6));