import React from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import './Nav.css'

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-black p-8 z-50 transition-transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute top-5 left-5" onClick={toggleMenu}>
        <FiX size={50} color="gold" />
      </button>
      <ul className="flex flex-col items-center gap-6 mt-16">
        {["Home", "About", "Services", "Blog", "News"].map((item) => (
          <li key={item}>
            <Link to="/" className="text-2xl text-white font-bold">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
