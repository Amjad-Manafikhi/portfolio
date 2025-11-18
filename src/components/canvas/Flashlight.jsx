import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Flashlight = () => {
  const flashlight = useGLTF("./flashlight/scene.gltf");
  const ref = useRef();

  // Animation state
  const startY = 5; // start above
  const floorY = -2; // floor position
  const dropSpeed = 0.2; // initial drop speed
  const bounceDamping = 0.5; // how much energy it keeps after bounce
  const gravity = -0.02;

  let velocity = dropSpeed;

  useFrame(() => {
    if (!ref.current) return;

    const pos = ref.current.position;

    // Drop + bounce physics
    pos.y += velocity;
    velocity += gravity;

    // Bounce on floor
    if (pos.y <= floorY) {
      pos.y = floorY;
      velocity = -velocity * bounceDamping;

      // Stop bouncing when small enough
      if (Math.abs(velocity) < 0.05) {
        velocity = 0;
        pos.y = floorY;
      }
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="#915EFF" />
      <spotLight
        position={[-1, -3, 0.6]}
        angle={0.9}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[-10, 1, 0]} />

      {/* Pivot group for rotation around self */}
      <group ref={ref} position={[0, startY, 0]}>
        <primitive object={flashlight.scene} scale={0.003} />
      </group>
    </mesh>
  );
};

const FlashlightCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className="max-h-screen duration-200"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, -2, 0]} // look at floor level
        />

        <Flashlight />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default FlashlightCanvas;
