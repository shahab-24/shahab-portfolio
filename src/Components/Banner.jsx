

import  { useEffect, useState } from "react";
import { useTrail, animated } from "react-spring";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const subtitles = [
        "Junior Web Developer",
        "React Developer",
        "MERN-Stack Developer",
        "FrontEnd Developer",
      ];
      const [currentSubtitle, setCurrentSubtitle] = useState(0);
      const [loading, setLoading] = useState(true); // Loading state for skeleton
    
      // Trail animation for characters
      const trail = useTrail(subtitles[currentSubtitle].length, {
        from: { opacity: 0, transform: "translateY(-50px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        reset: true,
        config: { tension: 180, friction: 12 },
      });
    
      // Change subtitle every 3 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [subtitles.length]);
    
      // Simulate loading state for data fetching (you can replace it with real fetching logic)
      useEffect(() => {
        setTimeout(() => setLoading(false), 2000); // 2 seconds loading simulation
      }, []);
    
      if (loading) {
        return (
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between pt-24">
              {/* Left Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                {/* Banner Title Skeleton */}
                <div className="h-12 w-1/2 bg-gray-700 rounded mb-6 animate-pulse"></div>
                {/* Subtitle Skeleton */}
                <div className="h-8 w-2/3 bg-gray-700 rounded mb-6 animate-pulse"></div>
                {/* Description Skeleton */}
                <div className="h-6 w-3/4 bg-gray-700 rounded mb-6 animate-pulse"></div>
                {/* Download Button Skeleton */}
                <div className="h-12 w-48 bg-gray-700 rounded-full animate-pulse mb-6"></div>
              </div>
    
              {/* Right Section Skeleton */}
              <div className="lg:w-1/3 mt-10 lg:mt-0">
                <div className="w-60 h-60 bg-gray-700 rounded-full animate-pulse mx-auto lg:mx-0"></div>
              </div>
            </div>
          </div>
        );
      }

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6">
      {/* Banner Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between pt-24">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-heading leading-tight mb-6">
            Hello, I'm <br />
            <span
              className="text-fuchsia-700 font-extrabold"
              style={{
                display: "inline-block",
                width: "12ch", // Adjust based on the longest string
                whiteSpace: "nowrap", // Prevents wrapping
              }}
            >
              <Typewriter
                words={["SHAHAB UDDIN"]}
                loop={0} // Infinite loop
                typeSpeed={100} // Speed of typing
                deleteSpeed={50} // Speed of deleting
                delaySpeed={2000} // Delay before retyping
              />
            </span>
          </h1>
          <div className="text-2xl lg:text-3xl font-semibold h-16 mb-6 relative">
            {/* Animated Subtitle */}
         {trail.map((props, index) => (
              <animated.span
                key={index}
                style={props}
                className="inline-block text-yellow-400"
              >
                {subtitles[currentSubtitle][index]}
              </animated.span>
            ))}
          </div>
          <p className="text-lg lg:text-xl font-light mb-6">
            A passionate <span className="font-medium">Junior Web Developer</span> skilled in building modern web applications using technologies like React, Tailwind CSS, MongoDB, and more.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-6">
            <a href="#" className="btn btn-primary btn-lg rounded-full shadow-lg">
              Hire Me
            </a>
        
            <a href="project" className="btn btn-outline btn-lg rounded-full shadow-lg">
  {/* <ScrollLink
    to="project"
    smooth={true}
    duration={500}
    offset={-70}
  >
    View Projects
  </ScrollLink> */}
  View Projects
</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <img
            src="https://i.ibb.co.com/fG647Hh/DALL-E-2025-01-04-21-02-53-A-visually-appealing-and-professional-banner-design-for-a-junior-web-deve.webp"
            alt="Web Developer Illustration"
            className="rounded-full shadow-2xl mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Drawer Section */}
      <div>
        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-24 bg-purple-600 shadow-lg rounded-l-lg transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Social Icons */}
          <div className="flex flex-col items-center justify-center space-y-4 h-screen">
            <a href="https://www.linkedin.com/in/shahab-uddin24/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white bg-blue-600 hover:scale-150 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/shahab-24" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black hover:scale-150 transition-colors">
              <FaGithub />
            </a>
            <a href="https://x.com/SHAHAB_UDDIN_24" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 hover:scale-150 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/shawonctg22/" target="_blank" rel="noopener noreferrer" className="text-2xl bg-blue-600 rounded-full hover:scale-150 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://wa.me/8801786609585?text=Hello%20Shahab!%20I%20would%20like%20to%20connect%20with%20you.
" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-600 hover:scale-150 transition-colors">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleDrawer}
          className={`fixed top-1/2 transform -translate-y-1/2 z-40 p-2 text-white bg-purple-600 rounded-full shadow-lg transition-all duration-300 ${
            isDrawerOpen ? "right-24" : "right-2"
          }`}
        >
          {isDrawerOpen ? <FaArrowRight size={20} /> : <FaArrowLeft size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Banner;
