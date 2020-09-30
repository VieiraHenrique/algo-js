const readlineSync = require("readline-sync");

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const tvSerie = {};

function askTvSerie() {

    tvSerie.name = readlineSync.question('What is the name of the tv show? ');

    tvSerie.productionYear = readlineSync.question(`In what year "${tvSerie.name}" began? `);

    tvSerie.cast = [];

    let askCast = true;
    while (askCast = true) {
        let castTemp = readlineSync.question('Give the name of one of the cast members. Enter "exit" to stop. ')

        if (castTemp === 'exit') {
            break;
        }

        tvSerie.cast.push(castTemp);
    }

    return tvSerie;
}

askTvSerie();

function randomizeCast(serie) {
    shuffle(serie.cast);
}

randomizeCast(tvSerie);
console.log(tvSerie);