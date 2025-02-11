import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Assistant Teacher",
    place: "Government Primary School",
    duration: "4 Years",
    description:
      "Developed communication, organization, and problem-solving skills while guiding students to achieve their full potential.",
  },
  {
    title: "Assistant Planning Officer",
    place: "KEPZ (Karnaphuli Export Processing Zone)",
    duration: "1 Year",
    description:
      "Gained expertise in Excel and planning while assisting in critical project planning and execution.",
  },
];

const ExperienceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white"
    >
      {/* Section Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-fuchsia-400 drop-shadow-md">
        Professional Experience
      </h2>

      {/* Experience Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border border-fuchsia-500"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-fuchsia-300">{exp.title}</h3>

            {/* Workplace & Duration */}
            <p className="mt-2 text-lg text-teal-300">
              {exp.place} | <strong className="text-white">{exp.duration}</strong>
            </p>

            {/* Description */}
            <p className="mt-4 text-base text-gray-100 leading-relaxed">
              {exp.description}
            </p>

            {/* Decorative Accent Line */}
            <div className="w-16 h-1 bg-fuchsia-500 mt-4 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/assets/tech-pattern.svg')] opacity-10 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
    </motion.section>
  );
};

export default ExperienceSection;
