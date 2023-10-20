import React from 'react';
import { Link } from 'react-router-dom';


const Catdropdown = ({isOpen}) => {

  return (
    <div className="relative ">

      {isOpen && (
        <div className="absolute top-3 w-[230px] px-6 py-3 bg-white shadow-md z-10 rounded-md">
          <Link to='/jobs/art-design'><p className='font-semibold hover:text-blue my-2'>Art & Design</p></Link>
          <Link to='/jobs/health-fitness'><p className='font-semibold hover:text-blue my-2'>Health & Fitness</p></Link>
          <Link to='/jobs/finance-business'><p className='font-semibold hover:text-blue my-2'>Finance & Business</p></Link>
          <Link to='/jobs/art-music'><p className='font-semibold hover:text-blue my-2'>Art & Music</p></Link>
          <Link to='/jobs/marketing'><p className='font-semibold hover:text-blue my-2'>Marketing</p></Link>
          <Link to='/jobs/photography'><p className='font-semibold hover:text-blue my-2'>Teaching & Study</p></Link>
          <Link to='/jobs/teaching-study'><p className='font-semibold hover:text-blue my-2'>Photography</p></Link>
          <Link to='/jobs/it-management'><p className='font-semibold hover:text-blue my-2'>It Management</p></Link>
        </div>
      )}
    </div>
  );
};

export default Catdropdown;