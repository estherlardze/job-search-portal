import React from 'react'
import {blogs} from './index'
import {AiOutlineCalendar} from 'react-icons/ai'
import { d1, d2, blog10, client1} from '../../assets'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const transition = 'transition-all ease-in-out duration-500';
const Detail = () => {
  return (
    <section className='w-[90%] mx-[5%] lg:mx-[10%] my-[50px] lg:w-[80%]'>
      {blogs.slice(0,1).map((blog, index) => (
        <section key={index}>
           <div className='flex gap-2 items-center font-bold text-gray'>
              <img src={blog.author.profile1} alt="profile" />
              <p>{blog.author.name}</p>
              <AiOutlineCalendar/>
              <p>{blog.date}</p>
            </div>

           <h1 className='text-3xl font-semibold my-8 sm:text-4xl md:text-5xl lg:text-7xl' 
            data-aos="fade-right">
             {blog.title}
            </h1>
           <img src={blog.imageUrl} alt="blog" className='rounded-md'  data-aos="zoom-in"/>

           <div className='grid grid-cols-5 my-8 gap-8'>
              <div className='col-span-5 lg:col-span-3'>
                <p className='text-lg font-semibold text-gray' data-aos="fade-up">{blog.content}</p>
                <h1 className='my-4 text-2xl font-semibold text-black/90 md:text-4xl lg:text-5xl' data-aos="fade-up">
                  {blog.newContent.title}
                </h1>
                <p className='text-lg font-semibold text-gray' data-aos="fade-up">{blog.newContent.content}</p>
                 <ol className='mt-8 list-decimal'>
                    {blog.newContent.list.map((item, i) => (
                     <li key={i} className='text-lg my-1 font-semibold text-gray' data-aos="fade-up">{item}</li>
                    ))}
                 </ol>
                 <div className='mt-8' data-aos="fade-up">
                    <h1 className='text-2xl my-2 font-bold'>There are many variations of passages of</h1>
                    <p className='text-lg font-semibold text-gray my-4'>It is a long established fact that
                     a reader will be distracted by the readable content
                     of pagi when looking at its layout. The point of using Lor Ipsum is that it has
                    a more-or-less norma dist of letters, as opposed to using 'Content here,
                    content here', making it look like readab English. Many desktop publishing
                    packages and web</p>
                    <img src={blog10} alt="blog" />

                  </div>
                 <div className='mt-8' data-aos="fade-up">
                    <h1 className='text-2xl my-4 font-bold'>There are many variations of passages of</h1>
                    <p className='text-lg font-semibold text-gray my-4'>It is a long established fact
                     that a reader will be distracted by the readable content of pagi when looking at 
                     its layout. The point of using Lor Ipsum is that it has a more-or-less norma
                      dist of letters, as opposed to using 'Content here</p>
                    <img src={d2} alt="blog" />

                    <ol className='mt-8 list-disc'>
                    {blog.newContent.list.map((item, i) => (
                     <li key={i} className='text-lg my-1 font-semibold text-gray'>{item}</li>
                    ))}
                 </ol>
                 </div>

                 <div data-aos="fade-up">
                 <h1 className='text-2xl my-4 font-bold'>There are many variations of passages of</h1>
                 <p className='text-lg font-semibold text-gray my-4'>
                    It is a long established fact that a reader will be distracted by the readable content of
                    pagi when looking at its layout. The point of using Lor Ipsum is that it has a more-or-less 
                    norma dist of letters, as opposed to using 'Content here, content here', making it look like 
                    readab English. Many desktop publishing packages and web
                </p>
                 </div>
              </div>

              <div className='col-span-5 lg:col-span-2' data-aos="fade-left">
                 <div className='bg-blue/80 py-6 px-4 rounded-md text-white flex items-center justify-center flex-col'>
                   <img src={client1} alt=""/>
                    <h3 className='font-bold text-lg hover:text-green-600'>{blog.author.name}</h3>
                     <p className='font-semibold'>Co Founder</p>
                    <p className='text-lg my-1 font-semibold '>
                    Eu orci libero accumsan urna, sed fringilla lacus ultrices feugiat cras porta amet molestie nunc.
                   </p>

                   <div className="mr-2 flex items-center gap-2 border-r border-white/70">
                    <FaFacebookF
                    size={44}
                    className={`${transition} rounded-full bg-white p-3 text-blue hover:mt-[-10px]`}
                    />
                    <AiOutlineTwitter
                    size={44}
                    className={`${transition} rounded-full bg-white p-3 text-blue hover:mt-[-10px] `}
                    />
                    <FaLinkedinIn
                    size={44}
                    className={`${transition} rounded-full bg-white p-3 text-blue hover:mt-[-10px]`}
                    />
                    <AiOutlineInstagram
                    size={44}
                    className={`${transition} rounded-full bg-white p-3 text-blue hover:mt-[-10px]`}
                    />
                 </div>
            </div>
            </div>
           </div>
        </section>
      ))}

    </section>
  )
}

export default Detail
