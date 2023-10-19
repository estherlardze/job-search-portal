import React, {useState} from 'react'
import {CiLocationOn, CiSearch} from 'react-icons/ci'
import {candidates} from '../../assets/index'

const Hero = () => {
const [search, setSearch] = useState('')
const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

const handleSearch = (e) => {
  setSearch(e.target.value)
}

  return (
    <div className='bg-hero bg-no-repeat bg-cover bg-center h-[100vh] w-[100vw]'>
      <div className='w-[100%] overflow-x-hidden bg-black/20 h-[100vh]'>
        <header className='flex flex-col w-[94%] mx-[3%] md:w-[80%] md:mx-[10%] pt-[50px] lg:pt-[130px] 2xl:w-[60%] 2xl:mx-[20%] 2xl:items-center 2xl:justify-center 2xl:mt-[5%]'>
         <div className='flex gap-3'>
          <hr className='border border-blue w-[70px] mt-4'/>
          <h1 className='text-blue font-semibold 2xl:text-4xl'>NO LONGER LOOKING FOR JOB</h1>
         </div>
         <h1 className='my-8 text-5xl md:text-6xl 2xl:text-7xl font-semibold leading-16'>
           Signup & Let Your <br />Job find You
         </h1>
         <div className='text-gray font-semibold flex flex-col gap-6 sm:gap-3 sm:flex-row justify-start bg-white py-2 2xl:py-6 rounded-3xl w-full sm:w-fit shadow-2xl px-2'>
           <div className='flex gap-2 sm:border-r border-gray '>
            <CiSearch size={22} className='mt-2'/>
            <input type="text"
             placeholder='Job title, Keywords...' 
             value={search} 
             onChange={handleSearch}
             className='p-2 outline-none border-0 w-full'
             />
           </div>
           <div className='flex mx-2'>
             <CiLocationOn size={22} className='mt-2'/>
             <select value={selectedOption} onChange={handleSelectChange} className='outline-none border-0 w-full'>
              <option value="">City or Postcode</option>
              <option value="first">First Choice</option>
              <option value="second">Second Choice</option>
              <option value="third">Third Choice</option>
             </select>
           </div>
           <button className='bg-blue hover:bg-black text-white font-semibold p-2 rounded-3xl'>Find Job</button>
         </div>
        <div className='my-8'>
          <p className='2xl:text-2xl'><span className='font-semibold text-lg mr-1 2xl:text-2xl'>
            Popular Searches:</span>Doctor, Engineer, Web Developer, Company
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 sm:items-center'>
          <img src={candidates} alt="candidates" className='w-[150px] md:w-[220px]'/>
          <p className='font-semibold text-lg'>20k Candidates</p>
        </div>
        </header>
      </div>
    </div>
  )
}

export default Hero
