import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", {
        ...formData,
        visitorInfo: navigator.userAgent,
      });

      setShowModal(true); // ✅ Show modal
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

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

        {/* ✅ DaisyUI Modal Popup */}
        {showModal && (
          <dialog open className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">✅ Message Sent!</h3>
              <p className="py-4">Thanks for reaching out! I’ll get back to you soon.</p>
              <div className="modal-action">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input input-bordered w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input input-bordered w-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="textarea textarea-bordered w-full md:col-span-2 bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            rows="5"
            required
          ></textarea>
          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="btn btn-primary px-8">Send</button>
          </div>
        </form>

        {/* Social Links */}
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
            target="_blank" rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/shreyadixit0"
            className="inline-flex items-center gap-2 hover:text-primary transition"
            target="_blank" rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}


