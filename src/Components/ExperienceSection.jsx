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
  {
    title: "Shop Owner",
    place: "Cosmetics and Jewelry Shop",
    duration: "4 Years (2014–2018)",
    description:
      "Operated and managed a successful business specializing in cosmetics and jewelry, developing skills in sales, customer service, and inventory management.",
  },
];

const ExperienceSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-900 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-teal-300">
          Professional Experience
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="mt-2 text-lg text-teal-500">
                {exp.place} | <strong>{exp.duration}</strong>
              </p>
              <p className="mt-4 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1200x800')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10"></div>
    </motion.div>
  );
};

export default ExperienceSection;
