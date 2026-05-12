import { createContext, useContext, useState } from "react";

const context = createContext();

function Accordion({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <context.Provider value={{ isOpen, setIsOpen, open, close, toggle }}>
      {children}
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
  return children;
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
