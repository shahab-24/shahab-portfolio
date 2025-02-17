import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-400 font-bold border-b-2 border-teal-400" : "text-gray-300 hover:text-teal-300 transition duration-300"}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-teal-400 font-bold border-b-2 border-teal-400" : "text-gray-300 hover:text-teal-300 transition duration-300"}>About</NavLink>
      </li>
      <li>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-teal-400 font-bold border-b-2 border-teal-400" : "text-gray-300 hover:text-teal-300 transition duration-300"}>Services</NavLink>
      </li>
      <li>
        <NavLink to="/screenshots" className={({ isActive }) => isActive ? "text-teal-400 font-bold border-b-2 border-teal-400" : "text-gray-300 hover:text-teal-300 transition duration-300"}>Screenshots</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 py-3 px-5">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img className="w-12 h-12" src="https://i.ibb.co.com/JKdC8p6/DALL-E-2025-01-05-16-32-44-A-modern-and-minimalist-logo-for-a-web-developer-named-Shahab-Udding-The.webp" alt="Logo" />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-2xl md:text-3xl">SHAHAB UDDIN</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-lg">{links}</ul>

        {/* Desktop Resume Button */}
        <a href="https://drive.google.com/file/d/1YJW1VlKhnPl3uHlFbc4vJCLQ8PIYjeZd/view?usp=sharing" download className="hidden md:flex items-center gap-2 w-40 h-12 justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
          <FaDownload /> Resume
        </a>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-gray-800 py-3 rounded-md shadow-md transition-all duration-300 ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center space-y-3 text-lg">{links}</ul>

        {/* Mobile Resume Button */}
        <div className="mt-4 flex  justify-center">
          <a href="https://drive.google.com/file/d/1YJW1VlKhnPl3uHlFbc4vJCLQ8PIYjeZd/view?usp=sharing" download className="w-40 h-12 flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform gap-2">
            <FaDownload /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
