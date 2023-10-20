// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ContactSlide from './ContactSlide';

const ContactUs = () => {
  return (
    <div className="bg-blue/5 px-4 py-32 lg:px-12 ">
      <div className="mb-20 text-center w-[90%] mx-[5%] md:w-[60%] md:mx-[20%] ">
        <p className=" mb-5 text-xl font-semibold text-blue">CONTACT US</p>
        <h2 className="text-4xl font-semibold md:text-6xl">
          We Needed! Contact With Us
        </h2>
        <p className='text-lg text-gray font-semibold mt-4'>
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
