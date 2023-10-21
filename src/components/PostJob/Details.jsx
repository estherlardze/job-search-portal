import React, {useState} from 'react'
import Jobdetails from './Jobdetails'
import CompanyDetails from './CompanyDetails'

const headStyle = "text-3xl font-semibold text-black/90 border-b-2 pb-8"
const Details = () => {
  const [switchForm, setSwitchForm] = useState(true)
  const [clickJob, setClickJob] = useState(false);
  const [clickCompany, setClickCompany] = useState(true);


  const handleJob = () => {
    setSwitchForm(false)
    setClickJob(true);
    setClickCompany(false);
  };

  const handleCompany = () => {
    setSwitchForm(true);
    setClickJob(false);
    setClickCompany(true);
  }

  return (
    <section className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] my-[100px]'>
       <div className='flex justify-center items-center text-center gap-6 cursor-pointer flex-col sm:flex-row'>
         <h1 className={`${headStyle} ${clickJob ? 'border-blue' : 'border-transparent'}`} onClick={handleJob}>
            Job Details
          </h1>
         <h1 className={`${headStyle} ${clickCompany ? 'border-blue' : 'border-transparent'}`} onClick={handleCompany}>
          Company Details
        </h1>
       </div>
       <hr className='border border-gray/20'/>

       <form className="mt-8 w-full rounded-md p-8 shadow-lg sm:mx-[10%] sm:w-[80%] lg:mx-[15%] lg:w-[70%]">
        {switchForm ?   <CompanyDetails/> : <Jobdetails/> }
       </form>
    </section>
  )
}

export default Details
