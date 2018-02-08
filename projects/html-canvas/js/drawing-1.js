// JavaScript for
// Drawing 1 - Woods

var myCanvas = document.getElementById('drawing');
var context = myCanvas.getContext('2d');
var aurora = new Image();
aurora.src = '../images/aurora.jpg'
var scalar = 16;

function drawAurora() {
  context.drawImage(aurora, 0, 0);
}

function setup() {
  frameRate(25); // NOTE the intentional framerate delay.
}

function draw() {
    var imageData = context.getImageData(0, 0, myCanvas.width, myCanvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length / 2; i += 4) {
      data[i*2] = data[i*2 + 64];
      data[i*2+1] = data[i*2 + 33];
      data[i*2+2] = data[i*2 + 18];
    }

    context.putImageData(imageData, 0, 0);
}

window.addEventListener('load', drawAurora);
