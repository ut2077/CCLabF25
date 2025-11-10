// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 5; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 500; // Decide the maximum number of particles.

let particles = [];
let mic;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  mic = new p5.AudioIn();
  mic.start();
}
function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}
function draw() {
  background(0);
  noStroke();
  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.move();
    p.display();
  }
  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
}