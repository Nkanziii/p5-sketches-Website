let backgroundSketch = function(p) {

    let stars = [];
  
    p.setup = function() {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  
      canvas.position(0, 0);
      canvas.style("position", "fixed");
      canvas.style("z-index", "-1");
  
      // Generate stars once
      for (let i = 0; i < 400; i++) {
        stars.push({
          x: p.random(p.width),
          y: p.random(p.height),
          size: p.random(1, 3)
        });
      }
    };
  
    p.draw = function() {
      p.background(0);
  
      drawStars();
      drawGrid();
    };
  
    function drawStars() {
      p.stroke(255);
  
      for (let s of stars) {
        p.strokeWeight(s.size);
        p.point(s.x, s.y);
      }
    }
  
    function drawGrid() {
      p.stroke("#ff2fd0");
      p.strokeWeight(2);
      p.noFill();
  
      let horizon = p.height * 0.4;
      let spacing = 60;
  
      // Horizontal perspective lines
      for (let i = 0; i < 20; i++) {
        let y = p.map(i, 0, 20, p.height, horizon);
        p.line(0, y, p.width, y);
      }
  
      // Vertical perspective lines
      for (let x = -p.width; x < p.width * 2; x += spacing) {
        p.beginShape();
        for (let y = horizon; y < p.height; y += 10) {
          let scaleFactor = p.map(y, horizon, p.height, 0.2, 1);
          let scaledX = p.width/2 + (x - p.width/2) * scaleFactor;
          p.vertex(scaledX, y);
        }
        p.endShape();
      }
    }
  
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  
  };
  
  new p5(backgroundSketch);