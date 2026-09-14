'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Float, Trail } from '@react-three/drei'

interface ChakraBodyProps {
  activeChakraIndex: number | null
  status: 'idle' | 'blocked' | 'healing' | 'healed'
}

const CHAKRAS = [
  { name: 'Racine', y: -3 },
  { name: 'Sacré', y: -2 },
  { name: 'Plexus', y: -1 },
  { name: 'Coeur', y: 0 },
  { name: 'Gorge', y: 1 },
  { name: '3e Oeil', y: 2 },
  { name: 'Couronne', y: 3 },
]

function ChakraOrb({ index, y, activeChakraIndex, status }: { index: number, y: number, activeChakraIndex: number | null, status: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshBasicMaterial>(null)
  const auraRef = useRef<THREE.Mesh>(null)
  
  const isActive = index === activeChakraIndex
  
  // Target color based on status
  const targetColor = useMemo(() => new THREE.Color(), [])
  
  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current || !auraRef.current) return

    // Base rotation
    meshRef.current.rotation.y += delta * 0.5
    meshRef.current.rotation.x += delta * 0.2
    
    // Determine color and scale
    let scale = 1.0
    let auraScale = 1.5
    let colorHex = '#e5d397' // Pale gold by default
    
    if (isActive) {
      if (status === 'blocked') {
        colorHex = '#ef4444' // Red for blocked
        scale = 1.2 + Math.sin(state.clock.elapsedTime * 8) * 0.2 // Fast pulse
        auraScale = 2.0
      } else if (status === 'healing') {
        colorHex = '#c9a962' // Bright Gold
        scale = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.4 // Slow powerful pulse
        auraScale = 3.0 + Math.sin(state.clock.elapsedTime * 4) * 0.5
      } else if (status === 'healed') {
        colorHex = '#10b981' // Emerald Green for healed
        scale = 1.3
        auraScale = 2.5
      }
    } else {
      if (status !== 'idle' && activeChakraIndex !== null) {
        // Dim others if one is active
        scale = 0.8
        colorHex = '#4a4a4a'
      }
    }
    
    // Smooth transitions
    targetColor.set(colorHex)
    materialRef.current.color.lerp(targetColor, 0.05)
    
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    auraRef.current.scale.lerp(new THREE.Vector3(auraScale, auraScale, auraScale), 0.1)
    
    // Aura rotation
    auraRef.current.rotation.z -= delta * 0.3
    auraRef.current.rotation.y += delta * 0.1
  })

  return (
    <group position={[0, y, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshBasicMaterial ref={materialRef} transparent opacity={0.9} wireframe={false} />
        </mesh>
        
        {/* Glowing Aura */}
        <mesh ref={auraRef}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshBasicMaterial color={isActive && status === 'blocked' ? '#ef4444' : '#c9a962'} transparent opacity={0.15} wireframe={true} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
    </group>
  )
}

function ConnectionLine() {
  const points = useMemo(() => {
    return [new THREE.Vector3(0, -3.5, 0), new THREE.Vector3(0, 3.5, 0)]
  }, [])
  
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    return geo
  }, [points])

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#c9a962" transparent opacity={0.2} linewidth={2} />
    </line>
  )
}

export default function ChakraBody3D({ activeChakraIndex, status }: ChakraBodyProps) {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <fog attach="fog" args={['#0a0a0a', 5, 20]} />
        <ambientLight intensity={0.5} />
        
        <group position={[0, 0, 0]}>
          <ConnectionLine />
          
          {CHAKRAS.map((chakra, index) => (
            <ChakraOrb 
              key={chakra.name}
              index={index}
              y={chakra.y}
              activeChakraIndex={activeChakraIndex}
              status={status}
            />
          ))}
        </group>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2 + 0.3}
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  )
}
