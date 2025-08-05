import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-base-100 text-base-content py-20 px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-md rounded-2xl p-10"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            className="textarea textarea-bordered w-full md:col-span-2 bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Your Message"
            rows="5"
          ></textarea>
          <div className="md:col-span-2 flex justify-center">
            <button className="btn btn-primary px-8">Send</button>
          </div>
        </form>

        <div className="mt-10 text-center space-x-5 text-xl">
          <a
            href="mailto:shreyadixit973@gmail.com"
            className="inline-flex items-center gap-2 hover:text-primary transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/shreya0/"
            className="inline-flex items-center gap-2 hover:text-primary transition"
            target="_blank"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/shreyadixit0"
            className="inline-flex items-center gap-2 hover:text-primary transition"
            target="_blank"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
