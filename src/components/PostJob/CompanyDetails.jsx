import React from 'react';

const inputStyle =
  'text-lg font-thin text-black px-4 py-2 outline-none border border-gray/30 rounded-md focus:border-blue w-full';

const Jobdetails = () => {
  return (
    <div>
        <div className="mb-6 grid w-full grid-cols-10 gap-6">
          <label
            htmlFor="title"
            className="col-span-10 text-xl font-semibold text-black/90 lg:col-span-5"
          >
            Company Name
            <br />
            <input
              type="text"
              id="title"
              placeholder="Company Name"
              className={`${inputStyle} `}
            />
          </label>
          <label
            htmlFor="description"
            className="col-span-10 text-xl font-semibold text-black/90 lg:col-span-5"
          >
            Company Website <br />
            <input
              type="text"
              id="description"
              placeholder="Company Website"
              className={inputStyle}
            />
          </label>
        </div>

        <label
          htmlFor="description"
          className="text-xl font-semibold text-black/90"
        >
          Description <br />
          <textarea
            id="description"
            cols="30"
            rows="8"
            placeholder="Type your description"
            className={inputStyle}
          ></textarea>
        </label>

        <div className="mt-6 grid w-full grid-cols-10 gap-6">
          <label
            htmlFor="type"
            className="col-span-10 text-xl font-semibold text-black/90 lg:col-span-5"
          >
            Company logo <br />
            <input
              type="file"
              id="type"
              placeholder="Job Type"
              className={`${inputStyle} `}
            />
          </label>
          <label
            htmlFor="check"
            className="col-span-10 text-xl font-semibold text-black/90 lg:col-span-5 lg:mt-8"
          >
            <input type="checkbox" id="check" className=" mr-3" />
            Maximum file size: 1MB
          </label>{' '}
          <br />
        </div>

        <div className="grid w-full grid-cols-10 gap-6">
          <label
            htmlFor="start"
            className="col-span-10 text-xl font-semibold text-black/90 lg:col-span-5"
          >
            Website <br />
            <input
              type="text"
              id="start"
              placeholder="Website Link"
              className={`${inputStyle} `}
            />
          </label>
          <label
            htmlFor="end"
            className="col-span-10 text-xl font-semibold text-black/90 lg:col-span-5"
          >
            Facebook <br />
            <input
              type="text"
              id="end"
              placeholder="Facebook link"
              className={inputStyle}
            />
          </label>
        </div>

    </div>
  );
};

export default Jobdetails;
