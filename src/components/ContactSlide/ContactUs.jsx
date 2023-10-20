// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ContactSlide from './ContactSlide';

const ContactUs = () => {
  return (
    <div className="bg-bgShade my-32 px-4 py-32 lg:px-12 ">
      <div className="mb-20">
        <p className=" mb-5 text-xl font-semibold">CONTACT US</p>
        <h2 className=" text-4xl font-bold md:text-5xl">
          We Needed! Contact With Us
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          real conten of a page when looking at its layout
        </p>
      </div>

      <div>
        <ContactSlide />
      </div>
    </div>
  );
};

export default ContactUs;
