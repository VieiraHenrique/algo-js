function game() {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
    let guess = parseInt(prompt('Guess the number: '));
    while (guess !== number) {
        if (guess > number) {
            alert('Too high. Try again:');
            guess = parseInt(prompt('Guess the number: '));
        } else {
            alert('Too low. Try again:');
            guess = parseInt(prompt('Guess the number: '));
        }
    }
    alert('Congrats ! You got it !');

    while (true) {
        let playAgain = prompt('Wanna play again ? "y" or "n"');
        if (playAgain === 'y') {
            game();
        } else if (playAgain === 'n') {
            alert('Have a nice day !');
            break
        } else {
            alert('I didn\'t get it')
        }
    }
}