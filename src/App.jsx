import React, { useState, useEffect } from 'react'; // Add useEffect import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Componats/Navbar/Navbar';
import Banner from './Componats/Banner/Banner';
import About from './Componats/About/About';
import Aboutpage from './Componats/Pages/Aboutpage';
import Ourclients from './Componats/Ourclients/Ourclients';
import ServicesSection from './Componats/ServicesSection/ServicesSection';
import Services from './Componats/Pages/Services';

import Loading from './Componats/Loading/Loading'
import WhaWeDo from './Componats/WhatWeDo/WhatWeDo';
import Blog from './Componats/Blog/Blog';
import Blogpage from './Componats/Pages/BlogPage';
import MouseMoveEffect from './Componats/MouseMoveEffect/MouseMoveEffect';
import FilterGallery from './Componats/FillterGallery/FilterGallery';
import Project from './Componats/Pages/Project';
import Contact from './Componats/Contact/Contact';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (e.g., fetching data or resources)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay
  }, []);

  return (
 
      <div className="App">
       
        <MouseMoveEffect/>
        
        
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Banner />
                  <About />
                  <ServicesSection />
                  <WhaWeDo />
                  <Blog/>
                  <FilterGallery/>
                  <Contact/>
                  
                  
                </>
              }
            />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ourclients" element={<Ourclients />} />
            <Route path='/blog' element={<Blogpage/>}/>
            <Route path="/projects" element={<Project/>} />
          </Routes>
        )}
      </div>
  
  );
}

export default App;