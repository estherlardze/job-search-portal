import { useState } from 'react';
import { arrow } from '../../assets';
import { blogs } from './constant';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Sample blog data (you can replace this with your actual data source)

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [aosKey, setAosKey] = useState(0);

  // Function to filter the blog posts based on the selected category
  const filteredBlogs = () => {
    if (selectedCategory === 'All') {
      return blogs;
    } else if (selectedCategory === 'Featured') {
      return blogs.filter((blog) => blog.featured);
    } else if (selectedCategory === 'Recent') {
      return blogs.filter((blog) => blog.recent);
    } else if (selectedCategory === 'CompanyPost') {
      return blogs.filter((blog) => blog.CompanyPost);
    }
  };

  const resetAOS = () => {
    setAosKey((prevKey) => prevKey + 1); // Increment the AOS key to reset animations
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    resetAOS();
  };

  return (
    <div className="flex w-full flex-col">
      <div
        className="flex flex-col  justify-around pb-8 pt-20 text-center lg:items-center lg:self-center "
        data-aos="fade-up"
      >
        <h1 className="text-center text-3xl font-semibold">
          Latest Blog & Articles
        </h1>
        <div className="inline-flex  w-full items-center gap-8  pt-8">
          {/* Filter buttons */}
          <button
            onClick={() => {
              handleFilterChange('All');
            }}
            className="mx-4 my-4 h-12 w-[10rem]  rounded-3xl bg-blue font-bold text-white sm:h-10  lg:w-[5rem]"
          >
            All
          </button>
          <button
            onClick={() => {
              handleFilterChange('Recent');
            }}
            className="h-15 w-[20rem] rounded-3xl border-[1px] border-blue bg-white font-bold text-blue hover:bg-blue hover:text-white sm:h-10 lg:w-[10rem] "
          >
            Recent Posts
          </button>
          <button
            onClick={() => {
              handleFilterChange('Featured');
            }}
            className="h-15 w-[20rem] rounded-3xl border-[1px]  border-blue bg-white font-bold text-blue hover:bg-blue hover:text-white sm:h-10 lg:w-[10rem] "
          >
            Feature Posts
          </button>
          <button
            onClick={() => {
              handleFilterChange('CompanyPost');
            }}
            className="h-[3.2rem] w-[25rem] rounded-3xl border-[1px]  border-blue bg-white font-bold text-blue hover:bg-blue hover:text-white sm:h-10 lg:w-[10rem] "
          >
            Company Posts
          </button>
        </div>
      </div>
      <div
        key={aosKey}
        className="blog-card grid gap-16 px-8  lg:w-full lg:grid-cols-2"
      >
        {filteredBlogs().map((blog, index) => (
          <>
            <div
              key={index}
              className=" relative w-full lg:grid lg:grid-rows-1 "
              data-aos="zoom-in-up" // Define AOS animation here
              data-aos-delay={`${index * 5}`}
              data-aos-once="true" // Adjust delay as needed
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="h-auto w-full rounded-3xl "
              />
              <div className="absolute bottom-[10rem] sm:bottom-[8rem] md:bottom-[7.5rem] mt-6 left-0 flex gap-4 bg-opacity-60 p-4 text-white">
                <div className="flex items-center">
                  <img
                    src={blog.author.avatarUrl}
                    alt={blog.author.name}
                    className="mr-2 h-8 w-8 rounded-full"
                  />
                  <span className="semibold text-xl">{blog.author.name}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
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
              <div className="flex flex-col gap-2">
                <Link
                  className="hover:cursor-pointer hover:text-blue"
                  to="/blog/:id"
                >
                  <h1 className="text-2xl font-semibold">{blog.title}</h1>{' '}
                </Link>

                <p className="font-semibold text-slate-500">{blog.content}</p>
                <Link to="/blog/:id">
                  <p className="flex gap-2 font-semibold text-blue hover:cursor-pointer">
                    View More
                    <img src={arrow} alt="View More" className="w-4" />
                  </p>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
