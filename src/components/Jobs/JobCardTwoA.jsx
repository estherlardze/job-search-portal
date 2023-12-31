import { companyData } from '../../components/Jobs/JobData';
import { saveIcon } from '../../assets';
import { Link } from 'react-router-dom';

import { GoPerson } from 'react-icons/go';
import { CiDollar, CiCalendar } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
const JobsCardTwoA = () => {
  return (
    <div>
      {companyData.map((item, index) => (
        <div
          key={index}
          className="rounded-xlpx-4 relative mx-3 my-4 rounded-lg border border-slate-200  py-4 hover:border-blue sm:px-12"
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
                    className="absolute right-6 h-12 w-12 rounded-full bg-gray/10 p-4 "
                  />
                </p>
                <Link to={`/job/${item.id}`}>
                  <p className="font-bold hover:text-blue ">{item.position}</p>
                </Link>
                <div className="space-x-4 space-y-4 sm:flex sm:space-y-0">
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
            <div className="space-x-4 py-4 sm:flex ">
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
    </div>
  );
};

export default JobsCardTwoA;