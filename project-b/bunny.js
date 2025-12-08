class Bunny {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.showTime = 0;
    }
    display() {
        if (this.showTime > 0) {
            push();
            translate(this.x, this.y);
            noStroke();
            fill(0, 0, 100);

            //head
            circle(0, 0, 40);

            //ears
            ellipse(-10, -30, 15, 40);
            ellipse(10, -30, 15, 40);
            //face
            fill(0);
            circle(-8, -5, 5);
            circle(8, -5, 5);
            pop();
            this.showTime--;
        }
    }
    update() {
        this.showTime = 50; //stays around 1 second?
    }
}