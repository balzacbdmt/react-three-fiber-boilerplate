import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export function Box(props) {
  const ref = useRef()
  const [isRotating, setIsRotating] = useState(false)

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setIsRotating(true)}
      onPointerUp={() => setIsRotating(false)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}
