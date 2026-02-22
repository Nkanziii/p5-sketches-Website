let sketch2 = function(p) {

  let colors = ["#E89C5D", "#0E05F2", "#AA05F2", "#5C05F2", "#0547F2", "#0547F2", "#E8C45D", "#E8845D", "#E8D45D"];
  
  let angle = 0;
  let count = 20;
  let t = 0.01;
  
  p.setup = function() {
    let canvas = p.createCanvas(450, 450);
    canvas.parent("container1");
    p.angleMode(p.DEGREES);
    p.rectMode(p.CENTER);
  };
  
  p.draw = function() {
    p.background(0);
  
    let scl = p.map(p.sin(t), -1, 1, 0.5, 1);
  
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(angle);
    p.scale(scl);
    tiles();
    p.pop();
  
    angle += 1;
    t += 1;
  };
  
  function tiles() {
    let sz = 50;
  
    for (let i = -count / 2; i < count / 2; i++) {
      for (let j = -count / 2; j < count / 2; j++) {
  
        let x = j * sz;
        let y = i * sz;
  
        let selectedColorIndex =
          p.round(i + j + p.frameCount / 2.5) % colors.length;
  
        let selectedColor = colors[selectedColorIndex];
  
        if (selectedColor) {
          p.stroke(selectedColor);
        }
  
        p.noFill();
        p.square(x, y, sz * 2);
        p.circle(x, y, sz * 2);
        p.triangle(-x, -y, x, -y, x, y);
  
        p.rotate(180);
      }
    }
  }
  
  };
  
  new p5(sketch2);