// JavaScript for 'Rad'

var sun = document.getElementById('spicy');
var rad = document.getElementById('rad');
// var flip = document.getElementById('flip');

var hsl1 = "hsl(180, 100%, 27%)";
var hsl2 = "hsl(193, 100%, 42%)";
var degree = -120; // angle of gradient
var grad = "linear-gradient(" + degree + "deg, mediumturquoise, darkcyan , aqua, ivory, gold)";

rad.style.backgroundImage = grad;
var mid = 480;
var set = false;
var direction = 0;

// sun.addEventListener('click', invert);
//
// function invert() {                        ??? No luck here
//   flip.setAttribute('hueRotate.values', 0);
// }

// Set, and stop when beyond the horizon.
function moveSun() {

    // console.log(mid);
    sun.setAttribute('cy', mid);

  requestAnimationFrame(moveSun);

  checkDirection();
  if (direction <= 0) {
    mid -= 6;
  } else {
    mid += 6;
  }
}

function checkDirection() {
  if (mid < 0) {
    direction = 1;
    sun.style.transform = 'rotate(' + 12 + 'deg)';
  }
  if (mid > 1024) {
    direction = 0;
    sun.style.transform = 'rotate(' + -18 + 'deg)';
  }
}

requestAnimationFrame(moveSun);

  // var hsl1 = "hsl(" + hue1 + ", 100%, 50%)";
  // var hsl2 = "hsl(" + hue2 + ", 100%, 50%)";
  // var degree = -120; // angle of gradient
  // var hslGradient = "linear-gradient(" + degree + "deg," + hsl1 + "," + hsl2 + ")";
  //
  // // backgroundImage NOT backgroundColor applies gradients
  // field.style.backgroundImage = hslGradient;
  //
  // if (hue1 < 360) {
  //   hue1 += .5;
  // } else {
  //   hue1 = 0;
  // }
  //
  // if (hue2 < 360) {
  //   hue2 += .2;
  // } else {
  //   hue2 = 0;
  // }
  //
  //
  // for (var i = 0; i < data.length; i += 4) {
  //   data[i] = 255 - data[i]; // Invert red
  //   data[i+1] = 255 - data[i+1]; // Invert green
  //   data[i+2] = 255 - data[i+2]; // Invert blue
  //
  // }
  //
