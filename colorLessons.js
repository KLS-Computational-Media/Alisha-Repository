function setup() {
  createCanvas(400, 300);
}

function draw() {
  /*background(230, 230, 230)
  rect(1, 1, 20, 20)
  rect(1, 379, 20, 20)
  rect(379, 1, 20, 20)
  rect(379, 379, 20, 20)*/
  background(100, 100, 100);
  //line(0, 50, 400, 300);
  rectMode(CENTER);
  fill(0, 255, 0)
  stroke(0, 0, 255)
  strokeWeight(8);
  rect(200, 150, 150, 150);
  
  fill(255, 0, 0, 175);
  noStroke();
  ellipse(150, 250, 100, 75);
}
