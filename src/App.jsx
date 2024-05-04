import { Canvas } from '@react-three/fiber'
import { Box } from './Box'
import { Stats, OrbitControls } from '@react-three/drei'

export function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box position={[-0.75, 0, 0]} name="A" />
      <Box position={[0.75, 0, 0]} name="B" />
      <Stats />
      <OrbitControls />
      <axesHelper />
      <gridHelper />
    </Canvas>
  )
}
