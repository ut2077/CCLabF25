class Duck {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;  // how big the circular path is
        this.speed = speed;    // how fast it swims
        this.angle = random(TWO_PI);
    }

    update() {
        this.angle += this.speed;
        this.px = this.x + cos(this.angle) * this.radius;
        this.py = this.y + sin(this.angle) * this.radius * 0.5;
    }

    display() {
        drawDuck(this.px, this.py);
    }

    contain(mx, my) {
        return dist(mx, my, this.px, this.py) < 40;
    }
}