let sketchThree = function(p) {

  let inc = 0.1;   // increment
  let scl = 10;    // scale
  let cols, rows;
  let offZ = 0;

  p.setup = function() {
    let canvas = p.createCanvas(500, 500);
    canvas.parent("container5"); 
    cols = Math.floor(p.width / scl);
    rows = Math.floor(p.height / scl);
  };

  p.draw = function() {
    p.background(0);

    let offY = 0;

    for (let y = 0; y < rows; y++) {

      let offX = 0;

      for (let x = 0; x < cols; x++) {

        let angle = p.noise(offX, offY, offZ) * p.TWO_PI;
        let v = p5.Vector.fromAngle(angle);

        p.stroke(255);

        p.push();
        p.translate(x * scl, y * scl);
        p.rotate(v.heading());
        p.line(0, 0, scl, 0);
        p.pop();

        offX += inc;
      }

      offY += inc;
    }

    offZ += 0.1;
  };

};

new p5(sketchThree);
