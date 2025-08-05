import React from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import "./Hero.css";

export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(true);

  // const toggleTheme = () => {
  //   const html = document.querySelector("html");
  //   if (darkMode) {
  //     html.setAttribute("data-theme", "light");
  //   } else {
  //     html.setAttribute("data-theme", "dark");
  //   }
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="navbar fixed z-50 top-0 left-0 w-full bg-base-200 backdrop-blur-md shadow-sm px-4">

      <div className="flex-1">
        <a
          className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-[#7F00FF] via-[#E100FF] to-[#00C9FF] bg-clip-text text-transparent animate-text-glow transition-all duration-500"
        >
          PORTFOLIO
        </a>
      </div>
      <div className="flex-none hidden md:flex gap-6 text-sm font-medium">
        {["home", "about", "education", "skills", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative group cursor-pointer text-transparent bg-clip-text bg-white"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500 transition-all duration-300 group-hover:w-full"
            />
          </Link>
        ))}
      </div>

      {/* <div className="flex-none ml-4">
        <button
          className="btn btn-sm btn-circle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div> */}

      {/* Mobile menu */}
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {["home", "about", "Eucation", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="capitalize"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


