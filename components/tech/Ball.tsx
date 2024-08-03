import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import Loader from '../loader/Loader';
import { TextureLoader } from 'three';

interface BallInterfaceProps {
  imgUrl: string;
  size?: number; // Optional size prop
}

const Ball: React.FC<BallInterfaceProps> = ({ imgUrl, size }) => {
  const texture = useTexture(imgUrl);
  const ballRef = useRef<any>();
  const randomRotation = useRef({
    x: Math.random() * 0.02 - 0.01, // Random value between -0.01 and 0.01
    y: Math.random() * 0.02 - 0.01,
    z: Math.random() * 0.02 - 0.01,
  });

  useFrame(() => {
    if (ballRef.current) {
      ballRef.current.rotation.x += randomRotation.current.x;
      ballRef.current.rotation.y += randomRotation.current.y;
      ballRef.current.rotation.z += randomRotation.current.z;
    }
  });
  return (
    <Float>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        ref={ballRef}
        castShadow
        receiveShadow
        scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={'#fff8eb'}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
  );
};

interface BallCanvasPropsI {
  icon: string; // Ensure icon is a string type
  size?: number; // Optional size prop for the Ball
}

const BallCanvas: React.FC<BallCanvasPropsI> = ({ icon, size }) => {
  const controlsRef = useRef<any>();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 1.0;
    }
  }, []);
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 5] }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls
          ref={controlsRef}
          autoRotate
          autoRotateSpeed={3}
        />
        <Ball
          imgUrl={icon}
          size={size}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
