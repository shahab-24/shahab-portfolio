import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("projects.json") // Fetch project data
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-r from-purple-800 via-blue-900 to-gray-900 text-white">
        {/* Skeleton Loader */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg animate-pulse "
            >
              <div className="h-48 bg-gray-600"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-4"></div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="w-24 h-10 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-24 h-10 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="project"
        className="py-16 bg-gradient-to-r from-purple-800 via-blue-900 to-gray-900 text-white"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 border-2 border-fuchsia-500"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link to={`/projects/${project.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                      View Details
                    </button>
                  </Link>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full"
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    Live Site
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
