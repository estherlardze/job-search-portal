import { useState } from 'react';

import { FindJob, JobsCardOne, JobsCardTwo,StartJourneyJob } from '../../components';
import JobCompaniesCard from '../../components/Jobs/JobCompaniesCard';

import { cartData } from '../../components/Jobs/JobData';
import { Navbar,Footer } from "../../components";
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';

const Jobs = () => {
  const [selectedOption, setSelectedOption] = useState('none');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
    <Navbar/>
      <div className="bg-blue/5 overflow-hidden">
        <div className="space-y-20 py-20">
          <h2 className="text-4xl font-bold capitalize sm:text-7xl ">
            Search Your Demanded Job <br />
            Permanent & Remote
          </h2>
          <FindJob />
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-2/3 ">
          <JobsCardTwo />
        </div>
        <div className="mx-4 space-y-20 lg:w-1/3">
          <JobsCardOne title="email me job">
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className=" px-4 py-4 w-full rounded"
            >
              {cartData.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.item}
                </option>
              ))}
            </select>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className=" w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
              />
            </div>
            <div>
              <input type="radio" name="time" id="t1 " />
              <label htmlFor="#t1">Daily</label>
            </div>
            <div>
              <input type="radio" name="time" id="t2 " />
              <label htmlFor="#t2">Weekly</label>
            </div>
            <div>
              <input type="radio" name="time" id="t3 " />
              <label htmlFor="#t3">Monthly</label>
            </div>
            <div>
              <input type="radio" name="time" id="t4 " />
              <label htmlFor="#t4">Annually</label>
            </div>
            <button className="w-full rounded-full  border  border-blue px-3 py-4 font-semibold capitalize text-blue transition-all duration-500 ease-in-out text-center flex justify-center">
              Create Alert 
             <HiOutlineArrowSmallRight size={25} />
            </button>
          </JobsCardOne>

          <JobsCardOne title="featured companies">
            <JobCompaniesCard/>
          </JobsCardOne>
        </div>
      </div>

<StartJourneyJob/>
<Footer/>
    </>
  );
};

export default Jobs;
