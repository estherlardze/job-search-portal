import { Faq } from '../../Pages/Contact/constant';
import { faq } from '../../assets';
import { AccordionSec } from '../Accordion';

const FaQues = () => {
  return (
    <>
      <div className="bg-white pt-12 text-center">
        <p className="font-bold text-blue">FAQS</p>
        <p className="text-4xl font-semibold">Frequently Asked Questions</p>
      </div>
      <div className="mb-[-2.1rem] flex  flex-col justify-around bg-white pt-12 lg:flex-row">
        <div className="pl-8 pt-8">
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
