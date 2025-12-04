class Flower {
    constructor(x, y, s) {
        this.x0 = x; //anhnii position of x = x0
        this.y0 = y; //anhnii position of y = y0
        this.x = x;
        this.y = y;
        this.s = s;
        this.stroke = map(this.s, 5, 20, 2, 5);
        this.h = random(100);
        this.noff = random(1000);

        this.isActive = false;
        this.activeTimer = 0;
    }

    display() {
        stroke(30, 80, 60);
        strokeWeight(this.stroke);
        line(this.x, this.y, this.x, this.y + this.s * 2);

        noStroke();
        fill(this.h, 40, 100);
        circle(this.x, this.y, this.s * 0.8);

        for (let a = 0; a < TWO_PI; a += PI / 6) {
            let px = this.x + cos(a) * this.s * 0.5;
            let py = this.y + sin(a) * this.s * 0.5;
            circle(px, py, this.s * 0.5);
        }
    }

    contain(mx, my) {
        return dist(mx, my, this.x, this.y) < this.s * 0.8;
    }

    activate() {
        this.isActive = true;
        this.activeTimer = 20;
    }

    update() {
        let micLevel = mic.getLevel();

        let shake = 1;
        shake += micLevel * 50;

        if (this.isActive) {
            shake += 15;
            this.activeTimer--;
            if (this.activeTimer <= 0) this.isActive = false;
        }

        let nx = noise(this.noff + frameCount * 0.02);
        let ny = noise(this.noff + frameCount * 0.02);

        this.x = this.x0 + map(nx, 0, 1, -shake, shake);
        this.y = this.y0 + map(ny, 0, 1, -shake, shake);
    }
}
