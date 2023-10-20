import { FindJob, JobsCardOne, JobsCardTwo } from "../../components";
import {Navbar, Footer} from "../../components"
import { jobs } from ".";

const Jobs = () => {
  return (
    <>
    <Navbar/>
    <section className="w-[100%] overflow-hidden">
      <div className="bg-blue/5 px-[5%] pt-[80px] pb-[100px] lg:px-[10%]" >
        <div className="space-y-14">
          <h2 className="capitalize md:text-6xl sm:text-5xl text-4xl font-semibold text-center">
            Search Your Demanded Job <br />
            Permanent & Remote
          </h2>
          <FindJob />
        </div>
      </div>

  <div className="mt-[50px]">
    <div className="md:flex">
      
      <div className="md:w-2/3">
         {jobs.map((job) => (
           <div key={job.id}>
            {job.companyName}
          </div>
         ))}
      </div>
         
        <div className="md:w-1/3 mx-4 space-y-20">
          <JobsCardOne/>
          <JobsCardTwo/>
        </div>
      </div>
  </div>
  </section>
     {/*} <Footer/>*/}
    </>
  );
};

export default Jobs;
