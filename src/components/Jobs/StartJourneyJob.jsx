import React from 'react'

const StartJourneyJob = () => {
  return (
    <div className='py-20 border my-20 border-slate-500/20 space-y-16 mx-3'>
     <p className="font-bold text-5xl text-center"> Are You Ready To Start  <br/>Your Journey?</p>

     <p className="text-center">It is a long established fact that a reader will be distracted by the real conten of a page when <br/>looking at its layout. The point of using Lorem Ipsum is.</p>
<div className="sm:flex justify-center mx-4 space-y-4 gap-6">
    <button className="  border  border-blue px-12 rounded-full py-4 font-semibold capitalize text-white bg-blue hover:bg-black transition-all duration-500 ease-in-out text-center flex gap-3">
        Post a Featured Job
    </button>
    <button className="  border  border-blue px-12 rounded-full py-4 font-semibold capitalize text-black  hover:bg-blue  hover:text-white transition-all duration-500 ease-in-out text-center flex gap-3">
        Post a Free Job
    </button>
</div>

    </div>
  )
}

export default StartJourneyJob
