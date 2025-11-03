/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;
let x;
let y;
let speedY;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new kirby(width / 2, height / 2);
  x = width / 2;
  y = height / 2;
  speedY = 5;
}

function draw() {
  background(0);
  drawFloor(); // for reference only
  // test(x, y, 200);
  // move();
  dancer.update();
  dancer.display();
}
class kirby {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.armSwing = 0;
    this.size = 200;
  }
  update() {
    this.y = noise(frameCount * 0.01) * height;
    this.armSwing = sin(frameCount * 0.1) * 20;
  }
  display() {
    push();
    translate(this.x, this.y);

    noStroke();

    // feet
    fill(235, 52, 137);
    ellipse(70, 90, 110, 70);
    ellipse(-70, 90, 110, 70);

    // arms
    fill(250, 137, 190);
    ellipse(70, -10 + this.armSwing, 150, 80);
    ellipse(-70, -10 - this.armSwing, 150, 80);

    // body
    fill(255, 182, 193);
    circle(0, 0, this.size);

    // mouth
    fill(250, 105, 134);
    arc(0, 0, this.size * 0.09, this.size * 0.2, 0, PI);

    // blush
    fill(250, 87, 177);
    ellipse(45, 0, 30, 20);
    ellipse(-45, 0, 30, 20);

    // eyes
    fill(5, 83, 230);
    ellipse(20, -40, 20, 50);
    ellipse(-20, -40, 20, 50);

    // sparkles
    fill(255);
    ellipse(20, -55, 8, 12);
    ellipse(-20, -55, 8, 12);
    // this.drawReferenceShapes();

    pop();
  }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}

// function test(x, y, s) {

// }

// function move() {
//   y = noise(frameCount * 0.01) * height;
// }

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/