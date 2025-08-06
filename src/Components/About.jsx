import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
  const skills = [
    "React", "Node.js", "Express", "MongoDB", "JavaScript",
    "Tailwind", "DaisyUI", "Framer Motion", "Figma", "Git",
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-base 100 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-md rounded-2xl p-10"
      >
        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profileImg}
          alt="Shreya Dixit"
          className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
        />

        {/* Text */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500">
            About Me
          </h2>
          <p className="text-lg text-white leading-relaxed">
            I’m <span className="font-semibold text-white">Shreya Dixit</span>, a final-year student pursuing Bachelors of Technology in Computer Science and Engineering at Babu Banarasi Das University.
            I work as a Full Stack Developer and UI/UX Designer. I enjoy creating web applications that are both functional and user-focused.
            I am highly organized, manage my time well, and always ensure timely delivery.
          </p>

          {/* Hobbies */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">My Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {["Photography", "Badminton", "Sketching", "Travelling", "Book Reading"].map((hobby, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-indigo-800 shadow-sm"
                >
                  {hobby}
                </motion.span>
              ))}
            </div>
          </div>


          {/* Language */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {["Hindi", "English", ].map((hobby, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-indigo-800 shadow-sm"
                >
                  {hobby}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

