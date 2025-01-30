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
      <li><Link to="/" className={`text-base font-medium text-white `}>Home</Link></li>
      <li><Link to="/about" className={`text-base font-medium text-white `}>About</Link></li>
      <li><Link to="/services" className={`text-base font-medium text-white `}>Services</Link></li>
      <li><Link to="/blog" className={`text-base font-medium text-white `}>Blog</Link></li>
      <li><Link to="/contract" className={`text-base font-medium text-white `}>Contract</Link></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
