import { useState } from 'react';
import { companyData ,shortBy,perPage } from '../../components/Jobs/JobData';
import { JobCartDropDown } from '../../components';
import { saveIcon } from '../../assets';
import { Link } from 'react-router-dom';

import { GoPerson } from 'react-icons/go';
import { CiDollar, CiCalendar } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineArrowSmallRight ,HiOutlineArrowSmallLeft} from 'react-icons/hi2';

const JobsCardTwo = () => {
  const [showCount, setShowCount] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextCards = () => {
    if (currentIndex + showCount < companyData.length) {
      setCurrentIndex(currentIndex + showCount);
    }
  };

  const showPreviousCards = () => {
    if (currentIndex - showCount >= 0) {
      setCurrentIndex(currentIndex - showCount);
    }
  };

  const canShowNext = currentIndex + showCount < companyData.length;
  const canShowPrevious = currentIndex > 0;

  return (
    <div className='pl-20' >
       <div className="sm:flex sm:space-y-0 space-x-4 space-y-4 px-4">
       <JobCartDropDown data={shortBy} style="py-4 px-8 bg-gray/10 rounded-full "/>
       <JobCartDropDown data={perPage}  style="py-4 px-6 bg-gray/10 rounded-full"/>
          </div>
<p  className="text-2xl text-gray mt-2 ">Showing 1-10 of 20 Result</p>
      {companyData
        .slice(currentIndex, currentIndex + showCount)
        .map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-once = "true"
            className="rounded-xl px-4 relative  my-4  border border-slate-200 sm:w-fit  py-4 hover:border-blue sm:pl-12"
          >
            <div className=" space-y-4 border-b border-slate-300">
              <div className="sm:flex ">
                <img src={item.image} alt="logo" className="p-4" />

                <div className="space-y-4">
                  <p className="flex justify-between text-blue">
                    {item.name}
                    <img
                      src={saveIcon}
                      alt="bookmark"
                      className="sm:absolute right-6 h-12 w-12 rounded-full bg-gray/10 p-4 "
                    />
                  </p>
                  <Link to={`/job/${item.id}`}>
                    <p className="font-bold hover:text-blue">{item.position}</p>
                  </Link>
                  <div className="sm:space-x-4 space-y-4 sm:flex sm:space-y-0">
                    <div className="flex sm:space-x-2">
                      <IoLocationOutline size={20} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex space-x-2">
                      <CiCalendar size={20} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-x-4 py-4 flex ">
                {item.fullTime && (
                  <div className="rounded-full bg-blue/20 px-3 py-1 text-blue w-fit">
                    Full Time
                  </div>
                )}
                {item.remote && (
                  <div className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-500 w-fit ">
                    Remote
                  </div>
                )}
                {item.contract && (
                  <div className="rounded-full bg-lime-500/20 px-3 py-1 text-lime-500 w-fit">
                    Contract
                  </div>
                )}
                {item.partTime && (
                  <div className="rounded-full bg-orange-500/20 px-3 py-1 text-orange-500">
                    Part Time
                  </div>
                )}
                {item.onsite && (
                  <div className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-500">
                    Onsite
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2 sm:flex  sm:justify-between">
              <div className="mt-3 flex ">
                <CiDollar size={20} className="mt-1" />
                {item.maxPrice} - {item.minPrice}
                <span className="text-gray"> /{item.per}</span>
              </div>
              <div className="flex text-gray">
                <GoPerson size={20} className="mr-2" />
                {item.vacancy} Vacancy
              </div>
            </div>
          </div>
        ))}

        <div className= "flex justify-center mb-4">
      {canShowPrevious && <button onClick={showPreviousCards} className="     border  border-blue px-12 rounded-full py-4 font-semibold capitalize text-white bg-blue hover:bg-black transition-all duration-500 ease-in-out text-center flex gap-3"> <HiOutlineArrowSmallLeft size={25}/>Previous</button>}
      {canShowNext && <button onClick={showNextCards} className="   border  border-blue px-12 rounded-full py-4 font-semibold capitalize text-white bg-blue hover:bg-black transition-all duration-500 ease-in-out text-center flex gap-3">Next <HiOutlineArrowSmallRight size= {25}/> </button>}
        </div>




        
    </div>
    
  );
};

export default JobsCardTwo;
