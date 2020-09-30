let num;

while (true) {
    num = parseInt(prompt('Chose a positive integer higher than 1: '));
    if (num <= 1) {
        alert('You must choose an integer higher than 1')
    } else {
        break
    }
}

const list = [];

for (i = 2; i < num; i++) {
    if (num % i === 0) {
        list.push(i);
    }
}

if (list.length == 0) {
    console.log(`${num} is a prime number`)
} else {
    console.log(`${num} is divisible by : \n ${list}`);
}