import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

import { companyDetails } from './JobData';

const JobCompaniesCard = () => {
  return (
    <>
    {
        companyDetails.map((item,index)=>(

            <div key={index} className="sm:flex">
            <img src={item.image} alt="logo" />
            <div className="sm:ml-12 flex">
                <div>
              <p className="px-4 pb-4 font-bold text-2xl"> {item.name} </p>
              <div className="flex space-x-2">
                <IoLocationOutline size={20} />
                <span> Vegas, USA</span>
              </div>
                </div>
            <HiOutlineArrowSmallRight
              size={40}
              className="ml-12 mt-4 rounded-full bg-white p-2 "
            />
            </div>
          </div>
        ))
    }
   
    </>
  );
};

export default JobCompaniesCard;
