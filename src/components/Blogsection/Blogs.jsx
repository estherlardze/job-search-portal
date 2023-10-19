import React from 'react'
import { Link } from 'react-router-dom'

const transition = "transition-all ease-in-out duration-500" 

const Blogs = () => {
  return (
    <section className='my-[50px] w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
      <div>
        <div className='flex gap-3'>
          <hr className='border border-blue w-[40px] mt-4'/>
          <h1 className='text-blue font-bold 2xl:text-4xl'>OUR BLOG</h1>
        </div>
        <article className='flex justify-between flex-col sm:flex-row gap-4 my-4'>
         <h1 className='text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-16'>
          Browse our articles & resources
         </h1>
         <Link  to='/blog' 
         className={`${transition} w-fit font-semibold text-white bg-blue py-2 px-3 rounded-3xl hover:bg-black`}>
            View All Blogs
        </Link>
        </article>
       </div>

       <div className='grid grid-cols-7 mt-8'>
        <div className='col-span-7 lg:col-span-4'>
         <h1>Blogs</h1>
        </div>
    
        <div className='col-span-7 lg:col-span-3'>
         <h1>Blogs detail</h1>
        </div>
       </div>
    </section>
  )
}

export default Blogs
