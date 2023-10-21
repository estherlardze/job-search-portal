import { BlogPage, Footer, Navbar, SearchBlog } from '../../components';

const Blog = () => {
  return (
    <div>
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
