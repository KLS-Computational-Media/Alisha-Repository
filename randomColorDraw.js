let r, g, b;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  circle(mouseX, mouseY, 40);
}


function mousePressed(){
  r = (random(0, 255));
  b = (random(0, 255));
  g = (random(0, 255));
  circle(mouseX, mouseY, 40);
  fill(r, b, g, 50);
}
