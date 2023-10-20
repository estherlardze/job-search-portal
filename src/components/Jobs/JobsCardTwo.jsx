const JobsCardTwo = () => {
  const companyData = [
    {
      image: "image",
      name: "name",
      position: "position",
      location: "location",
      date: "date",
      fullTime: true,
      partTime: false,
      contract: false,
      remote: true,
      onsite: false,
      priceRange: "range",
      per: "Month",
    },
  ];

  return (
    <div>
      {companyData.map((item, index) => (
        <div
          key={index}
          className="bg-blue/20 sm:px-12 py-4  mx-3 rounded-lg px-4 space-y-4 mb-4"
        >
          <div className="border-b border-slate-400 space-y-8">
            <div className="sm:flex">
              <img src="" alt="logo" className="px-8 text-center" />
              <div className="space-y-4">
                <p>{item.name}</p>
                <p>{item.position}</p>
                <div className=" sm:flex sm:space-y-0 space-y-4">
                  <div className="flex">
                    <img src="" alt="location" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex">
                    <img src="" alt="date" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 p-4">
              <div className="bg-blue/20 w-24 text-center rounded-full text-blue capitalize font-bold ">
                <span>full time </span>
              </div>
            </div>
          </div>
          <div className="flex ">
            {item.priceRange} / {item.per}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsCardTwo;
<div className="bg-blue/20 sm:px-12  mx-3 rounded-lg px-4">
  <div className="border-b border-slate-400">
    <div className="sm:flex">
      <img src="" alt="logo" className="px-8" />
      <div>
        <p>Comapny</p>
        <p>Position</p>
        <div className=" sm:flex">
          <div className="flex">
            <img src="" alt="location" />
            <span>Location</span>
          </div>
          <div className="flex">
            <img src="" alt="date" />
            <span>Date</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex">job details</div>
  </div>
  <div className="flex">prices</div>
</div>;
