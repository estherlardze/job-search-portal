import { FindJob, JobsCardOne, JobsCardTwo } from "../../components";

const Jobs = () => {

  return (
    <>
      <div className="bg-blue/5">
        <div className="py-20 space-y-20">
          <h2 className="capitalize sm:text-7xl text-4xl font-semibold ">
            Search Your Demanded Job <br />
            Permanent & Remote
          </h2>
          <FindJob />
        </div>
      </div>
      <div className="sm:flex">
        <div className="sm:w-2/3">
          <JobsCardTwo/>
        </div>
        <div className="sm:w-1/3 mx-4 space-y-20">
          <JobsCardOne 
          title="email me job">
            <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className=" rounded-lg text-xl py-4 px-4 w-full font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            </div>
            <div>
              {" "}
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
            <button className='font-semibold text-blue  border  rounded-full border-blue py-4 px-3 transition-all ease-in-out duration-500 w-full capitalize'>
          Create Alert --&gt;
        </button>
          </JobsCardOne>

          <JobsCardOne
          title="featured companies">

          </JobsCardOne>
        </div>
      </div>
    </>
  );
};

export default Jobs;
