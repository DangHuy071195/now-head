import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { GUI } from 'lil-gui'; // Import GUI directly from lil-gui
import { div } from 'three/webgpu';
import ProfileCard from '../profile-card';

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
    <div className="w-full flex flex-col sm:flex-col md:flex-row items-center justify-center mt-[4.4rem] gap-[2.4rem] ">
      <ProfileCard
        avatarUrl="/user-card.jpg"
        name="Nguyen Dang Huy"
        title="Middle Frontend Developer"
        handle="ittokid"
        status="Online"
        bio="I'm a Frontend Developer with experience in building web applications using React, Next.js, and TypeScript. I love creating beautiful and functional user interfaces that enhance the user experience."
        stats={{
          followers: 2453,
          following: 162,
          likes: 4.8,
        }}
        onContactClick={(type: string) => {
          console.log(`clicked`);
          if (type === 'email') {
            window.location.href = 'mailto:nguyendanghuy071195@gmail.com';
          }
          if (type === 'linkedin') {
            window.open('https://www.linkedin.com/in/huy-nguyen-2209b4165/', '_blank');
          }
        }}
      />
      <div className="min-h-[40rem] h-[40rem]">
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [25, 0, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
          style={{ width: '100%', height: '100%', flexGrow: 1 }}>
          <Suspense fallback={<>Loading ....</>}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              maxAzimuthAngle={Math.PI / 2}
            />
            <Preload all />
            <Computers isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ComputerCanvas;
