import { CiSearch } from 'react-icons/ci';
import {
  arrow,
  blog1,
  blog2,
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
import { Link } from 'react-router-dom';

const SearchBlog = () => {
  const blog = {
    title: '5 Ways Technology Has Improved Business Today',
    content:
      'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
    date: 'October 20, 2023',
    imageUrl: blog4,
    author: {
      name: 'Tilly Thomas',
      avatarUrl: profile4,
    },
  };

  return (
    <>
      <div
        className={`flex justify-around lg:justify-between ${
          window.location.pathname === '/blogs' ? 'bg-slate-200' : 'bg-white'
        }  bg-slate-200 px-4 pb-16 pt-20 lg:px-14`}
      >
        <h1 className="text-5xl  font-semibold ">
          Browse our articles & <br /> resources
        </h1>
        <div className=" my-[0.99rem] flex   items-center justify-between rounded-3xl border-[1px]   border-blue">
          <input
            placeholder="Search Blog & Articles"
            className={`ml-4  bg-slate-200 ${
              window.location.pathname === '/blogs'
                ? 'bg-slate-200'
                : 'bg-white'
            } py-2 focus:outline-none `}
          />
          {window.location.pathname === '/blogs' && <CiSearch size={22} />}
        </div>{' '}
      </div>
      <div
        className={`mb-16 flex flex-col ${
          window.location.pathname === '/blogs' ? 'bg-slate-200' : 'bg-white'
        }  pb-20 lg:flex-row lg:px-8`}
      >
        <div className="blog-card pb-10">
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
          <div className="inline-flex flex-col gap-4 p-4">
            <div>
              <Link
                className="hover:cursor-pointer hover:text-blue"
                to="/blog/:id"
              >
                <p className="text-2xl font-semibold ">{blog.title}</p>
              </Link>
              <p className="pt-2 text-slate-500">{blog.content}</p>
            </div>
            <Link className="hover:cursor-pointer" to="/blog/:id">
              <p className="flex gap-2 font-semibold text-blue">
                View More
                <img src={arrow} alt="View More" className="w-4" />
              </p>
            </Link>
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
            <img src={blog1} className="w-1/3   rounded-xl lg:h-2/3 " />
            <div className="ml-2 ">
              <div className="flex gap-2 font-semibold text-gray">
                <img src={profile1} />
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
            <img src={blog2} className="w-1/3   rounded-xl lg:h-2/3 " />
            <div className="ml-2 ">
              <div className="flex gap-2 font-semibold text-gray">
                <img src={profile2} />
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
