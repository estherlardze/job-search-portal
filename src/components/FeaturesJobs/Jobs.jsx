import React from 'react'

const Jobs = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <div className='text-center'>
         <h4 className='text-blue font-bold'>FEATURED JOBS</h4>
         <h1 className='font-semibold text-4xl sm:text-5xl leading-16 tracking-wider text-black/80'>New & Random Jobs 900+ <br />Browse Jobs</h1>
       </div>
       <div className='mt-8'>
          <h1>Jobs</h1>
       </div>
       <button className='font-semibold text-white bg-blue hover:bg-black rounded-3xl py-2 px-3 transition-all ease-in-out duration-500 w-fit'>Get Started</button>
    </div>
  )
}

export default Jobs
