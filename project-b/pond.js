class Pond {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.waveActive = false;
        this.waver = 0;
        this.waveMax = 150;
        this.drop = new p5.SoundFile("sound/drop.mp3");
    }
    display() {
        noStroke();
        // Base water
        fill(55, 30, 80);   // bluish
        ellipse(this.x, this.y, this.w, this.h);

        // middle lighter inner layer
        fill(55, 20, 95);
        ellipse(this.x, this.y - 5, this.w * 0.9, this.h * 0.9);

        // top layer
        fill(55, 15, 90);
        ellipse(this.x, this.y + 5, this.w * 0.8, this.h * 0.8);

        if (this.waveActive) {
            noFill();
            stroke(55, 20, 100, map(this.waver, 0, this.waveMax, 50, 0));
            strokeWeight(3);
            ellipse(this.x, this.y, this.waver, this.waver / 2);

            this.waver += 3;
            if (this.waver > this.waveMax) {
                this.waveActive = false;
            }
        }
    }
    contain(mousex, mousey) {
        let dx = (mousex - this.x) / (this.w / 2);
        let dy = (mousey - this.y) / (this.h / 2);
        return dx * dx + dy * dy <= 1;
    }
    activate() {
        this.waveActive = true;
        this.waver = 0;
        this.drop.play();
    }
}