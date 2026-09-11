'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedOrb() {
  const orbRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!orbRef.current) return
    // Rotation lente de base
    orbRef.current.rotation.x += 0.002
    orbRef.current.rotation.y += 0.003
    
    // Suivi subtil de la souris
    const targetX = (state.pointer.x * Math.PI) / 4
    const targetY = (state.pointer.y * Math.PI) / 4
    orbRef.current.rotation.x += 0.05 * (targetY - orbRef.current.rotation.x)
    orbRef.current.rotation.y += 0.05 * (targetX - orbRef.current.rotation.y)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={orbRef} args={[1.6, 64, 64]}>
        <MeshDistortMaterial
          color="#c9a962"
          emissive="#4a6741"
          emissiveIntensity={0.6}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent={true}
          opacity={0.85}
        />
      </Sphere>
      <Sparkles count={120} scale={6} size={2.5} speed={0.3} opacity={0.7} color="#c9a962" />
    </Float>
  )
}

export default function EnergyOrb() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-90">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#4a6741" />
        <AnimatedOrb />
      </Canvas>
    </div>
  )
}
