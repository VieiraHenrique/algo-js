class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    get surface() {
        return Math.pow(this.radius, 2) * 3.14;
    }
}

let circleOne = new Circle(2, 2, 1);
console.log(circleOne.surface);