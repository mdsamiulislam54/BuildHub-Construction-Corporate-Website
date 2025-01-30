import React, { useState } from "react";
import { FaTools, FaBuilding, FaHardHat, FaTruck } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";

const services = [
  {
    id: 1,
    icon: <FaTools className="text-4xl text-green-500" />,
    title: "General Construction",
    description:
      "High-quality construction services for commercial & residential projects.",
  },
  {
    id: 2,
    icon: <FaBuilding className="text-4xl text-green-500" />,
    title: "Architecture & Design",
    description:
      "Innovative architectural design with modern construction technology.",
  },
  {
    id: 3,
    icon: <FaHardHat className="text-4xl text-green-500" />,
    title: "Safety & Compliance",
    description:
      "Ensuring industry-standard safety protocols for all projects.",
  },
  {
    id: 4,
    icon: <FaTruck className="text-4xl text-green-500" />,
    title: "Logistics & Material Supply",
    description:
      "Reliable material supply & transportation for smooth construction workflow.",
  },
  {
    id: 5,
    icon: <FaTools className="text-4xl text-green-500" />,
    title: "Renovation Services",
    description: "Complete renovation solutions for modern and classic homes.",
  },
  {
    id: 6,
    icon: <FaBuilding className="text-4xl text-green-500" />,
    title: "Interior Design",
    description: "High-end interior design services for offices and homes.",
  },
  {
    id: 7,
    icon: <FaHardHat className="text-4xl text-green-500" />,
    title: "Landscaping",
    description: "Professional landscaping services to enhance outdoor spaces.",
  },
  {
    id: 8,
    icon: <FaTruck className="text-4xl text-green-500" />,
    title: "Project Management",
    description:
      "Complete construction project management from start to finish.",
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 4 ? 0 : 2));
  };

  return (
    <section className="py-14 ">
      <div className="max-w-7xl mx-auto px-4 text-center relative ">
        <h2 className="text-4xl font-bold text-[var(--secondary)] mb-6">
          Our Services
        </h2>
        <p className="text-base text-gray-600 mb-8 ">
          We provide top-notch construction solutions tailored to your needs.
        </p>

        {/* Services Container */}
        <div className="overflow-hidden relative w-full">
          <div
            className={`flex transition-transform duration-500 ${
              currentIndex === 0 ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* First 4 Cards */}
            <div className="grid grid-cols-4 gap-6 w-full flex-shrink-0 ">
              {services.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition relative"
                >
                  <div className="my-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--secondary)]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 my-6">{service.description}</p>
                  <div className=" absolute bottom-3 ">
                    <Link to={'/services'} className="text-base font-bold text-[var(--secondary)]  hover:text-yellow-300 transition-colors duration-200  flex items-center gap-5 ">
                      {" "}
                      Learn more{" "}
                      <span>
                        <GoArrowRight />
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Second 4 Cards */}
            <div className="grid grid-cols-4 gap-6 w-full flex-shrink-0">
              {services.slice(4, 8).map((service) => (
                <div
                  key={service.id}
                  className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition relative"
                >
                  <div className="my-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--secondary)]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 my-6">{service.description}</p>
                  <div className=" absolute bottom-3 w-full -left-16 ">
                    <Link to={'/services'} className="text-base font-light text-[var(--primary)] ">
                      {" "}
                      Learn more.....
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left & Right Arrow Buttons */}
        <div className="absolute top-0 right-0 flex gap-2 mt-3">
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowLeft color="gold" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <FaArrowRight color="gold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
