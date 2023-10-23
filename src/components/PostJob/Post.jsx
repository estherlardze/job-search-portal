import React from 'react'

const Post = () => {
  return (
    <section className='bg-black/5'>
      <section className='flex flex-col h-[60vh] md:h-[80vh] justify-center items-center text-center w-[90%] px-[5%] sm:w-[70%] sm:mx-[15%] lg:w-[50%] lg:mx-[25%]'
       data-aos="zoom-in">
        <h1 className='text-3xl sm:text-4xl md:5xl lg:text-6xl font-semibold text-black/90 '>
          Post a Job
        </h1>
        <p className='font-semibold text-xl text-gray mt-6'>
          It is a long established fact that a reader will be distracted 
          by the real conten of a page when looking at its layout</p>
       </section>
    </section>
  )
}

export default Post
