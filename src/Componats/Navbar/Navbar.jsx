import React, { useEffect, useState } from "react";

import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/letter-b.png";

import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollposition, setScrollposition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollPositionHandle = () => {
    const position = window.scrollY;
    setScrollposition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollPositionHandle);

    return () => {
      window.removeEventListener("scroll", scrollPositionHandle);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 left-0 z-50 ">
        <nav
          className={`  shadow-lg transition-all duration-400 ${
            scrollposition > 0 ? "bg-gray-900 " : "bg-white"
          } `}
        >
          {/* Mobile Menu Icon */}
          <div className="flex justify-between items-center px-4 md:hidden">
            <span className={`text-xl font-bold flex items-center  ${
              scrollposition > 0 ? "text-white" : "text-gray-800"
            }`}>
              <img className="w-12" src={Logo} alt="" />
             <span className={` ${
              scrollposition > 0 ? "text-white" : "text-gray-800"
            }`}> BuildHub</span>
            </span>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div
            className={`fixed top-0 right-0 h-full w-full bg-yellow-200 p-8 z-50 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex gap-4 flex-col justify-center items-center ">
              <li>
                <Link
                  to={"/"}
                  className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to={"/"}
                  className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                >
                  Services
                </Link>
              </li>
              <button className="bg-yellow-300 text-2xl font-bold w-full rounded-lg ">
                Qoute
              </button>
            </ul>

            {/* Close Button */}
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
              <FiX size={24} />
            </button>
          </div>
          {/* Desktop Menu */}
          {/* top bar */}
          <div className="w-7xl mx-auto flex justify-between items-center py-3 max-sm:hidden bg-yellow-300 px-1">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <FaPhone />
                <span className="text-base">+123-456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <span className="text-base">info@company.com</span>
              </div>
            </div>
            <div className="flex">
              <FaFacebook
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaTwitter
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaLinkedin
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaYoutube
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
              <FaDiscord
                size={20}
                style={{ margin: "10px" }}
                className="hover:scale-110 cursor-pointer transition-all duration-200"
              />
            </div>
          </div>
          {/* navbar  */}
          <div className="flex  items-center justify-between w-7xl mx-auto max-sm:hidden ">
            <div className="flex items-center justify-center">
              <Link to={"/"}>
                <img className="w-14" src={Logo} alt="" />
              </Link>
              <span className="text-2xl font-bold">BuildHub</span>
            </div>
            <div className="flex gap-10 items-center py-5 ">
              <ul className="flex gap-4 align-center max-sm:hidden ">
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-base text-gray-800 font-medium hover:text-yellow-200 transition-all duration-200"
                  >
                    Services
                  </Link>
                </li>
              </ul>

              <div>
                <button className="bg-yellow-300 text-2xl px-6 py-1 rounded-lg max-sm:hidden hover:shadow-lg font-bold cursor-pointer">
                  Qoute
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
