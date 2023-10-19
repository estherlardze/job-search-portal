import Accordion from './Accordion';

function AccordionSection({ title, items }) {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionSection;
