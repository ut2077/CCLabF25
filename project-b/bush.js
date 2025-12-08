class Bush {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.s = s;

        this.bunny = new Bunny(this.x, this.y - this.s * 0.5);
        // this.drop = new p5.SoundFile("sound/bush.mp3")
    }
    display() {
        noStroke();
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
    contain(mousex, mousey) {
        return dist(mousex, mousey, this.x, this.y) < this.s;
    }
}