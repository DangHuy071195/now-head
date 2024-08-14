// StarCanvas.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';

const StarShape = () => {
  const shape = new THREE.Shape();
  const outerRadius = 0.4;
  const innerRadius = 0.2;
  const spikes = 5;

  // Create a star-like shape
  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / spikes;
    shape.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
  }
  shape.closePath();

  return new THREE.ShapeGeometry(shape);
};

const RandomStar = () => {
  const meshRef = useRef<any>();
  const lightRef = useRef<any>();

  // Generate random positions and speeds
  const [position, velocity] = useMemo(() => {
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
    );

    const vel = new THREE.Vector3(
      (Math.random() - 0.5) * 0.1, // Increased speed for crazier movement
      (Math.random() - 0.5) * 0.1,
      (Math.random() - 0.5) * 0.1,
    );

    return [pos, vel];
  }, []);

  // Animate the star's position, scale, and lighting
  useFrame(() => {
    meshRef.current.position.add(velocity);

    // Calculate speed and adjust intensity and scale accordingly
    const speed = velocity.length();
    const intensity = speed * 5; // More intense lighting with speed
    lightRef.current.intensity = intensity;

    const scale = Math.max(0.6, Math.min(speed * 3, 3)); // Scale with speed
    meshRef.current.scale.set(scale, scale, scale);

    // Loop the position if the star goes out of bounds
    if (meshRef.current.position.length() > 100) {
      meshRef.current.position.copy(position);
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        position={position}>
        <primitive
          object={StarShape()}
          attach="geometry"
        />
        <meshBasicMaterial color={0xffd700} /> {/* Gold color for VN star */}
      </mesh>
      <pointLight
        ref={lightRef}
        position={position}
        intensity={0}
      />
    </>
  );
};

const StarCanvas = () => {
  const starsArray = useMemo(() => {
    return new Array(400).fill(null).map((_, i) => <RandomStar key={i} />);
  }, []);

  return (
    <Canvas
      className="absolute inset-0 z-0"
      style={{ position: 'absolute' }}>
      <ambientLight intensity={0.5} />
      {starsArray}
    </Canvas>
  );
};

export default StarCanvas;
