import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  

  return (
    <mesh className={""}>
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
          scale={isMobile}
          position={isMobile===0.5 ? [0, -2.25, -1.8] : [0, -3.25, -2]}
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
      
      // Step 1: Move left for 1s.
      // After 2 seconds, set the rotation to a negative speed.
      const timer1 = setTimeout(() => {
        setRotation({ rotate: true, speed: -5 });
      }, 2000); 

      // Step 2: Move right for 2s.
      // After 2 more seconds (4s total), set the rotation to a positive speed.
      const timer2 = setTimeout(() => {
        setRotation({ rotate: true, speed: 5 });
      }, 4000);

      // Step 3: Move back to the left for 1s.
      // After 1 more second (5s total), stop the rotation.
      const timer3 = setTimeout(() => {
        setRotation({ rotate: false, speed: 0 });
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

  
  const [isMobile, setIsMobile] = useState(1);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQueryMed = window.matchMedia("(max-width: 600px)");
    const mediaQuerySm = window.matchMedia("(max-width: 400px)");
    
    // Set the initial value of the `isMobile` state variable
    if(mediaQueryMed.matches)setIsMobile(0.7);
    if(mediaQuerySm.matches)setIsMobile(0.5);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryMedChange = (event) => {
      if(event.matches)setIsMobile(0.7);
      else setIsMobile(1);
    };

    const handleMediaQuerySmChange = (event) => {
      if(event.matches)setIsMobile(0.5);
      else setIsMobile(0.7);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQueryMed.addEventListener("change", handleMediaQueryMedChange);
    mediaQuerySm.addEventListener("change", handleMediaQuerySmChange);
    

    // Remove the listener when the component is unmounted
    return () => {
      mediaQueryMed.removeEventListener("change", handleMediaQueryMedChange);
      mediaQueryMed.removeEventListener("change", handleMediaQuerySmChange);
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
      
      <Suspense fallback={<CanvasLoader isComputer={true} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}>
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







