import React from "react";
// Fixed import statement
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
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Professional Experience
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="mt-2 text-lg">
                {exp.place} | <strong>{exp.duration}</strong>
              </p>
              <p className="mt-4 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x800')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
    </motion.div>
  );
};

export default ExperienceSection;
