import  { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RingModel() {
  // Загрузите модель с помощью useGLTF
  const { scene } = useGLTF('/scene.gltf');

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