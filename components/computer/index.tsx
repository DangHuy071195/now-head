import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as dat from 'dat.gui';

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
        scale={isMobile ? 0.01 : 0.75}
        position={isMobile ? [-5, -2, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cameraPosition, setCameraPosition] = useState({ x: 20, y: 3, z: 5 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e: any) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  useEffect(() => {
    const gui = new dat.GUI();
    const cameraFolder = gui.addFolder('Camera Position');
    cameraFolder
      .add(cameraPosition, 'x', -50, 50)
      .onChange((value) => setCameraPosition({ ...cameraPosition, x: value }));
    cameraFolder
      .add(cameraPosition, 'y', -50, 50)
      .onChange((value) => setCameraPosition({ ...cameraPosition, y: value }));
    cameraFolder
      .add(cameraPosition, 'z', -50, 50)
      .onChange((value) => setCameraPosition({ ...cameraPosition, z: value }));
    cameraFolder.open();

    return () => {
      gui.destroy();
    };
  }, [cameraPosition]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
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
