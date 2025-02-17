import { motion } from "framer-motion"; 
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/profile-image.jpg";

const skills = [
  { name: "React", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-300" },
  { name: "Tailwind CSS", color: "text-cyan-400" },
  { name: "MongoDB", color: "text-green-400" },
  { name: "Express.js", color: "text-gray-400" },
  { name: "Firebase", color: "text-orange-400" },
];

const AboutMe = () => {
  return (
    <section className="relative text-white py-16 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Floating Animated Background Effects */}
      <motion.div
        className="absolute inset-0 bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-10 left-20 w-12 h-12 bg-fuchsia-500 rounded-full opacity-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-16 h-16 bg-blue-500 rounded-full opacity-40"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeOut" }}
        />
      </motion.div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Profile Image with Smooth Hover Effect */}
        <motion.div
          className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-fuchsia-400 shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <img src={img} alt="Shahab Uddin" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Section */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-fuchsia-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h1>

          {/* Typewriter Effect for Titles */}
          <h2 className="text-xl lg:text-2xl font-medium text-yellow-400">
            <Typewriter
              words={[
                "Junior Web Developer",
                "Frontend Developer (React)",
                "MERN Stack Enthusiast",
                "Open to Remote Work",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            Hi, I'm <span className="text-yellow-400 font-medium">Shahab Uddin</span>, a <span className="font-semibold">Passionate Web Developer</span> skilled in React, JavaScript, Tailwind CSS, Firebase, MongoDB, and Express.js. I love solving challenges and building user-friendly applications.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
             <span className="text-yellow-400 font-semibold">Problem Solver | Fast Learner | Detail-Oriented</span>
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            <span className="text-yellow-400 font-semibold">What makes me stand out?</span>  
            <span className='text-fuchsia-400 text-xl font-semibold'> I never give up </span>
            on a problem until it's solved! Debugging, troubleshooting, and learning new skills excite me.
          </p>

          {/* Highlighted Skills Expansion */}
          <motion.p
            className="text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            🚀 <span className="text-fuchsia-400 font-semibold">Currently expanding my skills</span> in  
            <span className="text-yellow-300 font-semibold"> Next.js</span>,  
            <span className="text-blue-300 font-semibold"> Redux</span>, and  
            <span className="text-green-300 font-semibold"> TypeScript </span>  
            to build even better applications.
          </motion.p>

          {/* Skills Section with Animation */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className={`px-4 py-2 rounded-lg bg-gray-800 ${skill.color} text-lg font-semibold shadow-md`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex space-x-6 justify-center lg:justify-start mt-4">
            <a href="https://github.com/shahab-24" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-300 transform transition hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shahab-uddin24/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-300 transform transition hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="mailto:your-email@example.com" className="text-3xl hover:text-green-300 transform transition hover:scale-110">
              <FaEnvelope />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center mt-12 gap-4">
            <motion.a
              href="https://www.linkedin.com/in/shahab-uddin24/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-12 flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              Hire Me
            </motion.a>

            <Link to="/project">
              <motion.button className="w-40 h-12 flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition-transform hover:scale-105">
                View Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
