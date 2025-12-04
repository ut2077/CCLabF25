class Tree {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.barkHue = random(15, 30);

        //glowing parts
        this.waver = 0; // wave radius
        this.waveMax = this.s * 3;
        this.waveActive = false;
    }

    display() {
        this.drawTrunk();
        this.drawLeaves();
    }

    contain(mx, my) {
        return dist(mx, my, this.x, this.y - this.s) < this.s * 1.2;
    }

    activate() {
        this.waveActive = true;
        this.waver = 0;
    }
    drawTrunk() {
        fill(this.barkHue, 100, 40);
        noStroke();
        rect(this.x - this.s * 0.1, this.y, this.s * 0.2, this.s);
    }
    drawLeaves() {
        noStroke();
        let n = 20; // number of points in the leaf shape
        this.radius = this.s * 1.2;
        fill(35, 45, 80);
        circle(this.x, this.y - this.s * 0.9, this.s * 1.3);

        fill(35, 50, 70);
        circle(this.x - this.s * 0.5, this.y - this.s * 0.7, this.s * 1.0);
        circle(this.x + this.s * 0.5, this.y - this.s * 0.7, this.s * 1.0);

        fill(35, 55, 90);
        circle(this.x, this.y - this.s * 1.3, this.s * 0.9);
        // beginShape();
        // for (let i = 0; i < n; i++) {
        //     this.angle = map(i, 0, n, 0, TWO_PI);
        //     this.offset = 10 * sin(frameCount * 0.05 + i); // small wavy motion
        //     this.x = this.x + (radius + offset) * cos(angle);
        //     this.y = this.y - this.s + (radius + offset) * sin(angle);
        //     curveVertex(x, y);
        // }
        // endShape(CLOSE);
    }

    update() {
        if (this.waveActive == true) {
            this.waver += 5;

            let fadeout = map(this.waver, 0, this.waveMax, 50, 0);

            noFill();
            stroke(40, 30, 100, fadeout);
            strokeWeight(3);
            circle(this.x, this.y - this.s, this.waver);

            if (this.waver >= this.waveMax) {
                this.waveActive = false;
            }
        }
    }
}