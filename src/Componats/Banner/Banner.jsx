import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Banner = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrnetIndex] = useState(0);

  useEffect(() => {
    const fatchData = async () => {
      try {
        const response = await fetch("../../public/BannerSlider.json");
        const data = await response.json();
        setImages(data);
      } catch {
        console.log("error");
      }
    };
    fatchData();
  }, []);

  //   useEffect(()=>{
  //     const interval = setInterval(() => {
  //        setCurrnetIndex((prevIndex)=> (prevIndex+1)% images.length);

  //     },10000)
  //     return () => clearInterval(interval);
  //    },[images.length])

  const nextBtn = () => {
    setCurrnetIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevBtn = () => {
    setCurrnetIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  const handleDotClick = (index) => {
    setCurrnetIndex(index);
  };

  return (
    <div className="lg:max-w-full max-w-4xl mx-auto   ">
      <div className="relative  z-10 ">
        {images.length > currentIndex ? (
          <div className="relative -z-1">
            <img
              className="w-full h-[100vh] object-cover  "
              src={images[currentIndex].image}
              alt={images.heading}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          </div>
        ) : (
          <div>No images</div>
        )}

        {images.length > currentIndex && (
          <div className="z-20 w-7xl mx-auto">
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-center w-9/12  mx-auto
                     
                      "
            >
              <h2 className="text-5xl text-white font-bold sm:leading-20 leading-12 gap-x-10 z-10 sm:mb-6 max-md:text-3xl">
                {images[currentIndex].heading}
              </h2>
              <p className=" text-base text-gray-300 leading-8 mb-6 font-medium text-center">
                {images[currentIndex].description}
              </p>
              <button
                className="relative z-10 border-2 border-[var(--primary)] px-5 py-3 text-xl font-medium rounded-md cursor-pointer text-white overflow-hidden
             before:absolute before:bg-amber-300 before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-transform before:duration-300 before:transform hover:before:translate-x-full before:-z-1 hover:text-black "
              >
                {images[currentIndex].action}
              </button>
            </div>
          </div>
        )}

        <div className="absolute top-[50%] left-0 right-0 flex justify-between transform -translate-y-1/2">
          <button className="p-3 hover:cursor-pointer" onClick={prevBtn}>
           
            <FaChevronCircleLeft size={30} color="var(--primary)" /> 
          </button>
          <button className="p-3 hover:cursor-pointer" onClick={nextBtn}>
           
            <FaChevronCircleRight size={30} color="var(--primary)" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((item, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-[var(--primary)] text-white"
                  : "bg-gray-500 text-white"
              } hover:bg-[var(--primary)] cursor-pointer`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Banner;
