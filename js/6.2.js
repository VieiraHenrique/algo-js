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

const a = new Rectangle(3, 3, 2, 2);
const b = new Rectangle(1, 1, 2, 2);