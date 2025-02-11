import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="relative text-white py-16 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      {/* Background Overlay with Subtle Geometric Pattern */}
      <div className="absolute inset-0 bg-opacity-30 bg-[url('/assets/tech-pattern.svg')] bg-cover bg-center"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Profile Image with Glassmorphism */}
        <motion.div
          className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-fuchsia-400 shadow-lg bg-opacity-20 backdrop-blur-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://i.ibb.co.com/McrNghj/DALL-E-2025-01-04-22-31-36-A-professional-and-creative-illustration-of-a-junior-web-developer-workin.webp"
            alt="Shahab Uddin"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-fuchsia-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>

          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            Hello! I’m <span className="text-yellow-400 font-medium">Shahab Uddin</span>,
            Passionate Junior Web Developer | React | JavaScript | MERN Stack | Open to Remote Work
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            I am a self-motivated web developer with expertise in React, JavaScript, Tailwind CSS, Firebase, MongoDB, Express.js, and Node.js. I enjoy solving complex problems, building scalable web applications, and continuously learning new technologies.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            One thing about me? I never give up on any problem or bug until I solve it! Debugging and troubleshooting are essential skills, and I always push myself to find solutions.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            What’s Next? I am eager to expand my skills in Next.js, Redux, and TypeScript in no time to build more robust applications.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Currently Seeking: I am seeking a remote opportunity as a Junior Web Developer, Frontend Developer, React Developer, JavaScript Developer, or MERN Stack Developer.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 justify-center lg:justify-start mt-4">
            <a
              href="https://github.com/shahab-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shahab-uddin24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-300 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-3xl hover:text-green-300 transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center lg:justify-start mt-8 space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://www.linkedin.com/in/shahab-uddin24/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform px-6 py-3 rounded-lg"
            >
              Hire Me
            </a>
            <a
              href="/projects"
              className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform px-6 py-3 rounded-lg"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
