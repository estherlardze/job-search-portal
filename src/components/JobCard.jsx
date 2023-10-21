import { companyData } from './Jobs/JobData';
import { saveIcon } from '../assets/index';
import { Link } from 'react-router-dom';

import { GoPerson } from 'react-icons/go';
import { CiDollar, CiCalendar } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';

const JobCard = () => {
  return (
    <div className='grid grid-cols-2 gap-8'>
      {companyData.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="w-full col-span-2 lg:col-span-1 px-4 mx-3 my-4 rounded-lg border border-slate-200  py-4 hover:border-blue"
        >
          <div className="py-4 border-b border-slate-300">
            <div className="flex gap-4 items-start lg:items-center">
              <img src={item.image} alt="logo" className="p-4" />
              <div className="space-y-4">
                <p className="flex justify-between text-blue">
                  {item.name}             
                </p>
                <Link to={`/job/${item.id}`}>
                  <p className="font-bold hover:text-blue ">{item.position}</p>
                </Link>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex space-x-2">
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
            <div className="flex  gap-4 items-center">
              { item.fullTime &&
                <div className="rounded-full bg-blue/20 px-3 py-1 text-blue">
                  Full Time
                </div>
              }
              { item.remote &&
                <div className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-500">
                  Remote
                </div>
              }
              { item.contract &&
                <div className="rounded-full bg-lime-500/20 px-3 py-1 text-lime-500">
                  Contract
                </div>
              }
              { item.partTime &&
                <div className="rounded-full bg-orange-500/20 px-3 py-1 text-orange-500">
                  Part Time
                </div>
              }
              { item.onsite &&
                <div className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-500">
                  Onsite
                </div>
              }
            </div>
          </div>
          <div className="flex justify-between gap-3 flex-col sm:flex-row mt-4 lg:items-center">
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
    </div>
  );
};

export default JobCard;