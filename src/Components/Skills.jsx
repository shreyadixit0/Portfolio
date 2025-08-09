import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFramer,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, label: "HTML", color: "#FF5722", hoverColor: "#FF8A65" },
  { icon: <FaCss3Alt />, label: "CSS", color: "#2196F3", hoverColor: "#64B5F6" },
  { icon: <FaJs />, label: "JavaScript", color: "#FFEB3B", hoverColor: "#FFF176" },
  { icon: <FaJava />, label: "Java", color: "#007396", hoverColor: "#FFF176" },
  { icon: <FaReact />, label: "React", color: "#00D8FF", hoverColor: "#80DEEA" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38BDF8", hoverColor: "#7DD3FC" },
  { icon: <SiFramer />, label: "Framer Motion", color: "#8B5CF6", hoverColor: "#C084FC" },
  { icon: <SiExpress />, label: "Express.js", color: "#A3A3A3", hoverColor: "#D1D5DB" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#3C873A", hoverColor: "#4ADE80" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#4DB33D", hoverColor: "#6EE7B7" },
  { icon: <FaDatabase />, label: "SQL", color: "#673AB7", hoverColor: "#A78BFA" },
  { icon: <FaFigma />, label: "Figma", color: "#FF4081", hoverColor: "#F472B6" },
  { icon: <FaGitAlt />, label: "Git", color: "#F1502F", hoverColor: "#FB7185" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-20 bg-base-100 text-white flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>

        <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const customClass = `hover-glow-${index}`;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center rounded-xl border-2 bg-white/10 backdrop-blur-md transition-all duration-300 cursor-pointer group ${customClass}`}
                  style={{
                    borderColor: skill.color,
                    height: "100px",
                    width: "100px",
                  }}
                >
                  <div
                    className="text-3xl sm:text-4xl mb-1 transition-all duration-300"
                    style={{
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-white-300">{skill.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inject scoped CSS for unique hover effects */}
        <style>
          {skills
            .map(
              (skill, index) => `
              .hover-glow-${index}:hover {
                box-shadow: 0 0 10px ${skill.hoverColor}, 0 0 20px ${skill.hoverColor}, 0 0 30px ${skill.hoverColor};
                border-color: ${skill.hoverColor};
              }
            `
            )
            .join("\n")}
        </style>
      </div>
    </section>
  );
}
