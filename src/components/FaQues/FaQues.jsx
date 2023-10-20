import { Faq } from '../../Pages/Contact/constant';
import { faq } from '../../assets';
import { AccordionSec } from '../Accordion';

const FaQues = () => {
  return (
    <>
      <div className="bg-white pt-12 text-center mt-4">
        <p className="font-bold text-blue">FAQS</p>
        <p className="text-4xl font-semibold">Frequently Asked Questions</p>
      </div>
      <div className=" flex  pb-[8rem] flex-col bg-white pt-12 lg:flex-row">
        <div className="mx-8 pt-8">
          <img src={faq} alt="faq" />
        </div>
        <AccordionSec
          title=""
          items={Faq}
          reason={null}
          sentence={null}
          dash={null}
        />
      </div>
    </>
  );
};

export default FaQues;
