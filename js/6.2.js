class Rectangle {
    constructor(x, y, width, length) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.length = length;
    }

    collides(b) {
        if (
            this.x <= (b.x + b.length) &&
            (this.x + this.length) >= b.x &&
            this.y <= (b.y + b.width) &&
            (this.y + this.width) >= b.y
        ) {
            console.log('It collides');
        } else {
            console.log('It doesn\'t collide')
        }
    }
}

const a = new Rectangle(0, 1, 1, 1);
const b = new Rectangle(3, 4, 2, 2);