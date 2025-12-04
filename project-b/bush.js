class Bush {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.s = s;
    }
    display() {
        // noStroke();
        // ellipse(this.x, this.y, this.s * 2, this.s * 0.9);
        // ellipse(this.x, this.y - this.s * 0.4, this.s * 1.6, this.s * 0.7);
        // ellipse(this.x, this.y - this.s * 0.8, this.s * 1.2, this.s * 0.55);

        fill(45, 60, 70);
        circle(this.x, this.y - this.s * 0.4, this.s * 1.2);

        fill(40, 70, 50);
        circle(this.x - this.s * 0.5, this.y, this.s);
        circle(this.x + this.s * 0.5, this.y, this.s);

        fill(35, 80, 40);
        circle(this.x - this.s * 0.2, this.y + this.s * 0.3, this.s * 0.8);
        circle(this.x + this.s * 0.2, this.y + this.s * 0.3, this.s * 0.8);
    }
    update() {

    }
}