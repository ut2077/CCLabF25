class Cloud {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.s = s;

        // larger cloud = slower speed
        this.speedX = map(this.s, 50, 100, 5, 1);
    }

    display() {
        fill(0, 0, 100, 0.9); // soft white
        noStroke();
        push();
        translate(this.x, this.y);
        fill(255);
        circle(0, 0, this.s);
        for (let angle = 0; angle < 2 * PI; angle += PI / 10) {
            push();
            rotate(angle);
            let s2 = map(noise(angle * this.s), 0, 1, this.s * 0.1, this.s);
            circle(this.s / 2, 0, s2);
            pop();
        }

        pop();
    }

    update() {
        // Move to the right
        this.x += this.speedX;

        // Reset when going too far
        if (this.x > width + this.s) {
            this.x = random(-width, -this.s);
            this.y = random(40, height * 0.4); // stays in sky
            this.s = random(50, 100);
            this.speedX = map(this.s, 50, 100, 0.5, 0.2);
        }
    }
}
