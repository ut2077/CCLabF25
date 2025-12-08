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
        this.drop = new p5.SoundFile("sound/tree.mp3");
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
        this.drop.play();
    }
    drawTrunk() {
        fill(this.barkHue, 100, 40);
        noStroke();
        rect(this.x - this.s * 0.1, this.y - this.s * 0.2, this.s * 0.2, this.s * 1.2);
    }
    drawLeaves() {
        noStroke();
        fill(35, 45, 80);
        circle(this.x, this.y - this.s * 0.8, this.s * 1.3);

        fill(35, 50, 70);
        circle(this.x - this.s * 0.5, this.y - this.s * 0.6, this.s * 1.0);
        circle(this.x + this.s * 0.5, this.y - this.s * 0.6, this.s * 1.0);

        fill(35, 55, 90);
        circle(this.x, this.y - this.s * 1.2, this.s * 0.9);
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