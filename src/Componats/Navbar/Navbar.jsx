import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";
import MobileMenu from "./MobileMenu"; // Importing Mobile Menu Component
import "./Nav.css";

const Navbar = ({bgColor}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 0 ? "bg-white shadow-md" : bgColor || "bg-transparent"
      }`}
    >
     <div className="md:w-7xl mx-auto">
     <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/">
            <MdAccountBalance
              size={30}
              color={scrollPosition > 0 ? "black" : "gold"}
            />
          </Link>
          <span
            className={`ml-2 text-xl font-bold ${
              scrollPosition > 0 ? "text-black" : "text-white"
            }`}
          >
            BuildHub
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
        <li><Link to="/" className={`text-base font-medium ${scrollPosition > 0 ? "text-black" : "text-white"}`}>Home</Link></li>
            <li><Link to="/about" className={`text-base font-medium ${scrollPosition > 0 ? "text-black" : "text-white"}`}>About</Link></li>
            <li><Link to="/services" className={`text-base font-medium ${scrollPosition > 0 ? "text-black" : "text-white"}`}>Services</Link></li>
           <button
                className={`relative z-10 border-2 border-[var(--primary)] px-8 py-1 text-xl font-medium rounded-md cursor-pointer  overflow-hidden before:absolute before:bg-amber-300 before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-transform before:duration-300 before:transform hover:before:translate-x-full before:-z-1 hover:text-black
                  ${scrollPosition > 0 ? "text-black" : "text-white"} `}
              >
               Quote
              </button>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
     </div>
    </nav>
  );
};

export default Navbar;
