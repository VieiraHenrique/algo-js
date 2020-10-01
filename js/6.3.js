class Rectangle {
    constructor(x, y, width, heigth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
    }

    collides(b) {
        if (
            (
                ((this.x + this.width) > b.x) &&
                ((b.x + b.width) > this.x)
            ) &&
            (
                ((this.y + this.heigth) > b.y) &&
                ((b.y + b.heigth) > this.y)
            )
        ) {
            return true;
        } else {
            return false;
        }
    }
}

function randInt(n) {
    return parseInt(Math.floor(Math.random() * n + 1));
}

function genRec(n) {
    const recs = []
    for (i = 0; i < n; i++) {
        recs.push(new Rectangle(randInt(10), randInt(10), randInt(10), randInt(10)))
    }
    return recs;
}

function collides(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            temp = arr[i].collides(arr[j]);
            if (temp) {
                console.log(`rectangle ${i} collides with rectangle ${j}`)
            }
        }
    }
}

collides(genRec(10));