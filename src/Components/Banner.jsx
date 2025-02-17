import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTrail, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import img from "../assets/profile-image.jpg";
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

  const trail = useTrail(subtitles[currentSubtitle]?.length || 0, {
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
  }, []);

  return (
    <div className="relative overflow-hidden text-white py-16 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Main Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 pt-16 lg:pt-24">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-3xl lg:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm <br />
            <motion.span
              className="text-fuchsia-400 font-extrabold inline-block min-h-[40px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Typewriter words={["SHAHAB UDDIN"]} loop={0} typeSpeed={100} deleteSpeed={50} delaySpeed={2000} />
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <div className="text-xl lg:text-2xl font-semibold min-h-[40px] mb-6 whitespace-nowrap">
            {subtitles[currentSubtitle] && (
              <span className="inline-block text-yellow-400">
                {trail.map((props, index) => (
                  <animated.span key={index} style={props}>
                    {subtitles[currentSubtitle][index]}
                  </animated.span>
                ))}
              </span>
            )}
          </div>

          <motion.p
            className="text-lg lg:text-xl font-light mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A passionate <span className="font-medium">Junior Web Developer,</span> <span className="font-medium">MERN Stack Developer</span> specializing in React, JavaScript, and modern web technologies. I build scalable and interactive web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div 
  className="flex flex-col md:flex-row md:justify-start justify-center items-center mx-auto mt-12 gap-4"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
>
  <motion.a
    href="https://www.linkedin.com/in/shahab-uddin24/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-40 h-12 flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition hover:scale-105"
  >
    Hire Me
  </motion.a>

  <Link to="/project">
    <motion.button
      className="w-40 h-12 flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition hover:scale-105"
    >
      View Projects
    </motion.button>
  </Link>
</motion.div>

        </div>

        {/* Profile Image */}
        <motion.div
          className="lg:w-1/3 mt-10 lg:mt-0 flex justify-center relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={img || "https://i.ibb.co/n8b6PW6x/me-removebg-preview.png"}
            alt="Web Developer"
            className="w-44 h-44 lg:w-56 lg:h-56 rounded-full border-4 border-purple-400 shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Fixed Vertical Social Media Drawer */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-end">
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="p-3 bg-purple-600 bg-transparent text-white rounded-l-full shadow-lg transition-transform hover:scale-110"
        >
          {isDrawerOpen ? <FaArrowLeft size={10} /> : <FaArrowRight size={10} />}
        </button>
        <div
          className={`fixed top-1/2 right-0 transform -translate-y-1/2 bg-purple-400 p-2 bg-transparent rounded-l-lg shadow-lg transition-all duration-300 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a href="https://www.linkedin.com/in/shahab-uddin24/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:scale-125 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/shahab-24" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:scale-125 transition">
              <FaGithub />
            </a>
            <a href="https://x.com/SHAHAB_UDDIN_24" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:scale-125 transition">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/shawonctg22/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:scale-125 transition">
              <FaFacebook />
            </a>
            <a href="https://wa.me/8801786609585?text=Hello%20Shahab!%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:scale-125 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
