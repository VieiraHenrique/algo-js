let menuChoice;
const pizzaFlavors = []

function startMenu() {
    while (true) {
        menuChoice = parseInt(prompt('Hello! Welcome to the Pizza Flavors Manager. \n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor \n 3 - Remove a pizza flavor \n 4 - Exit the program \n \n Enter your action\'s number'));
        if (menuChoice < 1 || menuChoice > 4) {
            alert('You must chose one of the proposed numbers')
        } else {
            if (menuChoice == 1) {
                onePizzaList();
            } else if (menuChoice == 2) {
                twoPizzaAdd();
            } else if (menuChoice == 3) {
                threePizzaRmv();
            } else {
                break;
            }
        }
    }
}

function onePizzaList() {

    if (pizzaFlavors.length === 0) {
        alert('Your list is empty.')
    } else {
        alert(pizzaFlavors);
    }
}

function twoPizzaAdd() {
    pizzaFlavors.push(prompt('Insert a new flavor: '));
}

function threePizzaRmv() {
    let rmv = parseInt(prompt('Enter the number of the pizza flavor you\'d like to remove'));
    rmv--;
    pizzaFlavors.splice(rmv, 1);
}