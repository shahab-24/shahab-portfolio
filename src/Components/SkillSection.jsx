import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiExpress, SiMongodb, SiJsonwebtokens } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-purple-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-orange-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
];

const SkillSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 bg-gradient-to-r from-purple-800 via-blue-900 to-gray-900 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        {/* Scrolling Cards */}
        <motion.div
          animate={{
            x: ["100%", "-100%"], // Moves from right to left
          }}
          transition={{
            x: {
              repeat: Infinity, // Infinite loop of the animation
              duration: 30, // Adjust duration for smoothness (longer for slower)
              ease: "linear", // Linear motion for smoothness
            },
          }}
          className="relative flex items-center overflow-hidden"
        >
          <div className="flex space-x-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-cyan-600  w-32 h-32 rounded-xl flex justify-center items-center shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 1 }}
              >
                <div className="text-5xl">{skill.icon} </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x800')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
    </motion.div>
  );
};

export default SkillSection;
