import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiExpress, SiMongodb, SiJsonwebtokens, SiAxios, SiSwiper } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "red" },
  { name: "JavaScript", icon: <TbBrandJavascript />, color: "yellow" },
  { name: "React.js", icon: <FaReact />, color: "blue" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "cyan" },
  { name: "DaisyUI", icon: <SiDaisyui />, color: "purple" },
  { name: "Node.js", icon: <FaNodeJs />, color: "green" },
  { name: "Express.js", icon: <SiExpress />, color: "gray" },
  { name: "MongoDB", icon: <SiMongodb />, color: "darkgreen" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "orange" },
  { name: "Axios", icon: <SiAxios />, color: "teal" },
  { name: "Swiper.js", icon: <SiSwiper />, color: "skyblue" },
];

const SkillPlanet = ({ index, color }) => {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = (index / skills.length) * Math.PI * 2 + t * 0.5;
    const radius = 3;
    meshRef.current.position.x = radius * Math.cos(angle);
    meshRef.current.position.y = radius * Math.sin(angle);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const GalaxySkills = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={1.5} />
      <OrbitControls enableZoom={false} />

      {/* Sun at the center */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="gold" emissive="yellow" emissiveIntensity={0.7} />
      </mesh>

      {/* Animated Planets (Skills) */}
      {skills.map((skill, index) => (
        <SkillPlanet key={index} index={index} color={skill.color} />
      ))}
    </Canvas>
  );
};

export default GalaxySkills;
