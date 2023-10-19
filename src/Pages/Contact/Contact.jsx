import { AccordionSection } from '../../components/Accordion';
import { GetInTouch } from './constant';

const Contact = () => {
  return (
    <div>
      <AccordionSection title="Get in touch with us" items={GetInTouch} />
    </div>
  );
};

export default Contact;
