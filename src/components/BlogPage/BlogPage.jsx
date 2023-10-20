import { useState } from 'react';
import { arrow, blog1, blog4, profile1, profile2 } from '../../assets';

const BlogPage = () => {
  // Sample blog data (you can replace this with your actual data source)
  const blogs = [
    {
      title: '5 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 20, 2023',
      imageUrl: blog4,
      featured: true,
      recent: true,
      CompanyPost: false,
      author: {
        name: 'Vinny Doe', // Replace with the author's name
        avatarUrl: profile1, // Replace with the URL of the author's avatar
      },
    },
    {
      title: '5 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog1,
      featured: false,
      recent: true,
      CompanyPost: true,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile2, // Replace with the URL of the author's avatar
      },
    },
    {
      title: '5 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog1,
      featured: true,
      recent: true,
      CompanyPost: false,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile2, // Replace with the URL of the author's avatar
      },
    },
    {
      title: '5 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog1,
      featured: true,
      recent: true,
      CompanyPost: false,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile2, // Replace with the URL of the author's avatar
      },
    },
    {
      title: '5 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog1,
      featured: false,
      recent: false,
      CompanyPost: true,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile2, // Replace with the URL of the author's avatar
      },
    },
    // Add more blog objects here
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">
        Latest Blog & Articles
      </h1>
      <div className="inline-flex w-full items-center  gap-8">
        {/* Filter buttons */}
        <button
          onClick={() => setSelectedCategory('All')}
          className="mx-4 my-4 h-10 w-2/12 rounded-3xl bg-blue font-bold text-white"
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('Recent')}
          className="h-10 w-5/12 rounded-3xl border-[2px] border-blue bg-white font-bold text-blue hover:bg-blue hover:text-white "
        >
          Recent Posts
        </button>
        <button
          onClick={() => setSelectedCategory('Featured')}
          className="h-10 w-5/12 rounded-3xl border-[2px] border-blue bg-white font-bold text-blue hover:bg-blue hover:text-white "
        >
          Feature Posts
        </button>
        <button
          onClick={() => setSelectedCategory('CompanyPost')}
          className="h-10 w-6/12 rounded-3xl border-[2px] border-blue bg-white font-bold text-blue hover:bg-blue hover:text-white "
        >
          Company Posts
        </button>
      </div>
      <div className="blog-list  gap-4  px-4 lg:w-6/12">
        {filteredBlogs().map((blog, index) => (
          <>
            <div key={index} className="blog-card relative   ">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="h-auto w-full rounded-3xl "
              />
              <div className="absolute bottom-0 left-0 flex gap-4 bg-opacity-60 p-4 text-white">
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
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">{blog.title}</h1>
              <p className="font-semibold text-slate-500">{blog.content}</p>
              <p className="flex gap-2 font-semibold text-blue">
                View More
                <img src={arrow} alt="View More" className="w-4" />
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
