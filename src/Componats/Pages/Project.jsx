import React from 'react'
import Navbar from '../Navbar/Navbar'
import FilterGallery from '../FillterGallery/FilterGallery'

const Project = () => {
  return (
    <div>
        <Navbar bgColor='bg-black'/>
        <div className='mt-4'>
            <FilterGallery show={12} block='hidden'/>
        </div>
    </div>
  )
}

export default Project