import React, { useEffect, useState } from 'react'
import {GalleryData} from '/public/FilterGalleryData'
import {Link} from 'react-router-dom'

const FilterGallery = ({show = 6}) => {
    const [Images , setImages]= useState([])
    const [Filter , setFilter]= useState([])

    useEffect(()=>{
            setImages(GalleryData)
            setFilter( [... new Set(GalleryData.map((item)=> item.title))] )
    },[])
console.log(Filter)

const handleFilter = (title) => {
    setTimeout(()=>{
        const filterData = GalleryData.filter((item)=> item.title === title)
    setImages(filterData)
    },200)
   
}


const sliceImages = Images.slice(0, show);

console.log(sliceImages);


  return (
    <div className='md:py-14 py-12'>
        <div className="md:w-7xl  px-4 md:px-0 mx-auto">
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Project</h1>
            </div>
            <div className='mb-6  py-4'>
                <ul className=' flex justify-center items-center gap-10'>
                    <li><button onClick={()=> setImages(GalleryData)} className='relative z-10 border-2 border-[var(--primary)] px-6 py-2 text-xl font-medium rounded-md cursor-pointer  overflow-hidden
             before:absolute before:bg-amber-300 before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-transform before:duration-300 before:transform hover:before:translate-x-full before:-z-1 hover:text-black'>Show All</button></li>
                    {
                        Filter.map((item)=> <li> <button className='relative z-10 border-2 border-[var(--primary)] px-6 py-2 text-xl font-medium rounded-md cursor-pointer  overflow-hidden
                        before:absolute before:bg-amber-300 before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-transform before:duration-300 before:transform hover:before:translate-x-full before:-z-1 hover:text-black' onClick={(()=>handleFilter(item))}>{item}</button></li>)
                    }
                </ul>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    sliceImages.map((image, index) => <div key={index} className=' '>

                        <img src={image.images} alt="" className=' w-100 h-100 object-cover rounded-lg' />
                    </div> )
                }
            </div>

            <div className='flex justify-center my-4'>
                <Link to={'/project'} className='relative z-10 border-2 border-[var(--primary)] px-6 py-2 text-xl font-medium rounded-md cursor-pointer  overflow-hidden
                        before:absolute before:bg-amber-300 before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-transform before:duration-300 before:transform hover:before:translate-x-full before:-z-1 hover:text-black'>See More</Link>
            </div>
          
        </div>
    </div>
  )
}

export default FilterGallery