import React from 'react'

const inputStyle = "text-lg font-thin text-black px-4 py-2 outline-none border border-gray/30 rounded-md focus:border-blue w-full"

const Jobdetails = () => {
  return (
    <div>
      <form className='rounded-md shadow-lg w-full mt-8 sm:w-[80%] sm:mx-[10%] lg:w-[70%] lg:mx-[15%] p-8'>
         <div className='grid grid-cols-10 gap-6 w-full mb-6'>
          <label htmlFor="title" className='text-xl font-semibold text-black/90 col-span-10 lg:col-span-5'>
           Job Title <br />
           <input type="text" id='title' placeholder='Job Title'
           className={`${inputStyle} `}/>
          </label>
          <label htmlFor="description" className='text-xl font-semibold text-black/90 col-span-10 lg:col-span-5'>
           Job Description <br />
           <input type="text" id='description' placeholder='Job Description'
           className={inputStyle}/>
         </label>
         </div>
         <label htmlFor="description" className='text-xl font-semibold text-black/90'>
          Job Location <br />
           <input type="text" id='description'  placeholder='Job Location'
           className={inputStyle}/>
         </label>

       <div className='my-12'  data-aos="fade-up">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118046!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1697155060096!5m2!1sen!2sus" 
        height="300"
        className='w-[100%] overflow-hidden rounded-md'
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="google map"
        ></iframe>
     </div>

       <div className='grid grid-cols-10 gap-6 w-full'>
          <label htmlFor="type" className='text-xl font-semibold text-black/90 col-span-10 lg:col-span-5'>
           Job Type <br />
           <input type="text" id='type' placeholder='Job Type'
           className={`${inputStyle} `}/>
          </label>
          <label htmlFor="salary" className='text-xl font-semibold text-black/90 col-span-10 lg:col-span-5'>
          Job Salary <br />
           <input type="text" id='salary' placeholder='Job Salary'
           className={inputStyle}/>
         </label>
         </div>

        <div className='my-8'>
        <label htmlFor="check" className='text-xl font-semibold text-black/90'>
           <input type="checkbox" id='check' 
           className=' mr-3'/>
           Show Salary?
         </label> <br />
         <small className='text-gray font-semibold'>If you prefer, the job post salary can also be kept private.</small>
        </div>

         <div className='grid grid-cols-10 gap-6 w-full'>
          <label htmlFor="start" className='text-xl font-semibold text-black/90 col-span-10 lg:col-span-5'>
          Start Date <br />
           <input type="text" id='start' placeholder='Start Date'
           className={`${inputStyle} `}/>
          </label>
          <label htmlFor="end" className='text-xl font-semibold text-black/90 col-span-10 lg:col-span-5'>
           End Date <br />
           <input type="text" id='end' placeholder='End Date'
           className={inputStyle}/>
         </label>
         </div>
       </form>
    </div>
  )
}

export default Jobdetails
