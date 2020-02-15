let angle;

function setup() {
  angle = PI / 10;
}

function draw() {
  var cnv = createCanvas(900, 720);

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  cnv.position(x, y);

  background(0, 0, 255, 50);
  text("Angle: " + degrees(angle), 10, 20);

  translate(width / 2, height - 150);
  stroke(58, 54, 36);
  fill(0, 255, 0, 150);
  noStroke();
  rect(-width / 2, -5, width, 154);

  stroke(58, 54, 36);

  bline(110);
}

function mouseDragged() {
  angle = map(mouseX, 0, width, 0, TWO_PI);
  angle = map(mouseY, 0, height, 0, TWO_PI);
}

function bline(l) {
  let d = l / 19;

  strokeWeight(d);
  line(0, 0, 0, -l);
  translate(0, -l);

  if (l > 10) {
    if (l < 15) {
      stroke(255, 192, 223);
      // strokeWeight(100);
      // rotate(angle / random(1, 2));
      //   // l = l - 1;
    }

    push();
    rotate(angle);
    // strokeWeight(d * 0.6);
    bline(l * 0.6);

    // rotate(-angle / 2);
    // bline(l * 0.6);

    push();
    rotate(angle / 2);
    bline(l * 0.6);
    rotate(angle / 3);
    bline(l * 0.6);
    pop();
    pop();

    push();

    // rotate(angle / 2);
    // bline(l * 0.6);

    // rotate(-angle / 2);
    // bline(l * 0.6);

    rotate(-angle / 2);
    bline(l * 0.6);

    rotate(-angle / 3);
    bline(l * 0.6);

    push();
    rotate(-angle / 2);
    bline(l * 0.6);
    pop();
    pop();
  }
}
