import {
  Stats,
  OrbitControls,
  Environment,
  Sphere
} from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import Truck from './Truck'
import Korrigan from './Korrigan'
import { Suspense } from 'react'

export default function App() {
  const gltf = useLoader(GLTFLoader, '/models/monkey.glb')

  return (
    <Canvas camera={{ position: [-0.5, 1, 5] }}>
      <Environment preset="forest" background blur={0.5} />
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}>
        <Sphere args={[0.25]} />
      </directionalLight>
      <primitive object={gltf.scene} position={[0, 1, 0]} />
      <Suspense fallback={null}>
        <Truck />
        <Korrigan position={[-2, 0, 0]} />
      </Suspense>
      <OrbitControls target={[0, 1, 0]} />
      <Stats />
    </Canvas>
  )
}
