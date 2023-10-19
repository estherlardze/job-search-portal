import React from 'react'
import Jobdetails from './Jobdetails'

const Details = () => {
  return (
    <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] my-[100px]'>
       <div className='flex justify-center items-center text-center gap-6 cursor-pointer mb-8 flex-col sm:flex-row'>
         <h1 className='text-3xl font-semibold text-black/90'>Job Details</h1>
         <h1 className='text-3xl font-semibold text-black/90'>Company Details</h1>
       </div>
       <hr className='border border-gray/20'/>
       <Jobdetails/>
    </section>
  )
}

export default Details
