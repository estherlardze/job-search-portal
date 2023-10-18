import React from 'react'
import {categories} from './index'
import { Link } from 'react-router-dom'

const transition = "transition-all ease-in-out duration-500"
const Categories = () => {
  return (
    <div className='mt-[100px]'>
      <div className='text-center'>
        <h4 className='text-blue font-bold'>JOB CATEGORIES</h4>
        <h1 className='font-semibold text-5xl leading-16 tracking-wider text-black/90'>Popular Job Categories <br /> For Our Candidate</h1>
      </div>
      <div className='grid grid-cols-4 mx-8 gap-6 mt-16'>
        {categories.map((category, index) => (
          <Link to='/' key={index}
          className={`${transition}  col-span-1 border border-gray/20 rounded-md flex flex-col items-center justify-center py-6 hover:border-blue focus:border-blue`}
          >
           <img src={category.icon} alt="icon" className='bg-gray/20 p-3'/>
           <h3 className={`font-bold text-2xl my-4 hover:text-blue ${transition}`}>
            {category.title}
           </h3>
           <p className='font-semibold text-black/80'>{category.vacancy}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
