import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Blog = ({pagesize=2,  hideButtons = false, hiddendBtn = false}) => {
  const [blog, setBlog] = useState([]); // State to store blog data
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const pageSize = pagesize; // Number of items per page

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/public/BlogData.json"); // Fetch data from JSON
        const data = await response.json();
        setBlog(data); // Set fetched data to state
      } catch {
        console.error("Error fetching blog data"); // Handle error if fetch fails
      }
    };
    fetchBlog();
  }, []); // Empty dependency array to run once on component mount

  // Handle next page
  const handleNext = () => {
    if (currentPage * pageSize < blog.length) {
      setCurrentPage(currentPage + 1); // Increment page if more blogs are available
    }
  };
  const handleNext1 = (page) => {
    setCurrentPage(page)
  };
  const handleNext2 = (page) => {
    setCurrentPage(page)
  };
  const handleNext3 = (page) => {
    setCurrentPage(page)
  };
  const handleNext4 = (page) => {
    setCurrentPage(page)
  };


  // Handle previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement page if not on the first page
    }
  };

  // Slice the blogs for the current page
  const currentBlogs = blog.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Function to toggle Read More/Read Less
  const toggleReadMore = (index) => {
    const updatedBlogs = [...blog];
    updatedBlogs[index].isReadMore = !updatedBlogs[index].isReadMore;
    setBlog(updatedBlogs);
  };

  return (
    <div className="md:py-14 py-12 max-md:px-4">
      <div className="lg:max-w-7xl max-w-4xl mx-auto">
        <div><h4 className="text-center mb-12 text-4xl font-bold tracking-wide leading-10">Our Blog</h4></div>
        <div className="grid grid-cols-2 gap-6 ">
          {currentBlogs.map((item, index) => {
            const displayText = item.isReadMore
              ? item.paragraph
              : item.paragraph.split(" ").slice(0, 40).join(" ") + "..."; 

            return (
              <div key={index} className="blog-card p-4 shadow-lg relative overflow-hidden">
                <img src={item.images} alt={item.title} className="rounded-lg" />
                <div className="flex items-center justify-between my-6">
                    <h5 className="text-2xl font-bold">{item.admin}</h5>
                    <date className='font-bold'  value={item.date}>{item.date}</date>
                </div>
                <h2 className="text-3xl font-bold mb-6 tracking-wide">{item.title}</h2>
                <p className="text-base font-light tracking-wide leading-8">{displayText}</p>
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-blue-500 relative py-2"
                >
                  {item.isReadMore ? "Read Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>

        {!hideButtons && (
            <div className="pagination flex justify-center items-center my-12">
            <div className="flex items-center gap-12">
            <button className="p-5 bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:scale-110 duration-300 transition-all" onClick={handlePrev} disabled={currentPage === 1}>
              
              <FaArrowLeft color="gold" />
            </button>
            <button onClick={()=> handleNext1(1)}    className="py-4 px-6 font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:scale-110 duration-300 transition-all">1</button>
            <button onClick={()=> handleNext2(2)}  className="py-4 px-6 font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:scale-110 duration-300 transition-all">2</button>
          {!hiddendBtn && (
             <>
              <button onClick={()=> handleNext3(3)}  className="py-4 px-6 font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:scale-110 duration-300 transition-all">3</button>
              <button onClick={()=> handleNext4(4)}  className="py-4 px-6 font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:scale-110 duration-300 transition-all">4</button></>
          )}
          
            <button className="py-4 px-6 font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:scale-110 duration-300 transition-all"
              onClick={handleNext}
              disabled={currentPage * pageSize >= blog.length}
            >
               <FaArrowRight color="gold" />
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
