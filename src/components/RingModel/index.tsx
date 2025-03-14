import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../../../global";
import d3 from "../../assets/scene.gltf"
console.log(d3)

function RingModel() {
  // Загрузите модель с помощью useGLTF
  const { scene } = useGLTF(d3);

  // Масштабируйте и разместите модель в сцене
  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}

const RingViewer = () => {
  return (
    <Canvas style={{ width: "100%", height: "500px" }}>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Загрузка модели с запасным вариантом (fallback) */}
      <Suspense fallback={null}>
        <RingModel />
      </Suspense>

      {/* Управление камерой */}
      <OrbitControls />
    </Canvas>
  );
};

export default RingViewer;