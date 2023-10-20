import { ContactUs, Download, FaQues, GetInTouchWithUs, Navbar } from '../../components';
const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-[-8rem] bg-slate-200">
          <ContactUs />
          <GetInTouchWithUs />
          <FaQues />
          <Download />
        </div>
      </div>
    </>
  );
};

export default Contact;
