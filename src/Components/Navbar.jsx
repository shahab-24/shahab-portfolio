import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-yellow-300 font-bold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-yellow-300 font-bold" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "text-yellow-300 font-bold" : "")}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/screenshots"
          className={({ isActive }) => (isActive ? "text-yellow-300 font-bold" : "")}
        >
          Screenshots
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 text-white shadow-lg sticky top-0 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-semibold">
          Portfolio
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
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
  );
};

export default Navbar;
