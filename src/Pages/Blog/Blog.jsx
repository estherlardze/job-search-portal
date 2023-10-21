import { BlogPage, Footer, Navbar, SearchBlog } from '../../components';

const Blog = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <Navbar />
      <div data-aos="fade-up">
        <SearchBlog />
        <BlogPage />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
