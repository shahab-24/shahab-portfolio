import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTrail, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import img from "../assets/profile3.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaWhatsapp, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  const subtitles = [
    "Junior Web Developer",
    "React Developer",
    "MERN-Stack Developer",
    "FrontEnd Developer",
    "Full-Stack Developer",
  ];

  const trail = useTrail(subtitles[currentSubtitle].length, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    reset: true,
    config: { tension: 180, friction: 12 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <div className="relative overflow-hidden text-white py-16 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 opacity-30 animate-pulse"></div> {/* New background animation */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 pt-16 lg:pt-24">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-3xl lg:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm <br />
            <span className="text-fuchsia-400 font-extrabold">
              <Typewriter words={["SHAHAB UDDIN"]} loop={0} typeSpeed={100} deleteSpeed={50} delaySpeed={2000} />
            </span>
          </motion.h1>
          <div className="text-xl lg:text-2xl font-semibold h-16 mb-6">
            {trail.map((props, index) => (
              <animated.span key={index} style={props} className="inline-block text-yellow-400">
                {subtitles[currentSubtitle][index]}
              </animated.span>
            ))}
          </div>
          <p className="text-lg lg:text-xl font-light mb-6">
            a passionate <span className="font-medium">Junior Web Developer,</span> <span className="font-medium">MERN Stack Developer</span> specializing in React, JavaScript, and modern web technologies. I build scalable and interactive web applications.
          </p>
          <motion.div
            className="flex justify-center lg:justify-start mt-12 space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://www.linkedin.com/in/shahab-uddin24/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Hire Me
            </a>
            <Link to="/project">
              <button className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                View Projects
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
  className="lg:w-1/3 mt-10 lg:mt-0 flex justify-center relative"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
//   style={{
//     backgroundImage: 'url("https://i.ibb.co.com/TBTBp5V0/abstract.webp")', // Replace with your desired pattern URL
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     borderRadius: '50%',
//     padding: '5px',
//   }}
>
  <img
    src={img || "https://i.ibb.co.com/n8b6PW6x/me-removebg-preview.png"}
    alt="Web Developer"
    className="w-44 h-44 lg:w-56 lg:h-56 rounded-lg border-4 border-purple-400 shadow-lg object-cover"
  />
</motion.div>

      </div>

      {/* Social Media Icons */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="p-3 bg-purple-600 text-white rounded-l-full shadow-lg transition-transform hover:scale-110"
        >
          {isDrawerOpen ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
        </button>
        <div
          className={`fixed top-1/2 right-0 transform -translate-y-1/2 bg-purple-700 p-4 rounded-l-lg shadow-lg transition-all duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.linkedin.com/in/shahab-uddin24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/shahab-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:scale-125 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/SHAHAB_UDDIN_24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:scale-125 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/shawonctg22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:scale-125 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/8801786609585?text=Hello%20Shahab!%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:scale-125 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
