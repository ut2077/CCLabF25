class Particle {
    // constructor function
    constructor(startX, startY) {
        // properties (variables): particle's characteristics
        this.x = startX;
        this.y = startY;
        this.speedY = random(-1.5, -0.5); //rising up so negative
        this.speedX = random(-0.3, 0.3);
        this.dia = 30;
        this.offset = random(1000);
    }
    // methods (functions): particle's behaviors
    move() {
        let f = map(mic.getLevel(), 0, 1, 1, 20);
        this.y += this.speedY * f;
        this.x += this.speedX + 0.5 * sin(frameCount * 0.05 + this.offset);
        // if (this.y < -50) {
        //     this.y = height + random(20, 100);
        //     this.x = random(width);
        // }
        // (add) 
    }
    display() {
        // particle's appearance
        push();
        translate(this.x, this.y);
        // RED
        fill(250, 28, 12);
        for (let i = 0; i < 40; i++) {
            let s = map(i, 0, 40, 5, 20);
            let y = map(i, 0, 40, 0, 20);
            let x = -2 * sin(frameCount * 0.1 + i * 0.1 + this.offset);
            circle(x + 5, y + 0, s);
        }
        for (let i = 0; i < 40; i++) {
            let s = map(i, 0, 40, 5, 25);
            let y = map(i, 0, 40, 0, 50);
            let x = -20 - sin(frameCount * 0.1 + i * 0.1 + this.offset);
            circle(x + 35, y - 20, s);
        }
        for (let i = 0; i < 40; i++) {
            let s = map(i, 0, 40, 5, 20);
            let y = map(i, 0, 40, 0, 20);
            let x = 30 - 2 * cos(frameCount * 0.1 + i * 0.1 + this.offset);
            circle(x - 5, y + 0, s);
        }

        // ORANGE
        fill(247, 96, 2);
        for (let i = 0; i < 20; i++) {
            let s = map(i, 0, 20, 10, 25);
            let y = map(i, 0, 20, 0, 25);
            let x = -sin(frameCount * 0.1 + i * 0.1 + this.offset);
            circle(x + 15, y, s);
        }

        // YELLOW
        fill(252, 221, 93);
        for (let i = 0; i < 15; i++) {
            let s = map(i, 0, 15, 6, 20);
            let y = map(i, 0, 15, 0, 25);
            let x = -cos(frameCount * 0.1 + i * 0.1 + this.offset);
            circle(x + 15, y, s);
        }

        // eyes
        let eyeX = 15 + sin(frameCount * 0.05 + this.offset);
        let eyeY = 20 - sin(frameCount * 0.15 + this.offset);

        fill(255, 245, 220);
        ellipse(eyeX - 10, eyeY, 10, 10); // left eye
        ellipse(eyeX + 10, eyeY, 10, 10); // right eye

        fill(0);
        ellipse(eyeX - 10, eyeY, 4, 4);
        ellipse(eyeX + 10, eyeY, 4, 4);

        pop();
    }
    // isOut() {
    //     if (this.y < height) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}