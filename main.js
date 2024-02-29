import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const scene = new THREE.Scene()

const light = new THREE.PointLight(0xffffff, 1000)
light.position.set(2.5, 7.5, 15)
scene.add(light)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 10
camera.position.y = -10

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.enableZoom = true

// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

const objLoader = new OBJLoader()
objLoader.load(
    'logo.obj',
    (object) => {
        scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = contenedor.clientWidth / contenedor.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(contenedor.clientWidth, contenedor.clientHeight);
    render()
}

var a = document.getElementById("info")

function animate() {
    requestAnimationFrame(animate)
    if(camera.position.z<120){
    camera.position.z+=0.2
    a.style.opacity = 0;
    }
    else{
        a.style.opacity=1;
    }
    if(camera.position.y>10){
    camera.position.y-=10
}
    controls.update()

    render()

}

function render() {
    renderer.render(scene, camera)
}

animate()