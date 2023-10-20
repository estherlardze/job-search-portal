import { AccordionSec } from '../Accordion';
import ReachOut from './ReachOut';
import { GetInTouch } from '../../Pages/Contact/constant';

const GetInTouchWithUs = () => {
  return (
    <div className="flex flex-col gap-24 pb-8  bg-white px-4 pt-12 lg:flex-row lg:px-32">
      <div className="w-full lg:w-1/2">
        <AccordionSec
          dash="—"
          reason="GET IN TOUCH"
          items={GetInTouch}
          title="We Want To Hear From You!"
          sentence="It is a long established fact that a reader distracted by the real contend of a page when."
        />
      </div>
      <ReachOut className="w-full lg:w-1/2" />
    </div>
  );
};

export default GetInTouchWithUs;
