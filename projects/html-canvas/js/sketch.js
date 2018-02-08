var r;
var g;
var b;
var randR = 2; // Limit from 0 - 130
var randG = 0;
var randB = 1;
var scalar = 5; // Limit from 3 - 100

// var angle = 0;

function setup() {
  createCanvas(600, 450);
  frameRate(0.7);
}

function draw() {

  for(var i = 0; i < width / scalar; i++) {
    for (var j = 0; j < height / scalar; j++) {

      if (r < 255) {
        r = r + randR * (random(2,4));
      } else {
        r = 0;
      }

      if (g < 255) {
        g = g + randG; //3 //*(random(4,5));
      } else {
        g = 0;
      }

      if (b < 255) {
        b = b + randB; //3 //*random(2,3);
      } else {
        b = 0;
      }

      // fillC(r);
      // fillC(g);
      // fillB(b);

      fill(r, g, b);
      noStroke();
      rect(i*scalar, j*scalar, scalar, scalar);
    }
  }
}

// Disfunctional encapsulation function: (something ado w/global vars)

// function fillC(x) {
//     this.x = x;
//     if (this.x < 255) {
//       this.x = this.x + 15;
//       x = this.x;
//     } else {
//       this.x = 0;
//       x = this.x;
//     }
// }

// Mouse following:

  // push();
  // translate(mouseX, mouseY);
  // rotate(angle);
  // fill(0,0,0);
  // ellipse(30,30,50,50);
  // angle2 += 0.04;
  // pop();
