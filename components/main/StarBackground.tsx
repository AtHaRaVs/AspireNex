"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = () => {
  const ref = useRef<any>();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} frustumCulled>
        <PointMaterial
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} // Corrected typo in depthWrite
          transparent // Make sure to include this for transparency
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
