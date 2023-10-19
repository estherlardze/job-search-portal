import React from 'react'
import {uploadcv} from '../../assets/index'
import { benefits } from '.'
import {BsArrowRightShort} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Benefit = () => {
  return (
    <section className='flex items-center flex-col lg:flex-row py-[100px] w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] gap-12'>
     <div> 
      <img src={uploadcv} alt="cv" />
     </div>
     <div>
      <div className='flex gap-1'>
       <hr className='border border-blue w-[50px] mt-4'/>
       <h1 className='text-blue font-semibold text-xl 2xl:text-4xl'>About us</h1>
      </div>
      <h1 className='my-8 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-20 text-black/80'>
        The ultimate platform For job seekers.
      </h1>
      <p className='text-xl leading-8 text-gray font-semibold mb-[30px]'>
        It is a long established fact that a reader will be distracted by the real 
        conten of a page when looking at its layout
      </p>
       <div>
          {benefits.map((benefit, index) => (
            <article key={index} className=' border-b border-gray/20 '>
                <div className='flex justify-between my-6'>
                <img src={benefit.image} alt="benefit" />
                <div>
                 <p className='font-semibold text-blue text-lg'>{benefit.title}</p>
                 <p className='font-bold text-lg'>{benefit.action}</p>
                </div>
                <Link to='/about'>
                 <BsArrowRightShort size={50} className='bg-gray/10 text-blue hover:text-white hover:bg-blue p-2 rounded-full'/>
                </Link>
                </div>
            </article>
          ))}
       </div>
    </div>
    </section>
  )
}

export default Benefit
