import React from 'react'
import Navbar from '../Navbar/Navbar'
import ServicesSection from '../ServicesSection/ServicesSection'
import WhaWeDo from '../WhatWeDo/WhatWeDo'

const Services = () => {
  return (
    <div>
        <Navbar bgColor='bg-black'/>
        <div className='pt-16'>
            <ServicesSection/>
            <WhaWeDo/>
        </div>
    </div>
  )
}

export default Services