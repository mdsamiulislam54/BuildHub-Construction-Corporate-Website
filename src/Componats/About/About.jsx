import React from "react";
import About_1 from "../../assets/about-1.jpg";
import About_2 from "../../assets/about-2.jpg";
import About_3 from "../../assets/about-3.jpg";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="md:py-24 py-12 max-md:px-4">
      <div className=" lg:max-w-7xl max-w-4xl mx-auto ">
        <div className="flex lg:items-start items-center gap-5 max-md:flex-col-reverse max-md:items-center  ">
          <div className="grid grid-cols-2 grid-rows-2 md:w-6/12 gap-5 ">
            <img
              className="row-span-2 w-100 h-full object-cover rounded-lg shadow-lg"
              src={About_1}
              alt=""
            />
            <img className="rounded-lg shadow-lg" src={About_2} alt="" />
            <img className="rounded-lg shadow-lg" src={About_3} alt="" />
          </div>
          <div className="w-6/12 max-md:w-full max-sm:text-center max-md:w-ful max-md:text-center">
            <h6 className="text-base font-medium pb-5">About us.....</h6>
            <h2 className="sm:text-3xl md:text-4xl font-bold pb-5">
              Building Dreams, Crafting Reality
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-5 ">
              At BuildHub, we believe that every structure tells a story. With
              years of experience in the construction industry, we specialize in
              delivering high-quality, durable, and innovative solutions for
              residential, commercial, and industrial projects. Our dedicated
              team of experts ensures that every project is executed with
              precision, safety, and sustainability in mind. Whether it's a new
              build, renovation, or remodeling, we are committed to transforming
              your vision into reality—on time and within budget.
            </p>
            <div className="grid md:grid-cols-2 md:gap-5 gap-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-2xl text-emerald-600  mr-2" />
                <span className="text-base font-medium leading-relaxed">
                  Market Research
                </span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-2xl text-emerald-600  mr-2" />
                <span className="text-base font-medium leading-relaxed">
                  Pre-construction Services
                </span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-2xl text-emerald-600  mr-2" />
                <span className="text-base font-medium leading-relaxed">
                  Industrial Manufacturing
                </span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-2xl text-emerald-600  mr-2" />
                <span className="text-base font-medium leading-relaxed">
                  Building and Construction
                </span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-2xl text-emerald-600  mr-2" />
                <span className="text-base font-medium leading-relaxed">
                  Timely Project Delivery
                </span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-2xl text-emerald-600  mr-2" />
                <span className="text-base font-medium leading-relaxed">
                  
                  Skilled and Experienced Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
