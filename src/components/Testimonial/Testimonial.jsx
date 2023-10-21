import React, {useRef} from 'react'
import { clients } from '.'
import {GoArrowLeft, GoArrowRight} from 'react-icons/go'


const transition = "transition-all ease-in-out duration-300" 

const Testimonial = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === "left"){
      current.scrollLeft -= 350;
    }
    else{
      current.scrollLeft += 350;
    }
  }

  return (
    <div className='bg-about bg-cover bg-no-repeat bg-center w-[100%] '>
    <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] py-[70px]'>
       <div className='text-center' data-aos="fade-up">
         <h4 className='text-blue font-bold'>CLIENT FEEDBACK</h4>
         <h1 className='my-4 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-semibold md:leading-20 text-black/80'>
            What Our Customers Are <br />Saying About Us
        </h1>
       </div>
       <div className='flex overflow-x-scroll no-scrollbar gap-6 mt-[70px]' ref={scrollRef}>
         {clients.map((client, index) => (
            <article key={index} className='bg-white min-w-full sm:min-w-[350px] py-6 shadow-md rounded-lg px-4'
             data-aos="fade-up" data-aos-duration="2000">
               <q className='font-bold text-xl'>{client.slogan}</q>
                <p className='text-xl font-semibold text-gray/90 my-8'>{client.text}</p>
                <div className='flex justify-start items-center gap-3'>
                  <img src={client.profile} alt="profile" className='w-[70px]'/>
                   <div>
                     <p className='text-blue font-bold text-lg'>{client.name}</p>
                     <p className='font-semibold text-lg'>{client.position}</p>
                    </div>  
                </div>
            </article>
         ))}
       </div>

       <div className='flex mt-8 justify-center gap-3 items-center'>
         <div  onClick={()=> scroll("left")}
          className={`${transition} bg-blue p-4 rounded-full hover:bg-black text-white cursor-pointer`}>
           <GoArrowLeft size={23} />
         </div>
         <div  size={23} onClick={()=> scroll("right")}
          className={`${transition} bg-blue p-4 rounded-full hover:bg-black text-white cursor-pointer`}>
          <GoArrowRight />
         </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonial
