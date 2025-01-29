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
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollPositionHandle = () => {
    const position = window.scrollY;
    if (scrollposition === 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
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
      <div
        className={`max-md:px-4 sticky top-0 left-0 right-0 z-50 shadow-lg transition-transform duration-500 ${
          scrollposition === 0 ? " bg-white " : "bg-white"
        }
        }`}
      >
        <nav className="z-50 max-w-7xl mx-auto">
          {/* Mobile Menu Icon */}
          <div className="flex justify-between items-center  md:hidden">
            <span className={`text-xl font-bold flex items-center `}>
              <img className="w-12" src={Logo} alt="" />
              <span className={""}> BuildHub</span>
            </span>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          {/* mobill list item */}
          <div
            className={`fixed top-0 right-0 h-full w-full  p-8 z-50 transition-transform duration-300 ease-in-out bg-black  ${
              isMenuOpen ? "translate-x-20" : "translate-x-full"
            }`}
          >
            <ul className="flex gap-4 flex-col justify-center items-center ">
              <li className="mb-5">
                <Link
                  to={"/"}
                  className="text-2xl  text-white font-bold  "
                >
                  Home
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to={"/"}
                  className="text-2xl  text-white font-bold"
                >
                  About
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to={"/"}
                  className="text-2xl  text-white font-bold"
                >
                  Services
                </Link>
              </li>

              <li className="mb-5">
                <Link
                  to={"/"}
                  className="text-2xl  text-white font-bold"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to={"/"}
                  className="text-2xl  text-white font-bold"
                >
                  News
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to={"/"}
                  className="text-2xl  text-white font-bold"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to={"/"}
                  className="text-2xl  text-white font-bold"
                >
                  Services
                </Link>
              </li>
              <button className="relative z-10 border-2 border-yellow-300 px-32 py-3 text-xl font-medium rounded-md cursor-pointer text-white overflow-hidden
             before:absolute before:bg-amber-300 before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-transform before:duration-300 before:transform hover:before:translate-x-full before:-z-1 hover:text-black ">
                Qoute
              </button>
            </ul>

            {/* Close Button */}
            <button className="absolute top-5 left-5" onClick={toggleMenu}>
              <FiX size={50} color="gold" />
            </button>
          </div>
           {/* mobill list item end*/}

          {/* Mobile Menu Icon END */}

          {/* Desktop Menu */}
          {/* top bar */}
          <div className=" flex justify-between items-center py-3 max-md:hidden bg-yellow-300 px-1">
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
          <div className="flex  items-center justify-between max-w-7xl mx-auto max-md:hidden ">
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
