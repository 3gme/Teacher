import { createContext, useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const context = createContext();

function Accordion({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <context.Provider value={{ isOpen, setIsOpen, open, close, toggle }}>
      <div className="rounded-xl overflow-hidden h-fit border border-primary-500">
        {children}
      </div>
    </context.Provider>
  );
}

function useAccordionContext() {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error("useAccordionContext must be used within an Accordion");
  }
  return contextValue;
}

function AccordionHeader({ children }) {
  const { isOpen, toggle } = useAccordionContext();
  return (
    <div className="grid grid-cols-[1fr_auto] items-center w-full gap-4 bg-primary-50 px-5 py-4">
      <div>{children}</div>
      <button
        className="flex items-center justify-center w-8 h-8 justify-self-end rounded-sm text-ink-800 hover:bg-primary-100 focus:outline-none focus:bg-primary-100 transition"
        onClick={toggle}
      >
        <span
          className={`transition ease-in-out ${isOpen ? "-rotate-180" : ""} `}
        >
          <FaChevronDown />
        </span>
      </button>
    </div>
  );
}

function AccordionContent({ children }) {
  const { isOpen } = useAccordionContext();
  return (
    <div
      className={`grid overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div
        className={`min-h-0 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-0" : "-translate-y-3"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export { useAccordionContext };
export default Accordion;
