import { useGLTF } from '@react-three/drei'

export default function Model () {
  const gltf = useGLTF('/LittlestTokyo.glb')
  const scene = gltf.scene
  return (
    <primitive
        object={scene}
      
      />
  )
}