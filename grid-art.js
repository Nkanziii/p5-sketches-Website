let sketchFive = function(p) {

  p.setup = function() {
    let canvas = p.createCanvas(400, 400);
    canvas.parent("container6"); 
    p.noFill();
    drawPattern();
  };

  p.draw = function() {
    // empty — this is a static sketch
  };

  function drawPattern() {

    p.background('pink');

    let circleSize = 33;
    let marginX = 10;
    let marginY = 10;
    let verticalSpacing = 5;
    let horizontalSpacing = 5;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {

        let x = 20 + i * (circleSize + horizontalSpacing) + marginX;
        let y = 20 + j * (circleSize + verticalSpacing) + marginY;

        // big
        p.fill(p.random(255), p.random(220), p.random(180));
        p.circle(x, y, circleSize);

        // middle
        let smallCircle = p.random(circleSize * 0.2, circleSize * 0.8);
        p.fill(p.random(255), p.random(220), p.random(180));
        p.circle(x, y, smallCircle);

        // small
        let smallestCircle = p.random(circleSize * 0.2, circleSize * 0.6);
        p.fill(p.random(255), p.random(220), p.random(180));
        p.circle(x, y, smallestCircle);
      }
    }
  }

  p.mousePressed = function() {
    drawPattern(); // regenerate pattern cleanly
  };

};

new p5(sketchFive);