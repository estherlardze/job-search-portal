import { Faq } from '../../Pages/Contact/constant';
import { faq } from '../../assets';
import { AccordionSec } from '../Accordion';

const FaQues = () => {
  return (
    <>
      <div className="bg-white pt-16 text-center">
        <p className="font-bold text-blue">FAQS</p>
        <p className="text-4xl font-semibold">Frequently Asked Questions</p>
      </div>
      <div className=" flex  flex-col justify-between bg-white pb-[8rem] pt-12 lg:flex-row">
        <div className="pl-8 pt-8">
          <img src={faq} alt="faq" />
        </div>
        <div className="w-full lg:w-1/2">
          <AccordionSec
            title=""
            items={Faq}
            reason={null}
            sentence={null}
            dash={null}
          />
        </div>
      </div>
    </>
  );
};

export default FaQues;
