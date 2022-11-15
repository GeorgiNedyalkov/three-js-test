import "./style.css"

import * as THREE from "three"

// 1. Scene
// 2. Camera
// 3. Renderer

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
})
