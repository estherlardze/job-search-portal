import React from 'react'
import {gears, style} from '../assets/index'

const StlyleGuide = () => {
  return (
    <div className='w-[100vw] grid grid-cols-6'>
        <div className='col-span-6 md:col-span-1 bg-black h-auto pb-6 md:h-[100vh] flex items-center flex-col justify-center text-white'>
           <img src={gears} alt="gears" className='w-[100px] md:mt-[100px]'/>
           <p className='font-semibold my-8 text-xl'>01. Colors</p>
           <p className='font-semibold text-xl'>02. Typography</p>
        </div>
        <div className='col-span-6 md:col-span-5 mx-4 md:mt-16'>
            <h1 className='text-5xl md:text-7xl font-semibold'>Colors</h1>
             <div className='mt-8 flex gap-4 flex-wrap'>
                <div>
                  <div className='w-full sm:w-[12rem] rounded-md h-[6rem] bg-blue'></div>
                  <span className='text-gray font-semibold'>PRIMARY - #0071DC</span>
                </div>
                <div>
                  <div className='w-full  sm:w-[12rem] rounded-md h-[6rem] bg-gray'></div>
                  <span className='text-gray font-semibold'>PRIMARY - #0071DC</span>
                </div>
                <div>
                  <div className='w-full  sm:w-[12rem] rounded-md h-[6rem] bg-black'></div>
                  <span className='text-gray font-semibold'>PRIMARY - #0071DC</span>
                </div>
             </div>

             <div className='mt-6'>
              <h1 className='text-5xl md:text-7xl font-semibold'>Gradients</h1>
              <div>
                  <div className='w-[12rem] rounded-md h-[6rem] bg-black'></div>
                  <span className='font-semibold'>PRIMARY - #0071DC</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StlyleGuide