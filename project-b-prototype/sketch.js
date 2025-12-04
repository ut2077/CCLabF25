let flower = [];
let tree = [];
let flowern = 30;
let treen = 5;
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
  for (let i = 0; i < treen; i++) {
    let x = random(width);
    let y = random(height);
    let s = random(30, 80);
    tree.push(new Tree(x, y, s));
  }
}

function bush(x, y, size) {
  noStroke();
  fill(40, 60, 70);
  circle(x, y - size * 0.4, size * 1.2);

  fill(40, 70, 50);
  circle(x - size * 0.5, y, size);
  circle(x + size * 0.5, y, size);

  fill(40, 80, 40);
  circle(x - size * 0.2, y + size * 0.3, size * 0.8);
  circle(x + size * 0.2, y + size * 0.3, size * 0.8);
}

function draw() {
  background(0)
  fill(17, 100, 100);
  noStroke();
  circle(100, 100, 100);
  for (let i = 0; i < flower.length; i++) {
    flower[i].display();
    flower[i].update();
  }
  for (let i = 0; i < tree.length; i++) {
    tree[i].display();
    tree[i].update();
  }
  bush(200, 40, 60);
}
function mousePressed() {
  for (let i = 0; i < flowern; i++) {
    if (flower[i].contain(mouseX, mouseY)) {
      flower[i].activate();
    }
  }

  for (let i = 0; i < treen; i++) {
    if (tree[i].contain(mouseX, mouseY)) {
      tree[i].activate();
    }
  }
}