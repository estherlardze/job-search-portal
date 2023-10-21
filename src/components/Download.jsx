import React from 'react'
import {appstore, playstore} from '../assets/index'

const Download = () => {
  return (
    <div className='bg-download bg-cover bg-center bg-no-repeat w-[100%] h-[80vh]'>
       <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] py-[80px] text-white'>
       <div className='flex gap-1 mb-8' data-aos="fade-right" data-aos-duration="1000">
         <hr className='border border-white w-[50px] mt-4'/>
         <h1 className='font-bold text-l 2xl:text-4xl'>
          DOWNLOAD & ENJOY
          </h1>
        </div>
        <h1 className='text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-16 lg:w-[50%]' data-aos="fade-right" data-aos-duration="1500">
          Get the Template Job Search App
        </h1>
        <p className='my-8 text-lg font-semibold lg:w-[50%]' data-aos="fade-right" data-aos-duration="2000">
        It is a long established fact that a reader will be distracted
         by the real conten of a page when looking at its layout</p>
         <div className='flex gap-2 lg:gap-6 mt-12' data-aos="fade-up" data-aos-duration="2000">
           <img src={playstore} alt="playstore" className='w-[50%] sm:w-auto'/>
           <img src={appstore} alt="appstore" className='w-[50%] sm:w-auto'/>
         </div>
       </section>
    </div>
  )
}

export default Download
