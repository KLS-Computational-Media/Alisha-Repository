let r = 0;
let b = 0;

function setup() {
  createCanvas(800, 800);
}


function draw() {
  // background
  r = map(mouseX, 0, 800, 0, 255);
  b = map(mouseY, 0, 800, 255, 0)
  background(255, 255, 255)
  // ellipse
  fill(r, 0, b);
  ellipse(200, 125, 100)
  textSize(32);
  text(("RGB(" + round(r) + ", 0," + round(b) + ")"), 100, 300);
  fill(0, 102, 153);  
}
