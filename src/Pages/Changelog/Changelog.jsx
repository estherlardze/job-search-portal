import React from 'react'
import { Navbar, Footer } from '../../components'

const Changelog = () => {
  return (
    <section className='w-[100%] overflow-hidden'>
    <Navbar/>
    <div className='bg-black/5'>
    <div className='flex flex-col h-[40vh] md:h-[60vh] justify-center items-center text-center w-[90%] px-[5%] sm:w-[80%] sm:mx-[10%] lg:w-[70%] lg:mx-[15%]'
     data-aos="zoom-in">
      <p className='text-blue font-bold mb-3 text-lg text-center'>CHANGELOG</p>
      <h1 className='text-3xl sm:text-4xl md:5xl lg:text-6xl font-semibold text-black/90 '>
      Careari's Changelog
      </h1>
     </div>
    </div>
    <div className='bg-blue/5 shadow-md w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] lg:w-[50%] lg:mx-[25%] my-[100px] text-center py-[60px] rounded-md border border-gray/20'>
      <p className='font-bold text-2xl mb-8'>Version 1.0</p>
      <button className='bg-blue px-4 py-2 rounded-md text-xl font-bold text-white'>Initial Released</button>
      <p className='font-bold text-xl mt-5'>18 September, 2023</p>
      <p className='font-bold text-xl mt-8'>The template has been released!</p>
    </div>
    <Footer/>
    </section>
  )
}

export default Changelog
