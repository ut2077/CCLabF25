let flower = [];
let tree = [];
let flowern = 30;
let mic;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  colorMode(HSB, 100);
  mic = new p5.AudioIn();
  mic.start();

  for (let i = 0; i < flowern; i++) {
    let x = random(width);
    let y = random(height);
    let s = random(5, 20);
    flower.push(new Flower(x, y, s));
  }
  for (let i = 0; i < 3; i++) {
    let x = random(width);
    let y = random(height);
    let s = random(30, 80);
    tree.push(new Tree(x, y, s));
  }
}

function draw() {
  for (let i = 0; i < flower.length; i++) {
    flower[i].display();
    flower[i].update();
  }
  for (let i = 0; i < tree.length; i++) {
    tree[i].display();
    tree[i].update();
  }
}

class Flower {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.stroke = map(this.s, 5, 20, 2, 5);
    this.h = random(100);
    this.noff = random(1000);
  }

  display() {
    // Draw stem
    stroke(30, 80, 60);
    strokeWeight(this.stroke);
    line(this.x, this.y, this.x, this.y + this.s * 2);

    // Flower center
    noStroke();
    fill(this.h, 40, 100);
    circle(this.x, this.y, this.s * 0.8);

    // Petals
    for (let a = 0; a < TWO_PI; a += PI / 6) {
      let px = this.x + cos(a) * this.s * 0.5;
      let py = this.y + sin(a) * this.s * 0.5;
      circle(px, py, this.s * 0.5);
    }
  }

  update() {
    //use noise to move the flowers a little bit lol what?
    let v = mic.getLevel();
    let wiggle = v * 50; //how strong the shake is
    this.x += map(noise(this.noff + frameCount * 0.02), 0, 1, -wiggle, wiggle);
    this.y += map(noise(this.noff + 999 + frameCount * 0.02), 0, 1, -wiggle, wiggle);
    //needs to work more on the noise part!!!
  }
}

class Tree {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display() {
    this.drawTrunk();
    this.drawLeaves();
  }

  drawTrunk() {
    let barkHue = random(15, 30);
    fill(barkHue, 100, 40);
    noStroke();
    rect(this.x - this.s * 0.1, this.y, this.s * 0.2, this.s);
  }
  drawLeaves() {
    noStroke();
    for (let i = 0; i < 25; i++) {
      let hue = random(25, 40);
      fill(hue, 30, 90);

      let lx = this.x + random(-this.s * 0.5, this.s * 0.5);
      let ly = this.y - random(this.s * 0.3, this.s * 1.2);
      let size = random(this.s * 0.15, this.s * 0.25);

      circle(lx, ly, size);
    }
  }

  update() { }
}