let skinColor = "#E1A596";
let currentExpression = 0;
let expressions = [];
let bgSeed = 1; // seed for background pattern


function setup() {
  let canvas = createCanvas(450, 450);
  canvas.parent("container2");
  expressions = [emotionOne, emotionTwo, emotionThree];
}

function draw() {
  background(220);

  // lock the background randomness to a seed
  randomSeed(bgSeed);

  alwaysSame();
  expressions[currentExpression]();
}

function mousePressed() {
  // go to next expression
  currentExpression = (currentExpression + 1) % expressions.length;

  // change background seed so pattern changes
  bgSeed = floor(random(100000));
}

function alwaysSame() {

  // ------------ BACKGROUND ------------ //
  let circleSize = 33;
  let marginX = 10;
  let marginY = 10;
  let verticalSpacing = 5;
  let horizontalSpacing = 5;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      let x = 20 + i * (circleSize + horizontalSpacing) + marginX;
      let y = 20 + j * (circleSize + verticalSpacing) + marginY;
      
      noStroke();
      fill(random(255), random(220), random(180));
      circle(x, y, circleSize);

      let smallCircle = random(circleSize * 0.2, circleSize * 0.8);
      fill(random(255), random(220), random(180));
      circle(x, y, smallCircle);

      let smallestCircle = random(circleSize * 0.2, circleSize * 0.6);
      fill(random(255), random(220), random(180));
      circle(x, y, smallestCircle);
    }
  }

  // ------------ FACE SHAPE ------------ //
  rectMode(CENTER);
  
  noStroke();
  fill("rgb(88,39,39)");
  rect(220, 300, 178, 210);

  fill("#E08771");
  rect(220, 245, 180, 60, 70);

  fill("#E13518");
  arc(220, 445, 250, 220, 0, TWO_PI);

  fill("#E08771");
  rect(223, 300, 60, 130, 30);

  fill(skinColor);
  rect(220, 220, 162, 200, 90);
  
  noStroke();
  beginShape();
  vertex(148, 275);
  vertex(165, 310);
  vertex(218, 340);
  vertex(227, 340);
  vertex(275, 310);
  vertex(293, 275);
  endShape(CLOSE);

  fill("#E19284");
  ellipse(218, 280, 30, 10);

  fill("rgb(88,39,39)");
  beginShape();
  curveVertex(215, 150);
  curveVertex(140, 210);
  curveVertex(140, 145);
  curveVertex(215, 110);
  curveVertex(297, 140);
  curveVertex(300, 210);
  endShape(CLOSE);
}

// ------------------ EXPRESSION 1 ------------------ //
function emotionOne() {
  fill(255);
  noStroke();
  ellipse(180, 240, 40, 25);
  ellipse(255, 240, 40, 25);

  strokeWeight(4);
  stroke("rgb(88,39,39)");
  noFill();
  arc(180, 240, 40, 20, PI, TWO_PI);
  triangle(160, 240, 160, 235, 150, 233);

  arc(255, 240, 40, 20, PI, TWO_PI);
  triangle(275, 240, 275, 235, 285, 233);

  noStroke();
  fill("rgb(88,39,39)");
  beginShape();
  vertex(160, 210);
  vertex(195, 220);
  vertex(200, 213);
  endShape(CLOSE);

  beginShape();
  vertex(230, 210);
  vertex(240, 217);
  vertex(275, 213);
  endShape(CLOSE);

  fill("#E65D5D");
  noStroke();
  beginShape();
  vertex(190, 300);
  vertex(195, 305);
  vertex(243, 305);
  vertex(248, 300);
  vertex(230, 295);
  vertex(220, 300);
  vertex(210, 295);
  endShape(CLOSE);

  fill("#E67C81");
  ellipse(219, 315, 30, 10);

  let leftX = 180, leftY = 240;
  let rightX = 255, rightY = 240;
  let maxX = 7, maxY = 4;

  let lpx = constrain(mouseX, leftX - maxX, leftX + maxX);
  let lpy = constrain(mouseY, leftY - maxY, leftY + maxY);
  let rpx = constrain(mouseX, rightX - maxX, rightX + maxX);
  let rpy = constrain(mouseY, rightY - maxY, rightY + maxY);

  fill(0);
  circle(lpx, lpy, 15);
  circle(rpx, rpy, 15);
}

// ------------------ EXPRESSION 2 (SMIRK) ------------------ //
function emotionTwo() {
  fill(255);
  noStroke();
  ellipse(180, 240, 40, 22);
  ellipse(255, 240, 40, 22);

  stroke("rgb(88,39,39)");
  strokeWeight(3);
  noFill();
  arc(180, 238, 40, 16, PI, TWO_PI);
  arc(255, 238, 40, 16, PI, TWO_PI);

  let leftX = 183, leftY = 242;
  let rightX = 258, rightY = 242;
  let maxX = 4, maxY = 3;

  let lpx = constrain(mouseX, leftX - maxX, leftX + maxX);
  let lpy = constrain(mouseY, leftY - maxY, leftY + maxY);
  let rpx = constrain(mouseX, rightX - maxX, rightX + maxX);
  let rpy = constrain(mouseY, rightY - maxY, rightY + maxY);

  fill(0);
  noStroke();
  circle(lpx, lpy, 13);
  circle(rpx, rpy, 13);

  fill("rgb(88,39,39)");
  beginShape();
  vertex(160, 212);
  vertex(193, 218);
  vertex(200, 214);
  endShape(CLOSE);

  beginShape();
  vertex(230, 205);
  vertex(245, 210);
  vertex(278, 202);
  endShape(CLOSE);

  noFill();
  stroke("#E65D5D");
  strokeWeight(4);
  arc(220, 300, 55, 25, 0.2, PI - 0.4);

  line(245, 294, 252, 302);
}

// ------------------ EXPRESSION 3 (SAD) ------------------ //
function emotionThree() {
  fill(255);
  noStroke();
  ellipse(180, 242, 40, 23);
  ellipse(255, 242, 40, 23);

  stroke("rgb(88,39,39)");
  strokeWeight(3);
  noFill();
  arc(180, 238, 40, 18, PI, TWO_PI);
  arc(255, 238, 40, 18, PI, TWO_PI);

  let leftX = 180, leftY = 246;
  let rightX = 255, rightY = 246;
  let maxX = 4, maxY = 3;

  let lpx = constrain(mouseX, leftX - maxX, leftX + maxX);
  let lpy = constrain(mouseY, leftY - maxY, leftY + maxY);
  let rpx = constrain(mouseX, rightX - maxX, rightX + maxX);
  let rpy = constrain(mouseY, rightY - maxY, rightY + maxY);

  fill(0);
  noStroke();
  circle(lpx, lpy, 13);
  circle(rpx, rpy, 13);

  fill("rgb(88,39,39)");
  beginShape();
  vertex(160, 215);
  vertex(190, 210);
  vertex(200, 220);
  endShape(CLOSE);

  beginShape();
  vertex(230, 220);
  vertex(240, 210);
  vertex(275, 215);
  endShape(CLOSE);

  noFill();
  stroke("#E65D5D");
  strokeWeight(4);
  arc(220, 315, 60, 35, PI, TWO_PI);
}
