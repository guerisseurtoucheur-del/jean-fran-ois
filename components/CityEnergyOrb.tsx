'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

function EnergyOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#c9a962" // Gold/Premium color
          attach="material"
          distort={0.4} // Level of distortion
          speed={2} // Speed of the distortion animation
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#b45334" // Warm inner glow
          emissiveIntensity={0.5}
          wireframe={true}
        />
      </Sphere>
    </Float>
  )
}

function InnerGlow() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={2}
        transparent
        opacity={0.3}
      />
    </Sphere>
  )
}

export default function CityEnergyOrb() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-[#0a0a0a]">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1510] via-[#0a0a0a] to-[#14100c] opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962] rounded-full blur-[150px] opacity-10 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#b45334] rounded-full blur-[120px] opacity-20 mix-blend-screen" />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#c9a962" />
        
        <EnergyOrb />
        <InnerGlow />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
