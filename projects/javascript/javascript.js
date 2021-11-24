// JavaScript for 'Drift'

var sun = document.getElementById('spicy');
var mid = 235;
var set = false;
var details = ' rotateX(70deg) rotateY(-3.5deg) translate(-380px, 1000px) skew(30deg)';
var size = 1.2; // Scale between 1.15 and 1.25. Polish in a later version.
var w1 = document.getElementById('1');
var w2 = document.getElementById('2');
var w3 = document.getElementById('3');
var w4 = document.getElementById('4');
var w5 = document.getElementById('5');
var waves = [w1, w2, w3, w4, w5];
var direction = 0;

// Start the sunset() when the mouse crosses the sun.
sun.addEventListener('mouseenter', sunset, {once: true});
sun.addEventListener('click', sunset, {once: true});

// Initiate sunset.
function sunset() {
  if (set == false) {
    set = true;
    setInterval(moveSun, 100);
    console.log('Enjoy the view.');
  }
}

// Set, and stop when beyond the horizon.
function moveSun() {
    if (mid >= 670) {
      set = false;
      clearInterval(moveSun);
    }
    else {
      // console.log(mid);
      sun.setAttribute('cy', mid);
      mid += 0.35;
    }
}

// Calls tide() on the interval.
var makeWaves = setInterval(tide, 20);

// Loop over waves incrementing each a little.
function tide() {
  checkDirection();
  if (direction === 0) {
    size -= 0.0008;
  } else {
    size += 0.0008;
  }
  for (i = 0; i < waves.length; i++) {
    // Stagger the wave updates to create more of a "washing up" effect
    setTimeout(() => {
        waves[i].style.transform = 'scale(' + (size + (Math.random() * 0.002)) + ')' + details;
    }, i * 250)
  }
}

function checkDirection() {
  if (size < 1.15) {
    direction = 1;
  }
  if (size > 1.25) {
    direction = 0;
  }
}

tide();
