import React from 'react'
import {Navbar, Footer} from '../../components/index'
import {items} from './'
import { Link } from 'react-router-dom'
 
const License = () => {
  return (
    <section className='w-[100%] overflow-hidden'>
      <Navbar/>
      <div className='bg-black/5'>
      <div className='flex flex-col h-[60vh] md:h-[80vh] justify-center items-center text-center w-[90%] px-[5%] sm:w-[80%] sm:mx-[10%] lg:w-[70%] lg:mx-[15%]'
       data-aos="zoom-in">
        <p className='text-blue font-bold mb-3 text-lg text-center'>LICENSE</p>
        <h1 className='text-3xl sm:text-4xl md:5xl lg:text-6xl font-semibold text-black/90 '>
          All Asset's License
        </h1>
        <p className='font-semibold text-xl text-gray mt-6'>
          All graphical assets in this template are licensed for personal and
          commercial use. If you'd like to use a specific asset, please check
          the license below.
        </p>
       </div>
      </div>

      <div className='w-[90%] px-[5%] lg:w-[80%] lg:mx-[10%] grid grid-cols-2 gap-4 mt-8 place-items-center'>
        {items.map((item, index) => (
          <article key={index} className='w-full col-span-2 sm:col-span-1 bg-blue/5 shadow-xl p-6'>
            <h5 className='font-bold text-xl'>{item.title}</h5>
            <p className='font-semibold text-gray my-3'>{item.content}</p>
            <Link to={item.learnUrl} className='text-blue font-semibold text-xl'>
              Learn More
            </Link>
          </article>
        ))}
      </div>
      <Footer/>
    </section>
  )
}

export default License