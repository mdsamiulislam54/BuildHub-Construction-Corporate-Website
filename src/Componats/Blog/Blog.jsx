import React from 'react'
import Buldozar from '../../assets/Bulldozar.png'
import Building_1 from '../../assets/Building-1.png'
import Building_2 from '../../assets/Building-2.png'
import Building_3 from '../../assets/Building-3.png'
import Building_4 from '../../assets/Building-4.png'
import Building_5 from '../../assets/Building-5.png'
import Building_6 from '../../assets/Building-6.png'

const Blog = () => {
  return (
    <div className='md:py-14 py-12'>
        <div className='md:w-7xl w-4xl mx-auto'>
            <div>
                <h3 className='text-center md:text-4xl text-3xl font-bold mb-6 gap-5'>What We Do</h3>
            </div>
            <div className='grid md:grid-cols-4 '>
                <div className='grid grid-cols-1 '>
                    {/* work card 1........... */}
                <div className='flex items-center justify-between gap-5'>
                    <img className='row-span-2 w-20 h-20 object-cover '  src = {Building_1}/>
                    <div>
                    <h4 className='text-2xl mb-5 font-medium'>Pre- Construction</h4>
                    <p className='text-base text-gray-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                 {/* work card 2........... */}
                <div className='flex items-center justify-between gap-5'>
                    <img className='row-span-2 w-20 h-20 object-cover '  src = {Building_2}/>
                    <div>
                    <h4 className='text-2xl mb-5 font-medium'> Management</h4>
                    <p className='text-base text-gray-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                 {/* work card 3........... */}
                <div className='flex items-center justify-between gap-5'>
                    <img className='row-span-2 w-20 h-20 object-cover'  src = {Building_3}/>
                    <div>
                    <h4 className='text-2xl mb-5 font-medium'>General Controling</h4>
                    <p className='text-base text-gray-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                 {/* work card 3 end........... */}
                </div>
                <div className='col-span-2'>
                    <picture>
                        <img className='w-full h-auto object-cover col-span-1' src={Buldozar}/>
                    </picture>
                </div>
                 {/* work card 4........... */}
                <div className='grid grid-cols-1'>
                <div className='flex items-center justify-between gap-5'>
                    <img className='row-span-2 w-20 h-20 object-cover'  src = {Building_4}/>
                    <div>
                    <h4 className='text-2xl mb-5 font-medium'>Design and Build</h4>
                    <p className='text-base text-gray-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                 {/* work card 5........... */}
                <div className='flex items-center justify-between gap-5'>
                    <img className='row-span-2 w-20 h-20 object-cover'  src = {Building_5}/>
                    <div>
                    <h4 className='text-2xl mb-5 font-medium'>Self Perfrom</h4>
                    <p className='text-base text-gray-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                 {/* work card 6........... */}
                <div className='flex items-center justify-between gap-5'>
                    <img className='row-span-2 w-20 h-20 object-cover'  src = {Building_6}/>
                    <div>
                    <h4 className='text-2xl mb-5 font-medium'>Health & Safety</h4>
                    <p className='text-base text-gray-600 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog