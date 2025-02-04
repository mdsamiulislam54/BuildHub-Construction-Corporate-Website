import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-yellow-300 pt-12">
      <div className="md:w-7xl mx-auto text-center md:px-0 px-4">
        {/* Newsletter Signup */}
        <div className="mt-8  p-6 border-b-2 border-gray-400 text-center flex justify-around">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">
              🚀 Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600">
              Stay updated with our latest news and offers.
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-2/3 p-2 border rounded-md"
            />
            <button className="bg-black  text-white py-2 px-4 rounded-md cursor-pointer transition ml-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10   ">
          <div className="col-span-2">
            <div className="flex items-center my-6">
              <Link to="/">
                <MdAccountBalance size={30} />
              </Link>
              <span className={`ml-2 text-xl font-bold `}>BuildHub</span>
            </div>
            <div>
              <p className="text-start text-base mb-6 text-gray-900 font-normal tracking-wide ">
                Building dreams, one brick at a time! At [Your Company Name], we
                are committed to delivering high-quality construction solutions
                with precision and excellence. From residential to commercial
                projects, our skilled team ensures durability, safety, and
                innovation in every structure. Let’s build a better future
                together!
              </p>
              <div className="text-start">
                <p className="mb-2 text-md tracking-wide">📍 Location: 1234 Main Street, Dhaka</p>
                <p className="mb-2 text-md tracking-wide">📞 Contact: +880 123 456 789 </p>
                <p className="mb-2 text-md tracking-wide">🕒 Office Hours: Monday - Friday: 9 AM - 6 PM</p>
                <p className="mb-2 text-md tracking-wide">🔗 Follow us on</p>
                <p className="my-3 flex gap-5 text-2xl cursor-pointer">
                  <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>
          <div className="my-6 text-start   ">
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Page</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">About Us</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Our Team</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Review</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Blog </Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Projects</Link>
           </li>
          </div>
          <div className="my-6 text-start">
          <li className="list-none md:text-2xl  font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 text-3xl font-bold">Our Services</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">General Construction</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Property Maintenance</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Virtural Design & Build</Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Proceons Truction </Link>
           </li>
           <li className="list-none md:text-2xl text-xl font-medium tracking-wide mb-4">
            <Link className=" hover:text-gray-600 transition-all duration-200 ">Contact Us</Link>
           </li>
          </div>
        </div>
        
      </div>
      <div className="bg-white py-5">
        <div className="md:w-7xl mx-auto px-4 md:px-0">
              <div className="flex justify-between">
              <p className="text-xl tracking-wide font-medium">© {new Date().getFullYear()} Buildhub All Right Reserved. </p>
              <p className="text-xl tracking-wide font-medium">Created By Md: Shamiul Islam</p>
              
              </div>    
        </div>
      </div>
    </div>
  );
};
