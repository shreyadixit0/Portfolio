import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Element } from "react-scroll";

const projects = [
  {
    title: "Job Application Tracker",
    description:
      "A full-stack web app to track job applications with status, resume preview, and stats dashboard, track all the application in one place.",
    tech: ["React", "MongoDB", "Tailwind CSS", "Daisy UI"],
    github: "https://github.com/shreyadixit0/Job-Application-Tracker",
    // live: "#",
  },
  {
    title: "ResumeX",
    description:
      "ResumeX is a resume screening app that provides an ATS score, suggests improvements, and helps users build stronger resumes with guided feedback.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/shreyadixit0/ResumeX",
    // live: "#",
  },
  {
    title: "Library Management System",
    description:
      "A Library Management System with integrated chatbot support for student queries. Manages book inventory, issue/return tracking, offering interactive experience for both users and admins.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/shreyadixit0/Library-Management-System-",
    // live: "#",
  },
];

export default function Projects() {
  return (
    <Element name="projects">
      <section className="px-6 py-20 bg-base-100 text-base-content "> {/* Corrected class name */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-md p-10 justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white-700 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-white/50 text-indigo-800 border border-indigo-200 rounded-full px-3 py-1 text-xs font-medium shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-indigo-700 bg-white rounded-lg shadow hover:bg-indigo-50 transition flex items-center justify-center"
                  >
                    <FaGithub className="inline-block mr-2" /> Code
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                  >
                    <FaExternalLinkAlt className="inline-block mr-2" /> Live
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}