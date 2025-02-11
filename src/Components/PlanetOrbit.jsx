import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const PlanetOrbit = () => {
  const planetRef = useRef();
  let angle = 0;

  useFrame(() => {
    angle += 0.005;
    planetRef.current.position.x = Math.cos(angle) * 5;
    planetRef.current.position.z = Math.sin(angle) * 5;
  });

  return (
    <>
      {/* Main Planet */}
      <Sphere ref={planetRef} args={[1, 32, 32]} position={[5, 0, 0]}>
        <MeshDistortMaterial color="blue" distort={0.5} speed={2} />
      </Sphere>

      {/* Small Orbiting Planet */}
      <Sphere args={[0.5, 32, 32]} position={[-5, 0, 0]}>
        <MeshDistortMaterial color="orange" distort={0.3} speed={1.5} />
      </Sphere>
    </>
  );
};

export default PlanetOrbit;
