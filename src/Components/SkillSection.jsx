import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { 
  SiTailwindcss, SiDaisyui, SiExpress, SiMongodb, SiJsonwebtokens, 
  SiAxios, SiSwiper, SiFirebase, SiVercel, SiNetlify 
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';

// Skill Data with Icons & Colors
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
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Vercel", icon: <SiVercel />, color: "#000000" },
  { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
  { name: "Git", icon: <FaGithub />, color: "#F1502F" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  { name: "Database", icon: <FontAwesomeIcon icon={faDatabase} />, color: "#F0DB4F" },
  { name: "Cloud", icon: <FontAwesomeIcon icon={faCloud} />, color: "#DA5A5A" },
];

// Duplicate skills for infinite scrolling
const repeatedSkills = [...skills, ...skills];

const SkillScroll = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16">
      
      {/* Section Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-fuchsia-400 mb-12 drop-shadow-lg">
        My Skills
      </h2>

      {/* Infinite Scrolling Wrapper */}
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-40 h-40 bg-white/10 
                      shadow-lg backdrop-blur-md rounded-lg mx-4 p-4 border border-fuchsia-500 
                      text-white cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            {/* Skill Icon */}
            <div className="text-6xl" style={{ color: skill.color }}>
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Glowing Effects */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
};

export default SkillScroll;
