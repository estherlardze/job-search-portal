import { useState } from 'react';
function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div
      className={`mb-8 ${
        title.heading ? 'border-b-[2px]' : 'mx-4 rounded-lg border-[2px]'
      } border-slate-200 text-justify`}
    >
      <div className="cursor-pointer" onClick={onClick}>
        <div
          className={`mb-8 flex justify-between ${
            title.heading ? '' : 'mb-[-1rem] pb-8 pt-5'
          } `}
        >
          <div>
            <div className="text-xl   font-medium">
              {title.heading ? (
                <span className="text-blue">{title.heading}</span>
              ) : (
                title
              )}
            </div>
            <div className="text-xl font-bold">{title.sub}</div>
          </div>

          <div
            className={`h-12 w-12 text-xl font-bold text-black ${
              isOpen ? ' bg-blue  text-white' : 'bg-slate-200'
            } rounded-full p-2 text-center`}
          >
            {isOpen ? '∧' : '∨'}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mb-4 ml-[-0.5rem] mt-[-1.5rem] p-2 text-justify">
          {content.email ? (
            <div className="text-lg font-medium">
              <p>
                <span className="text-blue">Email:</span>{' '}
                <span className="font-semibold">{content.email}</span>
              </p>
              <p>
                <span className="text-blue">Contact:</span> {content.contact}
              </p>
              <p>
                <span className="text-blue">Address:</span> {content.address}
              </p>
            </div>
          ) : (
            <p className="w-full font-semibold text-gray lg:w-11/12">
              {content}
            </p>
          )}
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
