import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,

  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiAxios,

  SiSwiper,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";



const skills = [
  { name: "HTML", icon: <FaHtml5 />, percentage: 70, color: "text-red-500" },
  { name: "JavaScript (ES6)", icon: <TbBrandJavascript />, percentage: 75, color: "text-yellow-500" },
  { name: "React.js", icon: <FaReact />, percentage: 70, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 60, color: "text-blue-400" },
  { name: "DaisyUI", icon: <SiDaisyui />, percentage: 55, color: "text-purple-400" },
  { name: "Node.js", icon: <FaNodeJs />, percentage: 60, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, percentage: 50, color: "text-gray-600" },
  { name: "MongoDB", icon: <SiMongodb />, percentage: 65, color: "text-green-700" },
  { name: "JWT", icon: <SiJsonwebtokens />, percentage: 50, color: "text-orange-500" },
  { name: "Axios", icon: <SiAxios />, percentage: 65, color: "text-teal-500" },

  { name: "Swiper.js", icon: <SiSwiper />, percentage: 55, color: "text-sky-500" },
];

const SkillSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="relative py-16 bg-gradient-to-r from-purple-800 via-blue-900 to-gray-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-xl shadow-lg animate-pulse"
                >
                  <div className="h-20 w-20 bg-gray-600 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-600 rounded w-2/3 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2 mx-auto"></div>
                </div>
              ))
            : skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer"
                  initial={{ scale: 0.8, rotateY: 90, opacity: 0 }}
                  whileInView={{ scale: 1, rotateY: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`text-6xl mb-4 ${skill.color} bg-gray-900 p-4 rounded-full shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    {/* Skill Name */}
                    <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                    {/* Skill Proficiency */}
                    <p className="text-sm text-gray-100">
                      {skill.percentage}% Proficiency
                    </p>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1200x800')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
    </motion.div>
  );
};

export default SkillSection;
