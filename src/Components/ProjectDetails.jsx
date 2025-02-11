import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJsSquare, FaGitAlt } from "react-icons/fa"; // Import icons

const techIcons = {
  React: <FaReact className="text-blue-400" />,
  NodeJS: <FaNodeJs className="text-green-500" />,
  MongoDB: <FaDatabase className="text-green-400" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  JavaScript: <FaJsSquare className="text-yellow-400" />,
  Git: <FaGitAlt className="text-red-500" />,
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((p) => p.id === projectId);
        setProject(selectedProject);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
        <div className="animate-pulse w-full max-w-3xl">
          <div className="h-12 bg-gray-700 rounded mb-4"></div>
          <div className="h-64 bg-gray-600 rounded mb-6"></div>
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Project Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">{project.title}</h1>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        // className="w-full max-w-[90%] md:max-w-3xl rounded-lg shadow mb-6"
        className="w-full max-w-[90%] md:max-w-3xl h-[350px] md:h-[350px] object-cover rounded-lg shadow-lg mb-4"
      />

      {/* Technologies Marquee */}
      <div className="w-full overflow-hidden bg-gray-800 rounded-lg py-3 mb-6">
        <motion.div
          className="flex gap-6 items-center px-6 whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Slower scrolling
        >
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 h-30 bg-white/10 
                      shadow-lg backdrop-blur-md rounded-lg mx-4 p-6 border border-fuchsia-500 
                      text-white cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              {techIcons[tech] || "🔹"} {tech}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Backend Technologies (if available) */}
      {project.backendTechnologies && (
        <div className="w-full overflow-hidden bg-gray-800 rounded-lg py-3 mb-6">
          <motion.div
            className="flex gap-6 items-center px-6 whitespace-nowrap"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Reverse direction
          >
            {project.backendTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-30 h-20 bg-white/10 
                      shadow-lg backdrop-blur-md rounded-lg mx-4 p-4 border border-fuchsia-500 
                      text-white cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300"
              >
                {techIcons[tech] || "🔹"} {tech}
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Project Description */}
      <motion.p
        className="text-lg mb-4 text-center max-w-2xl px-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {project.description}
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Visit Live Site
        </motion.a>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          GitHub Repo
        </motion.a>
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {showMore ? "Show Less" : "Know More"}
        </motion.button>
      </div>

      {/* Additional Details Section */}
      {showMore && (
        <motion.div
          className="mt-6 bg-gray-800 p-4 rounded-lg w-full max-w-[90%] md:max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
          <p className="mb-2">
            <strong>Challenges:</strong> {project.challenges}
          </p>
          <p className="mb-2">
            <strong>Improvements:</strong> {project.improvements}
          </p>
          <p className="mb-2">
            <strong>Learning Outcomes:</strong> {project.learningOutcomes}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectDetails;