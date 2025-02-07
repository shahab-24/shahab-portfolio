import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiExpress, SiMongodb, SiJsonwebtokens, SiAxios, SiSwiper } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "JavaScript", icon: <TbBrandJavascript />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "DaisyUI", icon: <SiDaisyui />, color: "#4E4DFF" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#8CC84B" },
  { name: "Express.js", icon: <SiExpress />, color: "#333" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
  { name: "Axios", icon: <SiAxios />, color: "#5A29A0" },
  { name: "Swiper.js", icon: <SiSwiper />, color: "#E9E9E9" },
];

// Duplicate skills array for infinite scrolling effect
const repeatedSkills = [...skills, ...skills];

const SkillScroll = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10">
      {/* Infinite Scrolling Wrapper */}
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 15, // Adjust speed (lower is faster)
          repeat: Infinity,
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-40 h-40 bg-gray-800 shadow-xl rounded-lg mx-4 p-4 text-white cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-5xl" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillScroll;
