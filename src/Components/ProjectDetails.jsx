import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((p) => p.id === projectId);
        setProject(selectedProject);
      });
  }, [projectId]);

  if (!project) return <p>Loading...</p>;

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
    </motion.div>
  );
};

export default ProjectDetails;
