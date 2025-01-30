import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'

const Aboutpage = () => {
  return (
    <div>
      
        <Navbar bgColor='bg-black' /> 
       
        <div className="pt-16">
          <About />
        </div>
    </div>
  )
}

export default Aboutpage