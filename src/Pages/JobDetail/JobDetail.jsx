import React from 'react'
import { jobs } from '.'
import {GrLocation} from 'react-icons/gr'
import {AiOutlineCalendar} from 'react-icons/ai'

const JobDetail = () => {
  return (
    <section className=''>
       <div className='bg-blue/5 py-[50px] px-[10%]'>
         {jobs.slice(0, 1).map((job) => (
          <article>
            <div>
              <div className='flex gap-3'>
                <img src={job.logo} alt="logo" className='bg-black/40 p-3 rounded-md'/>
                 <div>
                  <h1 className='font-bold text-4xl'>{job.position}</h1> 
                  <div>
                    <p><GrLocation/> {job.location}</p>
                    <p><AiOutlineCalendar/>{job.dayPosted}</p>
                  </div>
                 </div>

              </div>
            </div>

          </article>
         ))}
       </div>
    </section>
  )
}

export default JobDetail
