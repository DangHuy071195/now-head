import { useProgress, Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: 'white',
          position: 'absolute',
          fontWeight: 500,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
