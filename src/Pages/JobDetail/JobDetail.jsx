import React from 'react'
import { companyData } from '.'
import {GrLocation} from 'react-icons/gr'
import {AiOutlineCalendar} from 'react-icons/ai'
import {saveIcon} from '../../assets/index'
import {GoPerson} from 'react-icons/go'

const JobDetail = () => {
  return (
    <section className=''>
       <div className='bg-blue/5 py-[50px] px-[10%]'>
         {companyData.slice(0, 1).map((data) => (
          <article>
            <div className=''>
              <div className='flex justify-between'>
              <div className='flex gap-6'>
                <img src={data.image} alt="logo" className='bg-black/40 p-3 rounded-md'/>
                <div>
                  <h1 className='font-bold text-4xl'>{data.position}</h1> 
                  <div className='flex gap-4'>
                    <p className='font-bold text-gray flex items-center gap-2'>
                      <GrLocation/> {data.location}
                    </p>
                    <p className='font-bold text-gray flex items-center gap-2'>
                      <AiOutlineCalendar/>{data.date}
                    </p>
                    <p>
                      <GoPerson/>
                      {data.}
                    </p>
                  </div>
                 </div>
                </div>
               <img src={saveIcon} alt="save" className='bg-gray/20 p-2 rounded-full w-10 h-10'/>
              </div>
            </div>
          </article>
         ))}
       </div>
    </section>
  )
}

export default JobDetail
