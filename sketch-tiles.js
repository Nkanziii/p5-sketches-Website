let sketchTwo = function(p) {

  let colors = ["#D0BAF5", "#0E05F2", "#AA05F2", "#5C05F2", "#0547F2", "#0547F2"];
  let count = 10;
  let angle = 0;
  let t = 0;
  let sz = 40;

  p.setup = function() {
    let canvas = p.createCanvas(800, 500);
    canvas.parent("container3");
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
  };

  p.draw = function() {
    p.background(0);

    for (let i = 0; i < sz; i++) {

      let scl = p.map(p.sin(t), -1, 1, 0.4, 1.2);

      p.push(); // important: isolate transforms
      p.translate(p.width / 2, p.height / 2);
      p.rotate(angle);
      p.scale(scl);
      drawTile();
      p.pop();
    }

    angle += 0.5;
    t += 0.8;
  };

  function drawTile() {
    p.noFill();

    for (let i = -count / 2; i < count / 2; i++) {
      for (let j = -count / 2; j < count / 2; j++) {

        let x = j * sz;
        let y = i * sz;

        let selectedColorIndex =
          Math.round(i + j + p.frameCount / 2.5) % colors.length;

        let selectedColor = colors[selectedColorIndex];

        if (selectedColor) {
          p.stroke(selectedColor);
        }

        p.square(x, y, sz * 2);
        p.circle(x, y, sz * 2);
      }
    }
  };

};

new p5(sketchTwo);