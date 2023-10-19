import React from 'react';
import { Link } from 'react-router-dom';


const PagesDropdown = ({pageOpen}) => {

  return (
    <div className="relative ">

      {pageOpen && (
        <div className="absolute top-3 w-[180px] px-6 py-3 bg-white shadow-md z-10 rounded-md">
          <Link to='/jobs'><p className='font-semibold hover:text-blue my-3'>Job</p></Link>
          <Link to='/post'><p className='font-semibold hover:text-blue my-3'>Job Post</p></Link>
          <Link to='/signup'><p className='font-semibold hover:text-blue my-3'>Sign Up</p></Link>
          <Link to='/styles'><p className='font-semibold hover:text-blue my-3'>Style Guide</p></Link>
          <Link to='*'><p className='font-semibold hover:text-blue my-3'>404 Page</p></Link>
          <Link to='/password'><p className='font-semibold hover:text-blue my-3'>Password Page</p></Link>
        </div>
      )}
    </div>
  );
};

export default PagesDropdown;