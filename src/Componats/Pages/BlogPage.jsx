import React from 'react'
import Navbar from '../Navbar/Navbar'
import Blog from '../Blog/Blog'


const BlogPage = () => {
  return (
    <div>
        <div>
            <Navbar bgColor='bg-black'/>
            <div className='mt-16'>
                <Blog pagesize={10} hiddendBtn={true} />
            </div>
        </div>
    </div>
  )
}

export default BlogPage