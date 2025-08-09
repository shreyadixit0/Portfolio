import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelors of Technology",
    institution: "Babu Banarasi Das University",
    specialization: "Computer Science and Engineering",
    year: "2022 - 2026",
    cgpa: "CGPA - 8.04",
    location: "Lucknow",
  },
  {
    degree: "Intermediate",
    institution: "Prestige Inter College",
    xyz: "UP Board",
    year: "2021 - 2022",
    cgpa: "Percentage: 77%",
    location: "Deoria",
  },
  {
    degree: "High School",
    institution: "Universal Public School",
    xyz: "CBSE Board",
    year: "2019 - 2021",
    cgpa: "Percentage: 75%",
    location: "Deoria",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-22 bg-base-100 text-base-content flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold mb-6 text-center">Education</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-md p-12 text-left"
            >
              <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500">
                {edu.degree}
              </h3>

              <p className="text-sm mt-1 font-medium text-white">{edu.institution}</p>

              {edu.specialization && (
                <p className="text-sm mt-1 font-medium text-white">{edu.specialization}</p>
              )}

              <p className="text-sm mt-1 font-medium text-white">{edu.xyz}</p>

              <p className="text-sm mt-1 italic text-white">{edu.year}</p>

              {edu.cgpa && (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-4 mr-2 px-4 py-1 text-sm font-semibold text-indigo-800 bg-white/70 backdrop-blur-md border border-white/30 rounded-full shadow-sm"
                >
                  {edu.cgpa}
                </motion.span>
              )}

              {edu.location && (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-2 px-4 py-1 text-sm font-semibold text-indigo-800 bg-white/70 backdrop-blur-md border border-white/30 rounded-full shadow-sm"
                >
                  {edu.location}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
