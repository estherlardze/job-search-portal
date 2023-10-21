import React, {useState} from 'react'
import Jobdetails from './Jobdetails'
import CompanyDetails from './CompanyDetails'

const Details = () => {
  const [switchForm, setSwitchForm] = useState(false)

  const handleSwitch = () => {
    setSwitchForm(prev => !prev)
  }

  return (
    <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] my-[100px]'>
       <div className='flex justify-center items-center text-center gap-6 cursor-pointer mb-8 flex-col sm:flex-row'>
         <h1 className='text-3xl font-semibold text-black/90' onClick={handleSwitch}>Job Details</h1>
         <h1 className='text-3xl font-semibold text-black/90'>Company Details</h1>
       </div>
       <hr className='border border-gray/20'/>
       
       <form className="mt-8 w-full rounded-md p-8 shadow-lg sm:mx-[10%] sm:w-[80%] lg:mx-[15%] lg:w-[70%]">
        {switchForm ? <Jobdetails/> :  <CompanyDetails/>}
       </form>
    </section>
  )
}

export default Details
