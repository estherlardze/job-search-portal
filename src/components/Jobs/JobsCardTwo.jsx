
const JobsCardTwo = () => {
  const companyData = [
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'Online English Teachers',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'Database Administrator',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'IT Project Manager',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'Junior UI/UX Designer',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'AI/Machine Learning Engineer',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'SEO Analiyst & Reviewer',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'Content Writer and Speaker',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'Social Media Expert',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
    {
      image: 'image',
      name: 'Rockstart Games New York',
      position: 'Senior UI/UX Designer',
      location: 'Las Vegas, USA',
      date: '2 Days ago',
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      minPrice: '$23,000',
      maxPrice: '$25,000',
      per: 'Month',
    },
  ];

  return (
    <div>
      {companyData.map((item, index) => (
        <div key={index} className="bg-blue/20 sm:px-12 mx-3 rounded-xl mt-4">
          <div className=" border-b border-slate-300 ">
            <div className="sm:flex ">
              <img src ="" alt ="logo" className="p-8"/>
              <div className="space-y-4">
                <p>{item.name}</p>
                <p>{item.position}</p>
                <div className="sm:flex">
                  <div className="sm:flex">
                    <img src="" alt="location" />
                    <span>{item.location}</span>
                  </div>
                  <div className="sm:flex">
                    <img src="" alt="date" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">job details</div>
          </div>
          <div className="flex">{item.priceRange} {item.per}</div>
        </div>
      ))}
    </div>
  );
};

export default JobsCardTwo;
 