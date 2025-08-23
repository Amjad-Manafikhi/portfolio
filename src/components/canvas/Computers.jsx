import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  

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

      {/* Pivot group */}
      <group  position={[0, 1, 0.5]} rotation={[0, 0, 0]}>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.6 : 1}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </group>
    </mesh>
  );
};
const ComputersCanvas = () => {
  const [rotation, setRotation] = useState({rotate:true,speed:5});
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    // This effect's code will only run when 'isLoaded' changes to true.
    if (isLoaded) {
      console.log('isLoaded is true. Starting the animation...');
      
      // Step 1: Move left for 1s.
      // After 2 seconds, set the rotation to a negative speed.
      const timer1 = setTimeout(() => {
        setRotation({ rotate: true, speed: -5 });
        console.log('Moving left...');
      }, 2000); 

      // Step 2: Move right for 2s.
      // After 2 more seconds (4s total), set the rotation to a positive speed.
      const timer2 = setTimeout(() => {
        setRotation({ rotate: true, speed: 5 });
        console.log('Moving right...');
      }, 4000);

      // Step 3: Move back to the left for 1s.
      // After 1 more second (5s total), stop the rotation.
      const timer3 = setTimeout(() => {
        setRotation({ rotate: false, speed: 0 });
        console.log('Moving back left and stopping...');
      }, 5000);
      
      // We return a cleanup function to clear all timers.
      // This is crucial to prevent memory leaks if the component unmounts.
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isLoaded]); // This dependency array ensures the effect runs only when isLoaded changes.

  console.log(rotation)
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 2], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      >
      {!isLoaded && <CanvasLoader isComputer={true} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate={rotation.rotate}
          autoRotateSpeed={rotation.speed}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas; 