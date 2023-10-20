import { useState } from "react"
import {AiTwotoneMail} from 'react-icons/ai'

const JobsCardOne = () => {
  const [option, setOption] = useState('Job Category')

  const handleSelect = (e) => {
    setOption(e.target.value)
   }


  return (
    <div className="">
      <div className="bg-blue items-center flex rounded-tr-xl rounded-tl-xl sm:h-20  p-4 space-x-3 flex-wrap">
         <AiTwotoneMail size={30} className="text-white"/>
        <h3 className="capitalize sm:text-3xl font-bold text-white mx-8">email me job</h3>
      </div>
      <div className="px-12 py-6 space-y-4 bg-blue/10 rounded-br-xl rounded-bl-xl pb-12">
      
      <select value={option} onChange={handleSelect} 
      className='text-black outline-none bg-transparent border border-black/50 p-4 focus:border-blue rounded-md bg-white w-full'>
        <option value="job" className='text-black font-semibold'>Job Category</option>
        <option value="art" className='text-black font-semibold'>Art & Design</option>
        <option value="health" className='text-black font-semibold'>Health & Fitness</option>
        <option value="finance" className='text-black font-semibold'>Finance & Business</option>
        <option value="music" className='text-black font-semibold'>Art & Music</option>
        <option value="market" className='text-black font-semibold'>Marketing</option>
        <option value="teaching" className='text-black font-semibold'>Teaching & Study</option>
        <option value="french" className='text-black font-semibold'>Photography</option>
        <option value="photography" className='text-black font-semibold'>It Management</option>
      </select>
      <div>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className=" rounded-lg text-xl py-4 px-4 w-full font-light placeholder-black
          outline-none border border-black/30 focus:border-blue "
          />
         </div>
       <div>
        <input type="radio" name="time" id="t1 " />
        <label htmlFor="#t1">Daily</label>
        </div>
        <div>
          <input type="radio" name="time" id="t2 " />
          <label htmlFor="#t2">Weekly</label>
        </div>
        <div>
          <input type="radio" name="time" id="t3 " />
          <label htmlFor="#t3">Monthly</label>
        </div>
        <div>
          <input type="radio" name="time" id="t4 " />
          <label htmlFor="#t4">Annually</label>
        </div>
        <button className='font-semibold text-blue  border  rounded-full border-blue py-4 px-3 transition-all ease-in-out duration-500 w-full capitalize'>
      Create Alert --&gt;
    </button>
    </div>
    </div>
  )
}

export default JobsCardOne
