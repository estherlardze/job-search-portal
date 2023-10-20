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
      <div>
        <Navbar />
        <div className="mb-[-2rem] bg-slate-200">
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
