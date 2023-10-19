import React from 'react'
import {logo} from '../../assets/index'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {BsArrowRightShort} from 'react-icons/bs'


const transition = "transition-all ease-in-out duration-500"   
const Footer = () => {
  return (
    <footer className='mt-[50px] w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
      <section className='grid grid-cols-10 mb-8 gap-12 xl:gap-8'>
         <article className='col-span-10 sm:col-span-6 md:col-span-5 xl:col-span-3'>
         <img src={logo} alt="logo" className='w-[100px] sm:w-[180px]'/>
          <p className='font-semibold text-lg text-gray my-6'>
            It is a long esta fact that a reader wil dist by the real cont of a page when
          </p>
          <div className='flex gap-2 items-center border-r border-white/70 mr-2'>
             <FaFacebookF size={44} className={`${transition} bg-gray/10 text-gray hover:text-white hover:bg-blue p-3 rounded-full hover:mt-[-10px]`}/>
             <AiOutlineTwitter size={44} className={`${transition} bg-gray/10 text-gray hover:text-white hover:bg-blue p-3 rounded-full hover:mt-[-10px]`}/>
             <FaLinkedinIn size={44} className={`${transition} bg-gray/10 text-gray hover:text-white hover:bg-blue p-3 rounded-full hover:mt-[-10px]`}/>
             <AiOutlineInstagram size={44} className={`${transition} bg-gray/10 text-gray hover:text-white hover:bg-blue p-3 rounded-full hover:mt-[-10px]`}/>
           </div>
           <div className='cursor-pointer mt-4 flex gap-1 text-blue items-center group'>
             <p className='text-xl font-semibold'>Webflow Template</p>
             <BsArrowRightShort size={30} className={`${transition} group-hover:ml-2`}/>
           </div>
         </article>

         <article className='col-span-10 sm:col-span-4 md:col-span-3 xl:col-span-2'>
           <h3 className='text-xl font-bold'>Main Pages</h3>
           <Link to='/'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Home</p>
           </Link>
           <Link to='/about'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>About Us</p>
           </Link>
           <Link to='/blogs'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Blog Pages</p>
           </Link>
           <Link to='/contact'>
             <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Contact Page</p>
           </Link>
           <Link to='/styles'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Docs</p>
           </Link>
           <Link to='/jobs'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Services</p>
           </Link>
         </article>
        
         <article className='col-span-10 sm:col-span-4 md:col-span-2 xl:col-span-2'>
           <h3 className='text-xl font-bold'>Quick Links</h3>
           <Link to='/signup'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Sign Up</p>
           </Link>
           <Link to='*'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>404 Pages</p>
           </Link>
           <Link to='/password'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Password Safe</p>
           </Link>
           <Link to='/license'>
             <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Licenses</p>
           </Link>
           <Link to='/changelog'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Changelog</p>
           </Link>
           <Link to='/styles'>
            <p className={`${transition} font-semibold hover:text-blue my-1 text-lg text-gray`}>Style Guide</p>
           </Link>
         </article>

         <article className='col-span-10 sm:col-span-6 md:col-span-5 xl:col-span-3'>
           <h3 className='text-xl font-bold'>Contact Info</h3>
           <p className='font-semibold my-1 text-lg text-gray'>Phone:+00 123 456 789</p>
           <p className='font-semibold my-1 text-lg text-gray'>Emaildemomail@gmail.com</p>
           <div className='mt-4'>
             <h3 className='text-xl font-bold'>Newsletter</h3>
             <p className='font-semibold my-1 text-lg text-gray'>
              It is a long esta fact that a reader wil dist by the real cont of a page when
            </p>
           </div>
           <div className='flex mt-4'>
             <input type="text" placeholder='Enter your Email' 
              className='w-[40%] sm:w-[70%] px-4 py-0 border border-gray outline-none rounded-sm'/>
             <BsArrowRightShort size={50} className={`${transition} text-white bg-blue hover:bg-black px-2 rounded-sm`}/>
           </div>
         </article>
      </section>
      <hr className='border border-gray/30'/>
      <p className='text-center font-semibold my-6 text-xl text-black/80'>
        Copyright © Careari - Design by 
        <Link to='https://webflow.com/?r=0' className='hover:text-blue'> WebliWeb</Link>
       - Powered by Webflow.
      </p>
    </footer>
  )
}

export default Footer