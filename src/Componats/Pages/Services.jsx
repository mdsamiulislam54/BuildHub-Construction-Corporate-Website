import React from 'react'
import Navbar from '../Navbar/Navbar'
import ServicesSection from '../ServicesSection/ServicesSection'

const Services = () => {
  return (
    <div>
        <Navbar bgColor='bg-black'/>
        <div className='pt-16'>
            <ServicesSection/>
        </div>
    </div>
  )
}

export default Services