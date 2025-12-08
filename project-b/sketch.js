// open the side view and see index.html and style.css files.
let flower = [];
let tree = [];
let bush = [];
let duck = [];
let cloud = [];
let bunny;
let pond;
let flowern = 50;
let treen = 5;
let bushn = 3;
let cloudn = 10;
let gs = 10; //grid size for grass
let mic;
let sound;
let quack;
let bushsound;

function preload() {
  sound = loadSound("sound/nature.mp3");
  quack = loadSound("sound/duck.mp3");
  bushsound = loadSound("sound/bush.mp3");
}

function setup() {
  // keep these 3 lines as they are
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  colorMode(HSB, 100);
  mic = new p5.AudioIn();
  mic.start();
  sound.play();
  sound.loop(); // keeps looping the background music

  for (let i = 0; i < flowern; i++) {
    let x = random(width);
    let y = random(height * 0.45, height);
    let s = random(5, 20);
    flower.push(new Flower(x, y, s));
  }
  for (let i = 0; i < treen; i++) {
    // let x = random(0, 500);
    // let y = random(250, height);
    let s = random(100, 150);
    tree.push(new Tree(width * 0.56, height * 0.45, s));
    tree.push(new Tree(width * 0.1, height * 0.67, s));
    tree.push(new Tree(width * 0.9, height * 0.4, s));
    tree.push(new Tree(width * 0.3, height * 0.5, s));
    tree.push(new Tree(width * 0.3, height * 0.92, s));
  }
  for (let i = 0; i < bushn; i++) {
    // let x = random(width / 2, width);
    // let y = random(height * 0.45 + 50, height - 20);
    let s = random(80, 100);
    bush.push(new Bush(width * 0.7, height * 0.5, s));
    bush.push(new Bush(width * 0.75, height * 0.833, s));
    bush.push(new Bush(width * 0.9, height * 0.55, s))
  }
  duck.push(new Duck(width / 2, 420, 40, 0.02));
  duck.push(new Duck(width / 2, 420, 70, 0.015));
  for (let i = 0; i < cloudn; i++) {
    let x = random(-width, width);
    // x = width / 2;
    let y = random(30, height * 0.4);
    let s = random(50, 100);
    cloud.push(new Cloud(x, y, s));
  }
  pond = new Pond(width / 2, 420, 320, 130);
}

function drawBackground() {
  noStroke();

  for (let y = 0; y < height; y++) {
    // t goes from 0 to 1 as y goes from top to bottom
    // let t = y / height;

    // // interpolate sky → land
    // let h = lerp(55, 40, t);  // hue from blue to green
    // let s = lerp(40, 50, t);  // saturation shift
    // let b = lerp(90, 60, t);  // brightness shift

    // fill(h, s, b);
    // rect(0, y, width, 1);  // every rect
    fill(55, 40, 90); //need lighter blue 
    rect(0, 0, width, height * 0.45); //land 
    fill(40, 50, 60); //need light green 
    rect(0, height * 0.45, width, height * 0.55);
  }
}

function drawDuck(x, y, scale = 1) {
  push();
  translate(x, y);
  // scale(1, 0.5);
  noStroke();
  // Body
  fill(17, 60, 100);
  ellipse(0, 0, 60, 35);
  // Head
  ellipse(20, -15, 25, 25);
  // Beak
  fill(10, 80, 100);
  ellipse(35, -15, 12, 6);
  // Eye
  fill(0);
  circle(20, -18, 4);
  pop();
}

function sun(cx, cy, r) {
  push();
  fill(17, 100, 100);
  circle(100, 100, 80);
  translate(cx, cy);
  rotate(frameCount * 0.01);
  noStroke();

  let ray = 12;
  let rayLength = r * 1.4;
  let rayWidth = r * 0.3;

  for (let i = 0; i < ray; i++) {
    let angle = TWO_PI * (i / ray);
    push();
    rotate(angle);
    triangle(0, -r, -rayWidth / 2, -rayLength, rayWidth / 2, -rayLength);
    pop();
  }
  pop();
}

function drawGrass() {
  noFill();
  for (let i = 0; i < width; i += gs) {
    for (let j = height * 0.45; j < height; j += gs) {
      let d = dist(mouseX, mouseY, i, j);
      let diag = dist(0, 0, width, 450);

      let f = map(d, 0, diag, 0.1, 3);
      let angle = map(d, 0, diag, 0, TWO_PI);

      push();
      strokeWeight(2);
      stroke(40, 50, 70); //hsb color
      translate(i, j);
      rotate(angle);
      line(0, 0, gs * 0.5, gs * 0.5);
      pop();
    }
  }

}

function draw() {
  drawBackground();
  drawGrass();
  //sun
  sun(100, 100, 80);
  //rest of the enviroment
  for (let i = 0; i < cloud.length; i++) {
    cloud[i].display();
    cloud[i].update();
  }
  console.log(cloud.length);
  for (let i = 0; i < flower.length; i++) {
    flower[i].display();
    flower[i].update();
  }
  for (let i = 0; i < tree.length; i++) {
    tree[i].display();
    tree[i].update();
  }
  for (let i = 0; i < bush.length; i++) {
    bush[i].display();
    // bush[i].update();
    bush[i].bunny.display();
  }
  pond.display();
  for (let i = 0; i < duck.length; i++) {
    duck[i].display();
    duck[i].update();
  }
  // bush(200, 40, 60);
  // bush(300, 400, 50);
}

function mousePressed() {
  for (let i = 0; i < flowern; i++) {
    if (flower[i].contain(mouseX, mouseY)) {
      flower[i].activate();
      flower[i].playFlower();
    }
  }

  for (let i = 0; i < treen; i++) {
    if (tree[i].contain(mouseX, mouseY)) {
      tree[i].activate();
    }
  }
  for (let i = 0; i < duck.length; i++) {
    if (duck[i].contain(mouseX, mouseY)) {
      quack.play();
    }
  }
  if (pond.contain(mouseX, mouseY)) {
    pond.activate();
  }
  for (let i = 0; i < bush.length; i++) {
    if (bush[i].contain(mouseX, mouseY)) {
      bush[i].bunny.update();
      bushsound.play();
    }
  }
  // for (let i = 0; i < flowern; i++) {
  //   if (mouseX > width / 2 - 20 && mouseX < width / 2 + 20 && mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
  //     t.push(new TextParticle(key, random(width), random(height)));

  //     t[t.length - 1].playChar();
  //   }
  // }
  // for (let i = 0; i < flower.length; i++) {
  //   if (flower[i].contain(mouseX, mouseY)) {
  //     flower[i].playFlower();
  //     flower[i].activate();
  //   }
  // }

}