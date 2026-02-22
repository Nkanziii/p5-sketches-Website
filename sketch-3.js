let colors = ["#D0BAF5", "#0E05F2", "#AA05F2", "#5C05F2", "#0547F2", "#0547F2"];

let count = 10;

let angle = 0;

let t = 0;

let sz = 40;

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  for (let i = 0; i < sz; i++) {
    let scl = map(sin(t), -1, 1, 0.4, 1.2);

    translate(width / 2, height / 2);
    rotate(angle);
    scale(scl);
    drawTile();
  }

  angle += 0.5;
  t += 0.8;
}

function drawTile() {
  noFill();

  for (let i = -count / 2; i < count / 2; i++) {
    // stroke(random(colors));
    

    
    for (let j = -count / 2; j < count / 2; j++) {
      let x = j * sz;
      let y = i * sz;
      

      
      let selectedColorIndex = round(i+j + frameCount/2.5) % colors.length
      let selectedColor = colors[selectedColorIndex];
      if (selectedColor) {
      stroke(selectedColor);
      }


      square(x, y, sz * 2);
      circle(x, y, sz * 2);
    }
  }
}
