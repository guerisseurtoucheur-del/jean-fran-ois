'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Points, PointMaterial } from '@react-three/drei'

function Particles() {
  const ref = useRef<THREE.Points>(null)
  
  // Generate random points in a sphere
  const [positions] = useMemo(() => {
    const count = 3000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 5
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    return [positions]
  }, [])

  // Mouse interaction
  const mouse = useRef({ x: 0, y: 0 })
  
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the whole particle system slowly
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15

      // Slight reaction to mouse
      ref.current.position.x += (mouse.current.x * 0.5 - ref.current.position.x) * 0.05
      ref.current.position.y += (mouse.current.y * 0.5 - ref.current.position.y) * 0.05
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c9a962"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function EtherealGlow() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      const scale = 2 + Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial 
        color="#c9a962" 
        transparent 
        opacity={0.05} 
        blending={THREE.AdditiveBlending} 
        wireframe
      />
    </mesh>
  )
}

export default function HeroEnergyField() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
      {/* Background gradients to blend with the rest of the dark site */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      
      {/* Center glowing orb effect using pure CSS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962] rounded-full blur-[150px] opacity-10 mix-blend-screen z-0 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <fog attach="fog" args={['#0a0a0a', 5, 20]} />
        <ambientLight intensity={0.5} />
        <Particles />
        <EtherealGlow />
      </Canvas>
    </div>
  )
}
