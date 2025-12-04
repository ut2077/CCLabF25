// open the side view and see index.html and style.css files.
let flower = [];
let tree = [];
let bush = [];
let duck = [];
let flowern = 30;
let treen = 5;
let bushn = 3;
let mic;
let sound;
let quack;

// let t = []; //this is for the sound for each flower

function preload() {
  sound = loadSound("sound/nature.mp3");
  quack = loadSound("sound/duck.mp3");
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
  if (!sound.isPlaying()) {
    sound.loop(); // keeps looping the background music.
  }

  for (let i = 0; i < flowern; i++) {
    let x = random(width, 300);
    let y = random(350, height);
    let s = random(5, 20);
    flower.push(new Flower(x, y, s));
  }
  for (let i = 0; i < treen; i++) {
    let x = random(0, 300);
    let y = random(250, height);
    let s = random(100, 150);
    tree.push(new Tree(x, y, s));
  }
  for (let i = 0; i < bushn; i++) {
    let x = random(100, width - 100);
    let y = random(height * 0.45 + 50, height - 20);
    let s = random(40, 80);
    bush.push(new Bush(x, y, s))
  }
  duck.push(new Duck(width / 2, 420, 40, 0.02));
  duck.push(new Duck(width / 2, 420, 70, 0.015));
}

function drawBackground() {
  //sky
  noStroke();
  fill(55, 40, 90); //need lighter blue
  rect(0, 0, width, height * 0.45);

  //land
  fill(40, 50, 60); //need light green
  rect(0, height * 0.45, width, height * 0.55);
}

function pond() {
  noStroke();
  // Base water
  fill(55, 30, 80);   // bluish
  ellipse(width / 2, 420, 320, 130);

  // middle lighter inner layer
  fill(55, 20, 95);
  ellipse(width / 2, 415, 300, 120);

  // top layer
  fill(55, 15, 90);
  ellipse(width / 2, 425, 260, 90);
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


function draw() {
  drawBackground();
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
  for (let i = 0; i < bush.length; i++) {
    bush[i].display();
    bush[i].update();
  }
  pond();
  for (let i = 0; i < duck.length; i++) {
    duck[i].display();
    duck[i].update();
  }

  // for (let i = 0; i < t.length; i++) {
  //   t[i].update();
  //   t[i].updateLifespan();
  //   t[i].display();

  //   if (t[i].isDone == true) {
  //     t.splice(i, 1);
  //   }
  // }
  // bush(200, 40, 60);
  // bush(300, 400, 50);
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
  for (let i = 0; i < duck.length; i++) {
    if (duck[i].contain(mouseX, mouseY)) {
      quack.play();
    }
  }
}

// function keyPressed() {
//   t.push(new TextParticle(key, random(width), random(height)));

//   t[t.length - 1].playChar();
// }
// class TextParticle {
//   constructor(k, x, y) {
//     this.x = x;
//     this.y = y;
//     this.x0 = x;
//     this.y0 = y;
//     this.t = k;
//     this.s = random(10, 60);
//     this.speedX = map(this.s, 10, 60, -0.01, 0.01);
//     this.speedY = map(this.s, 10, 60, -0.01, 0.01);

//     this.lifespan = 1.0; // 100%;
//     this.lifeReduction = map(this.s, 24, 100, 0.005, 0.001);
//     this.isDone = false;

//     this.osc = new p5.SinOsc();
//     this.envelope = new p5.Env();
//     this.envelope.setADSR(0.01, 0.2, 0.2, 0.5);
//   }
//   display() {
//     textSize(this.s);
//     let op = map(this.lifespan, 1.0, 0, 255, 0);
//     fill(0, op);
//     text(this.t, this.x, this.y);
//   }
//   update() {
//     let off = 2 * this.s * noise(frameCount * 0.01);
//     this.x = this.x0 + (this.s + off) * cos(frameCount * this.speedX);
//     this.y = this.y0 + (this.s + off) * sin(frameCount * this.speedY);
//   }
//   updateLifespan() {
//     if (this.lifespan > 0) {
//       this.lifespan -= this.lifeReduction;
//     } else {
//       this.lifespan = 0;
//       this.isDone = true;
//     }
//   }
//   playChar() {
//     this.osc.start();
//     let freq = notes[int(map(this.t.charCodeAt(0), 97, 120, 0, notes.length - 1))];
//     // let freq = (this.t.charCodeAt(0) * this.s) / 10;
//     this.osc.freq(freq);
//     this.envelope.play(this.osc, 0, 0.1);
//     console.log(int(map(this.t.charCodeAt(0), 97, 120, 0, notes.length - 1)));

//   }
// }
// let notes = [
//   261.63, // C4
//   293.66, // D4
//   329.63, // E4
//   349.23, // F4
//   392.0, // G4
//   440.0, // A4
//   493.88, // B4
//   523.25, // C5
//   587.33, // D5
//   659.25, // E5
//   698.46, // F5
//   783.99, // G5
//   880.0, // A5
//   987.77, // B5
//   1046.5, // C6
//   1174.66, // D6
//   1318.51, // E6
//   1396.91, // F6
//   1567.98, // G6
//   1760.0, // A6
//   1975.53, // B6
//   2093.0, // C7
// ];
