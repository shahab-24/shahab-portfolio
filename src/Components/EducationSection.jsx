import { motion } from "framer-motion";

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
    institution: "Govt. City College, Chattogram | GPA: 4.00",
    description:
      "Studied core business principles, economics, accounting, and management, gaining valuable analytical skills.",
  },
];

const EducationSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-16 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Section Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-teal-400 mb-12 drop-shadow-lg">
        Education
      </h2>

      {/* Education Cards Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className={`bg-white/10 text-white p-6 rounded-lg shadow-lg 
                        backdrop-blur-md transform transition-all duration-300 
                        hover:scale-105 hover:shadow-2xl cursor-pointer
                        ${
                          index === 1
                            ? "w-full md:w-96 lg:w-96 border-2 border-fuchsia-500" // Middle card larger
                            : "w-full md:w-80 lg:w-72 border-2 border-fuchsia-500" // Side cards smaller
                        }`}
            style={{ marginTop: `${index === 1 ? -20 : 0}px` }}
          >
            {/* Card Content */}
            <h3 className="text-2xl font-semibold text-teal-300">{item.title}</h3>
            <p className="mt-2 text-lg">{item.institution}</p>
            <p className="mt-4 text-sm text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;
