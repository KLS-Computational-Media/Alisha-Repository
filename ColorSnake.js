function setup() {
  createCanvas(600, 600);
  background(100, 120, 130)
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } if (mouseX < 100) {
    fill(255, 196, 183);
  }
    else if (mouseX < 200 && mouseX > 100) {
    fill(255, 217, 183);
  }
    else if (mouseX < 300 && mouseX > 200) {
    fill(246, 248, 183);
  }
  else if (mouseX < 400 && mouseX > 300) {
    fill(204, 248, 183);
  }
  else if (mouseX < 500 && mouseX > 400) {
    fill(183, 211, 248);
  }
  else{222, 183, 248
      fill(232, 194, 248);
    }
  ellipse(mouseX, mouseY, 40, 40);
}
