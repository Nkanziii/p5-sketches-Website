let sketchOne = function(p) {

  let colors = ["#E9D7B0", "#E8C843", "#E8B443", "#E88243", "#E9D7B0"];
  let angle = 0;

  p.setup = function() {
    let canvas = p.createCanvas(500, 500);
    canvas.parent("container4");
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
  };

  p.draw = function() {
    p.background('#0B0579');

    for (let i = 0; i < 10; i++) {
      p.push();

      let circleAngle = p.map(i, 0, 9, 0, 360);
      let strokeColor = colors[i % colors.length];
      p.stroke(strokeColor);

      p.translate(p.width / 2, p.height / 2);
      p.scale(5);
      p.rotate(circleAngle + angle * i / 10);

      drawTiles();

      p.pop();
    }

    angle += 1;
  };

  function drawTiles() {
    p.noFill();
    p.square(0, 0, 50);
    p.circle(0, 0, 50);
    p.triangle(-25, -25, 25, -25, 0, 25);
  }

};

new p5(sketchOne);
