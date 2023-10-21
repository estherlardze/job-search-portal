import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

import { companyDetails } from './JobData';

const JobCompaniesCard = () => {
  return (
    <>
    {
        companyDetails.map((item,index)=>(

            <div key={index} className="lg:flex ">
            <img src={item.image} alt="logo" />
            <div className=" md:flex justify-between">
                <div>
              <p className=" pb-4 font-bold text-2xl"> {item.name} </p>
              <div className="flex space-x-2">
                <IoLocationOutline size={20} />
                <span> Vegas, USA</span>
              </div>
                </div>
            <HiOutlineArrowSmallRight
              size={40}
              className=" mt-4 rounded-full bg-white p-2 "
            />
            </div>
          </div>
        ))
    }
   
    </>
  );
};

export default JobCompaniesCard;
