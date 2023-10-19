import { useState } from 'react';

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div>
      <div className="cursor-pointer" onClick={onClick}>
        <div className="flex justify-between">
          <div>
            <div>{title.heading}</div>
            <div>{title.sub}</div>
          </div>
          <div className="bg">{isOpen ? '∧' : '∨'}</div>
        </div>
      </div>
      {isOpen && (
        <div>
          <p>
            <strong>Email:</strong> {content.email}
          </p>
          <p>
            <strong>Contact:</strong> {content.contact}
          </p>
          <p>
            <strong>Address:</strong> {content.address}
          </p>
        </div>
      )}
    </div>
  );
}

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
