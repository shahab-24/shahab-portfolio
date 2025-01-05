import  { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  const subtitles = [
    "Junior Web Developer",
    "React Developer",
    "MERN-Stack Developer",
    "FrontEnd Developer",
  ];
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

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

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6">
      {/* Banner Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between pt-24">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-heading leading-tight mb-6">
            Hello, I'm <br />
            <span className="text-fuchsia-700 font-extrabold">SHAHAB UDDIN</span>
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
            A passionate developer skilled in building modern web applications
            using technologies like React, Tailwind CSS, MongoDB, and more.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-6">
            <a
              href="https://drive.google.com/file/d/1p9ux35Ihvf2XXY7XTPXdvxLVKWZRz5bm/view?usp=sharing"
              download="Shahab_Uddin_Resume.pdf"
              className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <FaDownload className="text-white" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <img
            src="https://i.ibb.co/fG647Hh/DALL-E-2025-01-04-21-02-53-A-visually-appealing-and-professional-banner-design-for-a-junior-web-deve.webp"
            alt="Web Developer Illustration"
            className="rounded-full shadow-2xl mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
