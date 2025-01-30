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
              ? "text-teal-500 font-semibold underline"
              : "text-gray-300 hover:text-teal-400 transition duration-300"
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
              ? "text-teal-500 font-semibold underline"
              : "text-gray-300 hover:text-teal-400 transition duration-300"
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
              ? "text-teal-500 font-semibold underline"
              : "text-gray-300 hover:text-teal-400 transition duration-300"
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
              ? "text-teal-500 font-semibold underline"
              : "text-gray-300 hover:text-teal-400 transition duration-300"
          }
        >
          Screenshots
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      {/* Navbar Start */}
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

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        <a
          href="https://drive.google.com/file/d/1YJW1VlKhnPl3uHlFbc4vJCLQ8PIYjeZd/view?usp=sharing"
          download="Shahab_Uddin_Resume.pdf"
          className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-md transition-transform"
        >
          <FaDownload className="text-white" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
