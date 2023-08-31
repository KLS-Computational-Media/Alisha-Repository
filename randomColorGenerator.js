function setup() {
  createCanvas(400, 400);
}

let rectX = 50;
let rectY = 50;

function draw() {
  if (mouseIsPressed) {
    background(220);
    let randomOne = round(random(0, 255));
    let randomTwo = round(random(0, 255));
    let randomThree = round(random(0, 255));
    fill(randomOne, random(randomTwo), random(randomThree));
    ellipse(200, 200, 60);
    textSize(32);
    text(("RGB(" + randomOne + ", " + randomTwo + ", " + randomThree + ")"), 100, 300);
    fill(0, 102, 153);
  }
}
