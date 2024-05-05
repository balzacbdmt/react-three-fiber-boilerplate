import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-taning/model.gltf'
  )
  const { actions } = useAnimations(animations, group)

  useFrame((_, delta) => {
    if (animations && animations.length) {
      actions.pose_femme.play();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0.12, -0.06, -0.04]} scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Femme.geometry}
          material={materials['color_main.004']}
          skeleton={nodes.Femme.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-taning/model.gltf'
)
