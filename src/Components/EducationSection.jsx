import React from "react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const educationData = [
    {
      title: "M.A. in English Literature",
      institution: "National University, Bangladesh | First Class (GPA 3.09)",
      description:
        "Completed an in-depth study of English literature, honing analytical and communication skills.",
    },
    {
      title: "B.A. (Hons) in English",
      institution: "National University, Bangladesh | Second Class",
      description:
        "Gained a deep understanding of English language and literature, with a focus on classical and modern works.",
    },
    {
      title: "HSC in Business Studies",
      institution: "Govt. City College, Chattogram | Passed",
      description:
        "Studied core business principles, economics, accounting, and management, gaining valuable analytical skills.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8 py-16 bg-gradient-to-r from-purple-800 via-blue-900 to-gray-900 text-white"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center">Education</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Create a responsive Pyramid Layout with Centered Larger Card */}
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-300 ${
              index === 1
                ? "w-full md:w-96 lg:w-96" // Middle card larger, full width on small screens
                : index === 0 || index === 2
                ? "w-full md:w-72 lg:w-80" // Left and right cards smaller, full width on small screens
                : ""
            }`}
            style={{
              marginTop: `${index === 1 ? -20 : 0}px`, // Adjust vertical spacing to center the middle card
            }}
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-lg">{item.institution}</p>
            <p className="mt-4">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;
