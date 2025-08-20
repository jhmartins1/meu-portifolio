import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useIsMobile from "../../hoc/useIsMobile";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  if (!earth || !earth.scene) return null;

  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

useGLTF.preload("./planet/scene.gltf");

const EarthCanvas = () => {
  const isMobile = useIsMobile();

  // Retorna null para não renderizar o componente pesado em dispositivos móveis
  if (isMobile) {
    return null;
  }

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {!isMobile && (
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;