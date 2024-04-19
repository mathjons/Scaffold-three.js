const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scaffoldGeometry = new THREE.BoxGeometry(1, 1, 1);
const scaffoldMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

const pole1 = new THREE.Mesh(scaffoldGeometry, scaffoldMaterial);
pole1.scale.set(0.1, 2, 0.1);
pole1.position.set(-0.5, 1, -0.5);
scene.add(pole1);

const pole2 = new THREE.Mesh(scaffoldGeometry, scaffoldMaterial);
pole2.scale.set(0.1, 2, 0.1);
pole2.position.set(0.5, 1, -0.5);
scene.add(pole2);

const pole3 = new THREE.Mesh(scaffoldGeometry, scaffoldMaterial);
pole3.scale.set(0.1, 2, 0.1);
pole3.position.set(-0.5, 1, 0.5);
scene.add(pole3);

const pole4 = new THREE.Mesh(scaffoldGeometry, scaffoldMaterial);
pole4.scale.set(0.1, 2, 0.1);
pole4.position.set(0.5, 1, 0.5);
scene.add(pole4);

const platform1 = new THREE.Mesh(scaffoldGeometry, scaffoldMaterial);
platform1.scale.set(1.2, 0.1, 1.2);
platform1.position.set(0, 0.5, 0);
scene.add(platform1);

const platform2 = new THREE.Mesh(scaffoldGeometry, scaffoldMaterial);
platform2.scale.set(1.2, 0.1, 1.2);
platform2.position.set(0, 1.5, 0);
scene.add(platform2);

camera.position.set(3, 3, 3);
camera.lookAt(0, 1, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();