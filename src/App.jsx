import { Stats, OrbitControls, Circle, useGLTF, Stage } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import Truck from './Truck'
import { Suspense } from 'react'

export default function App() {
  const gltf = useLoader(GLTFLoader, '/models/monkey.glb')

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive
        object={gltf.scene}
        position={[2, 1, 0]}
        children-0-castShadow
      />
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1} environment="city">
          <Truck />
        </Stage>
      </Suspense>
      <OrbitControls target={[0, 1, 0]} />
      <Stats />
    </Canvas>
  )
}
