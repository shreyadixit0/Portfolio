import React from "react";
import profileImg from "../assets/profile.jpg";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-base 100 flex justify-center items-center relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center px-8 py-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500">
            Hello, I'm Shreya Dixit
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white max-w-xl">
            A passionate{" "}
            <span className="font-semibold text-white">
              Full Stack Developer and UI/UX Designer
            </span>{" "}
            Crafting digital experiences, from front-end beauty to back-end
            brilliance.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              View Resume
            </a>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80} // Fixes navbar overlap
              className="px-6 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-100 transition cursor-pointer"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={profileImg}
            alt="Shreya Dixit"
            className="w-[280px] sm:w-[340px] md:w-[400px] object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

