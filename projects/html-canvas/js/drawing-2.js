// JavaScript for:
// Drawing 2 - Listening

var bgColor;
var over;
var flipped;
var textA = document.getElementById('textA');
var textB = document.getElementById('textB');
var base;

function setup() {
  var myCanvas = createCanvas(600, 450);
  bgColor = color(25, 240, 90);
  fill('gray');
  rect(width/2, height/2, 294, 244);
}

function draw() {
    background(bgColor);

    // Draw box
    rectMode(CENTER);
    noStroke();

    rectHover();

    rect(width/2, height/2, 294, 244);
}

function mousePressed() {
  if (over == false) {
    base = random(200, 255);
    bgColor = color(random(10, 65), base, base + (random(-150, 50)));
  }
  if (over == true) {
    if (flipped == false) {
      fill('lightgray');
      textA.style.color = "lightgray";
      flipped = true;
    } else {
      fill('gray');
      textA.style.color = "black";
      flipped = false;
    }
  }
}

function rectHover() {
    if ((mouseX > 150 && mouseX < 450) && (mouseY > 100 && mouseY < 350)) {
      over = true;
    } else {
      over = false;
    }
}

window.addEventListener('load', draw);
