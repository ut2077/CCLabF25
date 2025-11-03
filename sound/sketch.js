let speedX = 5;
let x = 25;
let mySound;
let mySound2;
function preload() {
  mySound = loadSound("assets/kick.mp3");
  mySound2 = loadSound("assests/beat.mp3")
}
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
  fill(0);
  circle(x, height / 2, 50);
  x = x + speedX;
  if (x > width - 25) {
    speedX = -speedX;
    mySound.play();
  } if (x < 25) {
    speedX = -speedX;
    mySound2.play();
  }
}

// function mousePressed() {
//   if (mySound.isPlaying() == false) {
//     mySound.play();
//   } else {
//     mySound.pause();
//   }
// }