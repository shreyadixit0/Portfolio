import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaGithub
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const html = document.querySelector("html");
    const observer = new MutationObserver(() => {
      setDarkMode(html.getAttribute("data-theme") !== "light");
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`font-sans pt-10 pb-6 ${
        darkMode ? "bg-base-200 text-[#bcbcbc]" : "bg-base-200 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-7 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            {
              href: "https://www.linkedin.com/in/shreya0",
              icon: <FaLinkedin className="text-lg" />,
            },
            {
              href: "https://twitter.com/",
              icon: <FaTwitter className="text-lg" />,
            },
            {
              href: "https://github.com/shreyadixit0",
              icon: <FaGithub className="text-lg" />,
            },
            {
              href: "https://www.behance.net/shreyadixit11",
              icon: <FaBehance className="text-lg" />,
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 rounded-full p-3 transition-colors duration-300 ${
                darkMode
                  ? "border-[#baff39] text-[#baff39] hover:bg-[#baff39] hover:text-[#0e0e0e]"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-[16px] font-medium">
          {[
            { to: "home", label: "Home" },
            { to: "about", label: "About Me" },
            { to: "projects", label: "Projects" },
            { to: "contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer transition-colors duration-300 relative group
                  ${darkMode ? "text-white hover:text-[#baff39]" : "text-gray-800 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#7F00FF] via-[#E100FF] to-[#00C9FF]"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div
        className={`border-t my-6 w-full max-w-6xl mx-auto ${
          darkMode ? "border-[#333]" : "border-gray-300"
        }`}
      />

      {/* Copyright */}
      <p className={`text-center text-sm ${darkMode ? "text-[#888]" : "text-gray-600"}`}>
        &copy; 2025{" "}
        <span className={darkMode ? "text-white" : "text-black"}>
          Shreya Dixit Portfolio.
        </span>{" "}
        Crafted with passion and precision.
      </p>
    </footer>
  );
}