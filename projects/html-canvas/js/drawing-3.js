// JavaScript for:
// Drawing 3 - Falling

// Pixel dimension vars:
var pxd;
var pxw;
var pxh;
// Color global vars:
var r;
var g;
var b;
// Vars to modify via user action:
var randR = 2; // Limit from 0 - 130
var randG = 4.1;
var randB = 4;
var scalar = 80; // Limit from 3 - 100

function setup() {
  createCanvas(600, 450);
  frameRate(2); // NOTE the intentional framerate delay.
}

function draw() {
  for(var x = 0; x < width / scalar; x++) {
    for (var y = 0; y < height / scalar; y++) {
      updateR();
      updateG();
      updateB();
      fill(r, g, b);
      noStroke();
      rect(x*scalar, y*scalar, scalar, scalar);
    }
  }
  updateScalar();
}

// Disfunctional encapsulation function: (something ado w/global vars???)

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

function updateScalar() {
  if (mouseX > 15 && mouseX < 285) {
    scalar = mouseX / 3;
  }
  else if (mouseX > 284 && mouseX < 316) {
    scalar = 100;
  }
  else if (mouseX > 315 && mouseX < 585) {
    scalar = (-1 * (mouseX / 3)) + 200;
  }
  else {
    scalar = 5;
  }
}

function updateR() {
  // if (r < 255) {
  //   r = r + randR * (random(2,4));
  // } else {
  //   r = 0;
  // }
  r = random(50, 75);
}

function updateG() {
  if (g < 255) {
    g = g + randG * (random(4,5));
  } else {
    g = 0;
  }
}

function updateB() {
  if (b < 255) {
    b = b + randB; //3 //*random(2,3);
    randB = random(3.9,4.1);
  } else {
    b = 0;
  }
}

window.addEventListener('load', draw);
