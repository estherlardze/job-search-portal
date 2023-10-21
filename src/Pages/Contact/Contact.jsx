import {
  ContactUs,
  FaQues,
  Footer,
  GetInTouchWithUs,
  Navbar,
} from '../../components';
const Contact = () => {
  return (
    <>
      <div className='w-[100%] overflow-hidden'>
        <Navbar />
        <div className="mb-[-2rem] mt-[-8rem] bg-slate-200">
          <ContactUs />
          <GetInTouchWithUs />
          <FaQues />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
