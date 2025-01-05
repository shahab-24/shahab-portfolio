
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiExpress, SiTailwindcss, SiVite } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "React Router DOM", icon: <FaReact className="text-red-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "JWT", icon: <TbApi className="text-teal-500" /> },
  { name: "Axios", icon: <TbApi className="text-purple-500" /> },
  { name: "TanStack", icon: <TbApi className="text-pink-500" /> },
  { name: "DaisyUI", icon: <SiTailwindcss className="text-indigo-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-600" /> },
];

const SkillsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white text-gray-900 px-4 py-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
