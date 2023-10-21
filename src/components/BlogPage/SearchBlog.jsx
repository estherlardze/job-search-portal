import {
  arrow,
  blog1,
  blog3,
  blog4,
  calender,
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile7,
} from '../../assets';

const SearchBlog = () => {
  const blog = {
    title: 'Sample Blog Post',
    content:
      'This is the content of the blog post. It provides some information about the topic of the post.',
    date: 'October 20, 2023',
    imageUrl: blog4,
    author: {
      name: 'Vinny Doe',
      avatarUrl: profile1,
    },
  };

  return (
    <>
      <div className="flex justify-between bg-slate-200 px-4 pb-16 pt-20">
        <h1 className="text-3xl font-semibold ">
          Browse our articles & resources
        </h1>
        <div className="relative">
          <input
            type="text"
            className="w-64 rounded-3xl border-[1px] border-blue bg-slate-200 py-2 pl-10 pr-4 focus:outline-none"
            placeholder="Search Blog & Articles..."
          />
          <button className="bg-blue-500 absolute left-2 top-0 rounded-l-md px-2 py-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>{' '}
      </div>
      <div className="mb-16 flex flex-col bg-slate-200 pb-20 lg:flex-row lg:px-8">
        <div className="blog-card">
          <div className="relative">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="h-auto w-full rounded-3xl px-4 lg:w-10/12"
            />
            <div className="absolute bottom-0 left-0  bg-opacity-60 p-4 text-white">
              <div className="flex items-center gap-2">
                <div className=" flex gap-2">
                  <img
                    src={blog.author.avatarUrl}
                    alt={blog.author.name}
                    className="mr-2 h-8 w-8 rounded-full"
                  />
                  <span>{blog.author.name}</span>
                </div>
                <div className="flex-row">
                  <div className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      className="h-4 bg-slate-200"
                    >
                      <path d="M21.5,2h-3.5V0h-1V2H7V0h-1V2H2.5C1.122,2,0,3.122,0,4.5V24H24V4.5c0-1.378-1.122-2.5-2.5-2.5ZM2.5,3H21.5c.827,0,1.5,.673,1.5,1.5v3.5H1v-3.5c0-.827,.673-1.5,1.5-1.5ZM1,23V9H23v14H1Zm7-8h8v1H8v-1Z" />
                    </svg>

                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div>
              <p className="text-xl font-bold">{blog.title}</p>
              <p>{blog.content}</p>
            </div>
            <p className="flex gap-2 font-semibold text-blue">
              View More
              <img src={arrow} alt="View More" className="w-4" />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-4">
          <div className="flex border-b border-b-slate-300 pb-4">
            <img src={blog3} className="w-1/3   rounded-xl lg:h-2/3 " />
            <div className="ml-2 ">
              <div className="flex gap-2 font-semibold text-gray">
                <img src={profile3} />
                <p>Deonte Huag</p>
                <img src={calender} className="w-4" />
                <p>July 31, 2022</p>
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-xl font-semibold">
                  6 Ways Technology Has Improved Business Today
                </p>
                <p className="flex gap-2 font-semibold text-blue">
                  View More
                  <img src={arrow} alt="View More" className="w-4" />
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-b border-b-slate-300 pb-4">
            <img src={blog3} className="w-1/3   rounded-xl lg:h-2/3 " />
            <div className="ml-2 ">
              <div className="flex gap-2 font-semibold text-gray">
                <img src={profile3} />
                <p>Deonte Huag</p>
                <img src={calender} className="w-4" />
                <p>July 31, 2022</p>
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-xl font-semibold">
                  6 Ways Technology Has Improved Business Today
                </p>
                <p className="flex gap-2 font-semibold text-blue">
                  View More
                  <img src={arrow} alt="View More" className="w-4" />
                </p>
              </div>
            </div>
          </div>
          <div className="flex  pb-4">
            <img src={blog3} className="w-1/3   rounded-xl lg:h-2/3 " />
            <div className="ml-2 ">
              <div className="flex gap-2 font-semibold text-gray">
                <img src={profile3} />
                <p>Deonte Huag</p>
                <img src={calender} className="w-4" />
                <p>July 31, 2022</p>
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-xl font-semibold">
                  6 Ways Technology Has Improved Business Today
                </p>
                <p className="flex gap-2 font-semibold text-blue">
                  View More
                  <img src={arrow} alt="View More" className="w-4" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBlog;
