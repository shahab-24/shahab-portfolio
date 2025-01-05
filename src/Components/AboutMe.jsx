import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching logic)
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-8">
        <div className="container mx-auto">
          {/* Section Header Skeleton */}
          <div className="h-12 bg-gray-700 rounded mb-6 animate-pulse"></div>
          <div className="h-8 bg-gray-700 rounded mb-12 animate-pulse"></div>

          {/* About Me Content Skeleton */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Image Skeleton */}
            <div className="w-60 lg:w-72 h-60 lg:h-72 bg-gray-700 rounded-full animate-pulse mb-4"></div>

            {/* Text Skeleton */}
            <div className="lg:w-2/3 text-center lg:text-left space-y-6">
              <div className="h-6 bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded mb-4 animate-pulse"></div>
            </div>
          </div>

          {/* CTA Buttons Skeleton */}
          <div className="flex justify-center lg:justify-start mt-12 space-x-4">
            <div className="h-10 w-32 bg-gray-700 rounded-full animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.h1
          className="text-3xl lg:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Myself
        </motion.h1>
        <motion.h2
          className="text-2xl lg:text-2xl text-yellow-300 font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Passionate About Web Development, Security & Helping Others
        </motion.h2>

        {/* About Me Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Image Section */}
          <motion.img
            src="https://i.ibb.co.com/McrNghj/DALL-E-2025-01-04-22-31-36-A-professional-and-creative-illustration-of-a-junior-web-developer-workin.webp"
            alt="Profile"
            className="rounded-full shadow-lg w-60 lg:w-72"
            whileHover={{ scale: 1.1 }}
          />

          {/* Text Section */}
          <div className="lg:w-2/3 text-center lg:text-left space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I’m <span className="text-yellow-400 font-medium">Shahab Uddin</span>, 
              a dedicated professional transitioning from education to technology. With over 
              4 years of experience as an Assistant Teacher in the Ministry of Primary and 
              Mass Education, Bangladesh, I bring a unique blend of teaching expertise and 
              technical passion to my web development journey.
            </p>
            <p className="text-lg leading-relaxed">
              Currently, I am building skills in <strong>MERN Stack</strong>, <strong>React</strong>, 
              <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and 
              <strong>MongoDB</strong>, aiming to create user-friendly, secure, and impactful applications.  
              I am also deeply interested in ethical hacking and integrating cybersecurity best practices into my work.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond technology, I am passionate about <span className="text-yellow-400 font-medium">traveling, helping others, and exploring new places</span>. 
              I find joy in assisting people in need, fostering connections, and experiencing the beauty of diverse cultures and landscapes.
            </p>
            <p className="text-lg leading-relaxed">
              I am excited to bring my knowledge and creativity to a forward-thinking 
              team through remote opportunities.
            </p>
            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a
                href="https://github.com/shahab-24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-yellow-300 transition-transform transform hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shahab-uddin24/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-300 transition-transform transform hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-3xl hover:text-green-300 transition-transform transform hover:scale-125"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center lg:justify-start mt-12 space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://www.linkedin.com/in/shahab-uddin24/" target="_blank" rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Hire Me
          </a>
          <Link to="/project">
            <a
              className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Projects
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
