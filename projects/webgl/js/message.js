// Credit to Augusto Romano for the printer and paper models:
// https://archive3d.net/?a=download&id=9c746216
// Credit to Emil Persson (aka Humus) for the wood texture and skybox:
// http://www.humus.name

var myCamera, scene, light, spotlight, renderer, controls;
var geometry, material, mesh;
var boxGeometry, boxMaterial, box;
var printer, printMaterial, paper, paperMaterial;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Skybox
  var path = "images/";
  var format = ".jpg";
  var urls = [
    path + 'pos-x' + format, path + 'neg-x' + format,
    path + 'pos-y' + format, path + 'neg-y' + format,
    path + 'pos-z' + format, path + 'neg-z' + format
  ];
  var skybox = new THREE.CubeTextureLoader().load(urls);
  skybox.format = THREE.RGBFormat;
  skybox.receiveShadow = true;

  // skybox rendering
  var shader = THREE.ShaderLib["cube"];
  shader.uniforms["tCube"].value = skybox;

  var material = new THREE.ShaderMaterial({
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: shader.uniforms,
    depthWrite: false,
    side: THREE.DoubleSide
  });

  var geometry = new THREE.BoxGeometry(2000, 2000, 2000);
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Camera
  myCamera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  myCamera.position.set(-200, 0, 500);
  scene.add(myCamera);

  // Light
  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  // Spotlight
  spotlight = new THREE.SpotLight(0xffffff, 1, 5000, 1); // color, intensity, distance, angle
  spotlight.position.set(600, 1000, -1000);
  spotlight.castShadow = true;
  // Shadow map texture width/height (Quality)
  spotlight.shadow.mapSize.width = 5000;
  spotlight.shadow.mapSize.height = 5000;
  // Spotlight frustum near/far/fov
  spotlight.shadow.camera.near = 1500;
  spotlight.shadow.camera.far = 2500;
  spotlight.shadow.camera.fov = 25;
  scene.add(spotlight);

  // view shadow camera
  // var helper = new THREE.CameraHelper(spotlight.shadow.camera);
  // scene.add(helper);

  // Scaling 'zoom' sphere (WIP)
  // material = new THREE.MeshLambertMaterial({envMap: skybox, side: THREE.DoubleSide});
  // geometry = new THREE.SphereGeometry(1000, 50, 50); // radius, number of vertices
  // geometry.receiveShadow = true;
  // mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh);

  // Printer
  printMaterial = new THREE.MeshLambertMaterial({color: 0xaaaaaa, wireframe: false});
  var loader = new THREE.BufferGeometryLoader();
  loader.load('printer.json', function(geometry) {
    printer = new THREE.Mesh(geometry, printMaterial);
    printer.scale.set(50, 50, 50);
    printer.position.x = 150;
    printer.position.y = -380;
    printer.position.z = 400;
    printer.rotation.y = 2;
    printer.castShadow = true;
    scene.add(printer);
  });

  // Paper
  var textureLoader = new THREE.TextureLoader();
  textureLoader.load('images/printout.jpg', function(texture) {
    paperMaterial = new THREE.MeshLambertMaterial({map: texture, side: THREE.DoubleSide});
    var loader = new THREE.BufferGeometryLoader();
    loader.load('paper.json', function(geometry) {
      paper = new THREE.Mesh(geometry, paperMaterial);
      paper.scale.set(30, 30, 30);
      paper.position.x = 190;
      paper.position.y = -360;
      paper.position.z = 385;
      paper.rotation.x = Math.PI / -2;
      paper.rotation.z = 2;
      paper.castShadow = true;
      scene.add(paper);
    });
  });

  // Table
  var textureLoader = new THREE.TextureLoader();
  textureLoader.load('images/wood.jpg', function(texture) {
    boxMaterial = new THREE.MeshLambertMaterial({map: texture, side: THREE.DoubleSide});
    boxGeometry = new THREE.BoxGeometry(300, 500, 25);
    box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.rotation.x = Math.PI / -2;
    box.rotation.z = Math.PI / 2;
    box.position.y = -400;
    box.position.z = 400;
    box.receiveShadow = true;
    scene.add(box);
  });

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  controls = new THREE.OrbitControls(myCamera, renderer.domElement);

  // Write to the Container element:
  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  if (paper) {
    if (paper.position.y < -370) {
      paper.position.x = 190;
      paper.position.y = -360;
      paper.position.z = 385;
    }
    else {
      if (paper.position.x > 130) {
        if (paper.position.z % 2 == 0) {
          paper.position.x -= 1;
          paper.position.y += 0.5;
          paper.position.z -= 1;
        }
        else {
          paper.position.z -= 1;
        }
      }
      else {
        paper.position.y -= 1;
      }
    }
  }


  renderer.render(scene, myCamera);
  controls.update();
}

init();
animate();
