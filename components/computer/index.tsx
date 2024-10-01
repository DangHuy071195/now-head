import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { GUI } from 'lil-gui'; // Import GUI directly from lil-gui

interface ComputersInterfaceProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersInterfaceProps> = ({ isMobile }) => {
  const computers = useGLTF('/gaming_desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor={'black'}
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computers.scene}
        scale={isMobile ? 0.5 : 0.65}
        position={isMobile ? [0, -1, 0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 720px)');
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (e: any) => setIsMobile(e.matches);
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 0, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100vh' }}>
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
        />
        <Preload all />
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
