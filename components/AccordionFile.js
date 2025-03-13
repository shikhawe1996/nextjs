"use client"

import React from 'react';

export const AccordionFile = () => {
  return (
    <Accordion className="p-[160px]">
      <AccordionItem toggle="panel-1" className="bg-black text-white text-2xl font-semibold mt-[100px] mb-[20px]">
      How many states mandate e-prescribing for controlled substances?
      </AccordionItem>
      <AccordionPanel id="panel-1">
        <p className="mb-4 text-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="mb-4 text-lg text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </AccordionPanel>
      <AccordionItem toggle="panel-2" className=" text-white text-2xl font-semibold mt-[50px] mb-[20px] ">
      How many states mandate e-prescribing for controlled substances?
      </AccordionItem>
      <AccordionPanel id="panel-2">
        <p className="mb-4 text-lg text-white ">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta.
        </p>
        <p className="mb-4 text-lg text-white">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident
          similique sunt in culpa qui officia deserunt mollitia animi.
        </p>
      </AccordionPanel>
      <AccordionItem toggle="panel-3" className=" text-white text-2xl font-semibold mt-[50px] mb-[20px]">
      How many states mandate e-prescribing for controlled substances?
      </AccordionItem>
      <AccordionPanel id="panel-3">
        <p className="mb-4 text-lg text-white">
          dales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
          Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
          porttitor. Morbi lectus risus iaculis.
        </p>
        <p className="mb-4 text-lg text-white ">
          Nulla metus metus ullamcorper vel tincidunt sed, euismod in, nibh.
          Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra per inceptos himenaeos. Nam nec
          ante.
        </p>
      </AccordionPanel>
    </Accordion>
  );
};

/* Logic */

const Context = React.createContext({});

function Accordion({ children }) {
  const [selected, setSelected] = React.useState();

  const toggleItem = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ''));
    },
    [],
  );
  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);

const style = {
  item: `block focus:outline-none px-[160px]  `,
  panel: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600 px-[160px]`,
};

function AccordionItem({ toggle, children, className }) {
  const { selected, toggleItem } = useAccordion();
  return (
    <div
      role="button"
      onClick={toggleItem(toggle)}
      className={`${style.item} ${className}`}
    >
      {children}
      <span className="float-right">
        {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
      </span>
    </div>
  );
}

function AccordionPanel({ children, id }) {
  const { selected } = useAccordion();
  const ref = React.useRef();
  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
      {children}
    </div>
  );
}

const AngleUpIcon = () => (
  <svg
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4"
  >
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    stroke="currentColor"
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4"
  >
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
  </svg>
);

export default AccordionFile;