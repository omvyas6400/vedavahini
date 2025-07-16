// Basic Three.js + GSAP scroll animation setup
let scene, camera, renderer, mesh;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-canvas'), alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Example geometry: a scroll image on a plane
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('assets/vedavahini-scroll.png', (texture) => {
    const geometry = new THREE.PlaneGeometry(3, 4);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// GSAP scroll animation
window.addEventListener('scroll', () => {
  if (mesh) {
    const scrollY = window.scrollY || window.pageYOffset;
    gsap.to(mesh.rotation, { z: scrollY * 0.002, duration: 0.5, overwrite: 'auto' });
    gsap.to(mesh.position, { y: -scrollY * 0.01, duration: 0.5, overwrite: 'auto' });
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
