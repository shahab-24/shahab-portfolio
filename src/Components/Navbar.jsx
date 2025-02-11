import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiExpress, SiMongodb, SiJsonwebtokens, SiAxios, SiSwiper } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-bold underline border-b-2 border-teal-400"
              : "text-gray-300 hover:text-teal-300 transition duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-bold underline border-b-2 border-teal-400"
              : "text-gray-300 hover:text-teal-300 transition duration-300"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-bold underline border-b-2 border-teal-400"
              : "text-gray-300 hover:text-teal-300 transition duration-300"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/screenshots"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-bold underline border-b-2 border-teal-400"
              : "text-gray-300 hover:text-teal-300 transition duration-300"
          }
        >
          Screenshots
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="navbar-start flex items-center justify-between w-full">
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-semibold">
          <img
            className="w-[100%] h-[100%] lg:w-30 lg:h-30"
            src="https://i.ibb.co.com/JKdC8p6/DALL-E-2025-01-05-16-32-44-A-modern-and-minimalist-logo-for-a-web-developer-named-Shahab-Udding-The.webp"
            alt="Logo"
          />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-4">{links}</ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <a
          href="https://drive.google.com/file/d/1YJW1VlKhnPl3uHlFbc4vJCLQ8PIYjeZd/view?usp=sharing"
          download="Shahab_Uddin_Resume.pdf"
          className="btn bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <FaDownload className="text-white" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
