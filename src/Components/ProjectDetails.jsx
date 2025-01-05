import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/projects.json')
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
        {/* Skeleton Loader for Project Details */}
        <div className="animate-pulse w-full max-w-3xl">
          <div className="h-12 bg-gray-700 rounded mb-4"></div>
          <div className="h-64 bg-gray-600 rounded mb-6"></div>
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 bg-gray-700 rounded mb-4"></div>
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="w-24 h-10 bg-blue-500 rounded-full animate-pulse mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-3xl rounded-lg shadow mb-6"
      />
      <motion.p
        className="text-lg mb-4"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {project.description}
      </motion.p>
      <motion.ul
        className="list-disc list-inside mb-4 text-left"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </motion.ul>
      <div className="flex gap-4">
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
      {showMore && (
        <motion.div
          className="mt-6 bg-gray-800 p-4 rounded-lg w-full max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
          <p className="mb-2">
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
          {project.backendTechnologies && (
            <p className="mb-2">
              <strong>Backend Technologies:</strong>{" "}
              {project.backendTechnologies.join(", ")}
            </p>
          )}
          <p className="mb-2">
            <strong>Challenges:</strong> {project.challenges}
          </p>
          <p className="mb-2">
            <strong>Improvements:</strong> {project.improvements}
          </p>
          <p className="mb-2">
            <strong>Lackings:</strong> {project.lackings}
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
