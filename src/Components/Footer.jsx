import {
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll"; // ✅ Added import

export default function Footer() {
  return (
    <footer className="bg-base-200 text-[#bcbcbc] font-sans pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-7 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/shreya0"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#baff39] text-[#baff39] hover:bg-[#baff39] hover:text-[#0e0e0e] transition-colors duration-300 rounded-full p-3"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#baff39] text-[#baff39] hover:bg-[#baff39] hover:text-[#0e0e0e] transition-colors duration-300 rounded-full p-3"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a
            href="https://github.com/shreyadixit0"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#baff39] text-[#baff39] hover:bg-[#baff39] hover:text-[#0e0e0e] transition-colors duration-300 rounded-full p-3"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://www.behance.net/shreyadixit11"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#baff39] text-[#baff39] hover:bg-[#baff39] hover:text-[#0e0e0e] transition-colors duration-300 rounded-full p-3"
          >
            <FaBehance className="text-lg" />
          </a>
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
                offset={-70} // adjust for navbar height
                duration={500}
                className="cursor-pointer hover:text-[#baff39] transition text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-[#333] my-6 w-full max-w-6xl mx-auto" />

      {/* Copyright */}
      <p className="text-center text-[#888] text-sm">
        &copy; 2025{" "}
        <span className="text-white">Shreya Dixit Portfolio.</span> Crafted with passion and precision.
      </p>
    </footer>
  );
}
