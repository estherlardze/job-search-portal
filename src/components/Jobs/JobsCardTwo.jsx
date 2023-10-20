 import {companyData} from '../../components/Jobs/JobData'
 import {candidates} from '../../assets'
 import {Link} from 'react-router-dom'
const JobsCardTwo = () => {
 

  return (
    <div>
      {companyData.map((item, index) => (
        <div key={index} className="bg-blue/20 sm:px-12 px-4 py-4 mx-3 rounded-xl mt-4">
          <div className=" border-b border-slate-300 space-y-4">
            <div className="sm:flex ">
              <img src ={item.image} alt ="logo" className="p-4"/>
              <div className="flex justify-between">
              <div className="space-y-4">
                <p className="text-blue">{item.name}</p>
              <Link to={`/job/${item.id}`}><p className="font-bold hover:text-blue">{item.position}</p></Link>  
                <div className="sm:flex space-y-4 sm:space-y-0">
                  <div className="flex space-x-4">
                    <img src="" alt="location" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex space-x-4">
                    <img src="" alt="date" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              <img src="" alt="bookmark"/>
              </div>
            </div>
            <div className="flex py-4">
              
jobdetails

            </div>
          </div>
          <div className='sm:flex sm:justify-between  space-y-2'>
          <div className="flex mt-3">
          <img src="" alt="price"/>
            {item.maxPrice} - {item.minPrice}
            <span className="text-gray"> /{item.per}</span>
            </div>
          <div className="flex text-gray"><img src={candidates} alt="Vacancy"/> Vacancies</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsCardTwo;
 