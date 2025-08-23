import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const CanvasLoader = ({isComputer, setIsLoaded, isLoaded }) => {
  const { progress } = useProgress();
  useEffect(() => {
    if (isComputer===true && progress.toFixed(0) >= 100 && !isLoaded) {
      setIsLoaded(true)
    }
  }, [progress]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "black",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
